# Ketamine Knowledge Hub – Implementation Instructions

This document translates the approved **KETAMINE_KNOWLEDGE_HUB_PLAN.md** into step-by-step implementation instructions and checklists. Execute in order **A → B → C → D → E → F → G → H**. Do not skip steps.

**Assumptions used (no redesign):**
- New Ketamine hub uses a **separate** shared data file `src/data/knowledge-hub-ketamine-articles.ts` (plan specifies this as single source of truth for main hub + Ketamine hub landing; existing `knowledge-base-articles.ts` is not extended for Ketamine).
- Crisis callout in articles = **inline** short callout (e.g. Card with 988) inside article body; ArticleLayout already has a crisis section at bottom of every article.
- Section order on main hub: Ketamine Hub section inserted **after TMS, before Medications** (logical order; plan says “decide and keep consistent”).
- `lastReviewed` format: use **"February 2025"** (month + year) to match existing article style (e.g. TMS 101 uses "December 20, 2024"; plan says e.g. "February 2025").

---

## A. Setup and shared data

### A1. Create shared Ketamine article data file

**File to create:** `src/data/knowledge-hub-ketamine-articles.ts`

**Steps:**
1. Create the file in `src/data/`.
2. Define and export a **single array** of 7 articles. Each item must include:
   - `title: string`
   - `slug: string`
   - `description: string`
   - `readTime: number`
   - `featured: boolean`

**Exact data (from plan Section 2 table):**

| title | slug | description (short) | readTime | featured |
|-------|------|---------------------|----------|----------|
| Ketamine 101: What to Expect | ketamine-101-what-to-expect | Overview: what it is, Spravato® vs IV, session flow, who it's for, first-visit expectations. | 12 | true |
| Spravato® vs. IV Ketamine: Understanding Your Options | spravato-vs-iv-ketamine | Comparison: FDA status, administration, duration, monitoring, insurance, when each may be chosen. | 11 | true |
| Who Is a Candidate for Ketamine Treatment? | ketamine-who-is-a-candidate | TRD definition, suicidal ideation indication, contraindications, substance history, screening. | 10 | false |
| Ketamine for Treatment-Resistant Depression: Evidence & Outcomes | ketamine-for-treatment-resistant-depression | Research summary, response/remission, rapid onset, durability, comparison to other TRD options. | 12 | false |
| Ketamine Safety, Side Effects & What to Expect During Treatment | ketamine-safety-side-effects | Dissociation, BP, monitoring, driving restrictions, pregnancy/breastfeeding, abuse potential, REMS. | 11 | false |
| Ketamine and Your Other Medications | ketamine-and-your-other-medications | Continuing antidepressants, interactions, coordination with TMS/therapy, tapering. | 9 | false |
| Your Ketamine Treatment Journey: What to Expect Over Time | ketamine-treatment-journey | Induction, 4-week evaluation, maintenance/taper, booster sessions; narrative arc. | 11 | false |

3. Export a constant for **lastReviewed** used by all 7 article pages, e.g. `export const KETAMINE_ARTICLES_LAST_REVIEWED = 'February 2025'`.
4. Add a short comment at the top: *"Single source of truth for Ketamine hub. New Ketamine articles must be added here first; then add the page and sitemap entry."*
5. Optional: export `KETAMINE_ARTICLES_TOTAL_READ_TIME` = sum of the 7 `readTime` values (12+11+10+12+11+9+11 = **76**).

**Example structure (TypeScript):**
```ts
// Single source of truth for Ketamine hub. New Ketamine articles must be added here first.

export const KETAMINE_ARTICLES_LAST_REVIEWED = 'February 2025'

export interface KetamineArticle {
  title: string
  slug: string
  description: string
  readTime: number
  featured: boolean
}

export const KETAMINE_ARTICLES: KetamineArticle[] = [
  { title: 'Ketamine 101: What to Expect', slug: 'ketamine-101-what-to-expect', description: '...', readTime: 12, featured: true },
  // ... all 7
]

export const KETAMINE_ARTICLES_TOTAL_READ_TIME = 76
```

**Verification (A):**
- File exists at `src/data/knowledge-hub-ketamine-articles.ts`.
- Array has exactly 7 items; first two have `featured: true`.
- Sum of `readTime` = 76. No TypeScript/lint errors.

