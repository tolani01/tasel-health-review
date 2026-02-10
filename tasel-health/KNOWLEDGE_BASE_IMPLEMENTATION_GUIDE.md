# Knowledge Base Implementation Guide
## Tasel Health Mental Health Education Hub

This guide provides detailed templates, content outlines, and implementation instructions for creating the remaining 24 articles in the Tasel Health Knowledge Hub.

---

## 📊 Status Overview

### ✅ Completed (5 articles)
1. **TMS 101: What to Expect** - LIVE at `/knowledge-hub/tms-101-what-to-expect`
2. Infrastructure components (ArticleLayout, CrisisBanner, Knowledge Hub Hero)
3. Article registry and metadata system

### 🔨 To Be Built (20 articles)

#### TMS Hub (5 remaining)
- TMS vs. Medication
- Week-by-Week TMS Journey
- TMS for Depression: Evidence
- TMS for OCD
- TMS Side Effects & Safety

#### Medications Hub (7 articles)
- Antidepressants Explained
- Starting Medication: First 4-8 Weeks
- Managing Medication Side Effects
- Mood Stabilizers Guide
- ADHD Medications Guide
- Sleep Medications vs. CBT-I
- Medication & Pregnancy

#### Therapy Hub (6 articles)
- How Therapy Works at Tasel Health
- CBT Explained
- DBT Skills
- ACT: Values-Based Living
- Trauma Therapy Approaches
- Couples & Family Therapy

#### Skills & Self-Help Hub (4 articles)
- 5-Minute Calm: Breathing Techniques
- Sleep Better: CBT-I Guide
- Behavioral Activation for Depression
- Exposure Ladders for Anxiety

#### Getting Started (1 article)
- Getting Started at Tasel Health
- (Comprehensive Treatment Options Guide - to be added)

---

## 🎯 Article Template Structure

Every article should follow this structure:

**IMPORTANT DESIGN NOTES:**
- ✅ Crisis resources are at BOTTOM of articles (not top) - non-obstructive
- ✅ Article layout uses `pt-32` for proper header clearance
- ✅ Header navigation remains accessible throughout reading
- ✅ All articles use ArticleLayout component for consistency

```tsx
import { Metadata } from 'next'
import { ArticleLayout } from '@/components/knowledge/article-layout'
import { Card } from '@/components/ui/card'
import { [Relevant Icons] } from 'lucide-react'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '[Article Title] | Tasel Health [City]',
  description: '[140-160 char summary]',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  openGraph: {
    title: '[Article Title]',
    description: '[Summary]',
    type: 'article',
  },
}

export default function [ArticleName]Page() {
  // Key takeaways (3-5 bullets)
  const keyTakeaways = [...]

  // FAQ array (8-12 questions)
  const faqs = [...]

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <ArticleLayout
        title="[Full Title]"
        summary="[1-2 sentence summary]"
        estimatedReadTime={[number]}
        lastReviewed="January 15, 2025"
        author="Tasel Health Clinical Team"
        clinicalReviewer="[Credential]"
        tags={['tag1', 'tag2', 'tag3']}
      >
        {/* Key Takeaways Card */}
        <Card className="p-6 bg-teal-50 border-teal-200 mb-8">
          <h2>Key Takeaways</h2>
          <ul>{keyTakeaways}</ul>
        </Card>

        {/* Main Content Sections */}
        <section>
          <h2>[Section Heading]</h2>
          <p>[Content]</p>
        </section>

        {/* Safety/Warning Box (if relevant) */}
        <Card className="p-6 bg-[red/amber]-50 border-[red/amber]-200 mb-8">
          [Safety information - in-article warnings only]
          [Note: Crisis resources are in ArticleLayout footer automatically]
        </Card>

        {/* FAQs */}
        <section>
          <h2>Frequently Asked Questions</h2>
          {faqs.map(faq => <div>[FAQ]</div>)}
        </section>

        {/* References */}
        <section className="text-sm text-gray-600">
          <h2>Plain-Language References</h2>
          <ul>[Citations]</ul>
        </section>

        {/* Related Articles */}
        <section>
          <h2>Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            [Related article cards]
          </div>
        </section>
      </ArticleLayout>
      
      <StillHaveQuestions />
    </>
  )
}
```

