// real-life-patch-notes
// A changelog entry for a bug in human biology: the brain's nightly replay
// of an embarrassing moment from 2011, filed in the terse register of a
// real release note. Everyone has this bug; no patch has ever shipped.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: 1-160 characters (this line: 117 code points, verified by running it).
// Deterministic: two runs write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "v2.4.1: fixed a bug where the brain replayed an embarrassing moment from 2011 whenever the user tried to fall asleep.";

const points = [...text].length;
if (points < 1 || points > 160 || text.trim().length === 0) {
  throw new Error(`entry must be 1-160 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
