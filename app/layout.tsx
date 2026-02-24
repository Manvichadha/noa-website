import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import FloatingDock from '@/components/FloatingDock'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'BLEUKEI — Accelerating Ambitious Brands',
  description: 'We help ambitious brands accelerate growth through strategic brand development, design systems, and performance marketing.',
  metadataBase: new URL('https://bleukei.com'),
  openGraph: {
    type: 'website',
    url: 'https://bleukei.com',
    title: 'BLEUKEI — Accelerating Ambitious Brands',
    description: 'We help ambitious brands accelerate growth through strategic brand development, design systems, and performance marketing.',
    siteName: 'BLEUKEI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BLEUKEI — Accelerating Ambitious Brands',
    description: 'We help ambitious brands accelerate growth through strategic brand development, design systems, and performance marketing.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-black text-white min-h-screen antialiased`}>
        {children}
        <FloatingDock />
      </body>
    </html>
  )
}
