// The working-tree guard for scripts/check.sh. The checks must read the
// repository without changing it. This guard hashes, before and after:
//   - contents of every file system entry (tracked or not),
//   - the entry type and permission bits,
//   - a symlink's link text, read as bytes, not through the link,
//   - the blob id and mode of every index entry (git ls-files -s),
//   - git's own status view (git status --porcelain).
// A failed read aborts the run: a check that rewrote a file it could not
// read must fail the check, not lose the snapshot entry.
//
// Excluded by policy (one place, this comment): .git, node_modules at any
// depth (reproducible from ci/package-lock.json), and every dot-directory
// except .github (tools' local state; .github holds tracked content). This
// matches the coverage the Dagger mount and the link checker use.
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { readdir, lstat, readFile, readlink, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();

const skipped = (name) => name === "node_modules" || (name.startsWith(".") && name !== ".github");

async function collect(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const out = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    // Tool state and dependency folders are excluded by policy, whatever
    // the entry type -- including .state.json-style dot-files at the root.
    if (skipped(entry.name)) continue;
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await collect(file)));
      continue;
    }
    const info = await lstat(file);
    const record = [path.relative(root, file), entry.isDirectory() ? "dir" : entry.isFile() ? "file" : entry.isSymbolicLink() ? "link" : "other", info.mode.toString(8), ""];
    if (entry.isSymbolicLink()) record[3] = await readlink(file);
    if (entry.isFile()) {
      const bytes = await readFile(file);
      record[3] = createHash("sha256").update(bytes).digest("hex");
    }
    out.push(record.join("\u0000"));
  }
  return out;
}

function gitHash(args) {
  let output;
  try {
    output = execFileSync("git", args, { cwd: root, maxBuffer: 1 << 24 });
  } catch {
    // Outside a repository there is no index and no status view; both sides
    // of a comparison then see the same marker, and nothing is hidden.
    return "not-a-repo";
  }
  return createHash("sha256").update(output).digest("hex");
}

async function snapshot() {
  return JSON.stringify({ root, tree: await collect(root), index: gitHash(["ls-files", "-s"]), status: gitHash(["status", "--porcelain"]) });
}

async function verify(before) {
  const after = await snapshot();
  if (after === before) return;
  const a = JSON.parse(before), b = JSON.parse(after);
  const diffs = [
    ...(a.tree.length === b.tree.length ? [] : [`entry count ${a.tree.length} -> ${b.tree.length}`]),
    ...a.tree.filter((x) => !b.tree.includes(x)).slice(0, 10).map((x) => `removed or changed: ${x.split("\u0000")[0]}`),
    ...b.tree.filter((x) => !a.tree.includes(x)).slice(0, 10).map((x) => `added or changed: ${x.split("\u0000")[0]}`),
    ...(a.index === b.index ? [] : ["git index changed"]),
    ...(a.status === b.status ? [] : ["git status changed"]),
  ];
  throw new Error(`the checks changed the working tree:\n  ${[...new Set(diffs)].join("\n  ")}`);
}

const [, , command, stateFile] = process.argv;
if (!stateFile || (command !== "snapshot" && command !== "verify")) {
  console.error("usage: tree-guard.mjs snapshot|verify <state-file>");
  process.exit(2);
}
try {
  if (command === "snapshot") {
    const state = await snapshot();
    await writeFile(stateFile, state);
  } else {
    await verify(await readFile(stateFile, "utf8"));
  }
} catch (error) {
  console.error(`tree-guard: ${error.message ?? error}`);
  process.exit(1);
}
