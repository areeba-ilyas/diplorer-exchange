import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fixed Float - Instant Cryptocurrency Exchange',
  description: 'Fast, secure, and reliable cryptocurrency exchange platform with 150+ supported assets',
  keywords: 'crypto exchange, bitcoin, ethereum, cryptocurrency, trading',
  authors: [{ name: 'Fixed Float' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <div className="min-h-screen bg-background text-foreground">
          {children}
        </div>
      </body>
    </html>
  )
}