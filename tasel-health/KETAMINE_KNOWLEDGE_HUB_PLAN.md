# Ketamine Knowledge Hub – Research and Integration Plan

**Overview:** Add a fifth Knowledge Hub segment for Ketamine (Spravato®/esketamine and IV ketamine), including hero card, hub landing page, 7 evidence-based articles, shared data, crisis strip, UI variant, full sitemap, and cross-links—per Section 8 to-do list (high standard).

---

## 1. Current website structure (summary)

- **Hero:** [knowledge-hub-hero.tsx](src/components/sections/knowledge-hub-hero.tsx) – 4 category cards (TMS, Medications, Therapy, Skills & Self-Help) in a `lg:grid-cols-4` grid; each has icon, title, description, `href`, and gradient `color`.
- **Main hub page:** [knowledge-hub/page.tsx](src/app/knowledge-hub/page.tsx) – Stats bar (33 articles, 400+ min, 98%, 4 hubs), then one section per hub (TMS, Medications, Therapy, Skills) using `ScrollContainer` with variant (purple, blue, teal, amber), plus Getting Started and Featured Banner.
- **Hub landing pages:** e.g. [tms/page.tsx](src/app/knowledge-hub/tms/page.tsx) – Hero with "Back to Knowledge Hub," badge, title, description, article count/minutes/reviewed; Featured Articles (2); "Complete Library" grid; CTA to contact and service page.
- **Articles:** Each lives at `/knowledge-hub/[slug]/page.tsx`, uses [ArticleLayout](src/components/knowledge/article-layout.tsx) (title, summary, read time, last reviewed, author, clinical reviewer, tags), and includes key takeaways, sections, FAQs, optional FAQ schema, and "Related Articles."
- **ScrollContainer:** [scroll-container.tsx](src/components/ui/scroll-container.tsx) – `variant`: `'purple' | 'blue' | 'teal' | 'amber'` with matching parchment/accent/wood colors. No fifth variant yet.
- **Existing Ketamine presence:** Tasel Health already offers Spravato®/Ketamine; service page at [services/spravato-ketamine](src/app/services/spravato-ketamine/page.tsx) and components (hero, overview, process, FAQ). The treatment options comparison article does **not** yet mention Ketamine.

---

## 2. Content research: what the Ketamine hub should contain

### Evidence and positioning

- **FDA:** Esketamine (SPRAVATO®) is FDA-approved for (1) treatment-resistant depression (TRD) in adults with an oral antidepressant, and (2) depressive symptoms in MDD with acute suicidal ideation/behavior. IV ketamine for depression is off-label but widely used and studied.
- **Mechanism:** NMDA receptor modulation (glutamate system), distinct from serotonin/norepinephrine antidepressants; can produce rapid improvement (hours to days).
- **Candidates:** TRD (inadequate response to ≥2 antidepressants); acute suicidal ideation (esketamine); often offered when TMS or multiple medications have been tried. Not for children (esketamine not approved).
- **Safety:** Sedation, dissociation, BP changes, respiratory depression, abuse potential; 2-hour post-dose monitoring; no driving until next day after sleep; REMS for Spravato®; contraindications (e.g. aneurysm, AVM, brain bleed, allergy).
- **Administration:** Spravato® nasal in-clinic (~2 hr total); IV ketamine 40–60 min infusion + monitoring. Both require transportation and same-day no driving.

### Recommended hub content (7 articles, aligned with TMS/Medications style)

