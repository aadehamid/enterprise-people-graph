// The working-tree guard for scripts/check.sh. The checks must read the
// repository without changing it. This guard hashes, before and after:
//   - every included directory's path, type and mode (before recursion), so
//     an added or removed empty directory or a mode change fails the run,
//   - contents of every included file (tracked or untracked),
//   - the entry type and permission bits of every entry,
//   - a symlink's link text, read as raw bytes (base64), not through the
//     link and not decoded, so a retarget fails even between byte sequences
//     that decode to the same string,
//   - the blob id and mode of every index entry (git ls-files -s),
//   - git's own status view (git status --porcelain).
// A failed read or an unexpected git failure aborts the run: a check that
// rewrote a file its snapshot could not read must fail the check, not lose
// the snapshot entry, and a guard that could not measure must not report
// success.
//
// Excluded by policy (one place, this comment): .git, node_modules at any
// depth (reproducible from ci/package-lock.json), and the named agent state
// folders (.claude, .codex, .cursor, .entire, .opencode, .pi). Every other
// path, dot-named or not, is inside the guarded set; .github holds tracked
// content. This matches what the Dagger mount and the link checker cover.
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { readdir, lstat, readFile, readlink, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const excluded = new Set([".claude", ".codex", ".cursor", ".entire", ".opencode", ".pi", ".git"]);
const skipped = (name) => name === "node_modules" || excluded.has(name);

async function collect(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const out = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    if (skipped(entry.name)) continue;
    const file = path.join(dir, entry.name);
    const mode = (await lstat(file)).mode.toString(8);
    const rel = path.relative(root, file);
    if (entry.isDirectory()) {
      out.push(`${rel}\u0000dir\u0000${mode}\u0000`);
      out.push(...(await collect(file)));
      continue;
    }
    const record = [rel, entry.isDirectory() ? "dir" : entry.isFile() ? "file" : entry.isSymbolicLink() ? "link" : "other", mode, ""];
    if (entry.isSymbolicLink()) {
      // Raw bytes of the link text, base64: no decode step to lose to.
      record[3] = `b64:${(await readlink(file, { encoding: "buffer" })).toString("base64")}`;
    } else if (entry.isFile()) {
      record[3] = createHash("sha256").update(await readFile(file)).digest("hex");
    }
    out.push(record.join("\u0000"));
  }
  return out;
}

function runGit(args) {
  try {
    return execFileSync("git", args, { cwd: root, maxBuffer: 1 << 24, stdio: ["ignore", "pipe", "pipe"] });
  } catch (error) {
    const stderr = error.stderr?.toString?.().trim() ?? "";
    throw new Error(`git ${args.join(" ")} failed: ${stderr || error.message}`);
  }
}

async function repoState() {
  try {
    runGit(["rev-parse", "--git-dir"]);
  } catch {
    // Outside a repository there is no index and no status view; both sides
    // of a comparison then see the same marker, and nothing is hidden.
    return { index: "not-a-repo", status: "not-a-repo" };
  }
  const digest = (output) => createHash("sha256").update(output).digest("hex");
  return { index: digest(runGit(["ls-files", "-s"])), status: digest(runGit(["status", "--porcelain"])) };
}

async function snapshot() {
  const state = await repoState();
  return JSON.stringify({ root, tree: await collect(root), ...state });
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
    await writeFile(stateFile, await snapshot());
  } else {
    await verify(await readFile(stateFile, "utf8"));
  }
} catch (error) {
  console.error(`tree-guard: ${error.message ?? error}`);
  process.exit(1);
}