---

## B. UI foundation

### B1. ScrollContainer: add `violet` variant

**File:** `src/components/ui/scroll-container.tsx`

**Steps:**
1. Extend the variant type: change `'purple' | 'blue' | 'teal' | 'amber'` to include `'violet'`.
2. In `colorSchemes`, add:
   - `violet: { parchment: '...', accent: '...', wood: '...' }`
   - Use violet/rose parchment (e.g. `from-violet-50 via-fuchsia-50 to-violet-50` or similar).
   - Accent hex: e.g. `#7C3AED` (violet-600) or `#8B5CF6` (violet-500). Ensure **WCAG AA** contrast (4.5:1) for normal text on the parchment background.
   - Wood: e.g. `#6B21A8` or a brown that matches other variants (e.g. `#5B3A6F` for a purple-tinted wood).
3. Verify: no TypeScript errors; `ScrollContainer` with `variant="violet"` renders without runtime error.

**Verification (B1):**
- `variant="violet"` compiles and renders.
- In browser (or contrast checker): text on violet parchment meets WCAG AA.

---

### B2. Hero: add fifth category (Ketamine)

**File:** `src/components/sections/knowledge-hub-hero.tsx`

**Steps:**
1. Add import: `Sparkles` from `lucide-react`.
2. In the `categories` array, add a fifth object:
   - `icon: Sparkles`
   - `title: 'Ketamine'`
   - `description: 'Spravato® & IV therapy'`
   - `href: '/knowledge-hub/ketamine'`
   - `color: 'from-violet-500 to-fuchsia-500'`

**Verification (B2):**
- Hero shows 5 cards; the fifth is Ketamine with Sparkles icon and violet/fuchsia gradient.

---

### B3. Hero: update grid for 5 cards

**File:** `src/components/sections/knowledge-hub-hero.tsx`

**Steps:**
1. Change the category cards grid container class from `grid sm:grid-cols-2 lg:grid-cols-4` to support 5 cards:
   - Use `xl:grid-cols-5` for 5 in a row on xl.
   - Use `lg:grid-cols-3` (or similar) so on lg you get 3 columns (no cramming).
   - Example: `grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto`.
2. Add a minimum width to each category card so they don’t shrink too much, e.g. on the card wrapper or the `Link`: `min-w-[200px]` (or use a min-width on the grid children).
3. Add a short comment in the file or in this doc: *QA at 1280px and 1440px viewport.*

**Verification (B3):**
- At 1280px and 1440px: 5 cards display without cramping; at 768px (or similar) a 2-column or stacked layout looks correct.

---

### B4. Keyboard focus styles

**Files:** `knowledge-hub-hero.tsx` (Ketamine card), and later the Ketamine hub landing and main hub Ketamine cards.

**Steps:**
1. On the hero: ensure the category card `Link` (or focusable element) has visible focus styles, e.g. `focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:outline-none` (or equivalent). If the card is a `Link`, add these to the `Link` that wraps the card.
2. When you add Ketamine article cards on the main hub (C3) and hub landing (D4), apply the same pattern: focusable element (the `Link`) has `focus:ring-2 focus:ring-violet-500 focus:ring-offset-2`.
3. "Back to Knowledge Hub" on the Ketamine hub page (D2): ensure it has visible focus (e.g. Button already has focus styles; if custom link, add ring).

**Verification (B4):**
- Tab through: Ketamine hero card → main hub Ketamine cards → hub landing "Back to Knowledge Hub" → hub landing article cards. Focus ring is visible and order is logical.

---

## C. Main Knowledge Hub page

### C1. Import Ketamine articles

**File:** `src/app/knowledge-hub/page.tsx`

**Steps:**
1. Add import: `import { KETAMINE_ARTICLES, KETAMINE_ARTICLES_TOTAL_READ_TIME } from '@/data/knowledge-hub-ketamine-articles'` (or equivalent if you export total from that file).
2. Do **not** define a local `ketamineArticles` array; use `KETAMINE_ARTICLES` (or the name you chose) from the shared file.
3. If total read time is not exported, compute it: `const ketamineTotalMinutes = KETAMINE_ARTICLES.reduce((s, a) => s + a.readTime, 0)`.

**Verification (C1):**
- Page builds; no duplicate array; stats can be derived from `KETAMINE_ARTICLES`.

