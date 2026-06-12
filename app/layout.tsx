import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import FloatingDock from '@/components/FloatingDock'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'BLEUKEI — Growth Consultancy',
  description:
    'BLEUKEI helps ambitious businesses grow: marketing, GEO + SEO, partnerships and sponsorships, AI-powered automation, streamlined operations, and custom tech development.',
  metadataBase: new URL('https://bleukei.com'),
  openGraph: {
    type: 'website',
    url: 'https://bleukei.com',
    title: 'BLEUKEI — Growth Consultancy',
    description:
      'Marketing, automation, operations, and tech development for businesses ready to scale.',
    siteName: 'BLEUKEI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BLEUKEI — Growth Consultancy',
    description:
      'Marketing, automation, operations, and tech development for businesses ready to scale.',
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
