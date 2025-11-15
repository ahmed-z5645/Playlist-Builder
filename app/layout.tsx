import type { Metadata } from 'next'
import { Jersey_20 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _jersey20 = Jersey_20({ weight: '400', subsets: ["latin"], });
//const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'My Playlist - Create & Manage Your Music',
  description: 'Easily add, view, and manage your music playlist in one beautiful app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={_jersey20.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
