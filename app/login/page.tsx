"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const newErrors: { email?: string; password?: string } = {}

    if (!email) {
      newErrors.email = "El email es obligatorio"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Ingresa un email valido"
    }

    if (!password) {
      newErrors.password = "La contrasena es obligatoria"
    } else if (password.length < 6) {
      newErrors.password = "La contrasena debe tener al menos 6 caracteres"
    }

    setErrors(newErrors)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-block">
            <span className="relative mx-auto block h-14 w-44">
              <Image
                src="/images/logo.png"
                alt="F. Castillo Propiedades"
                fill
                className="object-contain"
                priority
              />
            </span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
            Panel de administracion
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
          <h1 className="mb-6 text-center font-serif text-2xl font-bold text-foreground">
            Iniciar sesion
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="admin@habitat.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }))
                }}
                className={`w-full rounded-md border px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring ${
                  errors.email
                    ? "border-destructive focus:ring-destructive/30"
                    : "border-input hover:border-muted-foreground/30"
                }`}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-foreground">
                Contrasena
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingresa tu contrasena"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }))
                  }}
                  className={`w-full rounded-md border px-3 py-2.5 pr-10 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring ${
                    errors.password
                      ? "border-destructive focus:ring-destructive/30"
                      : "border-input hover:border-muted-foreground/30"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={showPassword ? "Ocultar contrasena" : "Mostrar contrasena"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1.5 text-xs text-destructive">{errors.password}</p>
              )}
            </div>

            <Button type="submit" className="w-full mt-1" size="lg">
              Ingresar
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              Volver al sitio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
