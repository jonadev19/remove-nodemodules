import { readdirSync } from "node:fs";
import { join } from "node:path";

export const readDirFromPath = (path: string): string[] => {
  try {
    const dirs = readdirSync(path);

    const dirsFormatted = dirs.map((dir) => {
      return join(path, dir)
    })

    return dirsFormatted;
  } catch (err) {
    if (err instanceof Error) {
      console.log('¡Oh no! Hubo un error al leer:', err.message);
    } else {
      console.log('Ocurrió un error desconocido:', err);
    }
    return [];
  }
}