/**
 * Single source of truth for Ketamine hub.
 * New Ketamine articles must be added here first; then add the page and sitemap entry.
 */

export const KETAMINE_ARTICLES_LAST_REVIEWED = 'February 2025'

export interface KetamineArticle {
  title: string
  slug: string
  description: string
  readTime: number
  featured: boolean
}

export const KETAMINE_ARTICLES: KetamineArticle[] = [
  {
    title: 'Ketamine 101: What to Expect',
    slug: 'ketamine-101-what-to-expect',
    description: 'Overview: what it is, Spravato® vs IV, session flow, who it\'s for, first-visit expectations.',
    readTime: 12,
    featured: true
  },
  {
    title: 'Spravato® vs. IV Ketamine: Understanding Your Options',
    slug: 'spravato-vs-iv-ketamine',
    description: 'Comparison: FDA status, administration, duration, monitoring, insurance, when each may be chosen.',
    readTime: 11,
    featured: true
  },
  {
    title: 'Who Is a Candidate for Ketamine Treatment?',
    slug: 'ketamine-who-is-a-candidate',
    description: 'TRD definition, suicidal ideation indication, contraindications, substance history, screening.',
    readTime: 10,
    featured: false
  },
  {
    title: 'Ketamine for Treatment-Resistant Depression: Evidence & Outcomes',
    slug: 'ketamine-for-treatment-resistant-depression',
    description: 'Research summary, response/remission, rapid onset, durability, comparison to other TRD options.',
    readTime: 12,
    featured: false
  },
  {
    title: 'Ketamine Safety, Side Effects & What to Expect During Treatment',
    slug: 'ketamine-safety-side-effects',
    description: 'Dissociation, BP, monitoring, driving restrictions, pregnancy/breastfeeding, abuse potential, REMS.',
    readTime: 11,
    featured: false
  },
  {
    title: 'Ketamine and Your Other Medications',
    slug: 'ketamine-and-your-other-medications',
    description: 'Continuing antidepressants, interactions, coordination with TMS/therapy, tapering.',
    readTime: 9,
    featured: false
  },
  {
    title: 'Your Ketamine Treatment Journey: What to Expect Over Time',
    slug: 'ketamine-treatment-journey',
    description: 'Induction, 4-week evaluation, maintenance/taper, booster sessions; narrative arc.',
    readTime: 11,
    featured: false
  }
]

export const KETAMINE_ARTICLES_TOTAL_READ_TIME = 76
