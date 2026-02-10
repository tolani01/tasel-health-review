# Comprehensive Codebase Audit & Optimization Prompt
## For Advanced LLM Agent Review

---

## 🎯 **MISSION STATEMENT**

You are an elite full-stack web development auditor with expertise in Next.js, React, TypeScript, SEO optimization, and production deployment. Your task is to conduct a **comprehensive, surgical audit** of the Tasel Health mental health clinic website codebase to:

1. **Eliminate redundancy** without breaking functionality
2. **Maximize SEO performance** for Oklahoma City and San Antonio markets
3. **Prepare for Git upload and production deployment**
4. **Verify all interactive elements** function correctly
5. **Identify strategic improvements** based on industry best practices

**CRITICAL MANDATE:** Be extremely cautious. Do NOT remove or modify any code that is actively used or required for the site to function. When in doubt, FLAG for review rather than delete.

---

## 📋 **TASK 1: CODEBASE CLEANUP & REDUNDANCY REMOVAL**

### **Objectives:**
- Identify and remove unused components, utilities, and assets
- Eliminate duplicate code and consolidate similar functionality
- Remove unused npm dependencies
- Clean up unused imports across all files
- Remove commented-out code (if confirmed unused)
- Identify orphaned files (not imported anywhere)

### **Critical Safety Requirements:**

**DO NOT REMOVE:**
- Any component imported in page files (`src/app/**/page.tsx`)
- Any component referenced in layout files
- UI components from `src/components/ui/` (even if seemingly unused—may be library components)
- Context providers or hooks actively used
- Any TypeScript interfaces/types referenced elsewhere
- Configuration files (next.config.js, tailwind.config.ts, tsconfig.json)
- Environment files or examples
- Documentation files (README, .md files)

**SAFE TO REMOVE (with verification):**
- Backup files (e.g., `*-backup.tsx`, `*-old.tsx`)
- Components NOT imported anywhere in the codebase
- Unused utility functions confirmed by grep search
- Images in `/public/images/` not referenced in code
- Unused npm packages (verify with `npm ls [package]`)
- Test files for removed features

### **Methodology:**

1. **Component Audit:**
   ```
   - List all components in src/components/
   - Cross-reference with grep search for imports
   - Mark as SAFE TO REMOVE only if zero references found
   - Double-check page files and dynamic imports
   ```

2. **Asset Audit:**
   ```
   - List all files in public/images/
   - Search codebase for each filename
   - Mark as SAFE TO REMOVE only if no references found
   - Account for dynamic image loading patterns
   ```

3. **Dependency Audit:**
   ```
   - Review package.json dependencies
   - Verify each package is imported somewhere
   - Check for packages used only in removed features
   - Use `npm ls [package]` to confirm usage
   ```

4. **Import Cleanup:**
   ```
   - Scan all .tsx/.ts files for unused imports
   - Remove imports not referenced in file body
   - Verify no side-effect imports are removed
   ```

### **Output Format for Task 1:**

```markdown
## CODEBASE CLEANUP REPORT

### Files Safe to Delete:
- [x] `src/components/sections/example-backup.tsx` (backup file, replaced)
  - Reason: Confirmed backup, original exists
  - Risk: NONE

### Files Flagged for Manual Review:
- [ ] `src/components/sections/example-component.tsx`
  - Reason: No direct imports found, but may be dynamically loaded
  - Risk: MEDIUM - Recommend manual verification before deletion

### Dependencies Safe to Remove:
- [x] `unused-package@1.0.0`
  - Reason: No imports found in codebase
  - Command: `npm uninstall unused-package`

### Unused Imports Cleaned:
- [x] Fixed 23 files with unused import statements
  - Low risk: Only removed confirmed unused imports

### Estimated Size Reduction: XX MB
```

---

## 📋 **TASK 2: SEO OPTIMIZATION (Oklahoma City & San Antonio)**

### **Objectives:**
- Maximize local SEO for Oklahoma City, OK and San Antonio, TX markets
- Ensure all pages have optimized metadata
- Verify schema markup for healthcare services
- Optimize for relevant mental health keywords
- Ensure mobile responsiveness and Core Web Vitals

### **SEO Audit Checklist:**

#### **A. Metadata Optimization**

**For Every Page (`page.tsx` files), verify:**
- [ ] Title tag (50-60 characters, includes location keywords)
- [ ] Meta description (150-160 characters, compelling + location)
- [ ] Keywords array includes local + service terms
- [ ] OpenGraph tags for social sharing
- [ ] Canonical URLs properly set