---

## 📝 Detailed Article Outlines

### TMS Hub Articles

#### 2. TMS vs. Medication: Understanding Your Options
**Word Count:** 1,400-1,600  
**Reading Level:** 8th-10th grade  
**Clinical Reviewer:** Board-Certified Psychiatrist

**Key Sections:**
1. **Introduction** - Why compare? Both are evidence-based options
2. **Side-by-Side Comparison Table**
   - Mechanism of action
   - Time to benefit
   - Session/dosing schedule
   - Side effects
   - Insurance coverage
   - Cost considerations
3. **How Medications Work** - Brief overview of SSRIs, SNRIs, etc.
4. **How TMS Works** - Brief overview (link to TMS 101)
5. **Who Each Approach Helps Most**
   - Medication advantages
   - TMS advantages
   - When to consider both (comprehensive care)
6. **Timeline Comparison** - Week-by-week visual
7. **Making the Decision** - Questions to ask your doctor
8. **Combining Approaches** - Why TMS + medication can work well together

**10 FAQs:**
- Can I do TMS while on medication?
- Is one better than the other?
- What if I've failed medications—will TMS work?
- Can I switch from medication to TMS?
- How do costs compare?
- Which works faster?
- Can I try TMS first without medications?
- What if TMS doesn't work—can I still try medication?
- Do most people choose medication or TMS?
- How do I know which is right for me?

**Key Takeaways:**
- Both are FDA-cleared, evidence-based treatments for depression
- Medications work systemically; TMS targets specific brain regions
- Timeline: Medications 4-8 weeks; TMS 4-6 weeks of daily sessions
- Can be used together for comprehensive care
- Choice depends on your preferences, history, and clinical picture

**Downloadable:** Treatment Comparison Checklist (PDF)

---

#### 3. Your TMS Journey: Week-by-Week Guide
**Word Count:** 1,600-1,800  
**Reading Level:** 8th-10th grade  
**Clinical Reviewer:** Board-Certified Psychiatrist

**Key Sections:**
1. **Introduction** - What to expect over the full treatment course
2. **Before You Start** - Preparation checklist
3. **Week 1: Getting Adjusted**
   - First session experience
   - Common reactions
   - Tips for comfort
   - What to track
4. **Week 2: Finding Your Rhythm**
   - Side effects typically lessening
   - Establishing routine
   - When some people notice first changes
5. **Weeks 3-4: Building Momentum**
   - More people reporting improvements
   - Energy, sleep, mood shifts
   - Importance of consistency
6. **Weeks 5-6: Solidifying Gains**
   - Continued improvement
   - Planning for maintenance
   - What happens after treatment ends
7. **Week-by-Week Progress Tracker** - Table/visual
8. **Tips for Success** - Practical advice throughout treatment

**How-To Schema:** "How to Prepare for and Complete a TMS Course"

**12 FAQs:**
- What should I bring to my first session?
- Can I work during treatment?
- What if I miss a session?
- When will I start feeling better?
- What if I don't notice changes?
- Can I exercise during treatment?
- Should I avoid alcohol?
- What if side effects don't go away?
- Can I drive myself to/from sessions?
- What should I track during treatment?
- Will I need maintenance sessions?
- How long do results last?

**Key Takeaways:**
- Treatment is 4-6 weeks, typically 5 days/week
- Side effects are most common in week 1, usually lessen
- Improvements often begin weeks 2-3, build through week 6
- Consistency is key—don't skip sessions
- You can maintain normal activities throughout

**Downloadable:** Daily Treatment Log & Mood Tracker

---

#### 4. TMS for Depression: What the Research Shows
**Word Count:** 1,300-1,500  
**Reading Level:** 8th-10th grade  
**Clinical Reviewer:** Board-Certified Psychiatrist

