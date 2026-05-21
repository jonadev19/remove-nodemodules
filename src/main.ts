#!/usr/bin/env node
import path from "node:path";
import { readDirFromPath } from "./helpers/readDirs";
import { rmSync } from "node:fs";
import { isDirectory } from "./helpers/isDirectory";

let deletedCount = 0;

const removeNodeModules = (paths: string[]) => {
  paths.forEach(dir => {
    if (isDirectory(dir)) {
      if (path.basename(dir) == 'node_modules') {
        rmSync(dir, {recursive: true});
        deletedCount++;
      } else {
        removeNodeModules(readDirFromPath(dir))
      }
    }
  });
}

removeNodeModules(readDirFromPath(process.cwd()));

// Códigos de color ANSI
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';

if (deletedCount > 0) {
  console.log(`\n${GREEN}✔ ¡Limpieza completada con éxito!${RESET}`);
  console.log(`🗑️  Se eliminaron ${BOLD}${deletedCount}${RESET} carpetas ${BOLD}node_modules${RESET}.\n`);
} else {
  console.log(`\n${YELLOW}⚠ No se encontraron carpetas node_modules para eliminar.${RESET}\n`);
}