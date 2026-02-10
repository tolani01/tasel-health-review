# Tasel Health Website Development Guide

## Table of Contents
1. [Project Overview](#project-overview)
2. [HIPAA-Compliant Architecture](#hipaa-compliant-architecture)
3. [Technical Stack](#technical-stack)
4. [Design System](#design-system)
5. [Content Strategy](#content-strategy)
6. [E-E-A-T & Medical SEO](#e-e-a-t--medical-seo)
7. [Performance & Accessibility](#performance--accessibility)
8. [Page Structure & Requirements](#page-structure--requirements)
9. [Interactive Features](#interactive-features)
10. [TMS Animation System](#tms-animation-system)
11. [Patient Intake System](#patient-intake-system)
12. [Implementation Phases](#implementation-phases)
13. [File Structure](#file-structure)
14. [API Endpoints](#api-endpoints)
15. [Database Schema](#database-schema)
16. [Deployment](#deployment)

---

## Project Overview

### Mission
Build a world-class, production-ready website for Tasel Health, a futuristic outpatient mental health clinic specializing in BrainsWay Deep TMS™ therapy, psychiatric medication management, and counseling.

### Key Objectives
- Position TMS as flagship service while maintaining comprehensive mental health services
- Create highly engaging, SEO-optimized web experience
- Implement modern patient intake system
- Ensure HIPAA compliance and medical accuracy
- Mobile-first, accessible design

### Target Audience
- Patients seeking TMS therapy
- Individuals with treatment-resistant depression, OCD, anxiety
- Those interested in addiction treatment (smoking cessation)
- Healthcare providers and referral sources
- Insurance companies and case managers

---

## Simplified Architecture (No PHI Processing)

### **Single Domain Architecture**

**Website (www.taselhealth.com)**
```typescript
interface TaselHealthWebsite {
  domain: "www.taselhealth.com";
  purpose: "Marketing, education, lead generation, appointment requests";
  dataHandled: "Contact information only (no PHI)";
  hosting: "Standard web hosting (Vercel)";
  analytics: "Standard GA4 (no special PII restrictions needed)";
  compliance: "Standard business website compliance";
  
  features: [
    "Homepage with TMS focus",
    "Service information pages",
    "About us and team",
    "Contact forms (non-medical)",
    "Blog/Knowledge hub",
    "Interactive TMS animation",
    "Service interest forms",
    "Appointment request system",
    "Assessment tools (informational only)"
  ];
}
```

### **What We DON'T Collect (No PHI)**
```typescript
interface NoPHIPolicy {
  excluded: [
    "Medical history details",
    "Current medications", 
    "Specific diagnoses",
    "Insurance policy numbers",
    "SSN or detailed personal medical info",
    "Treatment records",
    "Clinical assessments",
    "Health status information"
  ];
  
  note: "All medical information collection happens during in-person/telehealth consultations";
}

### **Simplified Compliance (No PHI Processing)**

**1. Vendor Management & BAAs**
```typescript
interface HIPAAVendors {
  required: {
    hosting: "AWS/Azure with HIPAA BAA";
    email: "SendGrid/Mailgun with HIPAA BAA";
    forms: "TypeForm/Gravity Forms with HIPAA BAA";
    errorLogging: "Sentry with HIPAA configuration";
    analytics: "HIPAA-compliant analytics or GA4 with strict controls";
    backup: "Encrypted backup service with BAA";
  };
  
  dataFlow: {
    piiScrubbing: "Strip PII/PHI at edge before logging";
    encryption: "End-to-end encryption for all PHI";
    access: "Role-based access control (RBAC)";
    audit: "Complete audit trail for all PHI access";
  };
}
```

**2. Data Protection Controls**
```typescript
interface DataProtection {
  encryptionAtRest: "AES-256 for database and file storage";
  encryptionInTransit: "TLS 1.3 for all communications";
  accessControl: "Multi-factor authentication required";
  dataRetention: "Automatic purging per retention policy";
  backups: "Encrypted, geographically distributed";
  monitoring: "Real-time security monitoring and alerting";
}
```

**3. AI/LLM Safety Controls**
```typescript
interface LLMSafety {
  contentSource: "RAG on approved medical content only";
  guardrails: [
    "Not medical advice disclaimer",
    "PII scrubbing before model calls", 
    "Rate limiting per user/IP",
    "Human escalation triggers",
    "Clinical topic detection → 'Book consult' CTA"
  ];
  
  prohibitedActions: [
    "Medical diagnosis",
    "Treatment recommendations", 
    "Medication advice",
    "Emergency situation handling"
  ];
  
  escalation: {
    triggers: ["Medical questions", "Crisis keywords", "Complex queries"];
    action: "Immediate 'Book consultation' CTA + staff notification";
  };
}
```

**4. Privacy & Consent Management**
```typescript
interface PrivacyControls {
  consentManagement: {
    cookieBanner: "GDPR/CCPA compliant with granular controls";
    consentMode: "Google Consent Mode v2 implementation";
    preferences: "User-configurable privacy settings";
  };
  
  analytics: {
    ga4Config: "Disable form field and query param collection";
    piiExclusion: "Automatic PII detection and filtering";
    anonymization: "IP anonymization enabled";
    dataRetention: "Shortest possible retention periods";
  };
}
```

**5. Operational Controls**
```typescript
interface OperationalControls {
  accessManagement: {
    rbac: "Role-based access with least privilege";
    mfa: "Required for all admin access";
    sessionManagement: "Automatic timeout and secure sessions";
  };
  
  monitoring: {
    auditLogs: "Complete audit trail for all actions";
    securityMonitoring: "Real-time threat detection";
    performanceMonitoring: "System health and availability";
  };
  
  incidentResponse: {
    breachNotification: "Automated breach detection and notification";
    responseTeam: "Defined incident response team and procedures";
    documentation: "Incident response playbook";
  };
}
```

---

## Technical Stack

### Frontend Framework
- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **TailwindCSS** for styling
- **shadcn/ui** for components
- **Lucide React** for icons

### Animation & Interactivity
- **Three.js** for 3D TMS animations
- **Framer Motion** for UI animations
- **Lottie** for complex medical illustrations
- **React-PDF** for PDF generation

### Backend & Database
- **Next.js API Routes** for backend logic
- **PostgreSQL** for data storage
- **Prisma** for ORM
- **NextAuth.js** for authentication

### External Services
- **Vercel** for hosting and deployment
- **SendGrid** for email notifications
- **Stripe** for payment processing
- **Google Maps API** for location services

---

## Design System

### Color Palette
```css
:root {
  /* Primary Colors */
  --lavender: #9D84B7;
  --teal: #3AAFA9;
  
  /* Secondary Colors */
  --light-lavender: #B8A5D1;
  --light-teal: #5BC0BE;
  --dark-lavender: #7A6B95;
  --dark-teal: #2E8B87;
  
  /* Neutral Colors */
  --white: #FFFFFF;
  --light-gray: #F8F9FA;
  --gray: #6C757D;
  --dark-gray: #343A40;
  --black: #000000;
  
  /* Status Colors */
  --success: #28A745;
  --warning: #FFC107;
  --error: #DC3545;
  --info: #17A2B8;
}
```

### Typography
```css
/* Primary Font - Inter */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

/* Headings */
.heading-1 { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 3rem; line-height: 1.2; }
.heading-2 { font-family: 'Inter', sans-serif; font-weight: 600; font-size: 2.25rem; line-height: 1.3; }
.heading-3 { font-family: 'Inter', sans-serif; font-weight: 600; font-size: 1.875rem; line-height: 1.4; }

/* Body Text */
.body-large { font-family: 'Inter', sans-serif; font-weight: 400; font-size: 1.125rem; line-height: 1.6; }
.body-regular { font-family: 'Inter', sans-serif; font-weight: 400; font-size: 1rem; line-height: 1.5; }
.body-small { font-family: 'Inter', sans-serif; font-weight: 400; font-size: 0.875rem; line-height: 1.4; }
```

### Spacing System
```css
/* Spacing Scale (Tailwind-based) */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;     /* 24px */
--space-8: 2rem;       /* 32px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-24: 6rem;      /* 96px */
```

### Atomic Design System & Component Architecture

**Component Hierarchy (Atomic Design)**
```typescript
interface AtomicDesign {
  // Level 1: Atoms (Basic building blocks)
  atoms: {
    Button: "Base button with variants (primary, secondary, ghost)";
    Input: "Form input with validation states";
    Label: "Accessible form labels";
    Icon: "Lucide React icons with consistent sizing";
    Typography: "Text components (H1, H2, H3, P, Small)";
    Badge: "Status indicators (FDA Approved, etc.)";
    Avatar: "Team member placeholders";
    Divider: "Section separators";
  };

  // Level 2: Molecules (Combinations of atoms)
  molecules: {
    FormField: "Input + Label + Error message";
    SearchBox: "Input + Search icon + Submit button";
    Card: "Container + Header + Content + Actions";
    ServiceItem: "Icon + Title + Description + CTA";
    Testimonial: "Avatar + Quote + Attribution";
    ContactMethod: "Icon + Label + Link";
    BreadcrumbNav: "Breadcrumb links with separators";
  };

  // Level 3: Organisms (Complex UI components)
  organisms: {
    Header: "Logo + Navigation + CTA";
    Footer: "Links + Contact + Social + Legal";
    HeroSection: "Headline + Description + CTA + Background";
    ServicesGrid: "Collection of ServiceItem molecules";
    ContactForm: "Multiple FormField molecules + validation";
    TestimonialCarousel: "Multiple Testimonial molecules";
    TMSAnimation: "Interactive 3D component with controls";
  };

  // Level 4: Templates (Page-level layouts)
  templates: {
    LandingPageTemplate: "Header + Hero + Services + Testimonials + Footer";
    ServicePageTemplate: "Header + Hero + Content + Sidebar + Footer";
    ContactPageTemplate: "Header + Form + Map + Info + Footer";
  };

  // Level 5: Pages (Specific implementations)
  pages: {
    Homepage: "LandingPageTemplate with specific content";
    TMSTherapyPage: "ServicePageTemplate with TMS content";
    ContactPage: "ContactPageTemplate with Tasel Health info";
  };
}
```

### Component Design Tokens
```typescript
interface DesignTokens {
  // Color tokens (already defined above)
  colors: {
    primary: "--lavender (#9D84B7)";
    secondary: "--teal (#3AAFA9)";
    // ... existing color system
  };

  // Spacing tokens (already defined)
  spacing: {
    xs: "--space-1 (4px)";
    sm: "--space-2 (8px)";
    // ... existing spacing system
  };

  // Typography tokens
  typography: {
    fontFamily: "Inter, sans-serif";
    fontSize: {
      xs: "0.75rem"; // 12px
      sm: "0.875rem"; // 14px
      base: "1rem"; // 16px
      lg: "1.125rem"; // 18px
      xl: "1.25rem"; // 20px
      "2xl": "1.5rem"; // 24px
      "3xl": "1.875rem"; // 30px
      "4xl": "2.25rem"; // 36px
      "5xl": "3rem"; // 48px
    };
    fontWeight: {
      normal: "400";
      medium: "500";
      semibold: "600";
      bold: "700";
    };
  };

  // Component-specific tokens
  components: {
    button: {
      borderRadius: "8px";
      padding: "12px 24px";
      transition: "150ms ease-in-out";
    };
    card: {
      borderRadius: "12px";
      shadow: "shadow-lg";
      padding: "24px";
    };
    input: {
      borderRadius: "6px";
      border: "1px solid var(--gray)";
      focusBorder: "2px solid var(--lavender)";
    };
  };
}
```

### Component Documentation Strategy
```typescript
interface ComponentDocumentation {
  storybook: {
    purpose: "Component library documentation and testing";
    structure: [
      "Atom components with all variants",
      "Molecule component combinations",
      "Organism interaction examples",
      "Accessibility testing scenarios"
    ];
  };

  designSystem: {
    documentation: "Living style guide with usage guidelines";
    examples: "Real usage examples for each component";
    dosAndDonts: "Component usage best practices";
    accessibilityNotes: "Accessibility requirements per component";
  };
}
```

### Component Design Principles
- **Rounded corners**: 8px for buttons, 12px for cards/modals, 6px for inputs
- **Shadows**: Subtle elevation with `shadow-sm` to `shadow-lg`
- **Borders**: 1px solid with brand colors, 2px for focus states
- **Hover states**: Smooth transitions (150ms ease-in-out)
- **Focus states**: Accessible focus rings (2px outline minimum)
- **Responsive**: All components work across breakpoints
- **Accessible**: WCAG 2.2 AA compliant by default

---

## Content Strategy

### Brand Positioning
**Primary Tagline**: "Compassionate Care. Evidence-Based Treatment."
**Secondary Tagline**: "Advanced TMS Therapy + Complete Mental Health Care"

### Service Hierarchy
1. **BrainsWay Deep TMS™** (Flagship service)
2. **Psychiatric Medication Management** (Equal prominence)
3. **Counseling & Therapy** (Equal prominence)
4. **Telehealth Services** (Supporting service)

### Content Pillars
1. **TMS Education**: BrainsWay Deep TMS™ technology and benefits
2. **Mental Health Awareness**: Depression, anxiety, OCD, addiction
3. **Treatment Options**: Comprehensive care approach
4. **Patient Success**: Testimonials and case studies
5. **Insurance & Access**: Coverage and payment options

---

## Page Structure & Requirements

### 1. Homepage (`/`)
```typescript
interface HomepageSections {
  hero: {
    headline: "Advanced TMS Therapy + Complete Mental Health Care";
    subheadline: "Compassionate Care. Evidence-Based Treatment.";
    cta: "Book TMS Consultation";
    subCta: "Learn how TMS works";
    background: "TMS animation or hero video";
  };
  
  servicesOverview: {
    title: "Our Services";
    services: [
      {
        name: "BrainsWay Deep TMS™";
        description: "FDA-cleared, noninvasive brain stimulation therapy";
        icon: "Brain icon";
        link: "/services/tms-therapy";
      },
      {
        name: "Psychiatric Services";
        description: "Expert medication management and evaluation";
        icon: "Medical cross icon";
        link: "/services/psychiatry";
      },
      {
        name: "Counseling & Therapy";
        description: "Individual and group therapy sessions";
        icon: "Heart/conversation icon";
        link: "/services/counseling";
      }
    ];
  };
  
  whyChooseUs: {
    title: "Why Choose Tasel Health";
    features: [
      "BrainsWay Deep TMS™ technology";
      "Comprehensive mental health care";
      "Insurance accepted";
      "Telehealth available";
      "Compassionate team approach";
    ];
  };
  
  testimonials: {
    title: "Patient Success Stories";
    carousel: "Mix of TMS and traditional therapy testimonials";
  };
  
  insurance: {
    title: "Insurance & Payment";
    content: "Most insurance plans accepted + payment plans available";
  };
}
```

### 2. TMS Therapy Page (`/services/tms-therapy`)
```typescript
interface TMSServicePage {
  hero: {
    headline: "BrainsWay Deep TMS™ - Advanced Mental Health Treatment";
    subheadline: "FDA-cleared, noninvasive treatment using cutting-edge Deep TMS technology";
    technology: "Powered by BrainsWay Deep TMS™";
    cta: "Schedule Deep TMS Consultation";
  };
  
  fdaApproved: {
    title: "FDA-Cleared BrainsWay Deep TMS™ Treatments";
    conditions: [
      {
        condition: "Major Depressive Disorder";
        fdaStatus: "FDA Cleared";
        description: "Safe and effective treatment for depression";
        coverage: "Medicare and majority of private insurers";
        sessionTime: "20 minutes";
        protocol: "Standard and Accelerated protocols available";
      },
      {
        condition: "Anxious Depression";
        fdaStatus: "FDA Cleared";
        description: "Reduces comorbid anxiety symptoms in depression patients";
        sessionTime: "20 minutes";
      },
      {
        condition: "Late-Life Depression";
        fdaStatus: "FDA Cleared (Recent)";
        description: "Specifically for elderly patients aged 68-86";
        sessionTime: "20 minutes";
      },
      {
        condition: "Obsessive-Compulsive Disorder";
        fdaStatus: "FDA Cleared (de novo)";
        description: "First FDA-cleared noninvasive device for OCD";
        sessionTime: "20 minutes";
        coverage: "Building coverage with private insurers";
      },
      {
        condition: "Smoking Addiction";
        fdaStatus: "FDA Cleared";
        description: "Short-term smoking cessation treatment";
        significance: "First TMS device cleared for addiction treatment";
        sessionTime: "20 minutes";
      }
    ];
  };
  
  technology: {
    title: "Why BrainsWay Deep TMS™?";
    advantages: [
      "Stimulates deeper and broader brain areas than traditional TMS";
      "20-minute treatment sessions";
      "Noninvasive with no systemic side effects";
      "FDA-cleared for multiple conditions";
      "Effective for medication-resistant patients";
    ];
    coilTechnology: {
      h1: "H1 Coil - Depression and mood regulation";
      h4: "H4 Coil - OCD and related conditions";
      h7: "H7 Coil - Addiction and smoking cessation";
    };
  };
  
  animation: {
    title: "How Deep TMS Works";
    component: "Interactive 3D TMS animation";
    features: [
      "3D brain model with BrainsWay coils";
      "Treatment process visualization";
      "Interactive controls";
      "Educational information panels";
    ];
  };
  
  process: {
    title: "Treatment Process";
    steps: [
      "Initial consultation and evaluation";
      "Treatment planning and coil selection";
      "Daily 20-minute sessions";
      "Progress monitoring and adjustment";
      "Follow-up and maintenance";
    ];
  };
  
  candidacy: {
    title: "Am I a Candidate for Deep TMS?";
    assessment: "Interactive candidacy assessment tool";
    criteria: [
      "Treatment-resistant depression";
      "OCD symptoms";
      "Smoking addiction";
      "Age and health requirements";
      "Insurance coverage verification";
    ];
  };
  
  insurance: {
    title: "Insurance Coverage";
    coverage: {
      mdd: "Medicare and majority of private insurers";
      ocd: "Building coverage with private insurers";
      smokingCessation: "Coverage varies by insurance provider";
    };
    verification: "Real-time insurance verification tool";
  };
}
```

### 3. About Us Page (`/about`)
```typescript
interface AboutPage {
  mission: {
    title: "Our Mission";
    content: "To provide compassionate, evidence-based mental health care using cutting-edge technology and traditional therapeutic approaches.";
  };
  
  team: {
    title: "Our Compassionate Care Team";
    description: "Our team of dedicated mental health professionals brings together decades of combined experience in providing compassionate, evidence-based care.";
    structure: {
      clinicalTeam: {
        title: "Clinical Excellence";
        description: "Licensed psychiatrists, therapists, and TMS specialists";
        count: "15+ professionals";
      };
      supportStaff: {
        title: "Patient Support";
        description: "Care coordinators, insurance specialists, and patient advocates";
        count: "10+ support staff";
      };
      administrativeTeam: {
        title: "Administrative Excellence";
        description: "Scheduling coordinators, billing specialists, and quality assurance";
        count: "8+ administrative staff";
      };
    };
    values: [
      "Compassionate Care";
      "Evidence-Based Treatment";
      "Patient-Centered Approach";
      "Continuous Learning";
      "Cultural Sensitivity";
    ];
  };
  
  facility: {
    title: "Our Facility";
    description: "State-of-the-art mental health clinic equipped with the latest BrainsWay Deep TMS™ technology";
    features: [
      "BrainsWay Deep TMS™ treatment rooms";
      "Comfortable therapy spaces";
      "Private consultation rooms";
      "Telehealth capabilities";
      "Accessible design";
    ];
  };
}
```

### 4. Contact Page (`/contact`)
```typescript
interface ContactPage {
  contactInfo: {
    phone: "(405) 934-1681";
    email: "support@taselhealth.com";
    address: "9210 S Western, Suite A-21 Oklahoma City, OK 73139-4982";
    hours: "Monday-Friday: 8:00 AM - 6:00 PM";
  };
  
  map: {
    component: "Google Maps embed";
    location: "Oklahoma City clinic location";
  };
  
  contactForm: {
    title: "Send us a message";
    fields: [
      "Name (required)";
      "Email (required)";
      "Phone";
      "Subject";
      "Message (required)";
      "Preferred contact method";
    ];
    disclaimer: "HIPAA-compliant form for non-sensitive inquiries only";
  };
  
  sms: {
    title: "Text for Quick Response";
    number: "Text CARE to 78579";
    description: "For quick questions and appointment requests";
  };
}
```

### 5. Contact & Interest Form (`/contact` & `/get-started`)
```typescript
interface ContactPage {
  title: "Get Started with Tasel Health";
  description: "Request information about our services and schedule a consultation";
  
  contactForm: {
    title: "Request Consultation";
    fields: [
      {
        field: "Personal Information";
        inputs: [
          "Full Name (required)",
          "Email Address (required)", 
          "Phone Number (required)",
          "Preferred Contact Method (email/phone/text)"
        ];
      },
      {
        field: "Service Interest";
        inputs: [
          "Primary Interest (TMS Therapy, Psychiatry, Counseling, Not Sure)",
          "How did you hear about us?",
          "Urgency Level (Routine, Urgent, Just researching)"
        ];
      },
      {
        field: "Appointment Preferences";
        inputs: [
          "Preferred days of the week",
          "Preferred time of day",
          "Location preference (In-person, Telehealth, Either)",
          "Special accommodations needed"
        ];
      },
      {
        field: "Insurance & General Information";
        inputs: [
          "Insurance Provider Name (optional)",
          "Referral Source (self, doctor, family, etc.)",
          "Additional questions or concerns (optional)"
        ];
      }
    ];
  };
  
  features: [
    "Simple 4-section form",
    "Email confirmation to patient and staff",
    "Lead scoring and routing",
    "Follow-up automation",
    "No medical information collected"
  ];
  
  disclaimer: "This form is for appointment requests only. Medical information will be collected during your consultation.";
}
```

---

## Interactive Features

### 1. TMS Animation System
```typescript
interface TMSAnimation {
  technology: "Three.js + WebGL";
  components: {
    brainModel: "3D brain with detailed regions";
    tmsCoil: "Animated BrainsWay coil positioning";
    magneticField: "Visual magnetic field representation";
    neuralActivity: "Neural pathway activation visualization";
    treatmentAreas: "Highlighted treatment regions";
  };
  
  interactions: [
    "Click to explore different brain regions";
    "Hover for detailed information";
    "Play/pause treatment simulation";
    "Adjust treatment intensity";
    "View before/after comparisons";
    "Switch between H1, H4, H7 coils";
  ];
  
  scenarios: {
    depression: {
      coil: "H1 Coil";
      target: "Deeper prefrontal cortex regions";
      duration: "20 minutes";
      protocol: "Standard or Accelerated";
      fdaStatus: "FDA Cleared";
    };
    ocd: {
      coil: "H4 Coil";
      target: "OCD-specific brain networks";
      duration: "20 minutes";
      fdaStatus: "FDA Cleared (de novo)";
    };
    smokingCessation: {
      coil: "H7 Coil";
      target: "Addiction and reward pathways";
      duration: "20 minutes";
      fdaStatus: "FDA Cleared";
      significance: "First TMS device for addiction";
    };
  };
}
```

### 2. Educational Assessment Tools (Informational Only)
```typescript
interface EducationalAssessments {
  tmsCandidacy: {
    title: "Learn About TMS Therapy";
    purpose: "Educational tool to understand TMS treatment";
    questions: [
      "General questions about depression treatment",
      "Interest in non-medication approaches",
      "Previous treatment experience (general)",
      "Treatment goals and preferences"
    ];
    output: "Educational information + 'Schedule consultation to learn more'";
    disclaimer: "This is for informational purposes only. Not a medical assessment.";
  };
  
  serviceGuide: {
    title: "Which Service Might Be Right for You?";
    purpose: "Help visitors understand different treatment options";
    questions: [
      "What are you hoping to address?",
      "Preferred treatment approach",
      "Scheduling preferences",
      "Previous experience with mental health care"
    ];
    output: "Service recommendations + consultation CTA";
  };
  
  educationalQuiz: {
    title: "TMS Knowledge Quiz";
    purpose: "Interactive education about TMS therapy";
    content: "Facts about BrainsWay Deep TMS™, FDA approvals, success rates";
    output: "Educational results + service information";
  };
  
  note: "All tools are educational only. No medical information collected or stored.";
}
```

### 3. Insurance Information (Static Content Only)
```typescript
interface InsuranceInformation {
  purpose: "Static information about insurance coverage";
  content: {
    generalCoverage: "Information about which insurance plans typically cover TMS";
    coverageByCondition: {
      mdd: "Medicare and majority of private insurers typically cover TMS for depression";
      ocd: "Growing coverage for OCD treatment";
      smokingCessation: "Coverage varies by provider";
    };
    
    disclaimer: "Insurance coverage varies. Please contact your insurance provider or our office to verify coverage.";
    cta: "Contact us for insurance verification assistance";
  };
  
  note: "No real-time verification - information only";
}
```

---

## SEO & Performance

### SEO Strategy
```typescript
interface SEOStrategy {
  primaryKeywords: [
    "TMS therapy Oklahoma City";
    "BrainsWay Deep TMS";
    "TMS depression treatment";
    "TMS OCD treatment";
    "TMS anxiety treatment";
    "TMS smoking cessation";
    "mental health clinic Oklahoma";
  ];
  
  longTailKeywords: [
    "FDA approved TMS for depression";
    "Deep TMS vs traditional TMS";
    "TMS treatment for addiction";
    "TMS therapy insurance coverage";
    "transcranial magnetic stimulation Oklahoma";
  ];
  
  contentClusters: {
    tmsHub: {
      "TMS for Depression";
      "TMS for OCD";
      "TMS for Anxiety";
      "TMS for Smoking Cessation";
      "TMS Insurance Coverage";
      "TMS Success Stories";
    };
    mentalHealthServices: {
      "Psychiatric Services";
      "Counseling & Therapy";
      "Telehealth Services";
      "Insurance & Payment";
    };
    localSEO: {
      "Mental Health Oklahoma City";
      "TMS Therapy Oklahoma";
      "Depression Treatment OKC";
      "Anxiety Therapy Oklahoma";
    };
  };
}
```

### Technical SEO
```typescript
interface TechnicalSEO {
  metaTags: {
    title: "Dynamic titles per page";
    description: "Compelling meta descriptions";
    keywords: "Relevant keyword targeting";
    ogTags: "Social media optimization";
  };
  
  schemaMarkup: {
    medicalClinic: "Healthcare facility schema";
    medicalService: "TMS therapy service schema";
    faq: "FAQ schema for common questions";
    review: "Patient testimonial schema";
  };
  
  performance: {
    coreWebVitals: {
      lcp: "< 2.5s (non-negotiable budget)";
      inp: "< 200ms (replaces FID as of March 2024)";
      cls: "< 0.1 (non-negotiable budget)";
    };
    
    budgetEnforcement: {
      buildPipeline: "Lighthouse CI fails builds exceeding budgets";
      monitoring: "Real-time CWV monitoring in production";
      alerts: "Performance regression alerts";
    };
    
    optimization: [
      "Critical resource prioritization",
      "Image optimization (AVIF → WebP → JPEG)",
      "Progressive loading (static → Lottie → 3D)",
      "Code splitting by route and component",
      "Lazy loading below-the-fold content",
      "CDN implementation with edge caching",
      "Service worker for offline functionality"
    ];
    
    internalLinking: {
      topicalClusters: "TMS hub → supporting pages → conversion pages";
      contextualLinks: "Related service suggestions throughout content";
      breadcrumbs: "Clear navigation hierarchy";
      sitemap: "XML sitemap with priority weighting";
    };
  };
}
```

---

## Implementation Phases

### Phase 0: Compliance & Architecture (Week 1)
- [ ] **CRITICAL**: Set up split architecture (www vs care subdomain)
- [ ] HIPAA-compliant hosting setup (AWS/Azure with BAAs)
- [ ] Security controls implementation (encryption, access)
- [ ] Privacy compliance setup (consent management, analytics config)
- [ ] Performance budgets and monitoring setup

### Phase 1: Foundation (Weeks 2-3)
- [ ] Next.js project setup with TypeScript and performance optimization
- [ ] TailwindCSS and shadcn/ui configuration
- [ ] Basic page structure with accessibility compliance
- [ ] Logo integration and branding
- [ ] Mobile-first responsive design with Core Web Vitals monitoring

### Phase 2: Core Pages (Weeks 3-4)
- [ ] Homepage with hero section and services overview
- [ ] TMS therapy page with BrainsWay content
- [ ] About us page with team structure
- [ ] Contact page with form and map
- [ ] Basic SEO implementation

### Phase 3: Interactive Features (Weeks 5-6)
- [ ] TMS animation system with Three.js
- [ ] Patient intake form with multi-step process
- [ ] Assessment tools and calculators
- [ ] Insurance verification system
- [ ] PDF generation for intake forms

### Phase 4: Advanced Features (Weeks 7-8)
- [ ] Patient portal integration
- [ ] Booking system with calendar integration
- [ ] AI chatbot implementation
- [ ] Advanced SEO and performance optimization
- [ ] Accessibility compliance (WCAG 2.1 AA)

### Phase 5: Testing & Launch (Weeks 9-10)
- [ ] Comprehensive testing across devices
- [ ] Performance optimization
- [ ] Security audit and HIPAA compliance
- [ ] Content review and medical accuracy
- [ ] Deployment to Vercel

---

## File Structure

```
tasel-health/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   ├── tms-therapy/
│   │   │   └── page.tsx
│   │   ├── psychiatry/
│   │   │   └── page.tsx
│   │   └── counseling/
│   │       └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── intake/
│   │   └── page.tsx
│   ├── knowledge-hub/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   └── api/
│       ├── intake/
│       │   └── route.ts
│       ├── insurance/
│       │   └── route.ts
│       └── pdf/
│           └── route.ts
├── components/
│   ├── atoms/
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── icon.tsx
│   │   ├── typography.tsx
│   │   ├── badge.tsx
│   │   ├── avatar.tsx
│   │   └── divider.tsx
│   ├── molecules/
│   │   ├── form-field.tsx
│   │   ├── search-box.tsx
│   │   ├── card.tsx
│   │   ├── service-item.tsx
│   │   ├── testimonial.tsx
│   │   ├── contact-method.tsx
│   │   └── breadcrumb-nav.tsx
│   ├── organisms/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── hero-section.tsx
│   │   ├── services-grid.tsx
│   │   ├── contact-form.tsx
│   │   ├── testimonial-carousel.tsx
│   │   └── tms-animation.tsx
│   ├── templates/
│   │   ├── landing-page-template.tsx
│   │   ├── service-page-template.tsx
│   │   └── contact-page-template.tsx
│   ├── pages/
│   │   ├── homepage.tsx
│   │   ├── tms-therapy-page.tsx
│   │   └── contact-page.tsx
│   └── ui/ (shadcn/ui components)
│       ├── shadcn-button.tsx
│       ├── shadcn-form.tsx
│       └── ...
├── lib/
│   ├── utils.ts
│   ├── validations.ts
│   ├── pdf-generator.ts
│   └── insurance-api.ts
├── public/
│   ├── images/
│   │   ├── logos/
│   │   │   ├── tasel-health-logo.svg
│   │   │   ├── tasel-health-logo-white.png
│   │   │   └── tasel-health-logo-clean.png
│   │   ├── tms/
│   │   │   ├── brainsway-device.jpg
│   │   │   ├── tms-treatment-room.jpg
│   │   │   └── tms-coils.jpg
│   │   └── clinic/
│   │       ├── clinic-exterior.jpg
│   │       ├── waiting-room.jpg
│   │       └── therapy-room.jpg
│   ├── videos/
│   │   ├── hero/
│   │   │   ├── what_is_tms_hero.mp4
│   │   │   ├── what_is_tms_hero.webm
│   │   │   └── what_is_tms_poster.jpg
│   │   ├── educational/
│   │   │   ├── understanding_depression.mp4
│   │   │   ├── anxiety_and_brain.mp4
│   │   │   ├── why_therapy_matters.mp4
│   │   │   └── captions/
│   │   │       ├── depression_en.vtt
│   │   │       ├── anxiety_en.vtt
│   │   │       └── therapy_en.vtt
│   │   ├── process/
│   │   │   ├── tms_treatment_process.mp4
│   │   │   ├── tms_success_stories.mp4
│   │   │   └── is_tms_right_for_you.mp4
│   │   └── clinic/
│   │       ├── welcome_to_tasel.mp4
│   │       ├── meet_your_team.mp4
│   │       └── facility_tour.mp4
│   ├── animations/
│   │   ├── logo_animations/
│   │   │   ├── tasel_intro.json
│   │   │   ├── tasel_outro.json
│   │   │   └── tasel_transition.json
│   │   ├── medical/
│   │   │   ├── brain_tms.json
│   │   │   ├── neural_pathways.json
│   │   │   └── treatment_progress.json
│   │   └── icons/
│   │       ├── depression_icon.svg
│   │       ├── anxiety_icon.svg
│   │       └── therapy_icon.svg
│   └── icons/
│       ├── brain-icon.svg
│       ├── medical-cross.svg
│       └── heart-icon.svg
├── content/
│   ├── blog/
│   │   ├── tms-therapy-benefits.md
│   │   ├── depression-treatment-options.md
│   │   └── anxiety-management-strategies.md
│   └── faqs/
│       ├── tms-faqs.md
│       ├── insurance-faqs.md
│       └── general-faqs.md
├── types/
│   ├── intake.ts
│   ├── tms.ts
│   └── common.ts
├── styles/
│   ├── globals.css
│   └── components.css
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── docs/
│   ├── api.md
│   ├── deployment.md
│   └── content-guidelines.md
├── package.json
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── README.md
```

---

## API Endpoints

### Intake System
```typescript
// POST /api/intake/submit
interface IntakeSubmission {
  personalInfo: PersonalInfo;
  serviceSelection: ServiceSelection;
  insurance: InsurancePayment;
  medicalHistory: MedicalHistory;
  referral: ReferralInfo;
  preferences: AppointmentPreferences;
}

// GET /api/intake/status/:patientId
interface IntakeStatus {
  patientId: string;
  status: 'pending' | 'under_review' | 'scheduled' | 'contacted';
  nextSteps: string[];
  estimatedWaitTime?: string;
}

// POST /api/intake/generate-pdf
interface PDFGeneration {
  patientId: string;
  formData: IntakeFormData;
  includeInstructions: boolean;
}
```

### Insurance Verification
```typescript
// POST /api/insurance/verify
interface InsuranceVerification {
  provider: string;
  policyNumber: string;
  memberId: string;
  dateOfBirth: string;
}

// GET /api/insurance/coverage/:condition
interface CoverageInfo {
  condition: string;
  covered: boolean;
  copay?: number;
  priorAuthRequired: boolean;
  notes?: string;
}
```

### TMS Assessment
```typescript
// POST /api/assessment/tms-candidacy
interface TMSCandidacyAssessment {
  diagnosis: string[];
  previousTreatments: string[];
  medicationHistory: string[];
  age: number;
  healthStatus: string;
}

// GET /api/assessment/results/:assessmentId
interface AssessmentResults {
  assessmentId: string;
  candidacyScore: number;
  recommendation: string;
  nextSteps: string[];
  consultationRequired: boolean;
}
```

---

## Database Schema

### Patients Table
```sql
CREATE TABLE patients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  personal_info JSONB NOT NULL,
  insurance_info JSONB,
  medical_history JSONB,
  referral_info JSONB,
  preferences JSONB,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Intake Submissions
```sql
CREATE TABLE intake_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID REFERENCES patients(id),
  form_data JSONB NOT NULL,
  pdf_url VARCHAR(255),
  status VARCHAR(50) DEFAULT 'pending',
  assigned_provider UUID,
  submitted_at TIMESTAMP DEFAULT NOW(),
  reviewed_at TIMESTAMP,
  scheduled_at TIMESTAMP
);
```

### TMS Assessments
```sql
CREATE TABLE tms_assessments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID REFERENCES patients(id),
  assessment_data JSONB NOT NULL,
  candidacy_score INTEGER,
  recommendation TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Insurance Verifications
```sql
CREATE TABLE insurance_verifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID REFERENCES patients(id),
  provider VARCHAR(255),
  policy_number VARCHAR(255),
  verified_at TIMESTAMP,
  coverage_details JSONB,
  status VARCHAR(50)
);
```

---

## Deployment

### Vercel Configuration
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "env": {
    "DATABASE_URL": "@database_url",
    "NEXTAUTH_SECRET": "@nextauth_secret",
    "SENDGRID_API_KEY": "@sendgrid_api_key",
    "GOOGLE_MAPS_API_KEY": "@google_maps_api_key"
  }
}
```

### Environment Variables
```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/tasel_health"

# Authentication
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="https://taselhealth.com"

# Email
SENDGRID_API_KEY="your-sendgrid-key"
FROM_EMAIL="noreply@taselhealth.com"

# External APIs
GOOGLE_MAPS_API_KEY="your-google-maps-key"
INSURANCE_API_KEY="your-insurance-api-key"

# File Storage
UPLOADTHING_SECRET="your-uploadthing-secret"
UPLOADTHING_APP_ID="your-uploadthing-app-id"
```

### Performance Monitoring
```typescript
// next.config.js
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  httpAgentOptions: {
    keepAlive: true,
  },
};
```

---

## Content Guidelines

### Medical Accuracy
- All medical claims must be FDA-accurate
- BrainsWay Deep TMS™ specifications must be current
- Insurance coverage information must be verified
- Patient testimonials must be authentic and HIPAA-compliant

### SEO Best Practices
- Target 2-3 primary keywords per page
- Include local SEO elements (Oklahoma City, OK)
- Use semantic HTML5 structure
- Implement proper heading hierarchy (H1, H2, H3)
- Include alt text for all images

### Accessibility Requirements (WCAG 2.2 AA)
- **WCAG 2.2 AA compliance** (upgraded from 2.1 for 2024 standards)
- **Screen reader compatibility** (NVDA, JAWS, VoiceOver testing)
- **Keyboard navigation support** (Tab, Enter, Space, Arrow keys)
- **Color contrast ratios** 
  - 4.5:1 for normal text (18px and under)
  - 3:1 for large text (19px+ or 14px+ bold)
  - 3:1 for non-text elements (buttons, icons, form controls)
- **Focus management** 
  - Visible focus indicators (2px outline minimum)
  - Logical tab order throughout all pages
  - Focus trapping in modals and overlays
- **Alternative text** for all images, charts, and visual content
- **Form accessibility**
  - Clear labels for all form fields
  - Error messages associated with fields
  - Required field indication
- **Responsive design** supporting up to 400% zoom without horizontal scroll

### Brand Voice
- Professional yet approachable
- Evidence-based and innovative
- Compassionate and understanding
- Accessible and inclusive
- Focus on patient outcomes

---

## Maintenance & Updates

### Regular Updates
- Monthly content review for medical accuracy
- Quarterly SEO performance analysis
- Annual design refresh and technology updates
- Continuous monitoring of BrainsWay updates and FDA changes

### Content Management
- Blog content for SEO and patient education
- FAQ updates based on patient inquiries
- Testimonial collection and rotation
- Insurance coverage updates

### Technical Maintenance
- Security updates and patches
- Performance monitoring and optimization
- Database backups and maintenance
- Third-party service monitoring

---

## Critical Updates Based on Expert Review

### **🔒 Simplified Architecture (UPDATED - NO PHI PROCESSING)**
- **Single domain**: www.taselhealth.com for all functionality
- **No PHI collection**: Website collects contact info only, not medical data
- **Standard compliance**: Business website standards, not HIPAA requirements
- **Lead generation focus**: Appointment requests and service interest forms

### **⭐ E-E-A-T Medical SEO (NEW - CRITICAL)**
- **Medical governance**: Editorial policy with clinical review board
- **Authority signals**: "Reviewed by [Licensed Clinician]" on all medical content
- **Schema markup**: Medical organization, physician, and FAQ schema
- **Programmatic SEO**: Location + condition pages for maximum coverage

### **⚡ Performance Budget Enforcement (NEW - CRITICAL)**
- **Core Web Vitals budgets**: LCP <2.5s, CLS <0.1, INP <200ms (non-negotiable)
- **3D Animation strategy**: Load static first, defer 3D until in-viewport
- **Progressive loading**: Lottie → 3D enhancement based on connection quality
- **Build pipeline**: Lighthouse CI to fail builds that exceed budgets

### **♿ Accessibility Excellence (UPGRADED TO WCAG 2.2 AA)**
- **WCAG 2.2 AA compliance**: Latest 2024 standards with enhanced mobile support
- **Comprehensive testing**: NVDA, JAWS, VoiceOver, and keyboard navigation testing
- **Focus management**: Visible focus indicators, logical tab order, modal focus trapping
- **Color accessibility**: 4.5:1 contrast for text, 3:1 for UI components
- **Spanish i18n planning**: Architecture ready for Spanish localization
- **Inclusive design**: High contrast mode, reduced motion options, semantic HTML

### **🏗️ Component-Driven Development (NEW - ATOMIC DESIGN)**
- **Atomic design methodology**: Atoms → Molecules → Organisms → Templates → Pages
- **Design token system**: Consistent spacing, colors, typography tokens
- **Component documentation**: Storybook for component library and testing
- **Reusable architecture**: Fast iteration, A/B testing, consistent UX
- **Responsive components**: All components work across breakpoints by default

---

This comprehensive guide provides everything needed to build a world-class website for Tasel Health focused on lead generation and service information. The documentation covers technical implementation, content strategy, design system, compliance requirements, and all the features discussed in our planning sessions.

**Key differentiators from typical healthcare websites:**
- **Lead generation focus** without PHI processing complexity
- **Medical SEO excellence** with E-E-A-T optimization
- **Performance budgets** ensuring 3D animations don't hurt conversions
- **Progressive enhancement** providing excellent UX across all devices

---

## Updated APIs & Tools Required (Simplified - No PHI)

### **🌐 Standard Web Services (No HIPAA Requirements)**

**1. Hosting & Infrastructure**
```typescript
interface StandardHosting {
  hosting: "Vercel Pro (recommended) or Netlify";
  database: "Supabase, PlanetScale, or PostgreSQL";
  storage: "Standard cloud storage for images/assets";
  ssl: "Standard HTTPS/SSL (included with hosting)";
  backup: "Standard automated backups";
  
  note: "No HIPAA-compliant hosting needed since no PHI is processed";
}
```

**2. Communication Services**
```typescript
interface CommunicationServices {
  email: {
    service: "Standard email service (SendGrid, Mailgun, or Resend)";
    purpose: "Contact form confirmations, appointment requests";
    requirements: "No HIPAA BAA needed";
  };
  
  sms: {
    service: "Twilio (standard plan) for 'Text CARE to 78579'";
    purpose: "Marketing and appointment reminders";
    requirements: "Standard business account";
  };
  
  forms: {
    service: "React Hook Form + Zod validation";
    purpose: "Contact forms and service interest forms";
    storage: "Contact information only";
  };
}
```

**3. Analytics & Marketing**
```typescript
interface MarketingServices {
  analytics: {
    service: "Google Analytics 4 (standard configuration)";
    purpose: "Website traffic and conversion tracking";
    configuration: "Standard business website setup";
  };
  
  seo: {
    services: ["Google Search Console", "Google My Business"];
    purpose: "Local SEO and search performance";
  };
  
  advertising: {
    platforms: ["Google Ads", "Facebook/Meta Ads"];
    purpose: "Lead generation campaigns";
    targeting: "Mental health and TMS keywords";
  };
}
```

**4. Development Services**
```typescript
interface DevelopmentServices {
  framework: "Next.js 14+ with App Router";
  styling: "TailwindCSS + shadcn/ui";
  animations: "Framer Motion + Three.js for TMS animation";
  
  apis_needed: [
    "Google Maps API (for location)",
    "Email service API (for contact forms)",
    "SMS service API (for text campaigns)"
  ];
  
  external_services: [
    "Calendly or Acuity (for appointment booking)",
    "Standard payment processing (if needed for consultations)"
  ];
}
```

### **📋 Information Required from You**

**Business Information:**
- [ ] **Google My Business** access for local SEO
- [ ] **Domain registrar** access for DNS setup
- [ ] **Current contact information** (phone, email, address)
- [ ] **Service offerings** and pricing (if displayed)
- [ ] **Team information** (for About page - no individual bios needed)

**Content Assets:**
- [ ] **Logo files** (already provided)
- [ ] **Clinic photos** (interior, exterior, equipment)
- [ ] **Service descriptions** and benefits
- [ ] **Patient testimonials** (with proper consent)
- [ ] **Educational content** about TMS and mental health

**Integrations Needed:**
- [ ] **Booking system preference** (Calendly, Acuity, or custom)
- [ ] **Email marketing** platform (if desired)
- [ ] **Phone system** integration (for call tracking)

### **💰 Estimated Monthly Costs (Simplified)**

**Essential Services (Month 1-3):**
```
- Vercel Pro hosting: $20/month
- Database (Supabase): $25/month  
- Email service: $15/month
- Google Workspace: $6/user/month
- Domain + SSL: $15/year
- Total: ~$70-90/month
```

**With Marketing (Month 4+):**
```
- Above services: $70-90/month
- Google Ads budget: $500-1000/month (your choice)
- Booking system: $25-50/month
- Analytics tools: $50/month (optional)
- Total: $650-1200/month (including ad spend)
```

### **🧪 Framework Compliance Testing Strategy**

**Core Web Vitals Testing**
```typescript
interface PerformanceTesting {
  tools: [
    "Lighthouse CI (build pipeline integration)",
    "WebPageTest (real-world performance)",
    "Chrome DevTools (development testing)",
    "PageSpeed Insights (Google's perspective)"
  ];
  
  budgetEnforcement: {
    prebuild: "Lighthouse CI fails builds exceeding CWV budgets";
    staging: "Performance testing on staging before production";
    production: "Real User Monitoring (RUM) for ongoing monitoring";
  };
  
  testingSchedule: {
    every_commit: "Lighthouse CI runs on every pull request";
    weekly: "Comprehensive performance audit";
    monthly: "Full site performance review";
  };
}
```

**Accessibility Testing (WCAG 2.2 AA)**
```typescript
interface AccessibilityTesting {
  automated: [
    "axe-core integration in build pipeline",
    "Pa11y automated accessibility testing",
    "Lighthouse accessibility audit",
    "ESLint jsx-a11y plugin"
  ];
  
  manual: [
    "Keyboard navigation testing",
    "Screen reader testing (NVDA, JAWS, VoiceOver)", 
    "Color contrast verification",
    "Focus indicator testing",
    "High contrast mode testing"
  ];
  
  realUser: [
    "Accessibility user testing sessions",
    "Feedback from users with disabilities",
    "Mobile accessibility testing"
  ];
}
```

**Component Testing (Atomic Design)**
```typescript
interface ComponentTesting {
  storybook: {
    purpose: "Visual component testing and documentation";
    tests: [
      "All component variants and states",
      "Responsive behavior across breakpoints",
      "Accessibility compliance per component",
      "Interactive behavior testing"
    ];
  };
  
  jest: {
    purpose: "Unit testing for component logic";
    coverage: "90%+ test coverage for components";
  };
  
  playwright: {
    purpose: "End-to-end component interaction testing";
    tests: "User journeys across component combinations";
  };
}
```

### **🚀 Updated Implementation Timeline (Framework-Compliant)**

**Week 1: Foundation & Framework Setup**
- [ ] Next.js project with TypeScript and performance monitoring
- [ ] Atomic design component structure setup
- [ ] Design token system implementation
- [ ] Accessibility testing tools integration
- [ ] Core Web Vitals monitoring setup

**Week 2: Atomic Component Development** 
- [ ] Atom components (Button, Input, Typography, etc.)
- [ ] Component testing with Storybook
- [ ] WCAG 2.2 AA compliance testing
- [ ] Molecule components (FormField, Card, etc.)

**Week 3-4: Organism & Template Development**
- [ ] Complex organisms (Header, Footer, TMSAnimation)
- [ ] Page templates with semantic HTML5
- [ ] Performance budget enforcement
- [ ] Internal linking and topical cluster structure

**Week 5-6: Content & SEO Optimization**
- [ ] E-E-A-T compliant medical content
- [ ] Schema.org markup implementation
- [ ] Internal linking strategy execution
- [ ] Performance optimization and testing

**Week 7-8: Testing & Launch**
- [ ] Comprehensive accessibility testing (automated + manual)
- [ ] Core Web Vitals compliance verification
- [ ] Cross-device and cross-browser testing
- [ ] Medical content accuracy review
- [ ] Production deployment with monitoring

### **📊 Success Metrics & Monitoring**

**Performance Metrics (Non-negotiable)**
- LCP: < 2.5s on all pages
- INP: < 200ms for all interactions  
- CLS: < 0.1 layout stability
- First Input Delay: < 100ms (legacy support)

**Accessibility Metrics**
- 0 automated accessibility errors
- WCAG 2.2 AA compliance score: 100%
- Keyboard navigation: 100% functionality
- Screen reader compatibility: Full support

**SEO Metrics**
- Core Web Vitals: All "Good" ratings
- Mobile-friendliness: 100%
- Schema markup: All recommended schemas implemented
- Internal linking: Strategic topical clusters

**Component Metrics**
- Component reusability: 80%+ reuse rate
- Storybook coverage: 100% of UI components
- Design token consistency: 95%+ token usage

This framework-compliant approach ensures the website meets modern web standards and provides exceptional user experience across all devices and abilities.

---

## 🎬 Video Animation Integration Strategy

### **Created Animation Assets**

We have successfully created **6 high-quality web-based video animations** that are ready for website integration:

1. ✅ **Video_1_What_Is_TMS_Animation.html** - Complete TMS explainer (90 seconds)
2. ✅ **Video_2_Understanding_Depression_Animation.html** - Depression education (75 seconds)
3. ✅ **Video_3_Why_Therapy_Matters_Animation.html** - Therapy importance (60 seconds)
4. ✅ **Video_4_TMS_Treatment_Process_Animation.html** - 5-step treatment process (90 seconds)
5. ✅ **Video_5_TMS_Success_Stories_Animation.html** - Patient success stories (60 seconds)
6. ✅ **Video_6_Anxiety_And_Your_Brain_Animation.html** - Anxiety education (72 seconds)

**Plus Supporting Components:**
- ✅ **Embedded_TMS_Animations.html** - Small reusable website components
- ✅ **TMS_Brain_Animation.html** - Interactive 3D brain model
- ✅ **Depression_Recovery_Animation.html** - Recovery journey visualization
- ✅ **tasel-health-animations.css** - Complete animation library

---

## 📍 Specific Page Integration Plan

### **Homepage Integration (`/`)**

```typescript
interface HomepageAnimations {
  heroSection: {
    primary: "Video_1_What_Is_TMS_Animation.html";
    placement: "Full-width hero background";
    autoplay: true;
    muted: true;
    controls: "Custom branded controls with Tasel Health styling";
    fallback: "High-quality poster image with play button";
    loading: "Progressive enhancement - loads after LCP elements";
  };
  
  servicesPreview: {
    tmsCard: {
      animation: "Mini brain animation from embedded components";
      trigger: "Hover or scroll-into-view";
      size: "120x80px inline with service description";
    };
    successStories: {
      component: "Video_5_TMS_Success_Stories_Animation.html";
      trigger: "Click to expand or scroll-based lazy load";
      placement: "Testimonials section with 'Watch Success Stories' CTA";
    };
  };
  
  statisticsSection: {
    successRates: "Animated progress bars from embedded components";
    patientJourney: "Timeline animation showing treatment stages";
  };
}
```

**Homepage Layout with Animations:**
```html
<!-- Hero Section -->
<section class="hero-section relative overflow-hidden">
  <div class="animation-container w-full h-screen">
    <!-- Load Video_1_What_Is_TMS_Animation.html as background -->
    <iframe src="animations/Video_1_What_Is_TMS_Animation.html" 
            class="w-full h-full absolute inset-0 z-0"
            autoplay muted></iframe>
  </div>
  <div class="hero-content relative z-10 flex items-center justify-center h-full">
    <div class="text-center text-white">
      <h1 class="text-5xl font-bold mb-6">Advanced TMS Therapy + Complete Mental Health Care</h1>
      <button class="cta-button bg-gradient-to-r from-lavender to-teal">
        Schedule TMS Consultation
      </button>
    </div>
  </div>
</section>

<!-- Services Overview -->
<section class="services-overview py-16">
  <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="service-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
        <div class="flex items-center mb-4">
          <!-- Mini brain animation -->
          <div class="mini-brain-animation mr-4">
            <iframe src="animations/embedded/mini-brain.html" 
                    class="w-30 h-20 border-0"></iframe>
          </div>
          <h3 class="text-2xl font-semibold text-lavender">BrainsWay Deep TMS™</h3>
        </div>
        <p class="text-gray-600 mb-6">FDA-cleared, non-invasive brain stimulation therapy</p>
        <a href="/services/tms-therapy" class="text-teal font-semibold">Learn More →</a>
      </div>
      <!-- Additional service cards -->
    </div>
  </div>
</section>

<!-- Success Stories Section -->
<section class="success-stories bg-gray-50 py-16">
  <div class="container mx-auto text-center">
    <h2 class="text-4xl font-bold text-lavender mb-8">Patient Success Stories</h2>
    <div class="success-animation-container max-w-4xl mx-auto">
      <!-- Load on user interaction -->
      <div class="video-placeholder cursor-pointer" onclick="loadSuccessVideo()">
        <img src="/images/success-stories-poster.jpg" alt="Watch Success Stories" class="rounded-xl">
        <div class="play-overlay absolute inset-0 flex items-center justify-center">
          <button class="play-button bg-white rounded-full p-4 shadow-lg">
            <svg class="w-8 h-8 text-lavender" fill="currentColor"><!-- Play icon --></svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
```

### **TMS Therapy Page (`/services/tms-therapy`)**

```typescript
interface TMSPageAnimations {
  heroAnimation: {
    video: "Video_1_What_Is_TMS_Animation.html";
    placement: "Top of page, full-width hero";
    autoplay: false; // User-initiated on this detailed page
  };
  
  processExplanation: {
    video: "Video_4_TMS_Treatment_Process_Animation.html";
    placement: "Mid-page in 'Treatment Process' section";
    trigger: "Scroll-based loading when section is 50% visible";
  };
  
  interactiveBrain: {
    component: "TMS_Brain_Animation.html";
    placement: "Dedicated section 'How TMS Works'";
    features: ["3D brain model", "Interactive coil positioning", "Magnetic field visualization"];
  };
  
  successMetrics: {
    animations: "Embedded progress bars and statistics";
    trigger: "Counter animations when scrolled into view";
  };
}
```

**TMS Page Layout:**
```html
<div class="tms-therapy-page">
  <!-- Hero with TMS Animation -->
  <section class="tms-hero">
    <div class="video-hero-container">
      <iframe src="animations/Video_1_What_Is_TMS_Animation.html" 
              class="w-full h-96 rounded-xl shadow-lg"></iframe>
    </div>
    <div class="hero-content mt-8">
      <h1 class="text-5xl font-bold text-lavender">BrainsWay Deep TMS™</h1>
      <p class="text-xl text-gray-600 mt-4">FDA-cleared, revolutionary treatment</p>
    </div>
  </section>

  <!-- Interactive Brain Model -->
  <section class="how-tms-works py-16">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12">How Deep TMS Works</h2>
      <div class="brain-animation-container">
        <iframe src="animations/TMS_Brain_Animation.html" 
                class="w-full h-96 border-0 rounded-xl"
                loading="lazy"></iframe>
      </div>
    </div>
  </section>

  <!-- Treatment Process -->
  <section class="treatment-process py-16 bg-gray-50">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12">Your Treatment Journey</h2>
      <div class="process-animation-container max-w-4xl mx-auto">
        <div class="lazy-load-trigger" data-animation="Video_4_TMS_Treatment_Process_Animation.html">
          <!-- Placeholder with loading indicator -->
          <div class="animation-placeholder bg-gradient-to-r from-lavender to-teal rounded-xl p-8 text-white">
            <h3 class="text-2xl font-bold mb-4">5-Step Treatment Process</h3>
            <button class="bg-white text-lavender px-6 py-3 rounded-lg font-semibold">
              Watch Process Animation
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
```

### **About/Services Pages Animation Integration**

```typescript
interface ServicePagesAnimations {
  psychiatryPage: {
    hero: "Video_2_Understanding_Depression_Animation.html";
    placement: "Educational section about depression";
    context: "Explains brain chemistry and depression science";
  };
  
  therapyPage: {
    hero: "Video_3_Why_Therapy_Matters_Animation.html";
    placement: "Introduction to therapy benefits";
    context: "Shows neuroplasticity and therapy effectiveness";
  };
  
  anxietyTreatment: {
    video: "Video_6_Anxiety_And_Your_Brain_Animation.html";
    placement: "Anxiety education section";
    context: "Explains anxiety response and treatment options";
  };
}
```

---

## 🛠️ Technical Implementation Details

### **Animation Loading System**

```javascript
class TaselAnimationManager {
  constructor() {
    this.animations = new Map();
    this.performanceBudget = {
      maxConcurrentAnimations: 2,
      maxTotalSize: 2048, // KB
      maxLoadTime: 3000   // ms
    };
    this.userPreferences = this.detectUserPreferences();
  }

  async loadAnimation(animationId, container, options = {}) {
    // Check performance budget
    if (!this.meetsPerformanceBudget()) {
      return this.loadFallback(animationId, container);
    }

    // Respect user motion preferences
    if (this.userPreferences.reducedMotion) {
      return this.loadStaticVersion(animationId, container);
    }

    // Check connection quality
    if (this.userPreferences.slowConnection) {
      return this.loadLightweightVersion(animationId, container);
    }

    // Load full animation with lazy loading
    return this.loadFullAnimation(animationId, container, options);
  }

  loadFullAnimation(animationId, container, options) {
    const iframe = document.createElement('iframe');
    iframe.src = `animations/${animationId}`;
    iframe.style.cssText = `
      width: 100%; 
      height: 100%; 
      border: 0; 
      border-radius: 12px;
    `;
    
    // Lazy loading
    iframe.loading = 'lazy';
    
    // Accessibility
    iframe.title = options.title || `Tasel Health ${animationId} Animation`;
    iframe.setAttribute('aria-label', options.ariaLabel || iframe.title);
    
    container.appendChild(iframe);
    
    // Performance monitoring
    this.monitorPerformance(animationId, iframe);
    
    return iframe;
  }

  detectUserPreferences() {
    return {
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      slowConnection: this.isSlowConnection(),
      screenReader: this.isScreenReaderActive()
    };
  }

  isSlowConnection() {
    if ('connection' in navigator) {
      const connection = navigator.connection;
      return connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g';
    }
    return false;
  }
}

// Initialize animation manager
const animationManager = new TaselAnimationManager();

// Lazy loading implementation
const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const trigger = entry.target;
      const animationId = trigger.dataset.animation;
      
      animationManager.loadAnimation(animationId, trigger, {
        title: trigger.dataset.title,
        ariaLabel: trigger.dataset.ariaLabel
      });
      
      animationObserver.unobserve(trigger);
    }
  });
}, { threshold: 0.1, rootMargin: '50px' });

// Auto-observe all lazy load triggers
document.querySelectorAll('.lazy-load-trigger').forEach(trigger => {
  animationObserver.observe(trigger);
});
```

### **React/Next.js Integration Components**

```typescript
// components/animations/VideoAnimation.tsx
interface VideoAnimationProps {
  src: string;
  title: string;
  autoplay?: boolean;
  lazy?: boolean;
  fallbackImage?: string;
  className?: string;
}

export function VideoAnimation({ 
  src, 
  title, 
  autoplay = false, 
  lazy = true,
  fallbackImage,
  className = "" 
}: VideoAnimationProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(!lazy);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection observer for lazy loading
  useEffect(() => {
    if (!lazy) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [lazy]);

  // Respect reduced motion preference
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  if (prefersReducedMotion && fallbackImage) {
    return (
      <div ref={containerRef} className={`animation-fallback ${className}`}>
        <img src={fallbackImage} alt={title} className="w-full h-full object-cover rounded-xl" />
        <div className="fallback-overlay">
          <p className="text-sm text-gray-600">Animation disabled due to motion preferences</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`animation-container ${className}`}>
      {shouldLoad ? (
        <iframe
          src={src}
          title={title}
          className="w-full h-full border-0 rounded-xl"
          loading={lazy ? 'lazy' : 'eager'}
          onLoad={() => setIsLoaded(true)}
          style={{ aspectRatio: '16/9' }}
        />
      ) : (
        <div className="animation-placeholder bg-gradient-to-r from-lavender to-teal rounded-xl">
          <div className="flex items-center justify-center h-full">
            <button 
              onClick={() => setShouldLoad(true)}
              className="bg-white text-lavender px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
            >
              Load Animation
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Usage in pages
export default function TMSTherapyPage() {
  return (
    <div className="tms-page">
      <VideoAnimation
        src="/animations/Video_1_What_Is_TMS_Animation.html"
        title="What is BrainsWay Deep TMS?"
        className="mb-12"
        fallbackImage="/images/tms-hero-poster.jpg"
      />
      
      <VideoAnimation
        src="/animations/Video_4_TMS_Treatment_Process_Animation.html"
        title="TMS Treatment Process"
        lazy={true}
        className="mb-12"
      />
    </div>
  );
}
```

### **Performance Optimization Strategy**

```typescript
interface AnimationPerformanceConfig {
  budgets: {
    // Core Web Vitals compliance
    lcp: "< 2.5s (animations should not delay LCP)";
    cls: "< 0.1 (no layout shift from animation loading)";
    inp: "< 200ms (animation controls must be responsive)";
    
    // Animation-specific budgets
    totalAnimationSize: "< 2MB per page";
    concurrentAnimations: "Maximum 2 simultaneous";
    animationLoadTime: "< 3s for individual animations";
  };
  
  optimization: {
    loading: "Intersection Observer lazy loading";
    compression: "Minified CSS/JS, optimized assets";
    caching: "Service Worker caching for animation assets";
    fallbacks: "Static images for slow connections";
  };
  
  monitoring: {
    performanceObserver: "Track animation impact on metrics";
    userExperience: "Monitor animation completion rates";
    errorHandling: "Graceful fallbacks for failed loads";
  };
}
```

### **Mobile Responsive Implementation**

```css
/* Animation responsiveness */
.animation-container {
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 12px;
  overflow: hidden;
}

@media (max-width: 768px) {
  .animation-container {
    aspect-ratio: 4/3; /* Better for mobile viewing */
    margin: 1rem 0;
  }
  
  /* Reduce animation complexity on mobile */
  .animation-container iframe {
    transform: scale(0.95); /* Slightly smaller for better performance */
  }
  
  /* Alternative mobile layout */
  .hero-section .animation-container {
    height: 60vh; /* Shorter on mobile to show content below fold */
  }
}

@media (max-width: 480px) {
  .animation-container {
    aspect-ratio: 1/1; /* Square format for very small screens */
  }
  
  /* Show static images instead of complex animations on very small screens */
  .complex-animation {
    display: none;
  }
  
  .mobile-fallback {
    display: block;
  }
}
```

---

## ♿ Accessibility Implementation

### **WCAG 2.2 AA Compliance for Animations**

```typescript
interface AnimationAccessibility {
  motionSafety: {
    respectReducedMotion: "Check prefers-reduced-motion media query";
    staticFallbacks: "Provide non-animated alternatives";
    pauseControls: "Allow users to pause/resume animations";
  };
  
  screenReader: {
    descriptiveLabels: "Clear aria-labels for all animation content";
    altText: "Alternative text descriptions for visual content";
    liveRegions: "Announce animation state changes";
  };
  
  keyboardNavigation: {
    focusableControls: "All animation controls keyboard accessible";
    skipLinks: "Option to skip animation content";
    tabOrder: "Logical tab sequence through animated content";
  };
  
  cognitiveAccess: {
    clearControls: "Simple, intuitive animation controls";
    progressIndicators: "Show animation progress/duration";
    contextualHelp: "Explanation of animation content available";
  };
}
```

**Accessibility Implementation:**
```html
<!-- Accessible animation container -->
<div class="animation-section" role="region" aria-labelledby="animation-title">
  <h2 id="animation-title">How TMS Therapy Works</h2>
  
  <!-- Motion preference detection -->
  <div class="motion-preference-notice" aria-live="polite">
    <p id="motion-status">Animation will respect your motion preferences</p>
  </div>
  
  <!-- Animation with controls -->
  <div class="animation-wrapper">
    <iframe 
      src="/animations/Video_1_What_Is_TMS_Animation.html"
      title="Interactive animation showing how TMS therapy stimulates brain regions to treat depression"
      aria-describedby="animation-description"
    ></iframe>
    
    <div class="animation-controls" role="group" aria-label="Animation controls">
      <button 
        aria-label="Pause animation"
        id="pause-btn"
        class="control-btn"
      >⏸️</button>
      <button 
        aria-label="Restart animation" 
        id="restart-btn"
        class="control-btn"
      >🔄</button>
    </div>
  </div>
  
  <!-- Text alternative -->
  <div id="animation-description" class="sr-only">
    This animation demonstrates how TMS therapy uses magnetic pulses to stimulate 
    specific brain regions associated with depression treatment. The process shows 
    the placement of the TMS coil, magnetic field generation, and neural pathway activation.
  </div>
  
  <!-- Skip link for screen reader users -->
  <a href="#after-animation" class="skip-animation sr-only focus:not-sr-only">
    Skip animation content
  </a>
</div>

<div id="after-animation">
  <!-- Content after animation -->
</div>
```

---

## 📊 Updated Performance Budgets

### **Animation-Specific Performance Requirements**

```typescript
interface AnimationPerformanceBudgets {
  pageLoad: {
    homepage: {
      lcp: "< 2.5s (hero content loads first, animation enhances)";
      cls: "< 0.1 (no layout shift from animation containers)";
      totalSize: "< 3MB including hero animation";
    };
    
    servicePages: {
      lcp: "< 2.0s (faster load for conversion pages)";
      animationDelay: "< 1s after initial content load";
      maxAnimations: "2 per page maximum";
    };
  };
  
  runtime: {
    cpuUsage: "< 30% during animation playback";
    memoryUsage: "< 50MB per animation";
    batteryImpact: "Minimal on mobile devices";
  };
  
  networkImpact: {
    initialLoad: "< 500KB for critical animations";
    lazyLoaded: "< 1MB per additional animation";
    caching: "90% cache hit rate after first visit";
  };
}
```

This comprehensive integration plan provides a clear roadmap for embedding the created animations into the Tasel Health website with optimal performance, accessibility, and user experience.
