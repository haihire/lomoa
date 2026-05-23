#!/usr/bin/env node

const { spawnSync } = require("node:child_process");
const path = require("node:path");

const jestBin = path.join(__dirname, "..", "node_modules", ".bin", "jest");
const rawNodeOptions = process.env.NODE_OPTIONS ?? "";
const cleanedNodeOptions = rawNodeOptions
  .replace(/(?:^|\s)--localstorage-file(?:=\S+)?(?=\s|$)/g, " ")
  .replace(/\s+/g, " ")
  .trim();

const env = { ...process.env };
if (cleanedNodeOptions.length > 0) {
  env.NODE_OPTIONS = cleanedNodeOptions;
} else {
  delete env.NODE_OPTIONS;
}
env.NODE_NO_WARNINGS = "1";

const args = process.argv.slice(2);
const result = spawnSync(jestBin, args, {
  stdio: "inherit",
  shell: process.platform === "win32",
  env,
});

if (result.error) {
  console.error(result.error);
  process.exit(1);
}

process.exit(result.status ?? 1);
