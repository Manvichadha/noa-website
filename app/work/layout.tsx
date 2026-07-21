import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client Systems, Built & Running | BleuKei',
  description:
    'A selection of growth systems BleuKei has built and run for clients: sales automation, content engines, booking platforms, Shopify launches, and more.',
  alternates: {
    canonical: 'https://bleukei.com/work',
  },
  openGraph: {
    type: 'website',
    url: 'https://bleukei.com/work',
    title: 'Client Systems, Built & Running | BleuKei',
    description:
      'A selection of growth systems BleuKei has built and run for clients: sales automation, content engines, booking platforms, Shopify launches, and more.',
  },
}

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