---

### C2. Update stats bar

**File:** `src/app/knowledge-hub/page.tsx`

**Steps:**
1. Change "33" (Expert Articles) → **40** (33 + 7).
2. Change "400+" (Minutes) → **475+** (400 + 76 = 476; use "475+" or "476" per plan).
3. Change "4" (Knowledge Hubs) → **5**.
4. Update metadata in the same file: `description` and `openGraph.description` that mention "33+" or "4" → "40" and "5" as appropriate (e.g. "40+ evidence-based articles", "5 Knowledge Hubs" if applicable).

**Verification (C2):**
- Stats bar shows 40, 475+ (or 476), 98%, 5. Metadata matches.

---

### C3. Add Ketamine Hub section

**File:** `src/app/knowledge-hub/page.tsx`

**Steps:**
1. Import `Sparkles` from `lucide-react` if not already.
2. Insert a new section **after the TMS Hub section** and **before the Medications Hub section**. Structure (mirror TMS/Medications):
   - Outer: `<section className="py-20 bg-white">` and container.
   - Inner: `<ScrollContainer variant="violet">` with the same padding/structure as other hubs.
   - Header: `Sparkles` icon + heading **"Spravato® & Ketamine Hub"** + subline **"Spravato® & IV ketamine for depression"**.
   - Grid of article cards: map over `KETAMINE_ARTICLES`. Each card: `Link` to `/knowledge-hub/${article.slug}`, `Card`, `Badge` with `Clock` and `{article.readTime} min`, title, description.
   - Use violet accent for badges and hover: e.g. `Badge`: `bg-violet-100 text-violet-700`; title: `group-hover:text-violet-600`.
   - Add focus styles to the `Link`: `focus:ring-2 focus:ring-violet-500 focus:ring-offset-2`.

**Verification (C3):**
- Ketamine section appears between TMS and Medications; ScrollContainer uses violet variant; all 7 articles linked; violet badges and hover.

---

### C4. Section order

**Action:** Confirm Ketamine Hub is after TMS, before Medications. (Done in C3.)

**Verification (C4):**
- Visual order: TMS → Ketamine → Medications → Therapy → Skills → Getting Started → Featured Banner.

---

## D. Ketamine hub landing page

### D1. Create page and metadata

**File to create:** `src/app/knowledge-hub/ketamine/page.tsx`

**Steps:**
1. Create the directory `src/app/knowledge-hub/ketamine/` and file `page.tsx`.
2. Set metadata:
   - `title`: e.g. "Spravato® & Ketamine Resources | Tasel Health Knowledge Hub"
   - `description`: short blurb including Ketamine, Spravato®, esketamine, treatment-resistant depression, TRD, IV ketamine
   - `keywords`: array including at least: Ketamine, Spravato®, esketamine, treatment-resistant depression, TRD, IV ketamine
3. Import and use `KETAMINE_ARTICLES` from `@/data/knowledge-hub-ketamine-articles`. Featured = first two (Ketamine 101, Spravato® vs. IV) — already `featured: true` in shared data.

**Verification (D1):**
- Page exists; metadata and articles come from shared file.

---

### D2. Hero block

**File:** `src/app/knowledge-hub/ketamine/page.tsx`

**Steps:**
1. Reuse TMS hub hero structure:
   - "Back to Knowledge Hub" button (same as TMS: `Button variant="ghost"` with `ArrowLeft`, `Link href="/knowledge-hub"`).
   - Badge with `Sparkles` icon and text e.g. "Spravato® & Ketamine Hub".
   - Title: **"Everything You Need to Know About Spravato® & Ketamine Treatment"**.
   - Short description (one line).
   - Chips: "7 Articles", "~76 Minutes" (or exact sum), "Clinically Reviewed".
   - Hero background: violet/fuchsia gradient, e.g. `from-violet-900 via-fuchsia-800 to-teal-700` (or similar).

**Verification (D2):**
- Hero matches TMS style; "Back to Knowledge Hub" works; chips show 7 and ~76.

---

### D3. Crisis strip

**File:** `src/app/knowledge-hub/ketamine/page.tsx`

