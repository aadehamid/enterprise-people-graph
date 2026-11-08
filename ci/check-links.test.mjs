import assert from "node:assert/strict";
import { mkdtemp, mkdir, rm, writeFile, symlink, readFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import test from "node:test";

const checker = fileURLToPath(new URL("./check-links.mjs", import.meta.url));

test("validates local Markdown links and ignores network URLs and code", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "people-graph-links-"));
  try {
    await mkdir(path.join(root, "nested"));
    await writeFile(path.join(root, "target file.md"), "# Target\n");
    await writeFile(
      path.join(root, "nested", "index.md"),
      [
        "[target](../target%20file.md#heading)",
        "[root](/target%20file.md)",
        "[reference][target]",
        "![image](../target%20file.md)",
        "[web](https://example.invalid/unreachable)",
        "[mail](mailto:someone@example.invalid)",
        "[anchor](#heading)",
        "`[code](missing.md)`",
        "```md",
        "[code](missing.md)",
        "```",
        "",
        "[target]: ../target%20file.md",
      ].join("\n"),
    );
    const result = spawnSync(process.execPath, [checker, root], { encoding: "utf8" });
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /4 local targets/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test("reports broken links and images with a failing exit status", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "people-graph-links-"));
  try {
    await writeFile(path.join(root, "index.md"), "[broken](missing.md)\n![broken](missing.png)\n");
    const result = spawnSync(process.execPath, [checker, root], { encoding: "utf8" });
    assert.equal(result.status, 1);
    assert.match(result.stderr, /index\.md.*missing\.md/);
    assert.match(result.stderr, /index\.md.*missing\.png/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test("skips node_modules and tool dot-directories, scans .github and siblings", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "people-graph-links-"));
  try {
    await writeFile(path.join(root, "index.md"), "[ok](found.md)\n");
    await writeFile(path.join(root, "found.md"), "# Found\n");
    await mkdir(path.join(root, "node_modules", "dep"), { recursive: true });
    await writeFile(path.join(root, "node_modules", "dep", "readme.md"), "[broken](missing.md)\n");
    await mkdir(path.join(root, ".tool-state"));
    await writeFile(path.join(root, ".tool-state", "broken.md"), "[broken](missing.md)\n");
    // .github holds tracked content and stays in the checked set.
    await mkdir(path.join(root, ".github", "workflows"), { recursive: true });
    await writeFile(path.join(root, ".github", "broken.md"), "[broken](missing.md)\n");
    const result = spawnSync(process.execPath, [checker, root], { encoding: "utf8" });
    assert.equal(result.status, 1);
    assert.match(result.stdout, /3 Markdown files/);
    assert.match(result.stderr, /\.github.*missing\.md/);
    assert.doesNotMatch(result.stderr, /node_modules|tool-state/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test("follows a Markdown symlink and checks its files like their targets", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "people-graph-links-"));
  try {
    await writeFile(path.join(root, "target.md"), "[broken](missing-target.md)\n");
    await symlink(path.join(root, "target.md"), path.join(root, "linked.md"));
    const result = spawnSync(process.execPath, [checker, root], { encoding: "utf8" });
    assert.equal(result.status, 1);
    assert.match(result.stdout, /2 Markdown files/);
    assert.match(result.stderr, /missing-target\.md/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test("reports an unresolvable symlink and treats it as a failure", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "people-graph-links-"));
  try {
    await writeFile(path.join(root, "ok.md"), "# Ok\n");
    await symlink(path.join(root, "gone.md"), path.join(root, "dangling-symlink.md"));
    const result = spawnSync(process.execPath, [checker, root], { encoding: "utf8" });
    assert.equal(result.status, 1);
    assert.match(result.stderr, /dangling-symlink\.md.*unresolvable/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test("terminates on a self-linking directory and scans it once", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "people-graph-links-"));
  try {
    await mkdir(path.join(root, "loop"));
    await writeFile(path.join(root, "loop", "page.md"), "# Page\n");
    await symlink(root, path.join(root, "loop", "self"));
    const result = spawnSync(process.execPath, [checker, root], { encoding: "utf8" });
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /1 Markdown files/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test("skips a symlink hidden in tool state by name", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "people-graph-links-"));
  try {
    await writeFile(path.join(root, "ok.md"), "[ok](target.md)\n");
    await writeFile(path.join(root, "target.md"), "# T\n");
    await symlink(path.join(root, "target.md"), path.join(root, ".state.md"));
    const result = spawnSync(process.execPath, [checker, root], { encoding: "utf8" });
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /2 Markdown files/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
