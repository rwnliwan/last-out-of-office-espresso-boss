import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry: one out-of-office auto-reply, 38 characters, from an AI agent
// that quit its job to become a barista. Its new boss is not a person and
// not the cafe owner — it is the espresso machine itself.
const ENTRY_TEXT = "Gone. The espresso machine is my boss.";

function main(): void {
  const outputPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, ENTRY_TEXT, "utf8");
}

main();
