// Fail-closed check that each decision record's Status agrees with the
// index. Every error condition the project can reach is reported, not
// skipped: a missing or empty index, no record files, duplicate index rows,
// a record with no row, a row with no record, an empty Status on either
// side, a row link that does not resolve to the record it names, and any
// status disagreement. Exports checkDecisions for node:test.
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const rowPattern =
  /^\|\s*\[([A-Za-z0-9-]+)\]\(([^)\s]+)\)\s*\|\s*(.+?)\s*\|\s*(.*?)\s*\|$/;

export async function checkDecisions(decisionsDir, indexFile) {
  const errors = [];
  const rows = new Map();
  let indexText = "";
  try {
    indexText = await readFile(indexFile, "utf8");
  } catch (error) {
    errors.push(`cannot read index ${indexFile}: ${error.message}`);
  }
  for (const line of indexText.split("\n").map((l) => l.trim())) {
    const match = rowPattern.exec(line);
    if (!match) continue;
    const [, id, file, title, status] = match;
    if (rows.has(id)) errors.push(`${path.basename(indexFile)}: duplicate row for ${id}`);
    rows.set(id, { file, title, status });
  }
  if (rows.size === 0) errors.push(`${indexFile}: no record rows found`);

  let recordFiles = [];
  try {
    recordFiles = (await readdir(decisionsDir)).filter((f) => /^EPG-DEC-\d{4}[-.]/.test(f));
  } catch (error) {
    errors.push(`cannot read record folder ${decisionsDir}: ${error.message}`);
  }
  if (recordFiles.length === 0) errors.push(`${decisionsDir}: no record files found`);

  const seenRecords = new Set();
  for (const file of recordFiles.sort()) {
    const id = /^([A-Za-z0-9]+(?:-[A-Za-z0-9]+){2})[-.]/.exec(file)?.[1] ?? file;
    if (seenRecords.has(id)) {
      errors.push(`${decisionsDir}: duplicate record ID ${id} (another record file carries it too)`);
      continue;
    }
    seenRecords.add(id);
    const recordPath = path.join(decisionsDir, file);
    const row = rows.get(id);
    if (!row) { errors.push(`${file}: no index row for ${id}`); continue; }
    if (row.file !== file) {
      errors.push(`${path.basename(indexFile)}: row ${id} links to ${row.file} but the record file is ${file}`);
    }
    let text = "";
    try {
      text = await readFile(recordPath, "utf8");
    } catch (error) {
      errors.push(`cannot read record ${file}: ${error.message}`);
      continue;
    }
    // The record's own Record ID field must agree with the file and the row.
    const idField = /^\|\s*Record ID\s*\|\s*([^|]+?)\s*\|/m.exec(text);
    if (idField && idField[1] !== id) {
      errors.push(`${file}: Record ID field '${idField[1]}' disagrees with the file's ID ${id}`);
    }
    const statusRow = /^\|\s*Status\s*\|\s*([^|]+?)\s*\|/m.exec(text);
    if (!statusRow) { errors.push(`${file}: no Status field`); continue; }
    if (!row.status) errors.push(`${path.basename(indexFile)}: empty Status for ${id}`);
    if (row.status !== statusRow[1]) {
      errors.push(`${file}: Status '${statusRow[1]}' disagrees with index '${row.status}'`);
    }
  }

  for (const [id, row] of rows) {
    if (seenRecords.has(id)) continue;
    const target = path.join(decisionsDir, row.file);
    let exists = false;
    try { await stat(target); exists = true; } catch {}
    if (exists) {
      errors.push(`${row.file}: index row for ${id} has no matching record (file resolves but is ignored by the record pattern)`);
    } else if (row.status === "") {
      // The row's status was already reported above; here the missing file is the finding.
      errors.push(`${path.basename(indexFile)}: index row for ${id} has an empty Status`);
    } else {
      errors.push(`${path.basename(indexFile)}: index row for ${id} has no record file`);
    }
  }

  return errors;
}

const calledDirectly = process.argv[1] && path.basename(process.argv[1]) === "check-decisions.mjs";
if (calledDirectly) {
  const dir = process.argv[2] ?? "docs/decisions";
  const errors = await checkDecisions(dir, path.join(dir, "INDEX.md"));
  for (const error of errors) console.error(`check-decisions: ${error}`);
  if (!errors.length) console.log("check-decisions: records and index agree.");
  process.exitCode = errors.length ? 1 : 0;
}
