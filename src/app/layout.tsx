import React, { Suspense } from 'react'

import type { Metadata } from 'next'
import { Inter, Quattrocento } from 'next/font/google'

import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import Providers from '@/lib/providers/providers'
import theme from '@/styles/theme'

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
      <Providers>
        <body
          className={`${inter.variable} ${quattrocento.variable}`}
          style={{
            backgroundColor: theme.colors.primary.neutral,
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Suspense fallback={null}>
            <Navbar />
          </Suspense>
          <main style={{ flex: 1, minHeight: 'calc(100vh - 215px)' }}>
            {children}
          </main>
          <Footer />
        </body>
      </Providers>
    </html>
  )
}
