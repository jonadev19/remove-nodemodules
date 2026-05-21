# remove-nodemodules-cli

Herramienta CLI ultra rápida para eliminar carpetas `node_modules` residuales en un directorio y todos sus subdirectorios.

Ideal para liberar espacio en disco cuando trabajas con monorepos, proyectos anidados o múltiples repositorios dentro de una misma carpeta.

## Características

- Recorre recursivamente el directorio actual y elimina todas las carpetas `node_modules` que encuentre
- Sin dependencias en tiempo de ejecución: usa únicamente APIs nativas de Node.js
- Salida clara con resumen de cuántas carpetas se eliminaron
- Escrito en TypeScript

## Requisitos

- [Node.js](https://nodejs.org/) 18 o superior

## Instalación

### Uso global

```bash
npm install -g remove-nodemodules-cli
```

### Uso local en un proyecto

```bash
npm install remove-nodemodules-cli
```

## Uso

Navega al directorio desde el que quieres iniciar la búsqueda y ejecuta:

```bash
rm-modules
```

El comando recorrerá el directorio actual (`process.cwd()`) y todos sus subdirectorios. Cada carpeta llamada `node_modules` será eliminada de forma recursiva.

### Ejemplo

```bash
cd ~/proyectos
rm-modules
```

Salida cuando se encuentran carpetas:

```
✔ ¡Limpieza completada con éxito!
🗑️  Se eliminaron 5 carpetas node_modules.
```

Salida cuando no hay nada que eliminar:

```
⚠ No se encontraron carpetas node_modules para eliminar.
```

## Cómo funciona

1. Lee el contenido del directorio actual
2. Si encuentra una carpeta llamada `node_modules`, la elimina con `rmSync`
3. Si encuentra otro directorio, entra en él y repite el proceso
4. Al finalizar, muestra un resumen con el total de carpetas eliminadas

## Desarrollo

Clona el repositorio e instala las dependencias de desarrollo:

```bash
git clone <url-del-repositorio>
cd remove-nodemodules-cli
npm install
```

### Scripts disponibles

| Comando        | Descripción                              |
| -------------- | ---------------------------------------- |
| `npm run dev`  | Ejecuta la CLI en modo desarrollo con recarga automática |
| `npm run build`| Compila TypeScript a la carpeta `dist/`  |

Para probar localmente sin instalar globalmente:

```bash
npm run build
node dist/main.js
```

## Estructura del proyecto

```
src/
├── main.ts                 # Punto de entrada de la CLI
└── helpers/
    ├── readDirs.ts         # Lectura de directorios
    └── isDirectory.ts      # Comprobación de si una ruta es un directorio
```

## Licencia

MIT
