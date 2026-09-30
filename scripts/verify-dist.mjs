import { spawnSync } from "node:child_process";
import { mkdtemp, readdir, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildTo } from "./build.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");

const CLIENT_DIRECTIVE = '"use client";';
const MUST_START_WITH_CLIENT = [
  "TierIcon.js",
  "TierBadge.js",
  "MonIcon.js",
  "RyoIcon.js",
  "tierIcons.js",
];
const MUST_NOT_START_WITH_CLIENT = ["index.js", "tierMeta.js", "cn.js"];

async function listFiles(dir) {
  const out = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch (error) {
    if (error && error.code === "ENOENT") return out;
    throw error;
  }
  for (const entry of entries) {
    const rel = entry.name;
    if (entry.isDirectory()) {
      const nested = await listFiles(path.join(dir, entry.name));
      for (const name of nested) out.push(path.join(rel, name));
    } else {
      out.push(rel);
    }
  }
  return out.sort();
}

function fail(message) {
  console.error(message);
  process.exitCode = 1;
}

const tempDir = await mkdtemp(path.join(tmpdir(), "doji-icons-dist-"));

try {
  await buildTo(tempDir);

  const committed = await listFiles(distDir);
  const fresh = await listFiles(tempDir);
  const names = [...new Set([...committed, ...fresh])].sort();
  const differing = [];

  for (const name of names) {
    const committedPath = path.join(distDir, name);
    const freshPath = path.join(tempDir, name);
    const inCommitted = committed.includes(name);
    const inFresh = fresh.includes(name);
    if (!inCommitted || !inFresh) {
      differing.push(name);
      continue;
    }
    const [a, b] = await Promise.all([
      readFile(committedPath),
      readFile(freshPath),
    ]);
    if (!a.equals(b)) differing.push(name);
  }

  if (differing.length > 0) {
    fail(`dist/ differs from a fresh build:\n${differing.join("\n")}`);
  }

  for (const name of committed) {
    const filePath = path.join(distDir, name);
    const result = spawnSync(process.execPath, ["--check", filePath], {
      encoding: "utf8",
    });
    if (result.status !== 0) {
      const detail = (result.stderr || result.stdout || "").trim();
      fail(`${name} failed node --check${detail ? `\n${detail}` : ""}`);
    }
  }

  for (const name of MUST_START_WITH_CLIENT) {
    const text = await readFile(path.join(distDir, name), "utf8");
    const first = text.split(/\r?\n/, 1)[0];
    if (first !== CLIENT_DIRECTIVE) {
      fail(
        `${name} first line is ${JSON.stringify(first)}, expected ${JSON.stringify(CLIENT_DIRECTIVE)}`,
      );
    }
  }

  for (const name of MUST_NOT_START_WITH_CLIENT) {
    const text = await readFile(path.join(distDir, name), "utf8");
    const first = text.split(/\r?\n/, 1)[0];
    if (first === CLIENT_DIRECTIVE) {
      fail(`${name} starts with ${JSON.stringify(CLIENT_DIRECTIVE)}`);
    }
  }

  if (process.exitCode) process.exit(process.exitCode);
} finally {
  await rm(tempDir, { recursive: true, force: true });
}