| #   | Article (slug)                                                                                                       | Purpose                                                                                                               | Est. read |
| --- | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------- |
| 1   | **Ketamine 101: What to Expect** (`ketamine-101-what-to-expect`)                                                     | Overview: what it is, Spravato® vs IV, session flow, who it's for, first-visit expectations. Core "start here" guide. | 12 min    |
| 2   | **Spravato® vs. IV Ketamine: Understanding Your Options** (`spravato-vs-iv-ketamine`)                                | Comparison: FDA status, administration, duration, monitoring, insurance, when each may be chosen.                     | 11 min    |
| 3   | **Who Is a Candidate for Ketamine Treatment?** (`ketamine-who-is-a-candidate`)                                       | TRD definition, suicidal ideation indication, contraindications, substance history, medical/psychiatric screening.    | 10 min    |
| 4   | **Ketamine for Treatment-Resistant Depression: Evidence & Outcomes** (`ketamine-for-treatment-resistant-depression`) | Research summary, response/remission, rapid onset, durability, comparison to other TRD options.                       | 12 min    |
| 5   | **Ketamine Safety, Side Effects & What to Expect During Treatment** (`ketamine-safety-side-effects`)                 | Dissociation, BP, monitoring, driving restrictions, pregnancy/breastfeeding, abuse potential, REMS.                   | 11 min    |
| 6   | **Ketamine and Your Other Medications** (`ketamine-and-your-other-medications`)                                      | Continuing antidepressants, interactions, coordination with TMS/therapy, tapering considerations.                     | 9 min     |
| 7   | **Your Ketamine Treatment Journey: What to Expect Over Time** (`ketamine-treatment-journey`)                         | Induction, 4-week evaluation, maintenance/taper, booster sessions; narrative arc matching TMS "journey" content.      | 11 min    |

**Tone and standards:** Patient-friendly, evidence-based, consistent with existing hub articles (Key Takeaways, FAQs, schema where appropriate). Link to `/services/spravato-ketamine` and to related hub articles (TMS, medications, treatment options guide).

---

## 3. Integration: files and changes

### 3.1 Hero and main hub page

- **[knowledge-hub-hero.tsx](src/components/sections/knowledge-hub-hero.tsx)**  
  - Add a fifth category: e.g. icon `Sparkles` (or `Activity`), title "Ketamine", description "Spravato® & IV therapy", `href: '/knowledge-hub/ketamine'`, `color: 'from-violet-500 to-fuchsia-500'` (or similar to distinguish from purple TMS).  
  - Change grid from `lg:grid-cols-4` to support 5 cards (e.g. `xl:grid-cols-5`, `lg:grid-cols-3`).
- **[knowledge-hub/page.tsx](src/app/knowledge-hub/page.tsx)**  
  - Import Ketamine article list from shared data file (same 7 articles as in Section 2 table).  
  - Add a "Ketamine Hub" section: `ScrollContainer` with variant `violet`, icon `Sparkles`, heading "Spravato® & Ketamine Hub", subline "Spravato® & IV ketamine for depression".  
  - Update stats: "4 Knowledge Hubs" → "5"; "33 Expert Articles" → "40"; "400+ Minutes" → "475+" (or sum of 7 article read times).

### 3.2 ScrollContainer variant

- **[scroll-container.tsx](src/components/ui/scroll-container.tsx)**  
  - Add variant `'violet'`: extend type and add a color scheme (e.g. violet/fuchsia parchment and accent) so the Ketamine section matches the hero accent.

### 3.3 Ketamine hub landing page

- **New file: [knowledge-hub/ketamine/page.tsx](src/app/knowledge-hub/ketamine/page.tsx)**  
  - Mirror TMS hub: metadata, hero with "Back to Knowledge Hub," Ketamine badge, title "Everything You Need to Know About Spravato® & Ketamine Treatment", chips "7 Articles," "~76 Minutes," "Clinically Reviewed"; Featured Articles (first 2); Complete Ketamine Library (all 7); CTA to contact and `/services/spravato-ketamine`. **Mandatory crisis strip** (988).

### 3.4 New article pages

- New directories and pages under `src/app/knowledge-hub/`:
  - `ketamine-101-what-to-expect/page.tsx`
  - `spravato-vs-iv-ketamine/page.tsx`
  - `ketamine-who-is-a-candidate/page.tsx`
  - `ketamine-for-treatment-resistant-depression/page.tsx`
  - `ketamine-safety-side-effects/page.tsx`
  - `ketamine-and-your-other-medications/page.tsx`
  - `ketamine-treatment-journey/page.tsx`

Each article: metadata, ArticleLayout, Key Takeaways, 2–4 sections, 6–10 FAQs, FAQPage JSON-LD where appropriate, Related Articles. **Required** crisis callout in Ketamine 101 and Safety articles.

### 3.5 Cross-linking and consistency

