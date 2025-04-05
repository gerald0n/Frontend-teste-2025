import React from 'react'

import type { Metadata } from 'next'
import { Inter, Quattrocento } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

const quattrocento = Quattrocento({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-quattrocento',
})

export const metadata: Metadata = {
  title: 'EVOB | A melhor plataforma de cursos online',
  description: 'A melhor plataforma de cursos online',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${quattrocento.variable}`}>
        {children}
      </body>
    </html>
  )
}
