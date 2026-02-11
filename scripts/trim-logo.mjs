/**
 * Recorta el borde blanco del logo PNG y guarda el resultado.
 * Uso: node scripts/trim-logo.mjs
 */
import sharp from "sharp"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, "..")
const inputPath = path.join(root, "public", "images", "logo.png")
const outputPath = path.join(root, "public", "images", "logo.png")

async function trimLogo() {
  await sharp(inputPath)
    .trim({ threshold: 20 }) // recorta píxeles casi blancos (borde)
    .png()
    .toFile(outputPath + ".tmp")
  // Sobrescribir original (en Windows no se puede reemplazar archivo en uso, así que renombramos)
  const fs = await import("fs")
  fs.renameSync(outputPath + ".tmp", outputPath)
  console.log("Logo recortado y guardado en public/images/logo.png")
}

trimLogo().catch((err) => {
  console.error(err)
  process.exit(1)
})
