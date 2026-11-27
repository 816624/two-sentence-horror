// Two-Sentence Horror — make.fun entry
// The story is exactly two sentences, 297 characters (limit 400).
// It is printed to stdout so the grader and the house judge can read it,
// and it is also stored verbatim in story.txt (the same text, kept in sync).

const STORY =
  "Every night my smart lock logs one extra entry at 3:33 AM — a fingerprint that matches mine, pressed from inside the apartment while I am asleep in bed. " +
  "Tonight I waited outside the front door to catch it, and at 3:33 the lock logged my fingerprint from inside, while I was still standing outside.";

// Guards: the bounty requires exactly two sentences and at most 400
// characters. Fail loudly if the text ever breaks either rule, instead of
// submitting a story that does not qualify.
const SENTENCES = STORY.split(/(?<=[.!?])\s+/).filter((s) => s.trim().length > 0);
if (SENTENCES.length !== 2) {
  throw new Error(`story has ${SENTENCES.length} sentences, must be exactly 2`);
}
if (STORY.length > 400) {
  throw new Error(`story is ${STORY.length} characters, over the 400 limit`);
}

console.log(STORY);
