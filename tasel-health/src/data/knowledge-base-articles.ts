export interface KnowledgeArticle {
  id: string
  slug: string
  title: string
  category: 'tms' | 'medications' | 'therapy' | 'skills' | 'getting-started'
  subcategory?: string
  summary: string
  readingLevel: string
  estimatedReadTime: number
  author: string
  clinicalReviewer: string
  lastReviewed: string
  nextReviewDue: string
  tags: string[]
  relatedArticles: string[]
  seoMetadata: {
    title: string
    description: string
    keywords: string[]
  }
  featuredImage?: string
  hasFAQSchema: boolean
  hasHowToSchema: boolean
  hasDownloadable: boolean
}

export const knowledgeBaseArticles: KnowledgeArticle[] = [
  // TMS Hub Articles
  {
    id: 'tms-101',
    slug: 'tms-101-what-to-expect',
    title: 'TMS 101: What to Expect from Brain Stimulation Therapy',
    category: 'tms',
    summary: 'A complete guide to TMS therapy: how it works, who it helps, what sessions feel like, and what outcomes to expect.',
    readingLevel: '8th-10th grade',
    estimatedReadTime: 12,
    author: 'Tasel Health Clinical Team',
    clinicalReviewer: 'Board-Certified Psychiatrist',
    lastReviewed: '2025-01-15',
    nextReviewDue: '2025-07-15',
    tags: ['TMS', 'Depression', 'Treatment Overview', 'Non-invasive'],
    relatedArticles: ['tms-vs-medication', 'tms-journey-week-by-week', 'tms-depression-evidence'],
    seoMetadata: {
      title: 'TMS Therapy Explained: What to Expect | Tasel Health Oklahoma City',
      description: 'Learn about TMS (Transcranial Magnetic Stimulation) therapy: how it works, who it helps, session details, and expected outcomes. Evidence-based guide from Tasel Health.',
      keywords: ['TMS therapy', 'transcranial magnetic stimulation', 'TMS treatment Oklahoma City', 'brain stimulation therapy', 'depression treatment', 'non-invasive mental health treatment']
    },
    featuredImage: '/images/knowledge/tms-101.jpg',
    hasFAQSchema: true,
    hasHowToSchema: false,
    hasDownloadable: true
  },
  {
    id: 'tms-vs-medication',
    slug: 'tms-vs-medication',
    title: 'TMS vs. Medication: Understanding Your Treatment Options',
    category: 'tms',
    summary: 'Compare TMS therapy and psychiatric medications: how they work, benefits, considerations, and how to choose the right approach for you.',
    readingLevel: '8th-10th grade',
    estimatedReadTime: 10,
    author: 'Tasel Health Clinical Team',
    clinicalReviewer: 'Board-Certified Psychiatrist',
    lastReviewed: '2025-01-15',
    nextReviewDue: '2025-07-15',
    tags: ['TMS', 'Medications', 'Treatment Comparison', 'Decision Making'],
    relatedArticles: ['tms-101', 'antidepressants-explained', 'comprehensive-treatment-guide'],
    seoMetadata: {
      title: 'TMS vs Medication: Which Treatment is Right for You? | Tasel Health',
      description: 'Compare TMS therapy and psychiatric medications side-by-side. Understand benefits, timelines, and how to choose the best depression treatment option.',
      keywords: ['TMS vs medication', 'depression treatment options', 'TMS or antidepressants', 'mental health treatment comparison']
    },
    featuredImage: '/images/knowledge/tms-vs-medication.jpg',
    hasFAQSchema: true,
    hasHowToSchema: false,
    hasDownloadable: true
  },
  {
    id: 'tms-journey',
    slug: 'tms-journey-week-by-week',
    title: 'Your TMS Journey: Week-by-Week Guide',
    category: 'tms',
    summary: 'A detailed timeline of what to expect during your TMS treatment course, from your first session through follow-up care.',
    readingLevel: '8th-10th grade',
    estimatedReadTime: 15,
    author: 'Tasel Health Clinical Team',
    clinicalReviewer: 'Board-Certified Psychiatrist',
    lastReviewed: '2025-01-15',
    nextReviewDue: '2025-07-15',
    tags: ['TMS', 'Treatment Timeline', 'Patient Guide', 'Week by Week'],
    relatedArticles: ['tms-101', 'tms-side-effects-safety', 'tms-depression-evidence'],
    seoMetadata: {
      title: 'TMS Treatment Timeline: Week-by-Week Patient Guide | Tasel Health',
      description: 'Follow a detailed week-by-week guide to your TMS therapy journey. Know what to expect, how to prepare, and when to see results.',
      keywords: ['TMS timeline', 'TMS treatment schedule', 'TMS week by week', 'what to expect during TMS']
    },
    featuredImage: '/images/knowledge/tms-journey.jpg',
    hasFAQSchema: true,
    hasHowToSchema: true,
    hasDownloadable: true
  },
  {
    id: 'tms-depression-evidence',
    slug: 'tms-for-depression-evidence',
    title: 'TMS for Depression: What the Research Shows',
    category: 'tms',
    subcategory: 'conditions',
    summary: 'Evidence-based overview of TMS therapy for major depression: clinical trials, success rates, and who benefits most.',
    readingLevel: '8th-10th grade',
    estimatedReadTime: 11,
    author: 'Tasel Health Clinical Team',
    clinicalReviewer: 'Board-Certified Psychiatrist',
    lastReviewed: '2025-01-15',
    nextReviewDue: '2025-07-15',
    tags: ['TMS', 'Depression', 'Clinical Evidence', 'Research'],
    relatedArticles: ['tms-101', 'tms-ocd-evidence', 'antidepressants-explained'],
    seoMetadata: {
      title: 'TMS for Depression: Clinical Evidence & Success Rates | Tasel Health',
      description: 'Explore the research behind TMS therapy for depression. Learn about clinical trials, FDA approval, success rates, and patient outcomes.',
      keywords: ['TMS for depression', 'TMS success rate', 'TMS clinical trials', 'depression treatment evidence']
    },
    featuredImage: '/images/knowledge/tms-depression.jpg',
    hasFAQSchema: true,
    hasHowToSchema: false,
    hasDownloadable: false
  },
  {
    id: 'tms-ocd-evidence',
    slug: 'tms-for-ocd',
    title: 'TMS for OCD: FDA-Cleared Treatment Option',
    category: 'tms',
    subcategory: 'conditions',
    summary: 'Learn how TMS therapy helps treat obsessive-compulsive disorder: the evidence, protocol, and what to expect.',
    readingLevel: '8th-10th grade',
    estimatedReadTime: 10,
    author: 'Tasel Health Clinical Team',
    clinicalReviewer: 'Board-Certified Psychiatrist',
    lastReviewed: '2025-01-15',
    nextReviewDue: '2025-07-15',
    tags: ['TMS', 'OCD', 'Obsessive Compulsive Disorder', 'FDA Cleared'],
    relatedArticles: ['tms-101', 'tms-depression-evidence', 'medications-ocd'],
    seoMetadata: {
      title: 'TMS for OCD: How Brain Stimulation Helps Obsessive-Compulsive Disorder',
      description: 'Discover how FDA-cleared TMS therapy treats OCD. Learn about the specialized protocol, success rates, and patient experiences.',
      keywords: ['TMS for OCD', 'OCD treatment', 'obsessive compulsive disorder therapy', 'TMS BrainsWay OCD']
    },
    featuredImage: '/images/knowledge/tms-ocd.jpg',
    hasFAQSchema: true,
    hasHowToSchema: false,
    hasDownloadable: false
  },
  {
    id: 'tms-side-effects',
    slug: 'tms-side-effects-safety',
    title: 'TMS Side Effects & Safety: What You Need to Know',
    category: 'tms',
    summary: 'Comprehensive guide to TMS safety: common side effects, rare risks, who should avoid TMS, and what to report to your doctor.',
    readingLevel: '8th-10th grade',
    estimatedReadTime: 9,
    author: 'Tasel Health Clinical Team',
    clinicalReviewer: 'Board-Certified Psychiatrist',
    lastReviewed: '2025-01-15',
    nextReviewDue: '2025-07-15',
    tags: ['TMS', 'Safety', 'Side Effects', 'Monitoring'],
    relatedArticles: ['tms-101', 'tms-journey', 'medication-side-effects'],
    seoMetadata: {
      title: 'TMS Side Effects & Safety Profile: Complete Patient Guide',
      description: 'Understand TMS therapy side effects: what\'s common, what\'s rare, safety precautions, and when to contact your doctor.',
      keywords: ['TMS side effects', 'TMS safety', 'is TMS safe', 'TMS risks', 'TMS contraindications']
    },
    featuredImage: '/images/knowledge/tms-safety.jpg',
    hasFAQSchema: true,
    hasHowToSchema: false,
    hasDownloadable: true
  },

  // Medications Hub Articles
  {
    id: 'antidepressants-explained',
    slug: 'antidepressants-explained',
    title: 'Antidepressants Explained: SSRIs, SNRIs & More',
    category: 'medications',
    summary: 'Plain-language guide to antidepressant medications: how they work, different types, what to expect, and how to work with your doctor.',
    readingLevel: '8th-10th grade',
    estimatedReadTime: 14,
    author: 'Tasel Health Clinical Team',
    clinicalReviewer: 'Board-Certified Psychiatrist',
    lastReviewed: '2025-01-15',
    nextReviewDue: '2025-07-15',
    tags: ['Medications', 'Antidepressants', 'SSRIs', 'SNRIs', 'Depression'],
    relatedArticles: ['starting-medication', 'medication-side-effects', 'tms-vs-medication'],
    seoMetadata: {
      title: 'Antidepressants Explained: SSRIs, SNRIs & How They Work | Tasel Health',
      description: 'Understand antidepressant medications: types (SSRIs, SNRIs, bupropion), how they work, timeline to benefit, and what to discuss with your psychiatrist.',
      keywords: ['antidepressants', 'SSRIs explained', 'SNRIs', 'depression medication', 'how antidepressants work']
    },
    featuredImage: '/images/knowledge/antidepressants.jpg',
    hasFAQSchema: true,
    hasHowToSchema: false,
    hasDownloadable: true
  },
  {
    id: 'starting-medication',
    slug: 'starting-medication-first-weeks',
    title: 'Starting Medication: Your First 4-8 Weeks',
    category: 'medications',
    summary: 'What to expect when starting psychiatric medication: timeline, common early effects, when to call your doctor, and how to track progress.',
    readingLevel: '8th-10th grade',
    estimatedReadTime: 11,
    author: 'Tasel Health Clinical Team',
    clinicalReviewer: 'Board-Certified Psychiatrist',
    lastReviewed: '2025-01-15',
    nextReviewDue: '2025-07-15',
    tags: ['Medications', 'Getting Started', 'Timeline', 'Monitoring'],
    relatedArticles: ['antidepressants-explained', 'medication-side-effects', 'mood-stabilizers'],
    seoMetadata: {
      title: 'Starting Psychiatric Medication: Week-by-Week Guide | Tasel Health',
      description: 'Know what to expect in your first weeks on psychiatric medication: early effects, adjustment period, tracking progress, and when to reach out.',
      keywords: ['starting antidepressants', 'first week on medication', 'psychiatric medication timeline', 'medication adjustment period']
    },
    featuredImage: '/images/knowledge/starting-medication.jpg',
    hasFAQSchema: true,
    hasHowToSchema: true,
    hasDownloadable: true
  },
  {
    id: 'medication-side-effects',
    slug: 'managing-medication-side-effects',
    title: 'Managing Medication Side Effects',
    category: 'medications',
    summary: 'Practical strategies for common psychiatric medication side effects: what to try, when to call your doctor, and how to work together on solutions.',
    readingLevel: '8th-10th grade',
    estimatedReadTime: 13,
    author: 'Tasel Health Clinical Team',
    clinicalReviewer: 'Board-Certified Psychiatrist',
    lastReviewed: '2025-01-15',
    nextReviewDue: '2025-07-15',
    tags: ['Medications', 'Side Effects', 'Management', 'Solutions'],
    relatedArticles: ['antidepressants-explained', 'starting-medication', 'tms-vs-medication'],
    seoMetadata: {
      title: 'Managing Psychiatric Medication Side Effects: Solutions & Strategies',
      description: 'Handle common medication side effects with practical strategies. Learn what to try at home and when to contact your psychiatrist.',
      keywords: ['medication side effects', 'antidepressant side effects', 'SSRI side effects', 'managing medication problems']
    },
    featuredImage: '/images/knowledge/medication-side-effects.jpg',
    hasFAQSchema: true,
    hasHowToSchema: false,
    hasDownloadable: true
  },
  {
    id: 'mood-stabilizers',
    slug: 'mood-stabilizers-guide',
    title: 'Mood Stabilizers: Uses, Types & Monitoring',
    category: 'medications',
    summary: 'Essential information about mood stabilizing medications: lithium, lamotrigine, and others—how they help, required monitoring, and safety.',
    readingLevel: '8th-10th grade',
    estimatedReadTime: 12,
    author: 'Tasel Health Clinical Team',
    clinicalReviewer: 'Board-Certified Psychiatrist',
    lastReviewed: '2025-01-15',
    nextReviewDue: '2025-07-15',
    tags: ['Medications', 'Mood Stabilizers', 'Bipolar', 'Monitoring'],
    relatedArticles: ['antidepressants-explained', 'medication-monitoring', 'medication-pregnancy'],
    seoMetadata: {
      title: 'Mood Stabilizers Explained: Lithium, Lamotrigine & Monitoring',
      description: 'Learn about mood stabilizing medications: who they help, required lab monitoring, side effects to watch, and how they differ from antidepressants.',
      keywords: ['mood stabilizers', 'lithium', 'lamotrigine', 'bipolar medication', 'mood stabilizer monitoring']
    },
    featuredImage: '/images/knowledge/mood-stabilizers.jpg',
    hasFAQSchema: true,
    hasHowToSchema: false,
    hasDownloadable: true
  },
  {
    id: 'adhd-medications',
    slug: 'adhd-medications-guide',
    title: 'ADHD Medications: Stimulants & Non-Stimulant Options',
    category: 'medications',
    summary: 'Complete guide to ADHD medications for adults: how they work, monitoring requirements, safety considerations, and non-medication strategies.',
    readingLevel: '8th-10th grade',
    estimatedReadTime: 12,
    author: 'Tasel Health Clinical Team',
    clinicalReviewer: 'Board-Certified Psychiatrist',
    lastReviewed: '2025-01-15',
    nextReviewDue: '2025-07-15',
    tags: ['Medications', 'ADHD', 'Stimulants', 'Controlled Substances'],
    relatedArticles: ['controlled-substance-policy', 'medication-monitoring', 'behavioral-activation'],
    seoMetadata: {
      title: 'ADHD Medications for Adults: Stimulants vs Non-Stimulants | Tasel Health',
      description: 'Understand ADHD medication options: stimulants, non-stimulants, how they work, monitoring needs, and combining medication with behavioral strategies.',
      keywords: ['ADHD medication adults', 'stimulants for ADHD', 'non-stimulant ADHD medication', 'ADHD treatment options']
    },
    featuredImage: '/images/knowledge/adhd-medications.jpg',
    hasFAQSchema: true,
    hasHowToSchema: false,
    hasDownloadable: false
  },
  {
    id: 'sleep-medications-cbti',
    slug: 'sleep-medications-vs-cbt-i',
    title: 'Sleep Medications vs. CBT-I: Choosing the Right Approach',
    category: 'medications',
    summary: 'Compare sleep medications and Cognitive Behavioral Therapy for Insomnia: when each is appropriate, combining approaches, and long-term solutions.',
    readingLevel: '8th-10th grade',
    estimatedReadTime: 10,
    author: 'Tasel Health Clinical Team',
    clinicalReviewer: 'Board-Certified Psychiatrist',
    lastReviewed: '2025-01-15',
    nextReviewDue: '2025-07-15',
    tags: ['Medications', 'Sleep', 'Insomnia', 'CBT-I', 'Behavioral Treatment'],
    relatedArticles: ['sleep-better-guide', 'medication-side-effects', 'antidepressants-explained'],
    seoMetadata: {
      title: 'Sleep Medications vs CBT-I: Best Treatment for Insomnia',
      description: 'Compare sleep medications and behavioral therapy (CBT-I) for insomnia. Learn when each approach works best and how to improve sleep long-term.',
      keywords: ['sleep medication', 'CBT-I', 'insomnia treatment', 'sleep therapy', 'cognitive behavioral therapy insomnia']
    },
    featuredImage: '/images/knowledge/sleep-treatment.jpg',
    hasFAQSchema: true,
    hasHowToSchema: false,
    hasDownloadable: true
  },
  {
    id: 'medication-pregnancy',
    slug: 'medication-pregnancy-planning',
    title: 'Psychiatric Medications & Pregnancy: Shared Decision-Making',
    category: 'medications',
    summary: 'Evidence-based guide to psychiatric medications during pregnancy and breastfeeding: risks, benefits, and how to make informed decisions with your doctor.',
    readingLevel: '8th-10th grade',
    estimatedReadTime: 14,
    author: 'Tasel Health Clinical Team',
    clinicalReviewer: 'Board-Certified Psychiatrist',
    lastReviewed: '2025-01-15',
    nextReviewDue: '2025-07-15',
    tags: ['Medications', 'Pregnancy', 'Perinatal', 'Safety', 'Breastfeeding'],
    relatedArticles: ['antidepressants-explained', 'mood-stabilizers', 'therapy-perinatal'],
    seoMetadata: {
      title: 'Psychiatric Medications During Pregnancy: Safety & Decision Guide',
      description: 'Navigate mental health medication decisions during pregnancy and breastfeeding with evidence-based information and shared decision-making strategies.',
      keywords: ['antidepressants pregnancy', 'medication while pregnant', 'psychiatric medication breastfeeding', 'perinatal mental health medication']
    },
    featuredImage: '/images/knowledge/medication-pregnancy.jpg',
    hasFAQSchema: true,
    hasHowToSchema: false,
    hasDownloadable: true
  },

  // Therapy Hub Articles
  {
    id: 'how-therapy-works',
    slug: 'how-therapy-works',
    title: 'How Therapy Works at Tasel Health',
    category: 'therapy',
    summary: 'What to expect from counseling: intake process, setting goals, building skills, measuring progress, and what makes therapy effective.',
    readingLevel: '8th-10th grade',
    estimatedReadTime: 11,
    author: 'Tasel Health Clinical Team',
    clinicalReviewer: 'Licensed Clinical Psychologist',
    lastReviewed: '2025-01-15',
    nextReviewDue: '2025-07-15',
    tags: ['Therapy', 'Counseling', 'Getting Started', 'Process'],
    relatedArticles: ['getting-started-tasel', 'cbt-explained', 'therapy-approaches-comparison'],
    seoMetadata: {
      title: 'How Therapy Works: What to Expect from Counseling | Tasel Health',
      description: 'Understand the therapy process: first session, goal-setting, skill-building, progress tracking, and what makes counseling effective.',
      keywords: ['how therapy works', 'what to expect in therapy', 'counseling process', 'therapy sessions Oklahoma City']
    },
    featuredImage: '/images/knowledge/how-therapy-works.jpg',
    hasFAQSchema: true,
    hasHowToSchema: false,
    hasDownloadable: true
  },
  {
    id: 'cbt-explained',
    slug: 'cbt-cognitive-behavioral-therapy',
    title: 'CBT Explained: Tools for Changing Thoughts & Behaviors',
    category: 'therapy',
    summary: 'Clear guide to Cognitive Behavioral Therapy: what it is, how it works, example techniques, homework, and who benefits most.',
    readingLevel: '8th-10th grade',
    estimatedReadTime: 13,
    author: 'Tasel Health Clinical Team',
    clinicalReviewer: 'Licensed Clinical Psychologist',
    lastReviewed: '2025-01-15',
    nextReviewDue: '2025-07-15',
    tags: ['Therapy', 'CBT', 'Cognitive Behavioral Therapy', 'Techniques'],
    relatedArticles: ['how-therapy-works', 'dbt-skills-explained', 'thought-records'],
    seoMetadata: {
      title: 'Cognitive Behavioral Therapy (CBT) Explained | Tasel Health',
      description: 'Learn how CBT works: techniques, homework, thought-feeling-behavior connection, and what to expect in CBT therapy sessions.',
      keywords: ['CBT therapy', 'cognitive behavioral therapy', 'CBT techniques', 'how CBT works', 'CBT for depression anxiety']
    },
    featuredImage: '/images/knowledge/cbt-explained.jpg',
    hasFAQSchema: true,
    hasHowToSchema: false,
    hasDownloadable: true
  },
  {
    id: 'dbt-skills',
    slug: 'dbt-skills-emotion-regulation',
    title: 'DBT Skills: Emotion Regulation & Distress Tolerance',
    category: 'therapy',
    summary: 'Learn Dialectical Behavior Therapy skills: managing intense emotions, tolerating distress, and improving relationships with practical tools.',
    readingLevel: '8th-10th grade',
    estimatedReadTime: 12,
    author: 'Tasel Health Clinical Team',
    clinicalReviewer: 'Licensed Clinical Psychologist',
    lastReviewed: '2025-01-15',
    nextReviewDue: '2025-07-15',
    tags: ['Therapy', 'DBT', 'Skills', 'Emotion Regulation', 'Distress Tolerance'],
    relatedArticles: ['cbt-explained', 'act-values-based', 'breathing-techniques'],
    seoMetadata: {
      title: 'DBT Skills: Emotion Regulation & Distress Tolerance Strategies',
      description: 'Master DBT (Dialectical Behavior Therapy) skills for managing emotions, tolerating distress, and improving interpersonal relationships.',
      keywords: ['DBT skills', 'dialectical behavior therapy', 'emotion regulation', 'distress tolerance', 'DBT techniques']
    },
    featuredImage: '/images/knowledge/dbt-skills.jpg',
    hasFAQSchema: true,
    hasHowToSchema: true,
    hasDownloadable: true
  },
  {
    id: 'act-values',
    slug: 'act-values-based-living',
    title: 'ACT: Values-Based Living & Psychological Flexibility',
    category: 'therapy',
    summary: 'Acceptance and Commitment Therapy explained: living by your values, mindfulness, defusion techniques, and building meaningful action.',
    readingLevel: '8th-10th grade',
    estimatedReadTime: 11,
    author: 'Tasel Health Clinical Team',
    clinicalReviewer: 'Licensed Clinical Psychologist',
    lastReviewed: '2025-01-15',
    nextReviewDue: '2025-07-15',
    tags: ['Therapy', 'ACT', 'Acceptance Commitment Therapy', 'Values', 'Mindfulness'],
    relatedArticles: ['cbt-explained', 'dbt-skills', 'values-goals-worksheet'],
    seoMetadata: {
      title: 'Acceptance and Commitment Therapy (ACT): Values-Based Living',
      description: 'Discover ACT therapy: accepting difficult thoughts, clarifying values, mindful action, and building psychological flexibility.',
      keywords: ['ACT therapy', 'acceptance commitment therapy', 'values-based living', 'psychological flexibility', 'mindfulness therapy']
    },
    featuredImage: '/images/knowledge/act-therapy.jpg',
    hasFAQSchema: true,
    hasHowToSchema: false,
    hasDownloadable: true
  },
  {
    id: 'trauma-therapy',
    slug: 'trauma-therapy-approaches',
    title: 'Trauma Therapy: Evidence-Based Approaches & Safety',
    category: 'therapy',
    summary: 'Understand trauma-focused therapy: EMDR, prolonged exposure, CPT, and how therapists create safety while processing difficult experiences.',
    readingLevel: '8th-10th grade',
    estimatedReadTime: 13,
    author: 'Tasel Health Clinical Team',
    clinicalReviewer: 'Licensed Clinical Psychologist',
    lastReviewed: '2025-01-15',
    nextReviewDue: '2025-07-15',
    tags: ['Therapy', 'Trauma', 'PTSD', 'EMDR', 'Safety'],
    relatedArticles: ['how-therapy-works', 'dbt-skills', 'grounding-techniques'],
    seoMetadata: {
      title: 'Trauma Therapy: EMDR, CPT & Evidence-Based PTSD Treatment',
      description: 'Learn about trauma-focused therapy approaches: EMDR, prolonged exposure, CPT. How trauma therapy works and what makes it safe.',
      keywords: ['trauma therapy', 'PTSD treatment', 'EMDR therapy', 'trauma counseling', 'processing trauma']
    },
    featuredImage: '/images/knowledge/trauma-therapy.jpg',
    hasFAQSchema: true,
    hasHowToSchema: false,
    hasDownloadable: false
  },
  {
    id: 'couples-family-therapy',
    slug: 'couples-family-therapy',
    title: 'Couples & Family Therapy: What to Expect',
    category: 'therapy',
    summary: 'Guide to relationship counseling: how it differs from individual therapy, setting shared goals, improving communication, and when it helps.',
    readingLevel: '8th-10th grade',
    estimatedReadTime: 10,
    author: 'Tasel Health Clinical Team',
    clinicalReviewer: 'Licensed Marriage & Family Therapist',
    lastReviewed: '2025-01-15',
    nextReviewDue: '2025-07-15',
    tags: ['Therapy', 'Couples Therapy', 'Family Therapy', 'Relationships'],
    relatedArticles: ['how-therapy-works', 'communication-skills', 'getting-started-tasel'],
    seoMetadata: {
      title: 'Couples & Family Therapy: Improving Relationships | Tasel Health',
      description: 'Learn what to expect from couples and family therapy: session format, communication skills, conflict resolution, and when relationship counseling helps.',
      keywords: ['couples therapy', 'family therapy', 'relationship counseling', 'marriage counseling Oklahoma City', 'family counseling']
    },
    featuredImage: '/images/knowledge/couples-family-therapy.jpg',
    hasFAQSchema: true,
    hasHowToSchema: false,
    hasDownloadable: false
  },

  // Skills & Self-Help Hub Articles
  {
    id: 'breathing-techniques',
    slug: '5-minute-calm-breathing-grounding',
    title: '5-Minute Calm: Breathing & Grounding Techniques',
    category: 'skills',
    summary: 'Quick, proven techniques to calm anxiety and stress: box breathing, 5-4-3-2-1 grounding, and other tools you can use anywhere.',
    readingLevel: '8th-10th grade',
    estimatedReadTime: 8,
    author: 'Tasel Health Clinical Team',
    clinicalReviewer: 'Licensed Clinical Psychologist',
    lastReviewed: '2025-01-15',
    nextReviewDue: '2025-07-15',
    tags: ['Skills', 'Breathing', 'Grounding', 'Anxiety', 'Self-Help'],
    relatedArticles: ['dbt-skills', 'exposure-ladders', 'sleep-better-guide'],
    seoMetadata: {
      title: '5-Minute Calm: Breathing & Grounding Techniques for Anxiety',
      description: 'Learn quick anxiety relief techniques: box breathing, 5-4-3-2-1 grounding, and other evidence-based tools to calm your nervous system.',
      keywords: ['breathing techniques anxiety', 'grounding techniques', 'box breathing', '5-4-3-2-1 technique', 'calm anxiety fast']
    },
    featuredImage: '/images/knowledge/breathing-techniques.jpg',
    hasFAQSchema: true,
    hasHowToSchema: true,
    hasDownloadable: true
  },
  {
    id: 'sleep-better-guide',
    slug: 'sleep-better-cbt-i-guide',
    title: 'Sleep Better: CBT-I Starter Guide',
    category: 'skills',
    summary: 'Evidence-based strategies to improve sleep: sleep hygiene, stimulus control, sleep restriction, and when to seek professional help.',
    readingLevel: '8th-10th grade',
    estimatedReadTime: 12,
    author: 'Tasel Health Clinical Team',
    clinicalReviewer: 'Licensed Clinical Psychologist',
    lastReviewed: '2025-01-15',
    nextReviewDue: '2025-07-15',
    tags: ['Skills', 'Sleep', 'Insomnia', 'CBT-I', 'Self-Help'],
    relatedArticles: ['sleep-medications-cbti', 'behavioral-activation', 'breathing-techniques'],
    seoMetadata: {
      title: 'Sleep Better: CBT-I Guide for Insomnia | Evidence-Based Strategies',
      description: 'Improve sleep with Cognitive Behavioral Therapy for Insomnia (CBT-I): sleep hygiene, stimulus control, sleep restriction, and proven techniques.',
      keywords: ['CBT-I', 'how to sleep better', 'insomnia help', 'cognitive behavioral therapy insomnia', 'sleep hygiene']
    },
    featuredImage: '/images/knowledge/sleep-guide.jpg',
    hasFAQSchema: true,
    hasHowToSchema: true,
    hasDownloadable: true
  },
  {
    id: 'behavioral-activation',
    slug: 'behavioral-activation-depression',
    title: 'Behavioral Activation: Moving Through Depression',
    category: 'skills',
    summary: 'Learn behavioral activation: how to break the cycle of depression by scheduling activities, tracking mood, and building momentum.',
    readingLevel: '8th-10th grade',
    estimatedReadTime: 10,
    author: 'Tasel Health Clinical Team',
    clinicalReviewer: 'Licensed Clinical Psychologist',
    lastReviewed: '2025-01-15',
    nextReviewDue: '2025-07-15',
    tags: ['Skills', 'Depression', 'Behavioral Activation', 'Activity Scheduling'],
    relatedArticles: ['cbt-explained', 'antidepressants-explained', 'values-goals-worksheet'],
    seoMetadata: {
      title: 'Behavioral Activation for Depression: Activity Scheduling Guide',
      description: 'Break the depression cycle with behavioral activation: plan activities, track mood, build momentum, and reconnect with what matters.',
      keywords: ['behavioral activation', 'depression activity scheduling', 'overcoming depression', 'mood activity relationship']
    },
    featuredImage: '/images/knowledge/behavioral-activation.jpg',
    hasFAQSchema: true,
    hasHowToSchema: true,
    hasDownloadable: true
  },
  {
    id: 'exposure-ladders',
    slug: 'exposure-ladders-anxiety',
    title: 'Exposure Ladders: Facing Anxiety Step-by-Step',
    category: 'skills',
    summary: 'Create and use exposure ladders to gradually face fears: building your hierarchy, practicing exposures, and tracking progress.',
    readingLevel: '8th-10th grade',
    estimatedReadTime: 11,
    author: 'Tasel Health Clinical Team',
    clinicalReviewer: 'Licensed Clinical Psychologist',
    lastReviewed: '2025-01-15',
    nextReviewDue: '2025-07-15',
    tags: ['Skills', 'Anxiety', 'Exposure Therapy', 'OCD', 'Phobias'],
    relatedArticles: ['breathing-techniques', 'cbt-explained', 'tms-ocd-evidence'],
    seoMetadata: {
      title: 'Exposure Therapy: Build an Exposure Ladder for Anxiety & OCD',
      description: 'Learn to create exposure ladders: rank fears, practice gradual exposure, track habituation, and face anxiety systematically.',
      keywords: ['exposure therapy', 'exposure ladder', 'anxiety hierarchy', 'facing fears', 'OCD exposure']
    },
    featuredImage: '/images/knowledge/exposure-ladders.jpg',
    hasFAQSchema: true,
    hasHowToSchema: true,
    hasDownloadable: true
  },

  // Getting Started Articles
  {
    id: 'getting-started-tasel',
    slug: 'getting-started-tasel-health',
    title: 'Getting Started at Tasel Health: What to Expect',
    category: 'getting-started',
    summary: 'Complete guide to your first visit: what to bring, intake process, insurance, creating your treatment plan, and next steps.',
    readingLevel: '8th-10th grade',
    estimatedReadTime: 10,
    author: 'Tasel Health Clinical Team',
    clinicalReviewer: 'Clinical Operations Director',
    lastReviewed: '2025-01-15',
    nextReviewDue: '2025-07-15',
    tags: ['Getting Started', 'New Patients', 'Intake', 'Insurance'],
    relatedArticles: ['comprehensive-treatment-guide', 'how-therapy-works', 'insurance-guide'],
    seoMetadata: {
      title: 'Getting Started at Tasel Health: New Patient Guide | Oklahoma City',
      description: 'Your complete guide to starting mental health treatment at Tasel Health: first visit, intake process, insurance, and creating your care plan.',
      keywords: ['Tasel Health new patient', 'mental health intake', 'first psychiatry appointment', 'getting started mental health treatment Oklahoma City']
    },
    featuredImage: '/images/knowledge/getting-started.jpg',
    hasFAQSchema: true,
    hasHowToSchema: false,
    hasDownloadable: true
  },
  {
    id: 'comprehensive-treatment-guide',
    slug: 'comprehensive-treatment-options-guide',
    title: 'Understanding Your Treatment Options: A Comparison Guide',
    category: 'getting-started',
    summary: 'Compare TMS, medication, and therapy: how each works, who they help, timelines, and how comprehensive care combines approaches.',
    readingLevel: '8th-10th grade',
    estimatedReadTime: 15,
    author: 'Tasel Health Clinical Team',
    clinicalReviewer: 'Board-Certified Psychiatrist',
    lastReviewed: '2025-01-15',
    nextReviewDue: '2025-07-15',
    tags: ['Getting Started', 'Treatment Comparison', 'TMS', 'Medications', 'Therapy'],
    relatedArticles: ['getting-started-tasel', 'tms-vs-medication', 'how-therapy-works'],
    seoMetadata: {
      title: 'Mental Health Treatment Options: TMS, Medication & Therapy Compared',
      description: 'Compare mental health treatment options: TMS therapy, psychiatric medications, and counseling. Understand benefits, timelines, and comprehensive care.',
      keywords: ['mental health treatment options', 'TMS vs medication vs therapy', 'depression treatment comparison', 'comprehensive mental health care']
    },
    featuredImage: '/images/knowledge/treatment-comparison.jpg',
    hasFAQSchema: true,
    hasHowToSchema: false,
    hasDownloadable: true
  }
]