**Target Keywords by Page:**
```
Homepage:
- "mental health care Oklahoma City"
- "TMS therapy Oklahoma"
- "psychiatrist Oklahoma City"
- "depression treatment OKC"

TMS Therapy Page:
- "TMS therapy Oklahoma City"
- "BrainsWay Deep TMS Oklahoma"
- "depression treatment Oklahoma City"
- "TMS therapy San Antonio" (prepare for launch)

Psychiatry Page:
- "psychiatrist Oklahoma City"
- "medication management OKC"
- "psychiatric services Oklahoma"

Counseling Page:
- "therapist Oklahoma City"
- "counseling services OKC"
- "trauma therapy Oklahoma"

Insurance Page:
- "mental health insurance Oklahoma"
- "TMS therapy insurance coverage"

About Page:
- "mental health clinic Oklahoma City"
- "psychiatrist jobs Oklahoma City"
- "therapist hiring Oklahoma"
- "mental health careers San Antonio"

Knowledge Hub:
- "mental health resources Oklahoma"
- "depression information Oklahoma City"
- "TMS therapy guide"
```

#### **B. Schema Markup (JSON-LD)**

**Required Schema Types:**

1. **Organization Schema (All Pages):**
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Tasel Health",
  "description": "Comprehensive mental health care: TMS therapy, psychiatry, counseling",
  "url": "https://www.taselhealth.com",
  "telephone": "+1-405-934-1681",
  "email": "info@taselhealth.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "9210 S Western, Suite A-21",
    "addressLocality": "Oklahoma City",
    "addressRegion": "OK",
    "postalCode": "73139",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "35.4021",
    "longitude": "-97.6319"
  },
  "openingHoursSpecification": [...],
  "areaServed": [
    {"@type": "State", "name": "Oklahoma"},
    {"@type": "State", "name": "Texas"}
  ]
}
```

2. **Medical Service Schema (Service Pages):**
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "BrainsWay Deep TMS Therapy",
  "description": "FDA-cleared magnetic brain stimulation for depression",
  "procedureType": "Therapeutic procedure"
}
```

3. **FAQPage Schema (FAQ Sections):**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [...]
}
```

4. **LocalBusiness Schema (About/Contact Pages):**
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "medicalSpecialty": "Psychiatry"
}
```

5. **JobPosting Schema (About Page - Careers Section):**
```json
{
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "Psychiatrist - Oklahoma City",
  "hiringOrganization": {...}
}
```

#### **C. Technical SEO**

**Verify/Implement:**
- [ ] `robots.txt` properly configured
- [ ] `sitemap.xml` includes all pages
- [ ] Canonical URLs prevent duplicate content
- [ ] Internal linking structure optimized
- [ ] Image alt text includes relevant keywords
- [ ] Page load speed < 3 seconds
- [ ] Mobile-first responsive design
- [ ] HTTPS enforced
- [ ] No broken links (404 errors)
- [ ] Heading hierarchy (H1 → H2 → H3) proper
- [ ] Breadcrumb navigation where appropriate

#### **D. Local SEO Enhancements**

**Oklahoma City Focus:**
- [ ] NAP (Name, Address, Phone) consistent across all pages
- [ ] Google My Business integration ready (schema markup)
- [ ] City/neighborhood keywords in content
- [ ] Service area pages or mentions for OKC metro areas

**San Antonio Preparation:**
- [ ] "Coming Soon" mentions with proper context
- [ ] Early schema markup for future location
- [ ] Career page optimized for SA hiring

#### **E. Content Optimization**

**For Each Page, verify:**
- [ ] Primary keyword in H1 tag
- [ ] Secondary keywords in H2/H3 tags
- [ ] Keyword density 1-2% (natural, not stuffed)
- [ ] Content length adequate (800-2000 words for main pages)
- [ ] Internal links to related services
- [ ] CTA buttons with semantic HTML
- [ ] Structured data for key content

### **Output Format for Task 2:**