**Key Sections:**
1. **Introduction** - Overview of depression and treatment challenges
2. **FDA Clearance History** - 2008 (traditional TMS), 2013 (Deep TMS for MDD)
3. **Key Clinical Trials**
   - Pivotal studies
   - Success rates (response, remission)
   - Long-term follow-up data
4. **Who Benefits Most** - Treatment-resistant depression, medication intolerance
5. **Comparison to Other Treatments** - vs. medication, ECT, ketamine
6. **Real-World Outcomes** - Beyond clinical trials
7. **Durability of Response** - How long benefits last
8. **When TMS May Not Be Enough** - Realistic expectations

**10 FAQs:**
- What does "treatment-resistant" mean?
- How effective is TMS compared to medication?
- Will insurance cover TMS for depression?
- Can TMS cure depression?
- What if TMS doesn't work for me?
- Is Deep TMS better than traditional TMS?
- How long do TMS benefits last?
- Can I do TMS more than once?
- Does TMS work for bipolar depression?
- Is there research on TMS for other conditions?

**Key Takeaways:**
- FDA-cleared since 2013 for MDD
- ~75% response rate, ~58% remission rate in clinical trials
- Most effective for treatment-resistant depression
- Benefits can last months to years; some need maintenance
- Strong safety profile with over 20 years of research

**Downloadable:** TMS Research Summary (1-page handout)

---

#### 5. TMS for OCD: FDA-Cleared Treatment Option
**Word Count:** 1,200-1,400  
**Reading Level:** 8th-10th grade  
**Clinical Reviewer:** Board-Certified Psychiatrist

**Key Sections:**
1. **Introduction** - OCD overview and treatment challenges
2. **FDA Clearance (2018)** - BrainsWay Deep TMS for OCD
3. **How TMS Targets OCD** - Brain circuits involved (CSTC loop)
4. **OCD-Specific Protocol** - Different from depression protocol
5. **Clinical Evidence** - Success rates, symptom reduction
6. **Who It Helps** - Severity, medication failures, ERP challenges
7. **Combining with ERP** - Why behavioral therapy + TMS can be powerful
8. **What to Expect** - Timeline and outcomes for OCD

**10 FAQs:**
- How is TMS different for OCD vs. depression?
- Do I need to stop medications for TMS?
- Can TMS replace ERP (exposure therapy)?
- How long does it take to see OCD improvement?
- What if I have both depression and OCD?
- Is TMS covered by insurance for OCD?
- Can TMS help with compulsions or just obsessions?
- Do I need maintenance TMS for OCD?
- What's the success rate for TMS and OCD?
- Can TMS make OCD worse?

**Key Takeaways:**
- FDA-cleared for OCD since 2018
- Targets brain circuits involved in obsessions/compulsions
- Different coil placement and protocol than depression TMS
- Works well alongside ERP therapy
- Success rates: ~40-50% significant symptom reduction

**No Downloadable** (reference ERP resources)

---

#### 6. TMS Side Effects & Safety: What You Need to Know
**Word Count:** 1,100-1,300  
**Reading Level:** 8th-10th grade  
**Clinical Reviewer:** Board-Certified Psychiatrist

**Key Sections:**
1. **Introduction** - TMS safety overview
2. **Common Side Effects**
   - Scalp discomfort/tingling
   - Headache
   - Facial twitching
   - How to manage each
3. **Rare but Serious Risks**
   - Seizure (< 0.1%)
   - Hearing changes
   - Mania
   - What to watch for
4. **Safety Screening** - What we check before treatment
5. **Contraindications** - Who should NOT use TMS
6. **Monitoring During Treatment** - What we track
7. **When to Call Your Doctor** - Red flags
8. **Long-Term Safety** - Years of data

**10 FAQs:**
- Will TMS hurt?
- How common are side effects?
- Can TMS cause brain damage?
- Is TMS safe during pregnancy?
- Can TMS cause seizures?
- What about hearing loss?
- Can TMS make depression worse?
- Is TMS safer than medication?
- Can I do TMS if I have metal in my body?
- Are there long-term effects?

