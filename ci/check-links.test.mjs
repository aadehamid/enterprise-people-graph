import assert from "node:assert/strict";
import { mkdtemp, mkdir, rm, writeFile } from "node:fs/promises";
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