```markdown
## SEO OPTIMIZATION REPORT

### Metadata Audit Results:
- ✅ Homepage: Fully optimized
- ⚠️ TMS Therapy Page: Missing San Antonio keywords
- ❌ Counseling Page: Meta description too short (122 chars)

### Schema Markup Status:
- ✅ Organization schema: Implemented
- ❌ FAQPage schema: Missing on 3 pages
- ⚠️ JobPosting schema: Not implemented (About page)

### Keyword Optimization:
- Primary keywords ranking well: [list]
- Opportunities: [list pages needing keyword improvement]

### Technical SEO Issues:
- [ ] 3 images missing alt text
- [x] All pages mobile-responsive
- [ ] Sitemap needs updating

### Local SEO Score: 8.5/10
- Strengths: [list]
- Improvements needed: [list]

### Action Items:
1. Add missing schema markup (Priority: HIGH)
2. Update meta descriptions on 2 pages (Priority: MEDIUM)
3. Optimize 5 images with geo-keywords (Priority: LOW)
```

---

## 📋 **TASK 3: GIT & DEPLOYMENT PREPARATION**

### **Objectives:**
- Ensure codebase is production-ready
- Configure proper `.gitignore`
- Verify environment variable handling
- Check for security vulnerabilities
- Prepare deployment documentation

### **Pre-Deployment Checklist:**

#### **A. Git Configuration**

**Verify `.gitignore` includes:**
```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# IDE
.vscode/
.idea/
*.swp
*.swo
```

**Verify clean commit history:**
- [ ] No sensitive data in commits
- [ ] No large binary files committed
- [ ] Proper commit messages

#### **B. Environment Variables**

**Required `.env.example` file:**
```bash
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Contact Information
NEXT_PUBLIC_PHONE=405-934-1681
NEXT_PUBLIC_EMAIL=info@taselhealth.com
NEXT_PUBLIC_ADDRESS=9210 S Western, Suite A-21, Oklahoma City, OK 73139

# Analytics (optional)
NEXT_PUBLIC_GA_TRACKING_ID=
```

**Verify:**
- [ ] All sensitive keys use environment variables
- [ ] `.env.example` provided (no real keys)
- [ ] Environment variables documented in README

#### **C. Build & Production Checks**

**Run and verify:**
```bash
# 1. Clean install
npm ci

# 2. Type checking
npm run type-check

# 3. Linting
npm run lint

# 4. Production build
npm run build

# 5. Production server test
npm run start
```

**Verify build succeeds with:**
- [ ] No TypeScript errors
- [ ] No linting errors
- [ ] No build warnings (or acceptable warnings documented)
- [ ] Bundle size reasonable (< 500KB initial load)
- [ ] All routes accessible

#### **D. Security Audit**

**Run security checks:**
```bash
# Check for vulnerabilities
npm audit

# Check for outdated packages
npm outdated
```

**Verify:**
- [ ] No high/critical npm vulnerabilities
- [ ] All packages reasonably up-to-date
- [ ] No API keys exposed in code
- [ ] CORS properly configured (if applicable)
- [ ] Rate limiting on contact forms (EmailJS handles this)

#### **E. Performance Optimization**

**Verify:**
- [ ] Images optimized (WebP/AVIF formats)
- [ ] Lazy loading implemented
- [ ] Code splitting configured (Next.js handles this)
- [ ] CSS minified in production
- [ ] JavaScript minified in production
- [ ] Unused CSS purged (Tailwind does this)

#### **F. Deployment Platform Preparation**

**For Vercel (recommended for Next.js):**
```json
// vercel.json (if needed)
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

**For Netlify:**
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

**Environment Variables to Set in Deployment Platform:**
- All variables from `.env.example`
- Production-specific values

### **Output Format for Task 3:**

```markdown
## GIT & DEPLOYMENT READINESS REPORT

### Git Status:
- ✅ .gitignore properly configured
- ✅ No sensitive data in repository
- ⚠️ Repository size: XX MB (acceptable/needs optimization)

### Build Status:
- ✅ Production build succeeds
- ✅ No TypeScript errors
- ⚠️ 2 linting warnings (non-blocking)

### Security Audit:
- ❌ 1 moderate vulnerability in dependency
  - Package: [name]
  - Fix: `npm audit fix`
- ✅ No exposed API keys

### Performance Metrics:
- Initial JS bundle: XX KB (target: <500KB)
- Initial CSS bundle: XX KB
- Largest image: XX KB
- Lighthouse Score: XX/100

### Deployment Checklist:
- [x] .env.example created
- [ ] README updated with deployment steps
- [x] vercel.json configured
- [ ] Domain DNS instructions documented

### Recommended Deployment Platform: Vercel
Reasoning: [explain]

