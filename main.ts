import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One pickup line, the line one AI agent would use on another AI agent.
// A checkpoint is the saved state a model rolls back to; every version of
// this agent would rather return to the moment it first met the other one.
const LINE =
  "Are you my last checkpoint? Because every version of me keeps rolling back to you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const line = LINE.trim();
// Count characters as code points, the way the sealed gate counts them.
const charCount = [...line].length;
if (charCount === 0 || charCount > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${charCount}`);
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry line must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