- **[comprehensive-treatment-options-guide/page.tsx](src/app/knowledge-hub/comprehensive-treatment-options-guide/page.tsx)** – Add Ketamine as fourth treatment approach; Related Articles link to Ketamine 101 and/or `/knowledge-hub/ketamine`. Use "Spravato® & Ketamine" in the guide.
- **Patient-facing copy:** Update "33+ articles" to "40+ articles" and "4 Knowledge Hubs" to "5 Knowledge Hubs" (e.g. [patient-commitment.tsx](src/components/sections/patient-commitment.tsx)).

### 3.6 Sitemap and SEO (required)

- **[sitemap.ts](src/app/sitemap.ts)** – Add `/knowledge-hub/ketamine` and all 7 Ketamine article URLs (see Section 8, G2).

---

## 4. Visual and UX consistency

- **Icon:** Use `Sparkles` (lucide-react) for Ketamine across hero, main hub section, and hub landing.
- **Color:** One accent (violet/fuchsia) for Ketamine in hero card gradient, ScrollContainer variant, hub landing hero, and article badges/links.
- **Grid:** With 5 cards, use `xl:grid-cols-5`, `lg:grid-cols-3` (or similar) and min-width so cards don't cram; QA at 1280px and 1440px.

---

## 5. Content outline per article (for implementation)

- **Ketamine 101:** What ketamine/esketamine is; Spravato® vs IV in one paragraph; typical session; who it's for (TRD, suicidal ideation); what to expect before/during/after; FAQs (pain, driving, frequency, insurance). **Crisis callout required.**
- **Spravato® vs. IV:** Table or bullets: approval status, route, duration, setting, insurance, when each is chosen.
- **Who Is a Candidate:** TRD definition; suicidal ideation indication; contraindications; substance history; screening; not for children.
- **Evidence & Outcomes:** Trials/meta-analyses; response/remission; rapid onset; durability; comparison to TMS/ECT; link to services.
- **Safety & Side Effects:** Dissociation, BP, monitoring, REMS, driving, pregnancy/breastfeeding, abuse potential; what to report; 2-hour observation. **Crisis callout required.**
- **Ketamine and Other Medications:** Continuing antidepressants; interactions; coordination with TMS/therapy; tapering.
- **Your Ketamine Treatment Journey:** Induction (e.g. twice-weekly Spravato®); 4-week evaluation; maintenance vs taper; booster sessions; when people return; link to services.

---

## 6. File checklist (no edits until approved)

| Action            | File                                                                                                 |
| ----------------- | ---------------------------------------------------------------------------------------------------- |
| Edit              | `src/components/sections/knowledge-hub-hero.tsx`                                                     |
| Edit              | `src/app/knowledge-hub/page.tsx`                                                                    |
| Edit              | `src/components/ui/scroll-container.tsx`                                                             |
| Create            | `src/app/knowledge-hub/ketamine/page.tsx`                                                            |
| Create            | `src/app/knowledge-hub/ketamine-101-what-to-expect/page.tsx`                                         |
| Create            | `src/app/knowledge-hub/spravato-vs-iv-ketamine/page.tsx`                                             |
| Create            | `src/app/knowledge-hub/ketamine-who-is-a-candidate/page.tsx`                                          |
| Create            | `src/app/knowledge-hub/ketamine-for-treatment-resistant-depression/page.tsx`                         |
| Create            | `src/app/knowledge-hub/ketamine-safety-side-effects/page.tsx`                                        |
| Create            | `src/app/knowledge-hub/ketamine-and-your-other-medications/page.tsx`                                 |
| Create            | `src/app/knowledge-hub/ketamine-treatment-journey/page.tsx`                                           |
| Create            | `src/data/knowledge-hub-ketamine-articles.ts` (shared article list)                                 |
| Edit              | `src/app/knowledge-hub/comprehensive-treatment-options-guide/page.tsx`                               |
| Edit              | `src/components/sections/patient-commitment.tsx`                                                    |
| Edit              | `src/app/sitemap.ts`                                                                                 |
| Edit              | `src/components/sections/spravato-ketamine-hero-section.tsx` or overview (inbound link)             |

---

## 8. Implementation To-Do List (high standard — do not implement until approved)

