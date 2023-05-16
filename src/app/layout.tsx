import { Metadata } from 'next'
import { Inter } from 'next/font/google'

import PageHeader from '@/components/PageHeader'
import { ThemeProvider } from '@/components/provider/theme-provider'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'main page',
  description: 'this is main page',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="dark h-full flex justify-center">
      <head />
      <body className={`${inter.className} max-w-xl min-w-[18em]`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <PageHeader />
            <div className="flex-1">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
