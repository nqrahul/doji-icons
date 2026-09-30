import { readdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import * as esbuild from "esbuild";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

export async function buildTo(outdir) {
  const srcDir = path.join(root, "src");
  const names = await readdir(srcDir);
  const entryPoints = names
    .filter((name) => name.endsWith(".js") || name.endsWith(".jsx"))
    .map((name) => path.join(srcDir, name));

  await esbuild.build({
    entryPoints,
    bundle: false,
    format: "esm",
    jsx: "automatic",
    loader: { ".js": "jsx" },
    outdir,
  });
}

function isDirectRun() {
  const entry = process.argv[1];
  if (!entry) return false;
  return import.meta.url === pathToFileURL(path.resolve(entry)).href;
}

if (isDirectRun()) {
  const outdir = path.join(root, "dist");
  await rm(outdir, { recursive: true, force: true });
  await buildTo(outdir);
}
