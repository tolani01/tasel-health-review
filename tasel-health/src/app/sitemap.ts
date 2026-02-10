import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.taselhealth.com'
  const routes = [
    '',
    '/about',
    '/services',
    '/services/tms-therapy',
    '/services/spravato-ketamine',
    '/services/psychiatry',
    '/services/counseling',
    '/services/comprehensive-care',
    '/careers',
    '/contact',
    '/insurance',
    '/location',
    '/knowledge-hub',
    '/knowledge-hub/ketamine',
    '/knowledge-hub/ketamine-101-what-to-expect',
    '/knowledge-hub/spravato-vs-iv-ketamine',
    '/knowledge-hub/ketamine-who-is-a-candidate',
    '/knowledge-hub/ketamine-for-treatment-resistant-depression',
    '/knowledge-hub/ketamine-safety-side-effects',
    '/knowledge-hub/ketamine-and-your-other-medications',
    '/knowledge-hub/ketamine-treatment-journey'
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: p === '' ? 1 : p.startsWith('/services') || p === '/careers' ? 0.8 : 0.7,
  }))
  return routes
}
