import { Building2, Handshake, ShieldCheck, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Building2,
    title: "Amplio portfolio",
    description:
      "Contamos con cientos de propiedades en las mejores ubicaciones de Buenos Aires y alrededores.",
  },
  {
    icon: Handshake,
    title: "Atencion personalizada",
    description:
      "Nuestro equipo te acompana en cada paso del proceso de compra, venta o alquiler.",
  },
  {
    icon: ShieldCheck,
    title: "Confianza y transparencia",
    description:
      "Mas de 15 anos de trayectoria nos respaldan. Trabajamos con total seriedad y profesionalismo.",
  },
  {
    icon: TrendingUp,
    title: "Asesoramiento financiero",
    description:
      "Te ayudamos a encontrar las mejores opciones de financiamiento para tu inversion.",
  },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            Sobre nosotros
          </p>
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Tu aliado inmobiliario
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            En F. Castillo Propiedades nos dedicamos a conectar personas con su hogar ideal. Somos una inmobiliaria con amplia experiencia en el mercado de Mar del Plata, especializada en propiedades residenciales y comerciales en las mejores zonas de la ciudad.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center gap-4 rounded-lg bg-card p-6 text-center shadow-sm border border-border"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
