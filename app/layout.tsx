import type { Metadata } from 'next'
import { Pixelify_Sans, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const pixel = Pixelify_Sans({
  subsets: ['latin'],
  variable: '--font-pixel',
  weight: ['400', '500', '600', '700'],
})

const jetMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono-jet',
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'ob.Server // SAM\'s Personal Operating Terminal',
  description: 'Classified personal operating system. Decrypting archives. Access granted.',
  generator: 'v0.app',
}

export const viewport = {
  themeColor: '#050505',
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${pixel.variable} ${jetMono.variable} bg-background dark`}>
      <body className="font-sans antialiased bg-background text-foreground scanlines grain selection:bg-[#ff00cc] selection:text-black">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
