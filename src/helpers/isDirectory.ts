import { statSync } from "node:fs";

export const isDirectory = (path: string): boolean => {
  try {
    // Intentamos obtener los datos del archivo/carpeta
    const stats = statSync(path);
    return stats.isDirectory();
} catch (error: any) {
    // Si el archivo no existe (ENOENT), simplemente devolvemos false de forma segura
    if (error.code === 'ENOENT') {
        return false; 
    }
    // Si es otro tipo de error inesperado, lo relanzamos
    throw error;
}
}