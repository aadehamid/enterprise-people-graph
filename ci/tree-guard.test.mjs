import assert from "node:assert/strict";
import { mkdtemp, mkdir, rm, writeFile, chmod, symlink, readFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import test from "node:test";

const guard = fileURLToPath(new URL("../scripts/tree-guard.mjs", import.meta.url));

function run(args, cwd) {
  return spawnSync(process.execPath, [guard, ...args], { encoding: "utf8", cwd });
}

test("verifies an unchanged tree, failing on every class of change it guards", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "tree-guard-"));
  try {
    await mkdir(path.join(root, "sub"), { recursive: true });
    await mkdir(path.join(root, ".hidden"), { recursive: true });
    await mkdir(path.join(root, "node_modules"), { recursive: true });
    await writeFile(path.join(root, "a.md"), "content\n");
    await writeFile(path.join(root, "sub", "b.md"), "more\n");
    await writeFile(path.join(root, ".hidden", "c.md"), "state\n");
    await chmod(path.join(root, "a.md"), 0o644);
    await symlink("../a.md", path.join(root, "sub", "link.md"));
    const state = path.join(tmpdir(), `guard-${Date.now()}.json`);
    let result = run(["snapshot", state], root);
    assert.equal(result.status, 0, result.stderr);

    result = run(["verify", state], root);
    assert.equal(result.status, 0, result.stderr);

    // A rewrite with the same status label must fail: contents are hashed.
    await writeFile(path.join(root, "sub", "b.md"), "changed\n");
    result = run(["verify", state], root);
    assert.equal(result.status, 1);
    assert.match(result.stderr, /sub.b\.md|the checks changed/);
    await writeFile(path.join(root, "sub", "b.md"), "more\n");

    // Same for a permission change...
    await chmod(path.join(root, "a.md"), 0o600);
    result = run(["verify", state], root);
    assert.equal(result.status, 1);
    await chmod(path.join(root, "a.md"), 0o644);

    // ...a symlink retargeted to a different path...
    await rm(path.join(root, "sub", "link.md"));
    await symlink("a.md", path.join(root, "sub", "link.md"));
    result = run(["verify", state], root);
    assert.equal(result.status, 1);
    await rm(path.join(root, "sub", "link.md"));
    await symlink("../a.md", path.join(root, "sub", "link.md"));

    // ...an added untracked file...
    await writeFile(path.join(root, "dropped.md"), "dropped\n");
    result = run(["verify", state], root);
    assert.equal(result.status, 1);
    await rm(path.join(root, "dropped.md"));

    // ...a removed file...
    await rm(path.join(root, "a.md"));
    result = run(["verify", state], root);
    assert.equal(result.status, 1);
    await writeFile(path.join(root, "a.md"), "content\n");

    // ...and a change under .github, which is inside the guarded set.
    await mkdir(path.join(root, ".github"), { recursive: true });
    await writeFile(path.join(root, ".github", "n.md"), "tracked\n");
    result = run(["verify", state], root);
    assert.equal(result.status, 1);
    await rm(path.join(root, ".github"), { recursive: true });

    // Only the policy's exclusions stay invisible: node_modules and the
    // named agent state folders. Other dotfiles are guarded...
    await writeFile(path.join(root, ".hidden", "fresh.md"), "state\n");
    result = run(["verify", state], root);
    assert.equal(result.status, 1);
    await rm(path.join(root, ".hidden", "fresh.md"));

    // ...an added empty directory and a directory mode change fail too...
    await mkdir(path.join(root, "empty-new"));
    result = run(["verify", state], root);
    assert.equal(result.status, 1);
    await rm(path.join(root, "empty-new"), { recursive: true });
    result = run(["verify", state], root);
    assert.equal(result.status, 0, result.stderr);
    await chmod(path.join(root, "sub"), 0o700);
    result = run(["verify", state], root);
    assert.equal(result.status, 1);
    await chmod(path.join(root, "sub"), 0o755);

    // ...a non-UTF8-decodable-retarget symlink change fails...
    await rm(path.join(root, "sub", "link.md"));
    const name = Buffer.concat([Buffer.from("x"), Buffer.from([0xff, 0xfe])]);
    await symlink(name, path.join(root, "sub", "link.md"));
    result = run(["verify", state], root);
    assert.equal(result.status, 1);
    await rm(path.join(root, "sub", "link.md"));
    await symlink("../a.md", path.join(root, "sub", "link.md"));

    // ...and a rewrite of an existing dotfile fails.
    await writeFile(path.join(root, ".hidden", "c.md"), "changed\n");
    result = run(["verify", state], root);
    assert.equal(result.status, 1);
    await writeFile(path.join(root, ".hidden", "c.md"), "state\n");

    // node_modules stays the one broad exclusion.
    await writeFile(path.join(root, "node_modules", "fresh"), "dep\n");
    result = run(["verify", state], root);
    assert.equal(result.status, 0, result.stderr);

  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test("detects an index change (staged blob) through a git repository", async (t) => {
  if (spawnSync("git", ["--version"]).status !== 0) t.skip("git is not available on this host");
  const root = await mkdtemp(path.join(tmpdir(), "tree-guard-git-"));
  try {
    // A test's git calls must not inherit the caller's GIT_* variables.
    const env = { ...process.env };
    for (const key of Object.keys(env)) if (key.startsWith("GIT_")) delete env[key];
    const git = (args) => {
      const result = spawnSync("git", args, { cwd: root, env, encoding: "utf8" });
      assert.equal(result.status, 0, result.stderr);
    };
    git(["init", "-q"]);
    await writeFile(path.join(root, "tracked.md"), "one\n");
    git(["add", "tracked.md"]);
    const committed = {
      user: ["-c", "user.email=guard@test", "-c", "user.name=guard"],
      message: ["commit", "-qm", "init"],
    };
    git([...committed.user, ...committed.message]);
    const state = path.join(tmpdir(), `guard-${Date.now()}-${Math.random().toString(16).slice(2)}.json`);
    let result = run(["snapshot", state], root);
    assert.equal(result.status, 0, result.stderr);
    await writeFile(path.join(root, "tracked.md"), "two\n");
    git(["add", "tracked.md"]); // staged: working tree and status both see it, but so must the index
    result = run(["verify", state], root);
    assert.equal(result.status, 1);
    await rm(state, { force: true });
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test("fails when a git query breaks instead of disabling the guard", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "tree-guard-fail-"));
  try {
    const env = { ...process.env };
    for (const key of Object.keys(env)) if (key.startsWith("GIT_")) delete env[key];
    const git = (...args) => {
      const result = spawnSync("git", args, { cwd: root, env, encoding: "utf8" });
      assert.equal(result.status, 0, result.stderr);
    };
    git("init", "-q");
    await writeFile(path.join(root, "a.md"), "x\n");
    git("add", "a.md");
    git("-c", "user.email=guard@test", "-c", "user.name=guard", "commit", "-qm", "init");
    const realGit = spawnSync("which", ["git"]).stdout.toString().trim();
    assert.ok(realGit, "expected git on PATH");
    const fakebin = path.join(root, "fakebin");
    await mkdir(fakebin);
    await writeFile(
      path.join(fakebin, "git"),
      '#!/bin/sh\nif [ "$1" = "ls-files" ]; then echo "fatal: injected failure" >&2; exit 128; fi\nexec ' + realGit + ' "$@"\n',
    );
    await chmod(path.join(fakebin, "git"), 0o755);
    const state = path.join(tmpdir(), `guard-fail-${Date.now()}.json`);
    const clean = run(["snapshot", state], root);
    assert.equal(clean.status, 0, clean.stderr);
    const probe = spawnSync(process.execPath, [guard, "verify", state], {
      encoding: "utf8", cwd: root,
      env: { ...process.env, PATH: `${fakebin}:${process.env.PATH}` },
    });
    assert.equal(probe.status, 1);
    assert.match(probe.stderr, /git ls-files.*failed/);
    await rm(state, { force: true });
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
