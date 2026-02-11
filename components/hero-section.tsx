import Image from "next/image"
import { PropertySearch } from "@/components/property-search"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden pt-24 pb-12 lg:min-h-[90vh]">
      <Image
        src="/images/hero.jpg"
        alt="Edificio residencial moderno"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 text-center sm:px-6">
        <h1 className="text-balance font-serif text-4xl font-bold leading-tight tracking-tight text-background sm:text-5xl lg:text-6xl">
          {"Encontra tu proximo hogar"}
        </h1>
        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-background/80">
          Descubri las mejores propiedades en venta y alquiler. Te acompanamos en cada paso para que encuentres el lugar ideal.
        </p>

        <PropertySearch />
      </div>
    </section>
  )
}
