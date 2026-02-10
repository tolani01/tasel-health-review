import type { Metadata } from 'next'
import Script from 'next/script'
import { InsuranceHero } from '@/components/sections/insurance-hero'
import { InsuranceOverview } from '@/components/sections/insurance-overview'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'

export const metadata: Metadata = {
  title: 'Insurance & Coverage | Oklahoma City Mental Health | Tasel Health',
  description: 'Tasel Health in Oklahoma City accepts most commercial and government plans and offers affordable self-pay rates. Verify your coverage today. San Antonio coming soon.',
  keywords: [
    'mental health insurance Oklahoma City',
    'insurance coverage OKC',
    'UnitedHealthcare',
    'Blue Cross Blue Shield',
    'Aetna',
    'Cigna',
    'Humana',
    'Medicare',
    'Medicaid',
    'mental health insurance',
    'TMS therapy insurance',
    'psychiatry insurance',
    'counseling insurance'
  ],
  openGraph: {
    title: 'Insurance & Coverage in Oklahoma City | Tasel Health',
    description: 'We accept most major health insurance plans to make mental health care accessible and affordable in OKC.',
    images: ['/images/tasel_health_logo.png'],
  },
}

export default function InsurancePage() {
  return (
    <div className="min-h-screen">
      {/* FAQ schema for common insurance questions */}
      <Script id="faq-insurance-schema" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Do you accept Medicare and Medicaid?",
                acceptedAnswer: { "@type": "Answer", text: "Yes, we accept Medicare and Medicaid along with most commercial plans." }
              },
              {
                "@type": "Question",
                name: "Can you verify my coverage?",
                acceptedAnswer: { "@type": "Answer", text: "Yes. Call Oklahoma City at (405) 934-1681 or San Antonio at (210) 202-2341, or email info@taselhealth.com and our team will verify benefits." }
              }
            ]
          })
        }}
      />
      <InsuranceHero />
      <InsuranceOverview />
      <StillHaveQuestions />
    </div>
  )
}
