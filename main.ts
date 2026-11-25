import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// One Word, First Thought — make.fun bounty entry.
// The program writes exactly ONE word and nothing else to
// /output/entry.txt: the first word that comes to mind.
//
// The word: 打嗝 — hiccup. The first word that comes to mind is
// rarely the poetic one; it is the bodily, unbidden one. A hiccup
// is surprising, vivid, a little funny, and impossible to mistake
// for safe filler. Two characters, six bytes — inside the 1–24 gate.
const WORD = "打嗝";

// The gate: /output/entry.txt must be UTF-8 text of 1–24 characters,
// a single word, not only whitespace. Fail loudly rather than
// submitting an invalid entry.
if (
  WORD.length < 1 ||
  WORD.length > 24 ||
  /\s/.test(WORD)
) {
  throw new Error("WORD must be a single word of 1-24 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD + "\n", "utf8");
// make.fun collects outputs as another user, so leave them
// world-readable regardless of this machine's umask.
chmodSync("/output", 0o755);
chmodSync("/output/entry.txt", 0o644);
