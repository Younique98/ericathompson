import { Inter } from 'next/font/google'
import ClientLayout from '@/components/layout/ClientLayout'
import { JsonLd } from '@/components/JsonLd'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const SITE_URL = 'https://ericathompson.io'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Erica Thompson | Fractional CTO and Technical Educator',
    template: '%s | Erica Thompson',
  },
  description:
    'Fractional CTO. Code audits, architecture, security, and accessibility for early-stage teams. 12+ years engineering. 500+ engineers trained. Creator of The Imposter Engineer.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Erica Thompson',
    title: 'Erica Thompson | Fractional CTO and Technical Educator',
    description:
      'Fractional CTO. Code audits, architecture, security, and accessibility for early-stage teams. 12+ years engineering. 500+ engineers trained.',
    images: [
      {
        url: '/images/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Erica Thompson, Fractional CTO and Technical Educator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Erica Thompson | Fractional CTO and Technical Educator',
    description:
      'Fractional CTO. Code audits, architecture, security, and accessibility for early-stage teams. 12+ years engineering. 500+ engineers trained.',
    images: ['/images/og-cover.jpg'],
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Erica Thompson',
  jobTitle: 'Fractional CTO',
  description:
    'Fractional CTO and technical educator. Self-taught, staff-level engineer running technical audits, fractional CTO advisory, and team training.',
  url: SITE_URL,
  image: `${SITE_URL}/images/erica-thompson-portrait.jpg`,
  sameAs: [
    'https://github.com/Younique98',
    'https://www.linkedin.com/in/ericathompsonsmiles/',
    'https://x.com/younique98',
    'https://www.youtube.com/@TheImposterEngineer',
  ],
  knowsAbout: [
    'Software Engineering',
    'Technical Audits',
    'Fractional CTO Advisory',
    'Web Accessibility',
    'React',
    'Next.js',
    'Engineering Leadership',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
          <JsonLd data={personJsonLd} />
          <ClientLayout>
            {children}
          </ClientLayout>
      </body>
    </html>
  )
}
