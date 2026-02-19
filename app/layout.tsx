import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BLEUKEI — Growth & Operations for Local Business',
  description: 'We help local businesses reclaim their time and grow through better operations, automation, and digital strategy.',
  metadataBase: new URL('https://bleukei.com'),
  openGraph: {
    type: 'website',
    url: 'https://bleukei.com',
    title: 'BLEUKEI — Growth & Operations for Local Business',
    description: 'We help local businesses reclaim their time and grow through better operations, automation, and digital strategy.',
    siteName: 'BLEUKEI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BLEUKEI — Growth & Operations for Local Business',
    description: 'We help local businesses reclaim their time and grow through better operations, automation, and digital strategy.',
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
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
