"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Inicio", href: "#" },
  { label: "Propiedades", href: "#propiedades" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="mx-auto flex min-h-14 md:min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 py-2">
        {/* Logo: responsive sizes */}
        <Link
          href="/"
          className="flex shrink-0 items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
          aria-label="F. Castillo Propiedades - Inicio"
        >
          <span className="relative block h-10 w-36 sm:h-11 sm:w-40 md:h-12 md:w-44 lg:h-14 lg:w-52">
            <Image
              src="/images/logo.png"
              alt="F. Castillo Propiedades"
              fill
              className="object-contain object-left"
              priority
              sizes="(max-width: 640px) 160px, (max-width: 768px) 176px, (max-width: 1024px) 192px, 208px"
            />
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm px-1 py-0.5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Button asChild variant="default" size="sm" className="h-9 px-4">
            <Link href="/login">Ingresar</Link>
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden flex items-center justify-center size-10 -mr-2 text-foreground rounded-md hover:bg-muted/80 active:bg-muted transition-colors touch-manipulation"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        role="dialog"
        aria-label="Menú de navegación"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-200 ease-out border-t border-border bg-background/98 backdrop-blur-sm ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-3 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground active:bg-muted/80 min-h-[44px] flex items-center"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 pt-2 border-t border-border">
            <Button asChild variant="default" size="sm" className="w-full h-11">
              <Link href="/login" onClick={() => setMobileOpen(false)}>
                Ingresar
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