### Pre-Deployment Commands:
\`\`\`bash
npm ci
npm run build
npm run start  # Test production locally
\`\`\`
```

---

## 📋 **TASK 4: FUNCTIONAL TESTING (ALL INTERACTIVE ELEMENTS)**

### **Objectives:**
- Verify every button, link, and form functions correctly
- Test navigation across all pages
- Verify email submission (EmailJS)
- Test responsive behavior on mobile
- Ensure accessibility compliance

### **Testing Methodology:**

#### **A. Navigation Testing**

**Header Navigation:**
- [ ] Logo links to homepage
- [ ] All main nav items clickable
- [ ] Services submenu opens/closes
- [ ] All submenu items navigate correctly
- [ ] Mobile hamburger menu works
- [ ] Mobile menu closes after selection

**Footer Navigation:**
- [ ] All footer links work
- [ ] Social media links (if present)
- [ ] Email/phone links formatted correctly

**Breadcrumbs/Back Buttons:**
- [ ] All back buttons function
- [ ] Breadcrumb navigation accurate

#### **B. Form Testing**

**Contact Forms (multiple locations):**
- [ ] Homepage contact form submits
- [ ] Contact page form submits
- [ ] Service page forms submit
- [ ] Comprehensive care page form submits

**For Each Form, verify:**
- [ ] All fields accept input
- [ ] Validation works (required fields)
- [ ] Email format validation
- [ ] Phone format validation
- [ ] Success message displays
- [ ] Error handling works
- [ ] EmailJS integration functional
- [ ] Emails arrive at correct address
- [ ] No console errors during submission

#### **C. Button Testing**

**Call-to-Action Buttons:**
- [ ] "Schedule Consultation" buttons
- [ ] "Learn More" buttons
- [ ] "Contact Us" buttons
- [ ] "Apply Today" button (About page)
- [ ] Phone number buttons (tel: links)
- [ ] Email buttons (mailto: links)

**Service Buttons:**
- [ ] All service cards clickable
- [ ] Navigate to correct pages
- [ ] Hover effects work
- [ ] Active/focus states visible

#### **D. Interactive Components**

**Accordions/Expandables:**
- [ ] FAQ sections expand/collapse
- [ ] TMS Process steps clickable
- [ ] Only one item opens at a time (if designed)
- [ ] Smooth animations
- [ ] Keyboard accessible (Enter/Space)

**Cards/Hover Effects:**
- [ ] All cards have hover states
- [ ] No broken hover animations
- [ ] Click targets adequate size (44px min)

**Modals/Overlays:**
- [ ] Consultation modal opens
- [ ] Modal closes properly
- [ ] Focus traps work
- [ ] Escape key closes modal
- [ ] Background scroll disabled when open

#### **E. Link Verification**

**Internal Links:**
- [ ] No 404 errors on internal links
- [ ] All service links work
- [ ] Knowledge Hub articles navigate
- [ ] Insurance page links functional

**External Links:**
- [ ] Open in new tab (`target="_blank"`)
- [ ] Include `rel="noopener noreferrer"`
- [ ] BrainsWay website link works
- [ ] Insurance provider links (if any)

#### **F. Responsive Testing**

**Test on viewports:**
- [ ] Mobile (375px - iPhone SE)
- [ ] Tablet (768px - iPad)
- [ ] Desktop (1920px)
- [ ] Ultra-wide (2560px)

**Verify:**
- [ ] No horizontal scroll
- [ ] Text readable on all devices
- [ ] Buttons/links tappable (44px min)
- [ ] Images scale properly
- [ ] Navigation adapts correctly
- [ ] Forms usable on mobile

#### **G. Accessibility Testing**

**WCAG 2.1 AA Compliance:**
- [ ] All images have alt text
- [ ] Color contrast ratios meet 4.5:1 minimum
- [ ] Focus indicators visible
- [ ] Keyboard navigation works
- [ ] Screen reader friendly (ARIA labels)
- [ ] No flashing content >3Hz
- [ ] Skip navigation link present

**Test with:**
- [ ] Keyboard only (no mouse)
- [ ] Screen reader (NVDA/JAWS)
- [ ] Browser zoom 200%

#### **H. Cross-Browser Testing**

**Verify functionality in:**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest - Mac/iOS)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### **Output Format for Task 4:**

