// Build guard: fails if any visible copy or source comment contains two hyphens in a row.
// CSS custom property names (var(...) and declarations) are code, not copy, so they are skipped.
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const files = ["lib/content.ts", "components/sections.tsx", "components/header.tsx", "components/photo.tsx", "app/layout.tsx", "app/page.tsx", "app/not-found.tsx"];
const DD = "-".repeat(2);
const bad = [];
for (const f of files) {
  const lines = fs.readFileSync(path.join(ROOT, f), "utf8").replace(/-{2}[a-z][a-z0-9-]*/g, "").split("\n");
  lines.forEach((l, i) => {
    if (l.includes(DD)) bad.push(`${f}:${i + 1}`);
  });
}
if (bad.length) {
  console.error("Double hyphen found at: " + bad.join(", "));
  process.exit(1);
}
console.log("check-copy: ok");