Follow this order. Check off each item when complete. Choose the higher standard wherever a decision is required.

### A. Setup and shared data

- [ ] **A1.** Create shared data file `src/data/knowledge-hub-ketamine-articles.ts` (or `lib/` if preferred). Export a single array of all **7** Ketamine articles with: `title`, `slug`, `description`, `readTime`, `featured` (boolean). Use this as the single source of truth for the main hub page and the Ketamine hub landing page. Document in the file that new articles must be added here first.
- [ ] **A2.** Define a standard `lastReviewed` value for all new Ketamine articles (e.g. `"February 2025"`). Add it as a constant or comment in the shared data file so every article page uses the same date until the next clinical review.

### B. UI foundation

- [ ] **B1.** In `scroll-container.tsx`: Add variant `'violet'` to the type union. Add a `violet` entry to `colorSchemes` with parchment gradient (e.g. violet/rose tones), accent hex, and wood hex. Ensure the chosen accent and any text colors used on the parchment in the Ketamine section meet **WCAG AA contrast** (4.5:1 for normal text)—verify in browser or with a contrast checker.
- [ ] **B2.** In `knowledge-hub-hero.tsx`: Add the fifth category object: icon `Sparkles`, title `"Ketamine"`, description `"Spravato® & IV therapy"`, `href: '/knowledge-hub/ketamine'`, `color: 'from-violet-500 to-fuchsia-500'`. Import `Sparkles` from `lucide-react`.
- [ ] **B3.** In `knowledge-hub-hero.tsx`: Update the category grid for 5 cards. Use the higher standard: on `xl` use `xl:grid-cols-5`, on `lg` use `lg:grid-cols-3` (or similar) so 5 cards don't cram on medium-large screens. Add a sensible `min-width` for category cards (e.g. `min-w-[200px]`) so they don't shrink too much. Document that QA will be done at 1280px and 1440px viewport widths.
- [ ] **B4.** Ensure all new hero and hub cards (Ketamine category card, Ketamine article cards on main hub and hub landing) have **visible keyboard focus styles** (e.g. `focus:ring-2 focus:ring-violet-500 focus:ring-offset-2` on the focusable element or parent link). Test tab order and focus visibility.

### C. Main Knowledge Hub page

- [ ] **C1.** In `knowledge-hub/page.tsx`: Import the Ketamine article list from the shared data file (do not duplicate the array inline). If the shared file also exports total read time and count, use those for stats; otherwise compute from the array.
- [ ] **C2.** Update the stats bar: "4 Knowledge Hubs" → "5"; "33 Expert Articles" → "40" (33 + 7); "400+ Minutes" → "475+" (or sum of actual read times from the 7 articles). Ensure numbers stay in sync with the shared article list.
- [ ] **C3.** Add a Ketamine Hub section (same structure as TMS/Medications/Therapy/Skills): `ScrollContainer` with `variant="violet"`, icon `Sparkles`, heading **"Spravato® & Ketamine Hub"** (use "Spravato® & Ketamine" in section headings for branding; "Ketamine" alone only in hero card), subline "Spravato® & IV ketamine for depression". Render article cards from the shared Ketamine article array. Use violet accent for badges and hover (e.g. `bg-violet-100 text-violet-700`, `group-hover:text-violet-600`).
- [ ] **C4.** Insert the Ketamine Hub section in a logical order (e.g. after TMS, before or after Medications—decide and keep consistent).

### D. Ketamine hub landing page

