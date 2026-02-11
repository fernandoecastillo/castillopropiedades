import Image from "next/image"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-16">
      <Image
        src="/images/hero.jpg"
        alt="Edificio residencial moderno"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center">
        <h1 className="text-balance font-serif text-4xl font-bold leading-tight tracking-tight text-background sm:text-5xl lg:text-6xl">
          {"Encontra tu proximo hogar"}
        </h1>
        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-background/80">
          Descubri las mejores propiedades en venta y alquiler. Te acompanamos en cada paso para que encuentres el lugar ideal.
        </p>

        <div className="w-full max-w-3xl rounded-xl bg-background/95 p-4 shadow-xl backdrop-blur-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:gap-4">
            <div className="flex-1">
              <label htmlFor="location" className="mb-1 block text-xs font-medium text-muted-foreground">
                Ubicacion
              </label>
              <input
                id="location"
                type="text"
                placeholder="Ej: Palermo, Recoleta..."
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="flex-1">
              <label htmlFor="type" className="mb-1 block text-xs font-medium text-muted-foreground">
                Tipo
              </label>
              <select
                id="type"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Venta / Alquiler</option>
                <option value="venta">Venta</option>
                <option value="alquiler">Alquiler</option>
              </select>
            </div>

            <div className="flex-1">
              <label htmlFor="price" className="mb-1 block text-xs font-medium text-muted-foreground">
                Precio maximo
              </label>
              <select
                id="price"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Sin limite</option>
                <option value="50000">USD 50.000</option>
                <option value="100000">USD 100.000</option>
                <option value="200000">USD 200.000</option>
                <option value="500000">USD 500.000</option>
              </select>
            </div>

            <Button className="gap-2">
              <Search className="h-4 w-4" />
              Buscar
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
