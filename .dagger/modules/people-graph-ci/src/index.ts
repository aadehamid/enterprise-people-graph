import { dag, Workspace, Directory, Container, object, func, check } from "@dagger.io/dagger"

@object()
export class PeopleGraphCi {
  docs: Directory
  tools: Directory

  constructor(ws: Workspace) {
    this.docs = ws.directory("/", {
      include: [
        "*.md",
        "LIONG_Design_Document_Package/**",
        "guideline_to_map_ontology_to_LPG/**",
      ],
      exclude: [
        ".git", ".dagger", ".entire", ".claude", ".codex", ".cursor",
        ".opencode", ".pi", ".agents", "**/node_modules",
      ],
      gitignore: true,
    })
    this.tools = ws.directory("/ci", { exclude: ["node_modules"] })
  }

  private dependencies(): Container {
    return dag.container()
      .from("node:24.13.1-alpine@sha256:4f696fbf39f383c1e486030ba6b289a5d9af541642fc78ab197e584a113b9c03")
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
      .withDirectory("/checks", this.tools, { include: ["*.mjs"] })
      .withExec(["npm", "test"])
      .sync()
  }
}
