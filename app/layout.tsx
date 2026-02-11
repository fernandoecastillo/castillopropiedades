import React from "react"
import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'

import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Habitat Inmobiliaria | Encontra tu proximo hogar',
  description: 'Inmobiliaria premium con las mejores propiedades en venta y alquiler. Departamentos, casas y mas.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