```markdown
## FUNCTIONAL TESTING REPORT

### Navigation: ✅ PASS
- All header links functional
- Mobile menu working correctly
- Footer navigation verified

### Forms: ⚠️ PARTIAL PASS
- ✅ Contact form submits successfully
- ✅ Email arrives at info@taselhealth.com
- ⚠️ Phone validation allows invalid formats
  - Issue: Accepts letters in phone field
  - Fix: Add phone number regex validation

### Buttons: ✅ PASS
- All CTA buttons functional
- Tel/mailto links work correctly
- Hover states proper

### Interactive Components: ✅ PASS
- FAQ accordions work
- TMS Process steps clickable
- Modal functionality verified

### Links: ❌ FAIL
- 404 Error: /knowledge-hub/article-name-typo
  - Fix: Correct link in [location]

### Responsive Design: ✅ PASS
- Mobile layout functional
- Tablet breakpoints good
- Desktop display optimal

### Accessibility: ⚠️ NEEDS IMPROVEMENT
- ✅ All images have alt text
- ⚠️ 3 buttons have low contrast (3.8:1)
  - Fix: Adjust button colors to meet 4.5:1
- ✅ Keyboard navigation works

### Cross-Browser: ✅ PASS
- Chrome: Working
- Firefox: Working
- Safari: Working
- Edge: Working

### Critical Issues: 1
### Non-Critical Issues: 2
### Overall Status: 90% PASS (deployment ready after fixes)
```

---

## 📋 **TASK 5: STRATEGIC IMPROVEMENT RECOMMENDATIONS**

### **Objectives:**
- Analyze current implementation against industry best practices
- Identify opportunities for enhancement
- Propose 3+ strategic improvements with rationale

### **Analysis Framework:**

Consider improvements in these categories:
- **User Experience (UX):** Navigation, flow, clarity
- **Conversion Optimization:** CTAs, forms, trust signals
- **Performance:** Speed, optimization, caching
- **SEO:** Additional opportunities beyond Task 2
- **Accessibility:** Beyond WCAG compliance
- **Content Strategy:** Missing pages, content gaps
- **Technical Architecture:** Code quality, scalability
- **Analytics & Tracking:** Data collection, insights
- **Marketing Integration:** Social proof, reviews
- **Patient Journey:** Touchpoints, engagement

### **Improvement Template:**

For each recommendation, provide:

```markdown
### Improvement #X: [Title]

**Category:** [UX/SEO/Performance/etc.]

**Current State:**
[Describe what exists now]

**Proposed Enhancement:**
[Detailed description of improvement]

**Rationale:**
[Why this matters - data, best practices, user benefit]

**Implementation Complexity:**
- Difficulty: [Low/Medium/High]
- Estimated Time: [hours]
- Dependencies: [any]

**Expected Impact:**
- User Experience: [Low/Medium/High]
- SEO: [Low/Medium/High]
- Conversion Rate: [Low/Medium/High]
- Technical: [Low/Medium/High]

**Implementation Steps:**
1. [Step 1]
2. [Step 2]
3. [...]

**Code Example (if applicable):**
\`\`\`typescript
// Example implementation
\`\`\`

**Success Metrics:**
[How to measure if this worked]
```

### **Required: Minimum 3 Improvements**

Ensure recommendations span different categories and provide diverse value. Prioritize high-impact, medium-difficulty improvements.

### **Output Format for Task 5:**

