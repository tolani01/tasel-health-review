# 🚀 Tasel Health - Vercel Deployment Guide

## ✅ Pre-Deployment Checklist

Your site is **production-ready**:
- ✅ Production build succeeds
- ✅ No TypeScript errors
- ✅ All 54+ routes compile
- ✅ SEO metadata optimized
- ✅ Schema markup implemented
- ✅ Code cleaned and optimized
- ✅ `.gitignore` configured

---

## 📋 Step 1: Create Environment Variables File

Create a file named `.env.local` in the `tasel-health` directory with your actual values:

```bash
# EmailJS Configuration (get from emailjs.com dashboard)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx

# Contact Information (already correct)
NEXT_PUBLIC_PHONE=405-934-1681
NEXT_PUBLIC_EMAIL=info@taselhealth.com
NEXT_PUBLIC_ADDRESS=9210 S Western, Suite A-21, Oklahoma City, OK 73139
```

**Where to find EmailJS values:**
1. Log in to [emailjs.com](https://emailjs.com)
2. Go to Email Services → Your service → Copy Service ID
3. Go to Email Templates → Your template → Copy Template ID
4. Go to Account → API Keys → Copy Public Key

---

## 📋 Step 2: Push to GitHub

Run these commands in PowerShell:

```powershell
# Navigate to project
cd "C:\Users\gbtol\Tasel Health\tasel-health"

# Configure Git (if first time)
git config user.name "Your Name"
git config user.email "your-email@example.com"

# Add all files and commit
git add -A
git commit -m "Initial commit: Production-ready Tasel Health website"

# Set branch to main
git branch -M main

# Add your GitHub repo (replace with your actual URL)
git remote add origin https://github.com/YOUR_USERNAME/tasel-health.git

# Push to GitHub
git push -u origin main
```

**If you get authentication errors:**
- Use a Personal Access Token (PAT) instead of password
- Or set up SSH keys (see previous guide)

---

## 📋 Step 3: Deploy to Vercel (5 Minutes)

### **Option A: Using Vercel CLI (Fastest)**

1. **Install Vercel CLI:**
```powershell
npm install -g vercel
```

2. **Deploy:**
```powershell
cd "C:\Users\gbtol\Tasel Health\tasel-health"
vercel
```

3. **Follow prompts:**
- Log in to Vercel (use GitHub account)
- Select "Set up and deploy"
- Project name: `tasel-health` (or your choice)
- Framework: Next.js (auto-detected)
- Build command: `npm run build` (default)
- Output directory: `.next` (default)

4. **Add environment variables:**
```powershell
vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID
# Paste your service ID when prompted

vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
# Paste your template ID

vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
# Paste your public key

# Optional (these are already in code, but good to have)
vercel env add NEXT_PUBLIC_PHONE
vercel env add NEXT_PUBLIC_EMAIL
vercel env add NEXT_PUBLIC_ADDRESS
```

5. **Deploy to production:**
```powershell
vercel --prod
```

---

### **Option B: Using Vercel Dashboard (Easiest)**

1. **Go to [vercel.com](https://vercel.com)**
   - Click "Sign Up" or "Log In"
   - Use your GitHub account

2. **Import Project:**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Choose your GitHub repo (`tasel-health`)
   - Click "Import"

3. **Configure Project:**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (leave default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

4. **Add Environment Variables:**
   Click "Environment Variables" and add:
   
   | Name | Value |
   |------|-------|
   | `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | service_xxxxxxx |
   | `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | template_xxxxxxx |
   | `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | xxxxxxxxxxxxxxxxxxxx |
   | `NEXT_PUBLIC_PHONE` | 405-934-1681 |
   | `NEXT_PUBLIC_EMAIL` | info@taselhealth.com |
   | `NEXT_PUBLIC_ADDRESS` | 9210 S Western, Suite A-21, Oklahoma City, OK 73139 |

5. **Click "Deploy"**
   - Vercel will build and deploy automatically
   - Takes 2-3 minutes
   - You'll get a URL like `tasel-health.vercel.app`

---

## 📋 Step 4: Configure Custom Domain (Optional)

### **After Initial Deployment:**

1. **In Vercel Dashboard:**
   - Go to your project → Settings → Domains
   - Add domain: `taselhealth.com`
   - Add domain: `www.taselhealth.com`

2. **In Your Domain Registrar (e.g., GoDaddy, Namecheap):**
   - Add DNS records as shown by Vercel:
   
   **For root domain (`taselhealth.com`):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```
   
   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait for DNS propagation (5-60 minutes)**

4. **Vercel automatically issues SSL certificate (HTTPS)**

---

## 📋 Step 5: Post-Deployment Verification

### **Test These URLs:**

✅ **Homepage:** `https://your-site.vercel.app/`  
✅ **About:** `https://your-site.vercel.app/about`  
✅ **Services:**
- `/services/tms-therapy`
- `/services/psychiatry`
- `/services/counseling`
- `/services/comprehensive-care`

✅ **Insurance:** `/insurance`  
✅ **Knowledge Hub:** `/knowledge-hub`  
✅ **Contact:** `/contact`  
✅ **Location:** `/location`  
✅ **Directions:** `/directions`  
✅ **Service Areas:** `/service-areas`  

### **Test Contact Forms:**
- Fill out a form and verify email arrives at `info@taselhealth.com`
- Test phone/email links (tel: and mailto:)

### **Test on Mobile:**
- Open site on phone or tablet
- Verify navigation works
- Forms are usable
- No layout issues

---

## 📋 Step 6: Set Up Monitoring & Analytics

### **Google Analytics 4 (Recommended):**

1. **Create GA4 property** at [analytics.google.com](https://analytics.google.com)
2. **Get Measurement ID** (looks like `G-XXXXXXXXXX`)
3. **Add to Vercel environment variables:**
   ```
   NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
   ```
4. **Add to `layout.tsx`:**
   ```typescript
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
     strategy="afterInteractive"
   />
   <Script id="google-analytics" strategy="afterInteractive">
     {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
     `}
   </Script>
   ```

### **Google Search Console:**

1. **Go to [search.google.com/search-console](https://search.google.com/search-console)**
2. **Add property:** `taselhealth.com`
3. **Verify ownership** (use HTML tag or DNS method)
4. **Submit sitemap:** `https://taselhealth.com/sitemap.xml`

### **Google My Business:**

1. **Claim your listing** at [business.google.com](https://business.google.com)
2. **Complete all fields:**
   - Name: Tasel Health
   - Category: Mental Health Clinic
   - Address: 9210 S Western, Suite A-21, Oklahoma City, OK 73139
   - Phone: (405) 934-1681
   - Website: https://taselhealth.com
   - Hours: (your actual hours)
3. **Add photos** (clinic exterior, interior, team photos if available)
4. **Write description** (use keywords like "TMS therapy Oklahoma City")
5. **Verify location** (Google will mail a postcard)

---

## 🔧 Troubleshooting

### **Build Fails on Vercel:**
- Check build logs in Vercel dashboard
- Verify all environment variables are set
- Ensure no local file paths in imports

### **Contact Forms Not Working:**
- Verify EmailJS environment variables are set correctly
- Check EmailJS dashboard for delivery status
- Verify template IDs match your EmailJS setup

### **Images Not Loading:**
- Check `next.config.js` has correct image domains
- Verify images exist in `/public/images/`
- Check browser console for errors

### **Custom Domain Not Working:**
- Wait 24-48 hours for DNS propagation
- Verify DNS records in your registrar
- Check Vercel domain status

---

## 📊 Expected Results After Deployment

### **Within 24 Hours:**
- ✅ Site live and accessible
- ✅ Forms sending emails
- ✅ Google starting to crawl pages

### **Within 1 Week:**
- ✅ Google indexing pages
- ✅ Local search visibility starting
- ✅ Initial traffic data in Analytics

### **Within 1 Month:**
- ✅ Ranking for brand searches ("Tasel Health")
- ✅ Starting to rank for local keywords ("TMS therapy Oklahoma City")
- ✅ Google My Business showing in map pack

### **Within 3 Months:**
- ✅ Strong local SEO presence
- ✅ Knowledge Hub articles ranking
- ✅ Organic traffic growing
- ✅ Leads coming from website

---

## 🎯 Quick Deploy Commands (Copy & Paste)

**If you have Vercel CLI installed:**
```powershell
cd "C:\Users\gbtol\Tasel Health\tasel-health"
vercel --prod
```

**If deploying for first time:**
```powershell
cd "C:\Users\gbtol\Tasel Health\tasel-health"
vercel
# Follow prompts, then:
vercel --prod
```

---

## 📞 Support

**Vercel Documentation:** [vercel.com/docs](https://vercel.com/docs)  
**Next.js Deployment:** [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)  
**Vercel Support:** [vercel.com/support](https://vercel.com/support)  

---

## ✅ You're Ready to Deploy!

Your Tasel Health website is production-ready with:
- ✅ 54+ optimized pages
- ✅ Complete SEO schema markup
- ✅ Local SEO for Oklahoma City
- ✅ 33 Knowledge Hub articles
- ✅ Comprehensive mental health services showcase
- ✅ Clean, professional design
- ✅ Mobile-responsive
- ✅ Accessibility compliant

**Estimated deployment time: 5-10 minutes** ⚡

Good luck with your launch! 🎉
