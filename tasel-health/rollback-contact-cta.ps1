# Rollback Script for Contact CTA Redesign
# This script will revert the homepage back to the original ContactCTA component

Write-Host "Rolling back Contact CTA to original design..." -ForegroundColor Yellow

# Restore original contact-cta.tsx
Copy-Item "src\components\sections\contact-cta-backup.tsx" "src\components\sections\contact-cta.tsx" -Force

# Update homepage to use original component
$pageContent = @"
import { HeroSection } from '@/components/sections/hero-section'
import { ServicesOverview } from '@/components/sections/services-overview'
import { WhyChooseUs } from '@/components/sections/why-choose-us'
import { ContactCTA } from '@/components/sections/contact-cta'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <ContactCTA />
    </main>
  )
}
"@

$pageContent | Out-File -FilePath "src\app\page.tsx" -Encoding UTF8

Write-Host "Rollback complete! Homepage now uses original ContactCTA component." -ForegroundColor Green
Write-Host "New components are still available:" -ForegroundColor Cyan
Write-Host "- ContactCTANew: src\components\sections\contact-cta-new.tsx" -ForegroundColor Cyan
Write-Host "- Location page: src\app\location\page.tsx" -ForegroundColor Cyan
Write-Host "To reapply the new design, update src\app\page.tsx to import ContactCTANew instead of ContactCTA" -ForegroundColor Cyan