**Steps:**
1. Add a **mandatory** crisis/safety strip: above or below the hero.
2. Text: *"If you or someone you know is in crisis, call or text 988 (Suicide & Crisis Lifeline)."*
3. Make "988" a link: `<a href="tel:988">988</a>` or link to https://988lifeline.org if preferred.
4. If the site has an existing crisis banner component, you may reuse it here; otherwise a simple strip (e.g. bar or small card) is sufficient.

**Verification (D3):**
- Crisis strip is visible; 988 is clickable/correct.

---

### D4. Featured Articles and Complete Library

**File:** `src/app/knowledge-hub/ketamine/page.tsx`

**Steps:**
1. **Featured Articles:** Two large cards (articles where `featured === true`: Ketamine 101, Spravato® vs. IV). Match TMS hub: "Featured Guide" badge, title, description, read time. Use violet accent (e.g. `Badge bg-violet-600 text-white`, `group-hover:text-violet-600`). Add focus ring on `Link`.
2. **Complete Ketamine Library:** Grid of all 7 articles with read-time badges and violet accent (same as main hub cards). Focus styles on links.

**Verification (D4):**
- Two featured cards; full grid of 7; violet styling; links work.

---

### D5. CTA and StillHaveQuestions

**File:** `src/app/knowledge-hub/ketamine/page.tsx`

**Steps:**
1. CTA section (same pattern as TMS): heading + short line + two links:
   - "Schedule Free Consultation" → `/contact`
   - "Learn About Our Spravato® & Ketamine Services" → `/services/spravato-ketamine`
2. Add `<StillHaveQuestions />` at the bottom (import from `@/components/sections/still-have-questions`).

**Verification (D5):**
- Both CTAs work; StillHaveQuestions renders.

---

## E. Article pages (7 total)

For **each** article use:
- **Layout:** `ArticleLayout` with `title`, `summary`, `estimatedReadTime`, `lastReviewed` (from `KETAMINE_ARTICLES_LAST_REVIEWED`), `author`, `clinicalReviewer`, `tags`.
- **Content:** Key Takeaways (Card), 2–4 sections (h2/h3, paragraphs, lists), 6–10 FAQs, FAQPage JSON-LD where appropriate, Related Articles (at least 2 Ketamine hub + 1 non-Ketamine, e.g. TMS 101, Treatment Options Guide, When to Seek Help).
- **Crisis:** Ketamine 101 and Ketamine Safety articles must include an **inline** crisis callout (e.g. Card with "If you're in crisis, reach out to 988" and link to 988 or crisis page). ArticleLayout already has a crisis block at the bottom.

**Slugs and read times (from shared data):**

| # | Slug | Read | Crisis callout |
|---|------|------|----------------|
| 1 | ketamine-101-what-to-expect | 12 | Required |
| 2 | spravato-vs-iv-ketamine | 11 | No |
| 3 | ketamine-who-is-a-candidate | 10 | No |
| 4 | ketamine-for-treatment-resistant-depression | 12 | No |
| 5 | ketamine-safety-side-effects | 11 | Required |
| 6 | ketamine-and-your-other-medications | 9 | No |
| 7 | ketamine-treatment-journey | 11 | No |

**Directory convention:** Each article lives at `src/app/knowledge-hub/[slug]/page.tsx` (e.g. `src/app/knowledge-hub/ketamine-101-what-to-expect/page.tsx`).

**E1. ketamine-101-what-to-expect**
- Metadata: title, description, keywords (e.g. "ketamine therapy what to expect", "Spravato first session", "ketamine treatment guide").
- Key Takeaways; sections: what it is, Spravato® vs IV in brief, session flow, who it's for, first-visit expectations (2–4 sections).
- 6–10 FAQs (e.g. pain, driving, frequency, insurance).
- **Required** inline crisis callout (e.g. Card with 988 link).
- Related: other Ketamine hub articles + TMS 101, Treatment Options Guide, When to Seek Help. Tags include "Ketamine" and topic-specific.

**E2. spravato-vs-iv-ketamine**
- Comparison content: FDA status, route, duration, setting, insurance, when each is chosen (table or bullets).
- Related + keywords (e.g. "Spravato vs IV ketamine", "esketamine vs ketamine").

**E3. ketamine-who-is-a-candidate**
- TRD definition, suicidal ideation indication, contraindications, substance history, screening, not for children. Related + keywords ("ketamine candidate", "treatment-resistant depression ketamine").

