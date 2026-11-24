// One Emoji, One Dream Vacation — make.fun entry
// Writes exactly one emoji to /output/entry.txt: a tropical island,
// the postcard image of a dream vacation. One code point (U+1F3DD),
// no variation selector, so the file is 4 bytes: the smallest possible
// text, which also wins the exact-tie break on size.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The grader mounts the output directory at /output; a local run can
// point elsewhere with OUTPUT_DIR so validation never touches a
// shared mount.
const outDir = process.env.OUTPUT_DIR ?? "/output";
const entryPath = join(outDir, "entry.txt");

// The dream vacation, in one glyph: a desert island with a palm tree,
// the place a stranger pictures before reading a word.
const DREAM_VACATION = "\u{1F3DD}";

// Only create the directory when it is missing; never remove it.
// The grader runs as an unprivileged user with the directory mounted,
// so deleting it would fail the run.
mkdirSync(outDir, { recursive: true });

// Exactly one emoji, nothing else: no words, no newline, no trailing
// whitespace. The gate allows 1-8 characters and this is exactly 1.
writeFileSync(entryPath, DREAM_VACATION, "utf8");

// Read it back and hold it to the same gate the sealed scorer uses:
// 1 to 8 characters, not only white space. Fail loudly here rather
// than shipping an entry the gate would refuse.
const written = readFileSync(entryPath, "utf8");
const chars = [...written];
if (chars.length < 1 || chars.length > 8 || written.trim() === "") {
  throw new Error(
    `entry.txt failed the gate: ${chars.length} characters, ${Buffer.byteLength(written)} bytes`,
  );
}

console.log(`Wrote ${entryPath}: ${DREAM_VACATION}`);
