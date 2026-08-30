import { Inter } from 'next/font/google'
import ClientLayout from '@/components/layout/ClientLayout'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Erica Thompson | Fractional CTO and Technical Educator',
  description: 'Fractional CTO. Code audits, architecture, security, and accessibility for early-stage teams. 12+ years engineering. 500+ engineers trained. Creator of The Imposter Engineer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
          <ClientLayout>
            {children}
          </ClientLayout>
      </body>
    </html>
  )
}