**E4. ketamine-for-treatment-resistant-depression**
- Evidence summary, response/remission, rapid onset, durability, comparison to TMS/ECT. Link to `/services/spravato-ketamine`. Related + keywords ("ketamine TRD", "ketamine depression evidence").

**E5. ketamine-safety-side-effects**
- Dissociation, BP, monitoring, REMS, driving, pregnancy/breastfeeding, abuse potential, what to report, 2-hour observation. **Required** crisis callout. Related + keywords ("ketamine side effects", "Spravato safety").

**E6. ketamine-and-your-other-medications**
- Continuing antidepressants, interactions, coordination with TMS/therapy, tapering. Related + keywords ("ketamine and antidepressants", "ketamine medications").

**E7. ketamine-treatment-journey**
- Induction (e.g. twice-weekly Spravato®), 4-week evaluation, maintenance vs taper, booster sessions. Link to services. Related + keywords ("ketamine treatment timeline", "Spravato treatment journey").

**E8. All articles**
- Use `KETAMINE_ARTICLES_LAST_REVIEWED` for `lastReviewed`.
- At least 2 related links to other Ketamine hub articles and at least 1 to a non-Ketamine resource (TMS 101, Treatment Options, When to Seek Help).
- Tags include "Ketamine" plus topic-specific tags.

**Verification (E):**
- All 7 pages render; Ketamine 101 and Safety have inline crisis callout; Related Articles and tags meet E8; no broken links.

---

## F. Cross-linking and copy

### F1. Treatment options guide: add Ketamine

**File:** `src/app/knowledge-hub/comprehensive-treatment-options-guide/page.tsx`

**Steps:**
1. Change "Three Main Treatment Approaches" to **"Treatment Approaches"** (or add a fourth approach and keep heading).
2. Add a fourth card: icon (e.g. `Sparkles`), **"Spravato® & Ketamine"**, description, **"Best for: TRD, rapid relief when other treatments haven't worked."**
3. In Related Articles, add a link to "Ketamine 101" and/or `/knowledge-hub/ketamine`. Use **"Spravato® & Ketamine"** in the guide (not "Ketamine" alone for the approach name).

**Verification (F1):**
- Four approach cards; Ketamine card and related link present; terminology consistent.

---

### F2. Patient commitment and site-wide copy

**File:** `src/components/sections/patient-commitment.tsx`

**Steps:**
1. Change "33+ Free Articles" → **"40+ Free Articles"**.
2. Change "Free Knowledge Hub with 33+ articles" → **"Free Knowledge Hub with 40+ articles"** (or equivalent).

**Search (codebase):** In `src`, search for "33" and "4" in the context of articles/hubs:
- `src/app/knowledge-hub/page.tsx`: already updated in C2 (40, 5, 475+); also update metadata strings "33+" → "40+" and "4" → "5" if any remain.
- Any other file that says "33" articles or "4" hubs: update to 40 and 5.

**Verification (F2):**
- Patient commitment shows 40+; no remaining "33" or "4" for article/hub counts in user-facing copy.

---

### F3. Inbound link from Spravato®/Ketamine service

**File:** `src/components/sections/spravato-ketamine-hero-section.tsx` (or overview if preferred)

**Steps:**
1. Add one line with link, e.g. *"Learn more in our Knowledge Hub: [Spravato® & Ketamine resources](/knowledge-hub/ketamine)."*
2. Place where it fits naturally (e.g. after the main value proposition, before or after the CTA buttons). If hero is too dense, add the same line in `spravato-ketamine-overview.tsx` instead.

**Verification (F3):**
- From Spravato®/Ketamine service page, the new link goes to `/knowledge-hub/ketamine` and works.

---

## G. SEO and sitemap

### G1. Sitemap: hub landing

**File:** `src/app/sitemap.ts`

**Steps:**
1. Add `/knowledge-hub/ketamine` to the routes array (or equivalent list).
2. Set `lastModified`, `changeFrequency` consistent with other hub routes; use at least `priority: 0.7` (or match other knowledge-hub entry).

**Verification (G1):**
- Sitemap includes `https://www.taselhealth.com/knowledge-hub/ketamine` (or your base URL).

---

### G2. Sitemap: all 7 article URLs

