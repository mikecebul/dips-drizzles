import type { Metadata } from 'next'

import { Montserrat, Quicksand, WindSong } from 'next/font/google'
import type { ReactNode } from 'react'
import { MarketingShell } from '@/components/marketing/marketing-pages'
import { createMarketingMetadata } from '@/lib/marketing-metadata'
import { websiteContent } from '@/lib/website-content'
import './globals.css'
import Script from 'next/script'

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const windSong = WindSong({
  subsets: ['latin'],
  variable: '--font-script',
  weight: ['400'],
})

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      className={`${quicksand.variable} ${montserrat.variable} ${windSong.variable}`}
      data-scroll-behavior="smooth"
      lang="en"
    >
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        <Script
          defer
          data-website-id="586c09dc-5042-49ef-a3b1-f72736cae1c3"
          src="https://analytics.mikecebul.com/script.js"
          strategy="lazyOnload"
        />
      </head>
      <body>
        <MarketingShell>{children}</MarketingShell>
      </body>
    </html>
  )
}

export const metadata: Metadata = createMarketingMetadata({
  description: websiteContent.site.description,
  pathname: '/',
  title: websiteContent.site.name,
})
