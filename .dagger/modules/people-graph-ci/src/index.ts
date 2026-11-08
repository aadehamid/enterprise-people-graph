import { dag, Workspace, Directory, Container, object, func, check } from "@dagger.io/dagger"

@object()
export class PeopleGraphCi {
  // The Markdown mount must stay in step with scripts/check.sh: the local
  // gate lints every tracked *.md and fails on a tracked Markdown file
  // outside these roots, so the local and container checks cannot silently
  // diverge.
  docs: Directory
  tools: Directory
  // scripts/ holds the local gate's helpers (tree-guard, decision guard);
  // ci/*.test.mjs import them from ../scripts, so the tool tests need it.
  scripts: Directory

  constructor(ws: Workspace) {
    this.docs = ws.directory("/", {
      include: [
        "*.md",
        "LIONG_Design_Document_Package/**",
        "guideline_to_map_ontology_to_LPG/**",
        "docs/**",
        ".github/**",
      ],
      exclude: [
        ".git", ".dagger", ".entire", ".claude", ".codex", ".cursor",
        ".opencode", ".pi", ".agents", "**/node_modules",
      ],
      gitignore: true,
    })
    this.tools = ws.directory("/ci", { exclude: ["node_modules"] })
    this.scripts = ws.directory("/scripts", { gitignore: true })
  }

  private dependencies(): Container {
    return dag.container()
      .from("node:24.13.1-alpine@sha256:4f696fbf39f383c1e486030ba6b289a5d9af541642fc78ab197e584a113b9c03")
      // git, so the tool tests' git-dependent suites run in the container too
      // (nothing must be skipped silently in a gate).
      .withExec(["apk", "add", "--no-cache", "git"])
      .withWorkdir("/checks")
      .withDirectory("/checks", this.tools, {
        include: ["package.json", "package-lock.json"],
      })
      .withExec(["npm", "ci", "--ignore-scripts", "--no-audit", "--no-fund"])
  }

  /** Check Markdown structure without reformatting the design documents. */
  @check()
  @func()
  async markdown(): Promise<void> {
    await this.dependencies()
      .withFile("/checks/markdownlint-cli2.jsonc", this.tools.file("markdownlint-cli2.jsonc"))
      .withDirectory("/docs", this.docs)
      .withExec(["npm", "run", "lint"])
      .sync()
  }

  /** Validate local link and image targets, without making network requests. */
  @check()
  @func()
  async links(): Promise<void> {
    await this.dependencies()
      .withFile("/checks/check-links.mjs", this.tools.file("check-links.mjs"))
      .withDirectory("/docs", this.docs)
      .withExec(["npm", "run", "links"])
      .sync()
  }

  /** Prove that the local link checker accepts valid input and rejects broken input. */
  @check()
  @func()
  async checkerTests(): Promise<void> {
    await this.dependencies()
      .withDirectory("/scripts", this.scripts)
      .withDirectory("/checks", this.tools, { include: ["*.mjs"] })
      .withExec(["npm", "test"])
      .sync()
  }

  /** Decision records and the index agree, by the same fail-closed code as the local gate. */
  @check()
  @func()
  async decisions(): Promise<void> {
    await this.dependencies()
      .withDirectory("/scripts", this.scripts)
      .withDirectory("/docs", this.docs)
      .withWorkdir("/docs")
      // A target repository sets its decision folder and record prefix in
      // the checker's own defaults (scripts/check-decisions.mjs), in
      // scripts/check.sh, here, and in the mount below.
      .withExec(["node", "/scripts/check-decisions.mjs",
                 process.env.DECISIONS_DIR ?? "docs/decisions",
                 process.env.DECISION_PREFIX ?? "EPG-DEC"])
      .sync()
  }
}