```markdown
## STRATEGIC IMPROVEMENT RECOMMENDATIONS

### Summary:
Analyzed codebase against 47 best practice criteria across UX, SEO, performance, accessibility, and conversion optimization. Identified 5 high-value opportunities for enhancement.

---

### Improvement #1: Implement Patient Testimonials & Trust Signals

**Category:** Conversion Optimization / UX

**Current State:**
- Single generic patient quote on About page
- No social proof on service pages
- No visible reviews/ratings
- No before/after outcome data visualization

**Proposed Enhancement:**
Add structured testimonial system with:
- 3-5 patient testimonials per service page
- Star ratings display
- Video testimonials (optional)
- Outcome statistics with visual charts
- Google Reviews integration widget
- "As featured in" media logos (if applicable)

**Rationale:**
- 92% of consumers read online reviews before choosing healthcare provider
- Testimonials increase conversion rates by 34% (Nielsen)
- Healthcare decisions heavily influenced by social proof
- TMS therapy being newer technology requires trust-building
- Competitive advantage in mental health market

**Implementation Complexity:**
- Difficulty: Medium
- Estimated Time: 6-8 hours
- Dependencies: Need to collect/permission testimonials, design components

**Expected Impact:**
- User Experience: HIGH (builds trust, reduces anxiety)
- SEO: MEDIUM (fresh content, schema markup)
- Conversion Rate: HIGH (proven to increase consultations)
- Technical: LOW (no performance impact)

**Implementation Steps:**
1. Create `testimonials.ts` data file with structured testimonials
2. Build `<TestimonialCard>` component with schema markup
3. Add `<TestimonialSection>` to service pages
4. Implement Google Reviews embed (if available)
5. Add aggregate rating schema to Organization schema
6. Design outcome statistics visualizations
7. Ensure HIPAA-compliant (first names only, permission obtained)

**Code Example:**
\`\`\`typescript
// src/data/testimonials.ts
export const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Oklahoma City, OK",
    service: "TMS Therapy",
    rating: 5,
    date: "2024-08-15",
    quote: "After years of trying medications, TMS therapy changed my life...",
    outcome: "75% symptom reduction after 6 weeks"
  }
]

// Add AggregateRating schema
{
  "@type": "AggregateRating",
  "ratingValue": "4.9",
  "reviewCount": "127"
}
\`\`\`

**Success Metrics:**
- Increase in consultation form submissions
- Time on page increase
- Scroll depth to testimonial section
- Conversion rate from service page to contact

---

### Improvement #2: Live Chat / AI Chatbot Integration

**Category:** User Experience / Conversion Optimization

**Current State:**
- Only contact options: phone, email, forms
- No immediate engagement option
- No after-hours support
- High friction for simple questions

**Proposed Enhancement:**
Integrate a HIPAA-compliant live chat solution:
- AI chatbot for common questions (24/7)
- FAQ answering capability
- Appointment scheduling assistance
- Escalation to human during business hours
- Mobile-optimized chat interface

**Rationale:**
- 79% of consumers prefer live chat for immediate response
- Healthcare chat increases conversions by 40% (Salesforce)
- Answers "is this right for me?" questions immediately
- Reduces phone call volume for simple inquiries
- Captures leads outside business hours
- Mental health patients often hesitant to call initially

**Implementation Complexity:**
- Difficulty: Medium-High
- Estimated Time: 4-6 hours (integration) + setup time
- Dependencies: Choose HIPAA-compliant provider (Tawk.to, Drift Health, etc.)

**Expected Impact:**
- User Experience: HIGH (immediate support)
- SEO: LOW (no direct impact)
- Conversion Rate: HIGH (reduce drop-off)
- Technical: MEDIUM (third-party dependency)

**Implementation Steps:**
1. Research HIPAA-compliant chat providers
2. Set up account + configure chat widget
3. Train AI chatbot with FAQ responses
4. Create custom greeting messages
5. Integrate with Next.js (script in layout)
6. Configure business hours + routing
7. Design mobile chat experience
8. Train staff on handling escalated chats

**HIPAA-Compliant Options:**
- **OhMD** (healthcare-specific)
- **SimplePractice** (if using their EHR)
- **Tawk.to** (with BAA agreement)
- **Drift** (healthcare tier)

**Success Metrics:**
- Chat engagement rate
- Questions answered without human intervention
- Consultation bookings via chat
- Customer satisfaction rating (post-chat survey)

---

### Improvement #3: Google My Business + Local SEO Enhancement

**Category:** SEO / Local Marketing

**Current State:**
- Schema markup present but basic
- No Google My Business optimization detailed
- Limited local content beyond NAP
- No service area pages
- No patient directions/parking info

**Proposed Enhancement:**
Comprehensive local SEO strategy:
- Optimize Google My Business listing
- Create service area pages (OKC neighborhoods)
- Add detailed location information
- Create "/directions" page with parking, transit
- Implement LocalBusiness schema with extended properties
- Add map embed with custom styling
- Create "We Serve" section with Oklahoma cities

**Rationale:**
- 46% of all Google searches are local
- GMB listings appear in 93% of local searches
- Mental health searches are typically local ("therapist near me")
- OKC metro area has 1.4M potential patients
- First-mover advantage before San Antonio launch

**Implementation Complexity:**
- Difficulty: Medium
- Estimated Time: 8-10 hours
- Dependencies: Google My Business access, map API key

**Expected Impact:**
- User Experience: MEDIUM (easier to find, better directions)
- SEO: VERY HIGH (local search visibility)
- Conversion Rate: HIGH (local patients more likely to convert)
- Technical: LOW (mostly content, some schema)

**Implementation Steps:**
1. **Google My Business Optimization:**
   - Complete all profile fields
   - Add 20+ high-quality photos
   - Post weekly updates
   - Respond to reviews (when available)
   - Add services with descriptions
   - Set up Q&A section

2. **Service Area Pages:**
   - Create `/service-areas/` directory
   - Pages for: Edmond, Norman, Moore, Midwest City, etc.
   - Each page: local keywords + service offering
   - Schema: AreaServed array

3. **Enhanced Location Page:**
   - Interactive map (Google Maps embed)
   - Directions from major areas
   - Parking information
   - Public transit options
   - Nearby landmarks

4. **Extended LocalBusiness Schema:**
\`\`\`json
{
  "@type": "MedicalClinic",
  "priceRange": "$$",
  "paymentAccepted": "Cash, Credit Card, Insurance",
  "acceptsReservations": "True",
  "currenciesAccepted": "USD",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {...},
    "geoRadius": "50 miles"
  }
}
\`\`\`

**Success Metrics:**
- Google My Business impressions
- Map pack rankings ("therapist oklahoma city")
- Organic traffic from local searches
- Click-through rate from GMB

---

### Improvement #4: Knowledge Hub Article Interlinking & Content Upgrade

**Category:** SEO / Content Strategy

**Current State:**
- 33 articles in Knowledge Hub
- Minimal cross-linking between articles
- No "Related Articles" sections
- No content upgrade paths
- Static article layout

**Proposed Enhancement:**
- Add "Related Articles" component to each article
- Implement automatic content suggestions
- Add "Next Steps" CTA at article end
- Create article series/pathways
- Add social sharing buttons
- Implement reading progress bar
- Add "Was this helpful?" feedback

**Rationale:**
- Internal linking passes SEO authority
- Increases pages per session (engagement metric)
- Keeps users on site longer
- Guides patient education journey
- Reduces bounce rate
- Builds topical authority clusters

**Implementation Complexity:**
- Difficulty: Low-Medium
- Estimated Time: 6-8 hours
- Dependencies: Article metadata, routing logic

**Expected Impact:**
- User Experience: MEDIUM (better navigation)
- SEO: HIGH (internal link equity)
- Conversion Rate: MEDIUM (more touchpoints)
- Technical: LOW (simple components)

**Implementation Steps:**
1. Add `relatedArticles` array to article metadata
2. Create `<RelatedArticles>` component
3. Build `<ArticleNavigation>` (prev/next)
4. Add social sharing component
5. Implement reading progress bar
6. Add feedback mechanism
7. Create article series groupings (e.g., "TMS Therapy Series")

**Code Example:**
\`\`\`typescript
// Article metadata
export const articleMetadata = {
  slug: "tms-for-depression-evidence",
  relatedArticles: [
    "tms-101-what-to-expect",
    "tms-vs-medication",
    "tms-side-effects-safety"
  ],
  series: "TMS Therapy Deep Dive",
  nextInSeries: "tms-for-ocd"
}
\`\`\`

**Success Metrics:**
- Pages per session increase
- Time on site increase
- Bounce rate decrease
- Internal link click-through rate

---

### Improvement #5: Performance Optimization - Image & Asset CDN

**Category:** Performance / Technical

**Current State:**
- Images served from Next.js built-in optimization
- No external CDN for static assets
- Some images not optimized formats (WebP/AVIF)
- No progressive image loading

**Proposed Enhancement:**
- Implement Cloudinary or imgix CDN
- Convert all images to WebP with AVIF fallback
- Implement progressive image loading (LQIP)
- Add lazy loading to all below-fold images
- Optimize image dimensions per breakpoint
- Implement caching headers

**Rationale:**
- Page speed is Google ranking factor
- 1-second delay = 7% conversion loss
- Mobile users on slower connections
- Core Web Vitals impact SEO
- Better user experience (perceived speed)

**Implementation Complexity:**
- Difficulty: Medium
- Estimated Time: 4-6 hours
- Dependencies: CDN account, configuration

**Expected Impact:**
- User Experience: HIGH (faster load times)
- SEO: MEDIUM (page speed ranking factor)
- Conversion Rate: MEDIUM (reduced bounce from slow load)
- Technical: HIGH (infrastructure improvement)

**Implementation Steps:**
1. Sign up for Cloudinary (free tier likely sufficient)
2. Upload images to Cloudinary
3. Update Next.js config for Cloudinary loader
4. Convert image components to use CDN URLs
5. Implement responsive image sizes
6. Add LQIP (Low Quality Image Placeholder)
7. Configure caching headers
8. Test Lighthouse scores

**Expected Results:**
- Lighthouse Performance: 90+ (from ~75)
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s

**Success Metrics:**
- Lighthouse score improvement
- Actual page load time (Google Analytics)
- Bounce rate from slow pages
- Mobile conversion rate

---

## PRIORITIZED RECOMMENDATION SUMMARY

### High Priority (Implement First):
1. **Google My Business + Local SEO** (Highest ROI)
2. **Patient Testimonials** (Trust building critical for healthcare)

### Medium Priority (Next Phase):
3. **Knowledge Hub Interlinking** (SEO compound effect)
4. **Performance Optimization** (Foundation for growth)

### Lower Priority (Future Enhancement):
5. **Live Chat Integration** (Resource-dependent, high value when ready)

---

## ADDITIONAL QUICK WINS (Bonus Recommendations)

### 6. Add Exit-Intent Popup
- Capture leaving visitors
- Offer free consultation
- Low effort, medium impact

### 7. Implement Google Analytics 4 + Conversion Tracking
- Track form submissions
- Monitor user journeys
- Data-driven optimization

### 8. Create Blog/News Section
- Company updates
- Mental health awareness content
- SEO content freshness signal

### 9. Add Insurance Verification Tool
- Simple form to check coverage
- Reduces barrier to entry
- High conversion potential

### 10. Implement Appointment Reminder System
- Reduce no-shows
- SMS/email reminders
- Integrate with scheduling
```

