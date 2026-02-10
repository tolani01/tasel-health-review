import { HomeHero } from '@/components/sections/home-hero'
import { ServicesOverview } from '@/components/sections/services-overview'
import { ConsultationImageSection } from '@/components/sections/consultation-image'
import { ContactCTANew } from '@/components/sections/contact-cta-new'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HomeHero />
      <ConsultationImageSection />
      <ServicesOverview />
      <ContactCTANew />
    </main>
  )
}
