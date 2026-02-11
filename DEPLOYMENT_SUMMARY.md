# Tasel Health Website - Deployment & Updates Summary

**Date:** February 10, 2026
**Live URL:** [https://tasel-health.vercel.app/](https://tasel-health.vercel.app/)
**Production Repo:** [https://github.com/tolani01/Tasel-Health.git](https://github.com/tolani01/Tasel-Health.git)
**Review Repo:** [https://github.com/tolani01/tasel-health-review.git](https://github.com/tolani01/tasel-health-review.git)

---

## Overview

The Tasel Health website codebase underwent a team review cycle and was approved for production deployment. The reviewed codebase was migrated from the review repository to the production repository connected to Vercel for live hosting. Several post-review refinements were made before and during deployment.

---

## Repository Structure

| Remote | Repository | Purpose |
|--------|-----------|---------|
| `origin` | `tolani01/tasel-health-review` | Code review & development |
| `production` | `tolani01/Tasel-Health` | Production (Vercel auto-deploy) |

**Branches:**
- `master` — Main development branch (on review repo)
- `deploy-to-production` — Clean production-ready branch with Next.js app at root level, pushed to `production` remote's `main` branch

---

## Deployment Actions

### 1. Production Repository Migration

**Problem:** The review repo (`tasel-health-review`) stored the Next.js app inside a `tasel-health/` subdirectory, along with design documents and planning files at the root. The production repo (`Tasel-Health`) expected the Next.js app at the root level — `package.json`, `src/`, `public/`, `next.config.js`, etc. directly in the repo root.

**Solution:** Used `git subtree split` to extract only the `tasel-health/` subdirectory into a clean branch (`deploy-to-production`) with the app files at the root level, matching the expected Vercel project structure.

### 2. Vercel Configuration Fix

**Problem:** The `next.config.js` was configured for GitHub Pages static export deployment:
- `output: 'export'` forced static generation
- `basePath` and `assetPrefix` set for GitHub Pages
- `unoptimized: true` disabled image optimization
- `headers()` and `redirects()` functions were missing (incompatible with static export)

**Solution:** Updated `next.config.js` to restore Vercel-native settings:
- Removed `output: 'export'` (Vercel handles SSR natively)
- Removed `basePath` and `assetPrefix` (not needed on Vercel)
- Removed `unoptimized: true` (Vercel provides image optimization)
- Restored `headers()` for cache control on images and animations
- Restored `redirects()` for SEO (`/home` → `/`)

### 3. Ketamine/Spravato Added to Consultation Form

**Change:** Added "Ketamine/Spravato" as a service option in the "Schedule Your Free Consultation" modal's "Preferred Service" dropdown.

**File:** `src/components/sections/consultation-form.tsx`

**Updated dropdown options:**
1. TMS Therapy
2. Ketamine/Spravato *(new)*
3. Psychiatric Care
4. Therapy & Counseling
5. Comprehensive Care
6. Free Consultation

### 4. Turn-by-Turn Directions Removed from Location Page

**Problem:** The location page displayed detailed turn-by-turn driving directions only for the Oklahoma City office (From I-35 North, From I-40 East, From Downtown OKC), while the San Antonio location had none. This inconsistency looked unfinished.

**Solution:**
- Removed the entire directions data array and rendered directions section from `location-details.tsx`
- Restructured the layout: both location cards (OKC and San Antonio) now display side-by-side in a balanced two-column grid
- Centered the Facility Amenities section below both locations
- Updated the "Get Directions" button in `location-hero.tsx` to link directly to Google Maps instead of the removed `#directions` anchor
- Removed unused `Phone` import from lucide-react

**Files changed:**
- `src/components/sections/location-details.tsx`
- `src/components/sections/location-hero.tsx`

---

## Production Commit History

```
2274929 Remove turn-by-turn directions section, update Get Directions to Google Maps
cef7546 Add Ketamine/Spravato option to consultation form service dropdown
d879e4f Update next.config.js for Vercel deployment
202a3d7 Fix image paths for GitHub Pages basePath deployment
39a2cdb Remove non-functional Apply Online button from careers CTA
4d8706e Remove non-functional View Open Positions button from About dual CTA
35759b2 Remove API route that breaks static export
52fbeea Add GitHub Pages deployment with static export
c955552 Initial commit: Tasel Health website variation for review
```

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Icons:** Lucide React
- **Email:** EmailJS integration
- **Hosting:** Vercel (auto-deploys from `main` branch)
- **Repository:** GitHub (`tolani01/Tasel-Health`)

---

## Key Pages & Features

| Page | Route | Status |
|------|-------|--------|
| Home | `/` | Live |
| Services Hub | `/services` | Live |
| TMS Therapy | `/services/tms-therapy` | Live |
| Spravato/Ketamine | `/services/spravato-ketamine` | Live |
| Psychiatry | `/services/psychiatry` | Live |
| Counseling | `/services/counseling` | Live |
| Comprehensive Care | `/services/comprehensive-care` | Live |
| Insurance | `/insurance` | Live |
| Knowledge Hub | `/knowledge-hub` | Live |
| About | `/about` | Live |
| Careers | `/careers` | Live |
| Contact | `/contact` | Live |
| Location | `/location` | Live |
| Directions & Parking | `/directions` | Live |
| Service Areas | `/service-areas` | Live |

---

## Post-Deployment Notes

- Vercel auto-deploys whenever changes are pushed to the `main` branch of `tolani01/Tasel-Health`
- The `deploy-to-production` local branch is the source of truth for production pushes
- Any future changes should be made on `deploy-to-production`, committed, and pushed via:
  ```
  git push production deploy-to-production:main
  ```
- The `master` branch (review repo) should be kept in sync with equivalent changes for reference
