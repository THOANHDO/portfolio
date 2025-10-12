import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { DefaultSeo } from 'next-seo';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://it-comtor-portfolio.example.com'),
  title: {
    default: 'Bridging Language & Technology | IT Comtor Portfolio',
    template: '%s | IT Comtor Portfolio'
  },
  description:
    'Professional IT Comtor & Translator (JP–VN–EN) specializing in system development communication, bilingual documentation, and agile workflows.',
  keywords: [
    'IT Comtor',
    'Translator',
    'Japanese Vietnamese English',
    'System Development',
    'Agile Communication',
    'Bilingual Documentation'
  ],
  authors: [{ name: 'Nguyen Thi Bich Ngoc' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://it-comtor-portfolio.example.com',
    title: 'Bridging Language & Technology | IT Comtor Portfolio',
    description:
      'Showcasing multilingual IT communication, translation case studies, and workflow expertise for Japanese-Vietnamese-English projects.',
    siteName: 'IT Comtor Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@itcomtor',
    title: 'Bridging Language & Technology | IT Comtor Portfolio',
    description:
      'Bilingual IT communicator delivering clarity across Japanese, Vietnamese, and English product teams.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <DefaultSeo
          title="Bridging Language & Technology"
          description="IT Comtor & Translator (JP–VN–EN) specialized in system development & agile communication"
          openGraph={{
            url: 'https://it-comtor-portfolio.example.com',
            title: 'Bridging Language & Technology | IT Comtor Portfolio',
            description:
              'IT Comtor & Translator (JP–VN–EN) specialized in system development & agile communication',
            images: [
              {
                url: 'https://images.unsplash.it/seo-placeholder.jpg',
                width: 1200,
                height: 630,
                alt: 'IT Comtor Portfolio Cover'
              }
            ]
          }}
          canonical="https://it-comtor-portfolio.example.com"
          additionalMetaTags={[
            {
              name: 'google-site-verification',
              content: 'it-comtor-portfolio-verification'
            }
          ]}
        />
      </head>
      <body className={`${jakarta.className} bg-gradient-to-b from-midnight via-[#101830] to-[#0a0f1c] min-h-screen`}>{children}</body>
    </html>
  );
}
