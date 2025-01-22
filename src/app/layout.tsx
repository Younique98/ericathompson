import { Inter } from 'next/font/google'
import ClientLayout from '@/components/layout/ClientLayout'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Erica Thompson Portfolio',
  description: 'Personal portfolio and blog capturing my projects and journey as a software engineer.',
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