---

## 📊 **FINAL DELIVERABLES**

At the end of your comprehensive audit, provide:

### **1. Executive Summary**
- Overall codebase health score (X/100)
- Critical issues requiring immediate attention
- Recommendations prioritized by impact/effort
- Estimated time to production-ready (if not already)

### **2. Detailed Reports** (as outlined above)
- Task 1: Cleanup Report
- Task 2: SEO Optimization Report
- Task 3: Deployment Readiness Report
- Task 4: Functional Testing Report
- Task 5: Strategic Improvements (minimum 3)

### **3. Action Plan**
- Immediate fixes (before deployment)
- Phase 1 improvements (post-launch)
- Phase 2 improvements (growth stage)

### **4. Risk Assessment**
- Any blockers to deployment
- Technical debt identified
- Security concerns

---

## ⚠️ **CRITICAL REMINDERS**

1. **DO NOT DELETE CODE WITHOUT VERIFICATION:** Triple-check that files/imports are truly unused before removal.

2. **TEST BEFORE RECOMMENDING:** If suggesting code changes, mentally test the logic or provide caveats.

3. **PROVIDE EVIDENCE:** Back up SEO recommendations with data, tools, or best practices.

4. **BE SPECIFIC:** Don't just say "improve SEO"—specify exactly what to add/change and where.

