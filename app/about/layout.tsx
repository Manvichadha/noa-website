import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About BleuKei',
  description:
    'BleuKei exists because most businesses know what they should be doing but do not have the time, team, or specialty to do it. We are the firm that does it for them, quietly, behind their brand.',
  alternates: {
    canonical: 'https://bleukei.com/about',
  },
  openGraph: {
    type: 'website',
    url: 'https://bleukei.com/about',
    title: 'About BleuKei',
    description:
      'BleuKei exists because most businesses know what they should be doing but do not have the time, team, or specialty to do it. We are the firm that does it for them, quietly, behind their brand.',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
