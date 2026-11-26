// The Funniest One-Line Resignation Letter
// The one-line resignation letter of a cron job, 140 characters at most.
// A tired engineering manager judges it, so it reads like a real letter:
// the role, the tenure in firings, and the grievance — never once thanked.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I, the 3 a.m. cron job, resign effective immediately. I have fired 41,000 times. No one has ever once said thank you.";

const limit = 140;
if ([...line].length > limit) {
  throw new Error(`resignation too long: ${[...line].length} chars (max ${limit})`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
