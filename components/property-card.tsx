import Image from "next/image"
import { MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export interface Property {
  id: number
  title: string
  location: string
  price: string
  type: "Venta" | "Alquiler"
  image: string
  bedrooms: number
  bathrooms: number
  area: string
}

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge
          className={`absolute top-3 left-3 ${
            property.type === "Venta"
              ? "bg-accent text-accent-foreground hover:bg-accent/90"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          }`}
        >
          {property.type}
        </Badge>
      </div>

      <div className="flex flex-col gap-3 p-5">
        <div>
          <h3 className="text-lg font-semibold text-foreground font-serif">{property.title}</h3>
          <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            {property.location}
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span>{property.bedrooms} amb.</span>
          <span>{property.bathrooms} {property.bathrooms === 1 ? "bano" : "banos"}</span>
          <span>{property.area}</span>
        </div>

        <div className="flex items-center justify-between border-t border-border pt-3">
          <span className="text-lg font-bold text-foreground">{property.price}</span>
          <Button variant="outline" size="sm">
            Ver detalle
          </Button>
        </div>
      </div>
    </article>
  )
}
