import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter, Caveat } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-caveat',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vcelarstvo-gono.sk';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Včelárstvo Jozef Goňo | Tradičný med z podhoria Tribeča',
    template: '%s | Včelárstvo Jozef Goňo',
  },
  description:
    'Ručne zbieraný prírodný med z čistého prostredia Tribečských vrchov. Kvetový, lesný a agátový med z Velčíc. Od roku 2011.',
  keywords: [
    'včelárstvo',
    'med',
    'Jozef Goňo',
    'Tribeč',
    'Velčice',
    'prírodný med',
    'kvetový med',
    'lesný med',
    'agátový med',
    'Slovensko',
  ],
  authors: [{ name: 'Včelárstvo Jozef Goňo', url: siteUrl }],
  creator: 'Včelárstvo Jozef Goňo',
  publisher: 'Včelárstvo Jozef Goňo',
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'sk_SK',
    url: siteUrl,
    siteName: 'Včelárstvo Jozef Goňo',
    title: 'Včelárstvo Jozef Goňo | Tradičný med z podhoria Tribeča',
    description:
      'Ručne zbieraný prírodný med z Tribečských vrchov. Kvetový, lesný a agátový med. Velčice, Slovensko.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Včelárstvo Jozef Goňo - Tekuté zlato z podhoria Tribeča',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Včelárstvo Jozef Goňo | Tradičný med z Tribeča',
    description: 'Ručne zbieraný prírodný med z Velčíc. Od roku 2011.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'food',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFDF5',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Včelárstvo Jozef Goňo',
  description:
    'Ručne zbieraný prírodný med z Tribečských vrchov. Kvetový, lesný a agátový med z Velčíc. Od roku 2011.',
  url: siteUrl,
  telephone: '+421917457290',
  email: 'abbex@abbex.sk',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Velčice 442',
    addressLocality: 'Velčice',
    postalCode: '951 71',
    addressCountry: 'SK',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:00',
    closes: '18:00',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={`${playfair.variable} ${inter.variable} ${caveat.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
