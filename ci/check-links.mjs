import { access, readdir, readFile, realpath, stat } from "node:fs/promises";
import path from "node:path";
import MarkdownIt from "markdown-it";

const root = path.resolve(process.argv[2] ?? ".");
// Directories the scan skips: local dependency folders and tool state are not
// part of the checked set, except .github, which holds tracked content. The
// Dagger module's directory mount defines the same set for its container
// runs. Dot-FILEs are tool state too.
const skipped = (name) => name === "node_modules" || (name.startsWith(".") && name !== ".github");
const parser = new MarkdownIt();
let files = 0;
let targets = 0;
let failures = 0;
// Symlink cycles (a directory linking to its ancestor) end here.
const visited = new Set();

async function inspectMarkdown(file) {
  files++;
  const tokens = parser.parse(await readFile(file, "utf8"), {});
  for (const token of tokens) {
    for (const child of token.children ?? []) {
      const target = child.type === "link_open"
        ? child.attrGet("href")
        : child.type === "image" ? child.attrGet("src") : null;
      if (!target || /^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(target)) continue;
      targets++;
      try {
        const pathname = decodeURIComponent(target.split(/[?#]/, 1)[0]);
        const resolved = target.startsWith("/")
          ? path.resolve(root, `.${pathname}`)
          : path.resolve(path.dirname(file), pathname);
        await access(resolved);
      } catch {
        failures++;
        console.error(`${path.relative(root, file)}:${(token.map?.[0] ?? 0) + 1}: missing local target ${target}`);
      }
    }
  }
}

async function inspect(directory) {
  const real = await realpath(directory);
  if (visited.has(real)) return;
  visited.add(real);
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const file = path.join(directory, entry.name);
    if (skipped(entry.name)) continue;
    let kind = entry.isDirectory() ? "dir" : entry.isFile() ? "file" : "link";
    if (kind === "link") {
      // A symlink is followed: into a directory (cycle-safe), to a Markdown
      // file (checked like one), or reported when it does not resolve.
      let resolvedTarget;
      try {
        const target = await stat(file);
        resolvedTarget = target.isDirectory() ? "dir" : target.isFile() ? "file" : "other";
      } catch {
        failures++;
        console.error(`${path.relative(root, file)}: unresolvable symlink`);
        continue;
      }
      kind = resolvedTarget;
    }
    if (kind === "dir") await inspect(file);
    else if (kind === "file" && entry.name.endsWith(".md")) await inspectMarkdown(file);
  }
}

await inspect(root);
console.log(`Checked ${files} Markdown files, ${targets} local targets, ${failures} broken links.`);
process.exitCode = failures ? 1 : 0;
