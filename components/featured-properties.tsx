import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/property-card"
import { MOCK_PROPERTIES } from "@/lib/properties-mock"
import { PROPERTY_TYPE_IMAGES } from "@/lib/stock-images"

const propertyTypes = [
  { id: 1, title: "Casas / Chalets", image: PROPERTY_TYPE_IMAGES[0] },
  { id: 2, title: "PH", image: PROPERTY_TYPE_IMAGES[1] },
  { id: 3, title: "Departamentos", image: PROPERTY_TYPE_IMAGES[2] },
  { id: 4, title: "Terrenos", image: PROPERTY_TYPE_IMAGES[3] },
  { id: 5, title: "Propiedades en Block", image: PROPERTY_TYPE_IMAGES[4] },
  { id: 6, title: "Desarrollos", image: PROPERTY_TYPE_IMAGES[5] },
  { id: 7, title: "Fondos de Comercio", image: PROPERTY_TYPE_IMAGES[6] },
  { id: 8, title: "Locales", image: PROPERTY_TYPE_IMAGES[7] },
]

export function FeaturedProperties() {
  return (
    <section id="propiedades" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            Explorá por tipo
          </p>
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Nuestras Propiedades
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            Encontrá lo que buscás entre nuestra variedad de tipos de propiedades. Casas, departamentos, terrenos y más en las mejores ubicaciones.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {propertyTypes.map((type) => (
            <article
              key={type.id}
              className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={type.image}
                  alt={type.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <h3 className="absolute bottom-3 left-3 right-3 font-serif text-lg font-bold text-background sm:text-xl">
                  {type.title}
                </h3>
              </div>
              <div className="p-4">
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Ver detalle
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
              Ofertas recientes
            </p>
            <h3 className="text-balance font-serif text-2xl font-bold text-foreground sm:text-3xl">
              Propiedades destacadas
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-pretty text-sm text-muted-foreground">
              Algunas de las propiedades que tenemos disponibles en venta y alquiler.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MOCK_PROPERTIES.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <a href="#contacto">Ver todas las propiedades</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
