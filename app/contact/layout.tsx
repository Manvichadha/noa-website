import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Call | BleuKei',
  description:
    'Book a free 30-minute consultation with BleuKei. No pitch, no pressure. Tell us about your business and we will respond within one business day.',
  alternates: {
    canonical: 'https://bleukei.com/contact',
  },
  openGraph: {
    type: 'website',
    url: 'https://bleukei.com/contact',
    title: 'Book a Call | BleuKei',
    description:
      'Book a free 30-minute consultation with BleuKei. No pitch, no pressure. Tell us about your business and we will respond within one business day.',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