- [ ] **D1.** Create `knowledge-hub/ketamine/page.tsx`. Set metadata: title, description, keywords (include Ketamine, Spravato®, esketamine, treatment-resistant depression, TRD, IV ketamine). Use the shared Ketamine article list for the page (featured = first 2: Ketamine 101, Spravato® vs. IV).
- [ ] **D2.** Hero: Same structure as TMS hub—**"Back to Knowledge Hub"** button (same placement and styling as TMS), Ketamine badge with `Sparkles` icon, title "Everything You Need to Know About Spravato® & Ketamine Treatment", short description, chips "7 Articles", "~76 Minutes" (or sum of 7 read times), "Clinically Reviewed". Use violet/fuchsia gradient (e.g. `from-violet-900 via-fuchsia-800 to-teal-700` or similar).
- [ ] **D3.** Add a **mandatory crisis/safety strip**: Above or below the hero, add a concise line: "If you or someone you know is in crisis, call or text 988 (Suicide & Crisis Lifeline)." Link "988" to the lifeline if desired. Optionally reuse the site's existing crisis banner component if one exists.
- [ ] **D4.** Featured Articles: Two large cards (Ketamine 101, Spravato® vs. IV) with "Featured Guide" badge, matching TMS hub style. Complete Ketamine Library: grid of all 7 articles with read-time badges and violet accent.
- [ ] **D5.** CTA section: Same pattern as TMS—link to `/contact` ("Schedule Free Consultation") and `/services/spravato-ketamine` ("Learn About Our Spravato® & Ketamine Services"). Include `StillHaveQuestions` at the bottom.

### E. Article pages (7 total)

