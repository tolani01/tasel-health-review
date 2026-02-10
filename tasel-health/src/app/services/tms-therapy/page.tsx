import { Metadata } from 'next'
import Script from 'next/script'
import { TMSHeroSection } from '@/components/sections/tms-hero-section'
import { TMSOverview } from '@/components/sections/tms-overview'
import { BrainsWayTechnology } from '@/components/sections/brainsway-technology'
import { TMSConditions } from '@/components/sections/tms-conditions'
import { TMSProcess } from '@/components/sections/tms-process'
import { TMSFAQ } from '@/components/sections/tms-faq'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'

export const metadata: Metadata = {
  title: 'BrainsWay Deep TMS™ Therapy in Oklahoma City | Tasel Health',
  description: 'FDA-cleared BrainsWay Deep TMS™ therapy for depression, anxiety, OCD, and more. Serving Oklahoma City (OKC); San Antonio coming soon.',
  keywords: [
    'TMS therapy Oklahoma City',
    'BrainsWay Deep TMS OKC',
    'depression treatment Oklahoma City',
    'anxiety treatment OKC',
    'TMS therapy San Antonio',
    'Oklahoma mental health clinic'
  ],
  openGraph: {
    title: 'BrainsWay Deep TMS™ Therapy in Oklahoma City | Tasel Health',
    description: 'FDA-cleared BrainsWay Deep TMS™ therapy for depression, anxiety, OCD, and more. Serving OKC; San Antonio coming soon.',
    type: 'website',
    images: [
      {
        url: '/images/tms-therapy-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'BrainsWay Deep TMS Therapy',
      },
    ],
  },
}

export default function TMSTherapyPage() {
  return (
    <main className="min-h-screen">
      {/* FAQPage schema for TMS page */}
      <Script id="faq-tms-schema" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What conditions does Deep TMS™ treat?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Deep TMS™ is FDA-cleared for major depressive disorder, OCD, and anxious depression, with ongoing research for additional conditions."
                }
              },
              {
                "@type": "Question",
                name: "How long is a TMS treatment course?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most patients complete 20–36 sessions over 4–6 weeks, with each session lasting about 20–30 minutes."
                }
              },
              {
                "@type": "Question",
                name: "Is Deep TMS™ available in Oklahoma City?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Tasel Health offers Deep TMS™ in Oklahoma City. San Antonio, Texas location is coming soon."
                }
              }
            ]
          })
        }}
      />
      <TMSHeroSection />
      <TMSOverview />
      <BrainsWayTechnology />
      <TMSConditions />
      <TMSProcess />
      <TMSFAQ />
      <StillHaveQuestions />
    </main>
  )
}