**Key Takeaways:**
- Excellent safety profile; millions of treatments delivered
- Most side effects are mild and temporary
- Seizure risk is extremely low (< 0.1%)
- Thorough safety screening before treatment
- 20+ years of research support long-term safety

**Downloadable:** Side Effects Checklist & When to Call

---

### Medications Hub Articles

#### 7. Antidepressants Explained: SSRIs, SNRIs & More
**Word Count:** 1,600-1,800  
**Reading Level:** 8th-10th grade  
**Clinical Reviewer:** Board-Certified Psychiatrist

**Key Sections:**
1. **Introduction** - How antidepressants help
2. **Types of Antidepressants**
   - SSRIs (sertraline, escitalopram, fluoxetine, etc.)
   - SNRIs (venlafaxine, duloxetine)
   - Bupropion (Wellbutrin)
   - Mirtazapine
   - Older classes (TCAs, MAOIs) - when used
3. **How They Work** - Neurotransmitters explained simply
4. **Timeline to Benefit** - Week-by-week expectations
5. **Common Side Effects** - By medication class
6. **Sexual Side Effects** - Frank discussion + solutions
7. **Choosing the Right Medication** - Factors to consider
8. **Working with Your Psychiatrist** - Questions to ask

**12 FAQs:**
- How long until antidepressants work?
- Do I have to take them forever?
- What if the first one doesn't work?
- Can I drink alcohol on antidepressants?
- Will I gain weight?
- What about sexual side effects?
- Can I stop if I feel better?
- Are antidepressants addictive?
- What's the difference between SSRIs and SNRIs?
- Can I take antidepressants while pregnant?
- Do antidepressants change your personality?
- What if I forget a dose?

**Key Takeaways:**
- Multiple medication classes; tailored to your symptoms
- Most take 4-8 weeks for full benefit
- Side effects often improve after first 1-2 weeks
- Never stop abruptly—work with your doctor to taper
- Finding the right medication may take trial and adjustment

**Downloadable:** Medication Tracker (daily log)

---

#### 8. Starting Medication: Your First 4-8 Weeks
**Word Count:** 1,300-1,500  
**Reading Level:** 8th-10th grade  
**Clinical Reviewer:** Board-Certified Psychiatrist

**Key Sections:**
1. **Introduction** - What to expect when starting
2. **Week 1-2: Adjustment Period**
   - Common early effects
   - Side effects vs. benefits timeline
   - What to track
3. **Week 3-4: Subtle Shifts**
   - When some people notice changes
   - Sleep, energy, mood patterns
4. **Week 5-8: Full Effect**
   - When to assess if medication is working
   - When to call your doctor
5. **Tracking Progress** - PHQ-9, GAD-7
6. **Managing Early Side Effects**
7. **When to Reach Out** - Red flags
8. **Working with Your Doctor** - Follow-up schedule

**How-To Schema:** "How to Start Psychiatric Medication Safely"

**10 FAQs:**
- What should I expect in the first week?
- When will I feel better?
- What if I feel worse at first?
- Should I take it in the morning or night?
- Can I take it with food?
- What if I have side effects?
- How often should I see my doctor?
- Can I adjust the dose myself?
- What if I don't notice any change?
- When should I call my doctor?

**Key Takeaways:**
- Weeks 1-2: adjustment period; side effects often peak then improve
- Weeks 3-4: some people notice subtle improvements
- Weeks 5-8: full therapeutic effect usually apparent
- Track mood, sleep, energy, side effects daily
- Stay in close contact with your prescriber

**Downloadable:** First 8 Weeks Medication Log

---

[Continue with similar detailed outlines for remaining 17 articles...]

---

## 🎨 Visual Assets to Create

For each article, consider creating:

### SVG Infographics
1. **TMS**: Brain diagram showing coil placement
2. **Medications**: Timeline infographic (4-8 week expectation)
3. **Therapy**: CBT triangle (thoughts-feelings-behaviors)
4. **Skills**: Step-by-step visual guides (breathing, exposure ladder)