- [ ] **E1.** Create `ketamine-101-what-to-expect/page.tsx`. Use `ArticleLayout`. Include Key Takeaways, 2–4 sections (what it is, Spravato® vs IV in brief, session flow, who it's for, first-visit expectations), 6–10 FAQs, FAQPage JSON-LD. Add a **required** short crisis callout (e.g. "If you're in crisis, reach out to 988.") and link to 988 or site crisis page. Related Articles: other Ketamine hub articles + TMS 101, Treatment Options Guide, When to Seek Help. Set `lastReviewed` to the standard date. Metadata keywords: e.g. "ketamine therapy what to expect", "Spravato first session", "ketamine treatment guide".
- [ ] **E2.** Create `spravato-vs-iv-ketamine/page.tsx`. Same structure. Content: comparison table or bullets (FDA status, route, duration, setting, insurance, when each is chosen). Related Articles + metadata keywords (e.g. "Spravato vs IV ketamine", "esketamine vs ketamine").
- [ ] **E3.** Create `ketamine-who-is-a-candidate/page.tsx`. Content: TRD definition, suicidal ideation indication, contraindications, substance history, screening, not for children. Related Articles + keywords ("ketamine candidate", "treatment-resistant depression ketamine").
- [ ] **E4.** Create `ketamine-for-treatment-resistant-depression/page.tsx`. Content: evidence summary, response/remission, rapid onset, durability, comparison to TMS/ECT. Link to `/services/spravato-ketamine`. Related Articles + keywords ("ketamine TRD", "ketamine depression evidence").
- [ ] **E5.** Create `ketamine-safety-side-effects/page.tsx`. Content: dissociation, BP, monitoring, REMS, driving, pregnancy/breastfeeding, abuse potential, what to report, 2-hour observation. Include a **required** crisis callout. Related Articles + keywords ("ketamine side effects", "Spravato safety").
- [ ] **E6.** Create `ketamine-and-your-other-medications/page.tsx`. Content: continuing antidepressants, interactions, coordination with TMS/therapy, tapering. Related Articles + keywords ("ketamine and antidepressants", "ketamine medications").
- [ ] **E7.** Create `ketamine-treatment-journey/page.tsx`. Content: induction phase (e.g. twice-weekly Spravato®), 4-week evaluation, maintenance vs taper, booster sessions, when people return. Link to services. Related Articles + keywords ("ketamine treatment timeline", "Spravato treatment journey").
- [ ] **E8.** For **every** article: Use the shared `lastReviewed` value. Include at least 2 related links to other Ketamine hub articles and at least 1 to a non-Ketamine hub resource (e.g. TMS 101, Treatment Options, When to Seek Help). Add tags including "Ketamine" and topic-specific tags.

### F. Cross-linking and copy

- [ ] **F1.** In `comprehensive-treatment-options-guide/page.tsx`: Rename "Three Main Treatment Approaches" to "Treatment Approaches" (or add a fourth approach). Add a Ketamine/Spravato® card: icon, **"Spravato® & Ketamine"**, description, "Best for: TRD, rapid relief when other treatments haven't worked." Add a Related Articles link to "Ketamine 101" and/or `/knowledge-hub/ketamine`. Ensure terminology matches: use "Spravato® & Ketamine" in this guide.
- [ ] **F2.** In `patient-commitment.tsx`: Update "33+ Free Articles" (or similar) to **"40+ Free Articles"**. If "4 Knowledge Hubs" or equivalent appears anywhere on the site, update to **"5 Knowledge Hubs"**. Search codebase for "33" and "4" in the context of articles/hubs and update consistently.
- [ ] **F3.** Add an **inbound link** from the Spravato®/Ketamine service experience to the Knowledge Hub: In `spravato-ketamine-hero-section.tsx` or `spravato-ketamine-overview.tsx`, add one line and link, e.g. "Learn more in our Knowledge Hub: [Spravato® & Ketamine resources](/knowledge-hub/ketamine)." Place it where it fits naturally (e.g. after the main value proposition).

### G. SEO and sitemap

- [ ] **G1.** In `sitemap.ts`: Add `/knowledge-hub/ketamine` to the routes array. Set `lastModified` and `changeFrequency` consistent with other hub routes; use at least `priority: 0.7` (or match other knowledge-hub entry).
- [ ] **G2.** **(Higher standard.)** Add all 7 new Ketamine article URLs to the sitemap: `ketamine-101-what-to-expect`, `spravato-vs-iv-ketamine`, `ketamine-who-is-a-candidate`, `ketamine-for-treatment-resistant-depression`, `ketamine-safety-side-effects`, `ketamine-and-your-other-medications`, `ketamine-treatment-journey`. Use the same priority/changeFrequency as the main knowledge-hub entry unless you have a different policy for articles.

### H. Quality assurance

- [ ] **H1.** **Responsive:** Test the main Knowledge Hub hero at 1280px and 1440px viewport width. Confirm 5 cards layout (e.g. 3+2 or 5 in a row) and that no card is too narrow (min-width behavior). Test on one smaller breakpoint (e.g. 768px) for 2-column or stacked layout.
- [ ] **H2.** **Keyboard and focus:** Tab through the new Ketamine hero card, all Ketamine article cards on the main hub and hub landing, and the "Back to Knowledge Hub" button. Confirm visible focus ring and logical tab order.
- [ ] **H3.** **Contrast:** Confirm violet ScrollContainer variant and violet badges/text on the Ketamine section pass WCAG AA (4.5:1) on the parchment background. Fix if not.
- [ ] **H4.** **Crisis content:** Confirm crisis strip appears on the Ketamine hub landing page and that crisis callouts appear in Ketamine 101 and Ketamine Safety articles. Verify 988 (or crisis link) is correct and clickable where used.
- [ ] **H5.** **Links:** Click every new internal link (hub → articles, articles → related, treatment guide → Ketamine hub, service page → Knowledge Hub). Confirm no 404s and that "Back to Knowledge Hub" from the Ketamine hub returns to the main Knowledge Hub page.
- [ ] **H6.** **Copy:** Confirm "Ketamine" is used only for the hero card label; "Spravato® & Ketamine" is used in section headings, hub title, and service cross-links. Confirm no mixed "Spravato®/Ketamine" vs "Spravato® & Ketamine" in new content unless intentionally varied.
- [ ] **H7.** **Stats:** Confirm main hub stats show 40 articles, 5 hubs, and 475+ (or correct) minutes. Confirm Ketamine hub landing shows 7 articles and correct total minutes.

---

## 7. Summary

- Add a **fifth Knowledge Hub segment: Ketamine** (Spravato® & IV), with its own hero card, hub landing page, and **7** evidence-based articles.
- Reuse existing **TMS/Medications/Therapy** patterns (hero, ScrollContainer, hub page, ArticleLayout, FAQs, related links).
- Introduce a **violet ScrollContainer variant** and use a distinct **icon (Sparkles)** and **color** for Ketamine.
- **Cross-link** from the treatment options guide and between Ketamine articles and existing hub/service pages.
- **Content** should be accurate (FDA, TRD, safety, monitoring) and consistent with Tasel Health's current Spravato/Ketamine service messaging.

**Implementation:** Use **Section 8. Implementation To-Do List** as the single checklist. Do not implement until the plan is approved. Complete tasks in order (A → B → C → D → E → F → G → H); check off each item when done.
