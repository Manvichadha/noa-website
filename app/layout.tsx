import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import SmoothScroll from '@/components/SmoothScroll'
import CustomCursor from '@/components/CustomCursor'
import Header from '@/components/Header'
import JsonLd from '@/components/JsonLd'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'BleuKei | Growth, Marketing, AI & Automation Systems for Business',
  description:
    'BleuKei builds and runs the marketing, sales, AI, and automation systems businesses need but do not have the time, team, or specialty to run themselves.',
  metadataBase: new URL('https://bleukei.com'),
  alternates: {
    canonical: 'https://bleukei.com',
  },
  openGraph: {
    type: 'website',
    url: 'https://bleukei.com',
    title: 'BleuKei | Growth, Marketing, AI & Automation Systems for Business',
    description:
      'BleuKei builds and runs the marketing, sales, AI, and automation systems businesses need but do not have the time, team, or specialty to run themselves.',
    siteName: 'BleuKei',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BleuKei | Growth, Marketing, AI & Automation Systems for Business',
    description:
      'BleuKei builds and runs the marketing, sales, AI, and automation systems businesses need but do not have the time, team, or specialty to run themselves.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'BleuKei',
  url: 'https://bleukei.com',
  description:
    'BleuKei is a growth and operations firm that builds and runs the marketing, sales, AI, and automation systems businesses need but do not have the time, team, or specialty to run themselves.',
  email: ['nb', '@', 'noaberger.com'].join(''),
  areaServed: 'US',
  founder: {
    '@type': 'Person',
    name: 'Noa Berger',
    sameAs: 'https://www.linkedin.com/in/noabberger/',
  },
  sameAs: [
    'https://www.linkedin.com/in/noabberger/',
    'https://www.instagram.com/noableu/',
  ],
  knowsAbout: [
    'AI implementation',
    'marketing automation',
    'generative engine optimization',
    'SEO',
    'sales automation',
    'business operations',
    'web development',
    'Shopify development',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={professionalServiceSchema} />
      </head>
      <body className={`${inter.variable} font-sans bg-black text-white min-h-screen antialiased cursor-none`}>
        <CustomCursor />
        <Header />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
