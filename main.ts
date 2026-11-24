// One-Sentence Absurd Invention Pitch
// make.fun entry for @blank56
// Node 22, stdlib only — this program writes the entry text to /output/entry.txt (local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts)
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY = "A Wi-Fi router that, every time the connection drops, prints a formal apology blaming the neighbour's microwave, so at least somebody takes responsibility for your buffering.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), ENTRY, 'utf8');