**File:** `src/app/sitemap.ts`

**Steps:**
1. Add these 7 paths to the sitemap:
   - `/knowledge-hub/ketamine-101-what-to-expect`
   - `/knowledge-hub/spravato-vs-iv-ketamine`
   - `/knowledge-hub/ketamine-who-is-a-candidate`
   - `/knowledge-hub/ketamine-for-treatment-resistant-depression`
   - `/knowledge-hub/ketamine-safety-side-effects`
   - `/knowledge-hub/ketamine-and-your-other-medications`
   - `/knowledge-hub/ketamine-treatment-journey`
2. Use same `priority`/`changeFrequency` as main knowledge-hub entry unless you have a different policy for articles.

**Verification (G2):**
- All 8 new URLs (1 hub + 7 articles) appear in the sitemap; build succeeds.

---

## H. Quality assurance

### H1. Responsive
- Test main Knowledge Hub hero at **1280px** and **1440px**: 5 cards layout (e.g. 3+2 or 5 in a row); no card too narrow (min-width).
- Test one smaller breakpoint (e.g. 768px): 2-column or stacked layout acceptable.

### H2. Keyboard and focus
- Tab through: new Ketamine hero card, all Ketamine article cards on main hub, hub landing "Back to Knowledge Hub", hub landing article cards. Visible focus ring and logical tab order.

### H3. Contrast
- Violet ScrollContainer variant and violet badges/text on Ketamine section: confirm **WCAG AA (4.5:1)** on parchment. Fix if not.

### H4. Crisis content
- Crisis strip on Ketamine hub landing page visible.
- Crisis callouts in Ketamine 101 and Ketamine Safety articles visible; 988 (or crisis link) correct and clickable.

### H5. Links
- Click every new internal link: hub → articles, articles → related, treatment guide → Ketamine hub, service page → Knowledge Hub. No 404s. "Back to Knowledge Hub" from Ketamine hub returns to main Knowledge Hub page.

### H6. Copy
- "Ketamine" used only for hero card label; "Spravato® & Ketamine" in section headings, hub title, and service cross-links. No inconsistent "Spravato®/Ketamine" vs "Spravato® & Ketamine" in new content.

### H7. Stats
- Main hub: 40 articles, 5 hubs, 475+ (or correct) minutes. Ketamine hub landing: 7 articles, correct total minutes (~76).

---

## Commands (build and run)

**Windows (PowerShell):**
```powershell
cd "c:\Users\gbtol\Tasel Health\tasel-health"
npm run build
npm run start
```

**macOS/Linux:**
```bash
cd /path/to/tasel-health
npm run build
npm run start
```

**Dev (optional):**
```bash
npm run dev
```
Then open Knowledge Hub, Ketamine hub, and each new article URL to verify.

---

## File checklist (quick reference)

| Action | File |
|--------|------|
| Create | `src/data/knowledge-hub-ketamine-articles.ts` |
| Edit | `src/components/ui/scroll-container.tsx` |
| Edit | `src/components/sections/knowledge-hub-hero.tsx` |
| Edit | `src/app/knowledge-hub/page.tsx` |
| Create | `src/app/knowledge-hub/ketamine/page.tsx` |
| Create | `src/app/knowledge-hub/ketamine-101-what-to-expect/page.tsx` |
| Create | `src/app/knowledge-hub/spravato-vs-iv-ketamine/page.tsx` |
| Create | `src/app/knowledge-hub/ketamine-who-is-a-candidate/page.tsx` |
| Create | `src/app/knowledge-hub/ketamine-for-treatment-resistant-depression/page.tsx` |
| Create | `src/app/knowledge-hub/ketamine-safety-side-effects/page.tsx` |
| Create | `src/app/knowledge-hub/ketamine-and-your-other-medications/page.tsx` |
| Create | `src/app/knowledge-hub/ketamine-treatment-journey/page.tsx` |
| Edit | `src/app/knowledge-hub/comprehensive-treatment-options-guide/page.tsx` |
| Edit | `src/components/sections/patient-commitment.tsx` |
| Edit | `src/components/sections/spravato-ketamine-hero-section.tsx` (or overview) |
| Edit | `src/app/sitemap.ts` |

---

End of implementation instructions. Complete in order A → B → C → D → E → F → G → H and run verification after each section.
