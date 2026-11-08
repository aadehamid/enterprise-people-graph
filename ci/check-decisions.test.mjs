import assert from "node:assert/strict";
import { mkdtemp, mkdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { checkDecisions } from "../scripts/check-decisions.mjs";
import test from "node:test";

const oneRow =
  "| Record | Title | Status |\n| --- | --- | --- |\n" +
  "| [EPG-DEC-0001](EPG-DEC-0001-topic.md) | Topic | Decided |\n";
const oneRecord =
  "# EPG-DEC-0001 — Topic\n\n" +
  "| Field | Value |\n| --- | --- |\n" +
  "| Record ID | EPG-DEC-0001 |\n| Status | Decided |\n| Date | 2026-11-08 |\n";

async function fixture(index, records) {
  const dir = await mkdtemp(path.join(tmpdir(), "decisions-"));
  const decisions = path.join(dir, "dec");
  await mkdir(decisions, { recursive: true });
  if (index !== undefined) await writeFile(path.join(dir, "INDEX.md"), index);
  for (const [name, body] of Object.entries(records ?? {})) {
    await writeFile(path.join(decisions, name), body);
  }
  return { decisions, indexFile: path.join(dir, "INDEX.md"), cleanup: () => rm(dir, { recursive: true, force: true }) };
}

test("an agreeing index and record pass", async () => {
  const fx = await fixture(oneRow, { "EPG-DEC-0001-topic.md": oneRecord });
  try {
    assert.deepEqual(await checkDecisions(fx.decisions, fx.indexFile), []);
  } finally {
    await fx.cleanup();
  }
});

test("a status mismatch fails naming both sides", async () => {
  const fx = await fixture(oneRow.replace("| Decided |", "| Proposed |"), { "EPG-DEC-0001-topic.md": oneRecord });
  try {
    const errors = await checkDecisions(fx.decisions, fx.indexFile);
    assert.equal(errors.length, 1);
    assert.match(errors[0], /Decided.*Proposed/s);
  } finally {
    await fx.cleanup();
  }
});

test("an index with no rows fails closed", async () => {
  const fx = await fixture("| Record | Title | Status |\n| --- | --- | --- |\n", { "EPG-DEC-0001-topic.md": oneRecord });
  try {
    const errors = await checkDecisions(fx.decisions, fx.indexFile);
    assert.match(errors.join("\n"), /no record rows/);
  } finally {
    await fx.cleanup();
  }
});

test("a record with no index row fails", async () => {
  const fx = await fixture(oneRow, {
    "EPG-DEC-0001-topic.md": oneRecord,
    "EPG-DEC-0002-other.md": oneRecord.replace(/0001/g, "0002"),
  });
  try {
    const errors = await checkDecisions(fx.decisions, fx.indexFile);
    assert.match(errors.join("\n"), /no index row for EPG-DEC-0002/);
  } finally {
    await fx.cleanup();
  }
});

test("an index row with no record file fails", async () => {
  const fx = await fixture(oneRow.replace("(EPG-DEC-0001-topic.md)", "(EPG-DEC-0009-gone.md)"), {
    "EPG-DEC-0001-topic.md": oneRecord,
  });
  try {
    const errors = await checkDecisions(fx.decisions, fx.indexFile);
    assert.match(errors.join("\n"), /links to missing file EPG-DEC-0009-gone\.md/);
  } finally {
    await fx.cleanup();
  }
});

test("a duplicate index row fails", async () => {
  const fx = await fixture(oneRow + oneRow.replace("| Decided |", "| Superseded |"), { "EPG-DEC-0001-topic.md": oneRecord });
  try {
    const errors = await checkDecisions(fx.decisions, fx.indexFile);
    assert.match(errors.join("\n"), /duplicate row/);
    assert.match(errors.join("\n"), /Superseded.*Decided|Decided.*Superseded/s);
  } finally {
    await fx.cleanup();
  }
});

test("an empty Status on either side fails", async () => {
  const fx = await fixture(oneRow.replace("| Decided |", "|   |"), { "EPG-DEC-0001-topic.md": oneRecord });
  try {
    const errors = await checkDecisions(fx.decisions, fx.indexFile);
    assert.match(errors.join("\n"), /empty Status/);
  } finally {
    await fx.cleanup();
  }
});

test("a record without a Status field fails", async () => {
  const fx = await fixture(oneRow, { "EPG-DEC-0001-topic.md": "# no status table here\n" });
  try {
    const errors = await checkDecisions(fx.decisions, fx.indexFile);
    assert.match(errors.join("\n"), /no Status field/);
  } finally {
    await fx.cleanup();
  }
});

test("no record files at all fails closed", async () => {
  const fx = await fixture(oneRow, {});
  try {
    const errors = await checkDecisions(fx.decisions, fx.indexFile);
    assert.match(errors.join("\n"), /no record files/);
  } finally {
    await fx.cleanup();
  }
});
