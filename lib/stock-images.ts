/**
 * URLs de imágenes de stock para mockups.
 * Unsplash: https://images.unsplash.com/photo-{id}?w=800&q=80
 * Picsum (fallback): https://picsum.photos/seed/{seed}/800/600
 */

const unsplash = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80`

const picsum = (seed: string, w = 800, h = 600) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`

/** Imágenes para propiedades destacadas (Unsplash - casas, departamentos, interiores) */
export const PROPERTY_IMAGES = [
  unsplash("1600596542815-ffad4c1539a9"), // Casa con jardín
  unsplash("1502672260266-1c1ef2d93688"), // Departamento moderno
  unsplash("1600585154340-be6161a56f0e"), // Chalet
  unsplash("1600566753190-17f0baa2a6c3"), // Casa exterior
  unsplash("1600607687939-cee0604c2c2c"), // Interior amplio
  unsplash("1600585154526-990dced4db0d"), // Casa vista al frente
] as const

/** Imágenes por tipo de propiedad (Unsplash + Picsum para variedad) */
export const PROPERTY_TYPE_IMAGES = [
  unsplash("1600596542815-ffad4c1539a9"), // Casas / Chalets
  unsplash("1600566753190-17f0baa2a6c3"), // PH
  unsplash("1502672260266-1c1ef2d93688"), // Departamentos
  unsplash("1500387467461-2fed384a0f33"), // Terrenos
  picsum("building1"),   // Edificio / Block
  picsum("construction"), // Desarrollos
  picsum("office"),     // Fondo de comercio
  picsum("store"),      // Locales
] as const
