import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | BleuKei',
  description: 'BleuKei privacy policy: what data we collect, how we use it, and your rights.',
  alternates: {
    canonical: 'https://bleukei.com/privacy-policy',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
