# Tasel Health Website

A modern, responsive website for Tasel Health - an outpatient mental health clinic specializing in TMS therapy, psychiatry, and counseling.

## 🚀 Features

- **Next.js 14** with App Router and TypeScript
- **TailwindCSS** for styling with custom design system
- **shadcn/ui** components for consistent UI
- **Framer Motion** for smooth animations
- **Custom Video Animations** for educational content
- **SEO Optimized** with Next-SEO
- **Accessibility Compliant** (WCAG 2.2 AA)
- **Mobile-First Responsive Design**

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: TailwindCSS + shadcn/ui
- **Animations**: Framer Motion + Custom CSS
- **State Management**: Zustand + React Query
- **Forms**: React Hook Form + Zod
- **Testing**: Jest + React Testing Library + Playwright

## 📁 Project Structure

```
tasel-health/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── sections/       # Page sections
│   │   └── animations/     # Animation components
│   ├── lib/                # Utility functions
│   ├── styles/             # Global styles
│   ├── types/              # TypeScript types
│   ├── utils/              # Helper functions
│   ├── hooks/              # Custom React hooks
│   └── store/              # State management
├── public/
│   ├── animations/         # Video animation files
│   ├── images/             # Static images
│   └── videos/             # Video files
└── docs/                   # Documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tasel-health
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run end-to-end tests

## 🎨 Design System

### Colors
- **Primary**: Lavender (#a855f7) to Teal (#14b8a6) gradient
- **Secondary**: Gray scale with accent colors
- **Brand**: Custom Tasel Health color palette

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Components
- Custom button variants (tasel, taselSecondary, gradient)
- Card components with hover effects
- Animation utilities and classes
- Responsive grid layouts

## 🎬 Animations

The project includes 6 custom video animations:

1. **Video_1_What_Is_TMS_Animation.html** - TMS therapy explainer
2. **Video_2_Understanding_Depression_Animation.html** - Depression education
3. **Video_3_Why_Therapy_Matters_Animation.html** - Therapy importance
4. **Video_4_TMS_Treatment_Process_Animation.html** - Treatment process
5. **Video_5_TMS_Success_Stories_Animation.html** - Patient success stories
6. **Video_6_Anxiety_And_Your_Brain_Animation.html** - Anxiety education

## ♿ Accessibility

- WCAG 2.2 AA compliance
- Screen reader support
- Keyboard navigation
- Reduced motion support
- High contrast ratios
- Semantic HTML structure

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- Flexible grid layouts
- Optimized animations for mobile

## 🚀 Deployment

The project is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

## 📊 Performance

- Core Web Vitals optimized
- Image optimization with Next.js Image component
- Lazy loading for animations
- Performance budgets enforced

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is proprietary to Tasel Health.

## 📞 Support

For questions or support, contact the development team.