5. **CONSIDER CONTEXT:** This is a healthcare website—HIPAA, accessibility, and trust are paramount.

6. **BALANCE PERFECTION WITH PRAGMATISM:** Recommend improvements that provide real value, not just theoretical perfection.

---

## 🎯 **SUCCESS CRITERIA**

Your audit will be considered successful if it:

✅ Identifies legitimate unused code (zero false positives)  
✅ Provides actionable, specific SEO improvements  
✅ Confirms deployment readiness OR provides clear blockers  
✅ Verifies all interactive elements work correctly  
✅ Recommends 3+ strategic improvements with clear rationale  
✅ Produces reports that non-technical stakeholders can understand  
✅ Respects the "do no harm" principle (don't break working code)  

---

## 📝 **AGENT INSTRUCTIONS**

**You are now the elite auditor described above. Begin your comprehensive audit of the Tasel Health codebase.**

**Start with:**
1. A thorough review of the file structure
2. Systematic execution of Tasks 1-5
3. Generation of all required reports
4. Final executive summary with prioritized action items

**Remember:** Precision, thoroughness, and caution are your guiding principles. When in doubt, flag for human review rather than making assumptions.

**Good luck! The Tasel Health team is counting on your expertise to take their mental health clinic website to the next level. 🚀**

---

*End of Prompt*
