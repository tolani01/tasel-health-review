import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { Header } from '@/components/navigation/header'
import { ConsultationProvider } from '@/contexts/consultation-context'
import { ConsultationWrapper } from '@/components/consultation-wrapper'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Tasel Health - Advanced TMS Therapy & Mental Health Care',
    template: '%s | Tasel Health'
  },
  description: 'Leading outpatient mental health clinic specializing in BrainsWay Deep TMS™ therapy, psychiatry, and counseling. FDA-cleared treatments for depression, anxiety, and more.',
  keywords: [
    'TMS therapy',
    'BrainsWay Deep TMS',
    'depression treatment',
    'anxiety treatment',
    'mental health clinic',
    'psychiatry',
    'counseling',
    'Oklahoma City',
    'FDA cleared',
    'non-invasive treatment'
  ],
  authors: [{ name: 'Tasel Health' }],
  creator: 'Tasel Health',
  publisher: 'Tasel Health',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://taselhealth.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://taselhealth.com',
    title: 'Tasel Health - Advanced TMS Therapy & Mental Health Care',
    description: 'Leading outpatient mental health clinic specializing in BrainsWay Deep TMS™ therapy, psychiatry, and counseling.',
    siteName: 'Tasel Health',
    images: [
      {
        url: '/images/tasel_health_logo.png',
        width: 1200,
        height: 630,
        alt: 'Tasel Health - Advanced TMS Therapy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tasel Health - Advanced TMS Therapy & Mental Health Care',
    description: 'Leading outpatient mental health clinic specializing in BrainsWay Deep TMS™ therapy.',
    images: ['/images/tasel_health_logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} light`} suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-white text-gray-900 min-h-screen`}>
        {/* Google Analytics 4 */}
        {process.env.NEXT_PUBLIC_GA_TRACKING_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        <Providers>
          <ConsultationProvider>
            <Header />
            {/* Organization / LocalBusiness Schema for SEO */}
            <Script id="org-localbusiness-schema" type="application/ld+json" strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "MedicalBusiness",
                  name: "Tasel Health",
                  url: "https://taselhealth.com",
                  telephone: "+1-405-934-1681",
                  email: "info@taselhealth.com",
                  description: "Comprehensive mental health care: BrainsWay Deep TMS therapy, psychiatry, and counseling in Oklahoma and Texas.",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "9210 S Western, Suite A-21",
                    addressLocality: "Oklahoma City",
                    addressRegion: "OK",
                    postalCode: "73139",
                    addressCountry: "US"
                  },
                  areaServed: [
                    { "@type": "State", name: "Oklahoma" },
                    { "@type": "State", name: "Texas" }
                  ]
                })
              }}
            />
            {children}
            <ConsultationWrapper />
          </ConsultationProvider>
        </Providers>
      </body>
    </html>
  )
}