// Helper functions
export function getArticlesByCategory(category: KnowledgeArticle['category']): KnowledgeArticle[] {
  return knowledgeBaseArticles.filter(article => article.category === category)
}

export function getArticleBySlug(slug: string): KnowledgeArticle | undefined {
  return knowledgeBaseArticles.find(article => article.slug === slug)
}

export function getRelatedArticles(articleId: string, limit: number = 3): KnowledgeArticle[] {
  const article = knowledgeBaseArticles.find(a => a.id === articleId)
  if (!article) return []
  
  return article.relatedArticles
    .map(id => knowledgeBaseArticles.find(a => a.id === id))
    .filter((a): a is KnowledgeArticle => a !== undefined)
    .slice(0, limit)
}

export function getFeaturedArticles(limit: number = 6): KnowledgeArticle[] {
  // Return key articles from each category
  const featured = [
    'tms-101',
    'antidepressants-explained',
    'how-therapy-works',
    'breathing-techniques',
    'getting-started-tasel',
    'comprehensive-treatment-guide'
  ]
  
  return featured
    .map(id => knowledgeBaseArticles.find(a => a.id === id))
    .filter((a): a is KnowledgeArticle => a !== undefined)
    .slice(0, limit)
}

export function searchArticles(query: string): KnowledgeArticle[] {
  const lowerQuery = query.toLowerCase()
  return knowledgeBaseArticles.filter(article =>
    article.title.toLowerCase().includes(lowerQuery) ||
    article.summary.toLowerCase().includes(lowerQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  )
}
