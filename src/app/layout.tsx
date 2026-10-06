import type { Metadata, Viewport } from 'next'
import Script from 'next/script'

import { Providers } from './providers'

import './globals.css'

export const metadata: Metadata = {
  title: '夏沫花火zzz🌙 (Muska_Ami)',
  description: '这里是夏沫花火zzz🌙(Muska_Ami) 喵~',
  icons: {
    icon: 'https://blog.amaicat.work/images/avatar@round.png'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <Providers>{children}</Providers>
        <Script src="https://im.amaicat.work" strategy="afterInteractive" />
      </body>
    </html>
  )
}
