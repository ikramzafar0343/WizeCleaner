import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const MAX = 300;
const failures = [];
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (/\.(ts|tsx|css|mjs)$/.test(name)) {
      const lines = readFileSync(path, "utf8").split("\n").length;
      if (lines > MAX) failures.push(`${path}: ${lines}`);
    }
  }
}
walk("src");
if (failures.length) {
  console.error(`Files over ${MAX} lines:\n${failures.join("\n")}`);
  process.exit(1);
}
console.log("All source files are within the line limit.");
