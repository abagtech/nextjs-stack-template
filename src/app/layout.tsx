import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Next.js Template',
  description: 'A Next.js template with TypeScript, Tailwind CSS, and more',
}

const EnvIndicator = () => (
  <div className="z-50 fixed bottom-3 right-3 p-3 text-xs bg-destructive text-destructive-foreground rounded">
    env: {process.env.VERCEL_ENV || 'local'}
  </div>
)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        {process.env.VERCEL_ENV !== 'production' && <EnvIndicator />}
      </body>
    </html>
  )
}