### Downloadable PDFs
- Checklists
- Trackers (mood, medication, sleep)
- Worksheets (thought records, values clarification)
- Preparation guides

All PDFs can be generated as React components and exported, or created as simple printable HTML pages.

---

## 🔗 Internal Linking Strategy

Each article should link to:
- 3 related articles (bottom of page)
- Relevant service pages (/services/tms-therapy, /services/psychiatry, /services/counseling)
- Insurance page (/insurance)
- Contact/Scheduling page (/contact)
- Crisis resources (in every article)

---

## ✅ Quality Checklist

Before publishing each article:
- [ ] 1,200-1,800 words
- [ ] 8th-10th grade reading level (check with Hemingway Editor)
- [ ] 8-12 FAQs with JSON-LD schema
- [ ] Key takeaways card at top
- [ ] Independent fact-checking completed (verify all medical claims)
- [ ] Crisis resources in ArticleLayout footer (automatic)
- [ ] Proper header spacing (ArticleLayout handles with pt-32)
- [ ] Plain-language references/citations
- [ ] 3 related articles linked
- [ ] Medical disclaimer present (ArticleLayout includes)
- [ ] SEO metadata complete
- [ ] Clinical review noted
- [ ] Accessible (ARIA labels, alt text)
- [ ] Mobile-responsive
- [ ] No guarantees or hype language
- [ ] Culturally sensitive and inclusive
- [ ] Header navigation not obstructed

---

## 🚀 Publishing Workflow

1. **Draft** in Markdown or directly in TSX (use ArticleLayout component)
2. **Independent Fact-Check** - Verify all medical claims against primary sources
3. **Document Verification** - Create fact-check report (see CLINICAL_FACT_CHECK_TMS_101.md as template)
4. **Clinical Review** by MD/PMHNP/PhD - Verify accuracy and appropriateness
5. **SEO Optimization** (keywords, meta, links)
6. **QA Testing** (links, schema validation, mobile, header clearance)
7. **Publish** to production
8. **Monitor** (analytics, "Was this helpful?" feedback)
9. **Update** every 6-12 months or when guidelines change

---

## 📊 Success Metrics

Track for each article:
- Page views
- Time on page
- Scroll depth
- Click-through to related articles
- Click-through to contact/scheduling
- "Was this helpful?" ratings
- Search rankings for target keywords

---

## 🎯 Priority Order for Building

**Phase 1 (Weeks 1-2): Core Service Articles**
1. Antidepressants Explained
2. How Therapy Works
3. Getting Started at Tasel Health
4. 5-Minute Calm: Breathing Techniques

**Phase 2 (Weeks 3-4): TMS Deep Dive**
5. TMS vs. Medication
6. Week-by-Week TMS Journey
7. TMS for Depression: Evidence

**Phase 3 (Weeks 5-6): Medications Expansion**
8. Starting Medication
9. Managing Side Effects
10. Mood Stabilizers

**Phase 4 (Weeks 7-8): Therapy Modalities**
11. CBT Explained
12. DBT Skills
13. ACT Values-Based Living

**Phase 5 (Weeks 9-10): Remaining Articles**
14-25. Complete remaining articles per priority

---

## 💡 Content Generation Tips

**For AI-Assisted Writing:**
1. Provide the detailed outline above
2. Specify: "8th-10th grade reading level, warm tone, no medical jargon"
3. Include: "Add 10 FAQs with plain-language answers"
4. Require: "Cite sources; no outcome guarantees"
5. Review: Always have MD/PMHNP/PhD review for accuracy

**For Human Writing:**
1. Interview clinicians for real patient questions
2. Use actual patient language (anonymized)
3. Test readability with non-clinical staff
4. Get feedback from patient advisory board if available

---

## 📞 Contact for Questions

For questions about content, clinical accuracy, or implementation:
- **Clinical Content**: [Clinical Director]
- **Technical Implementation**: Development Team
- **SEO/Marketing**: Marketing Team

---

**Last Updated:** January 15, 2025  
**Next Review:** July 15, 2025
