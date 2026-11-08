import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";
import MarkdownIt from "markdown-it";

const root = path.resolve(process.argv[2] ?? ".");
const parser = new MarkdownIt();
let files = 0;
let targets = 0;
let failures = 0;

async function inspect(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await inspect(file);
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
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
  }
}

await inspect(root);
console.log(`Checked ${files} Markdown files, ${targets} local targets, ${failures} broken links.`);
process.exitCode = failures ? 1 : 0;
