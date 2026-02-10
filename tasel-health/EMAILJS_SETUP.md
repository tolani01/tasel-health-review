# EmailJS Setup Instructions

## Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as your email service
4. Connect your Gmail account
5. Copy the **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Templates
1. Go to "Email Templates"
2. Click "Create New Template"
3. Create these two templates:

#### Template 1: Consultation Request (Template ID: `template_consultation`)
**Subject:** New Consultation Request from {{from_name}}
**Body:**
```
New consultation request received:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service: {{service}}
Source: {{source}}

Message:
{{message}}

Reply to: {{reply_to}}
```

#### Template 2: Admin Notification (Template ID: `template_admin_notification`)
**Subject:** New Consultation Request - {{from_name}}
**Body:**
```
New consultation request from {{from_name}} ({{from_email}}) for {{service}} via {{source}}.

Please follow up within 24 hours.
```

### Step 4: Get Your Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key** (e.g., `abc123def456`)

### Step 5: Update Configuration
1. Open `src/lib/emailjs.ts`
2. Replace the placeholder values:

```typescript
const EMAILJS_SERVICE_ID = 'your_service_id_here'        // From Step 2
const EMAILJS_TEMPLATE_ID = 'template_consultation'      // From Step 3
const EMAILJS_PUBLIC_KEY = 'your_public_key_here'        // From Step 4
```

### Step 6: Test the Form
1. Start your development server: `npm run dev`
2. Click any "Schedule Consultation" button
3. Fill out and submit the form
4. Check your Gmail for the consultation request email

## Troubleshooting

### Common Issues:
- **"Service not found"**: Check your Service ID
- **"Template not found"**: Check your Template ID
- **"Invalid public key"**: Check your Public Key
- **Emails not sending**: Verify Gmail connection in EmailJS dashboard

### Free Tier Limits:
- 200 emails per month
- Perfect for small to medium websites
- Upgrade if you need more emails

## Security Notes
- Public keys are safe to expose in client-side code
- Never put private keys in client-side code
- EmailJS handles all the security for you

## Support
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Free support available in their dashboard
