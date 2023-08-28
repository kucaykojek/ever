import type { Metadata } from 'next'

import Header from '@/components/Header/Header'
import { fontSans } from '@/libs/fonts'
import '@/styles/globals.scss'

export const metadata: Metadata = {
  title: 'Evermos Catalog | by Asep Fajar Nugraha',
  icons: '/favicon.ico',
  manifest: '/site.webmanifest'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={fontSans.className}>
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
