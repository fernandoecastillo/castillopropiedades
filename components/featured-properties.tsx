import { PropertyCard, type Property } from "@/components/property-card"

const properties: Property[] = [
  {
    id: 1,
    title: "Departamento 2 ambientes en Palermo",
    location: "Palermo, CABA",
    price: "USD 120.000",
    type: "Venta",
    image: "/images/property-1.jpg",
    bedrooms: 2,
    bathrooms: 1,
    area: "55 m\u00B2",
  },
  {
    id: 2,
    title: "Casa con jardin y pileta",
    location: "Nordelta, Tigre",
    price: "USD 350.000",
    type: "Venta",
    image: "/images/property-2.jpg",
    bedrooms: 4,
    bathrooms: 3,
    area: "220 m\u00B2",
  },
  {
    id: 3,
    title: "Loft industrial en San Telmo",
    location: "San Telmo, CABA",
    price: "USD 800 /mes",
    type: "Alquiler",
    image: "/images/property-3.jpg",
    bedrooms: 1,
    bathrooms: 1,
    area: "65 m\u00B2",
  },
  {
    id: 4,
    title: "Penthouse con terraza panoramica",
    location: "Puerto Madero, CABA",
    price: "USD 480.000",
    type: "Venta",
    image: "/images/property-4.jpg",
    bedrooms: 3,
    bathrooms: 2,
    area: "180 m\u00B2",
  },
  {
    id: 5,
    title: "Departamento moderno en Belgrano",
    location: "Belgrano, CABA",
    price: "USD 650 /mes",
    type: "Alquiler",
    image: "/images/property-5.jpg",
    bedrooms: 2,
    bathrooms: 1,
    area: "48 m\u00B2",
  },
  {
    id: 6,
    title: "Casona colonial reciclada",
    location: "Martinez, San Isidro",
    price: "USD 290.000",
    type: "Venta",
    image: "/images/property-6.jpg",
    bedrooms: 5,
    bathrooms: 3,
    area: "310 m\u00B2",
  },
]

export function FeaturedProperties() {
  return (
    <section id="propiedades" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            Seleccion destacada
          </p>
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Propiedades Destacadas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            Explorá nuestra selección de propiedades cuidadosamente elegidas para vos. Departamentos, casas y más en las mejores ubicaciones.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}
