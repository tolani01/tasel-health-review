import { Metadata } from 'next'
import Script from 'next/script'
import { ComprehensiveCareHero } from '@/components/sections/comprehensive-care-hero'
import { ClinicalApproach } from '@/components/sections/clinical-approach'
import { CareProcess } from '@/components/sections/care-process'
import { TreatmentIntegration } from '@/components/sections/treatment-integration'
import { WhyComprehensiveCare } from '@/components/sections/why-comprehensive-care'
import { ComprehensiveCareFAQ } from '@/components/sections/comprehensive-care-faq'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'

export const metadata: Metadata = {
  title: 'Comprehensive Mental Health Care in Oklahoma City | Tasel Health',
  description: 'Integrated care in OKC combining TMS therapy, psychiatry, and counseling with coordinated treatment plans. Serving Oklahoma & Texas.',
  keywords: [
    'mental health care Oklahoma City',
    'integrated treatment OKC',
    'TMS psychiatry counseling Oklahoma',
    'comprehensive mental health OK'
  ],
  openGraph: {
    title: 'Comprehensive Mental Health Care in Oklahoma City | Tasel Health',
    description: 'Research-driven, integrated mental health care for optimal outcomes in OKC.',
    type: 'website',
    images: [
      {
        url: '/images/comprehensive-care-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Comprehensive Mental Health Care',
      },
    ],
  },
}

export default function ComprehensiveCarePage() {
  return (
    <main className="min-h-screen">
      {/* Optional: FAQ schema if this page has a FAQ section */}
      <Script id="faq-comprehensive-schema" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is comprehensive care?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A coordinated approach combining multiple evidence-based treatments such as TMS therapy, medication management, and counseling."
                }
              }
            ]
          })
        }}
      />
      <ComprehensiveCareHero />
      <ClinicalApproach />
      <CareProcess />
      <TreatmentIntegration />
      <WhyComprehensiveCare />
      <ComprehensiveCareFAQ />
      <StillHaveQuestions />
    </main>
  )
}
