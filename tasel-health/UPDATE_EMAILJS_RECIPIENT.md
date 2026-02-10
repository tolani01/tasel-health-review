# Update EmailJS Recipient Email Address

This guide explains how to update the recipient email address in your EmailJS dashboard templates to match the code changes.

## Why Both Need to Be Updated

The email recipient is configured in **two places**:
1. **In the code** (`src/lib/emailjs.ts`) - This sends the `to_email` parameter
2. **In EmailJS dashboard templates** - This is the actual recipient address that receives emails

**Both must match** for emails to arrive at the correct address.

## Step-by-Step Instructions

### Step 1: Log into EmailJS Dashboard

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign In" and log into your account
3. You should see your dashboard

### Step 2: Navigate to Email Templates

1. In the left sidebar, click **"Email Templates"**
2. You'll see a list of all your email templates

### Step 3: Update Each Template

You need to update the following templates:

#### Template 1: Consultation Request (`template_afqsz2o`)

1. Find the template with ID `template_afqsz2o` (or named "Consultation Request")
2. Click on it to edit
3. Look for the **"To Email"** field (usually at the top of the template editor)
4. Change the value from `customerservice@taselhealth.com` to `thaddeus.tolani@taselhealth.com`
5. Click **"Save"** at the bottom

#### Template 2: Simple Message (`template_4ykts98`) — **"Send Message" form**

This is the template used when users click **"Send Message"** on the contact card form. If those emails are still going to **gb.tolani@gmail.com**, update this template:

1. Find the template with ID `template_4ykts98` (or named "Simple Message" / "Message")
2. Click on it to edit
3. In **"To Email"**, either:
   - Set to **`{{to_email}}`** so the code’s recipient is used (recommended), or
   - Set to **`thaddeus.tolani@taselhealth.com`** (fixed address)
4. Remove any fixed address like `gb.tolani@gmail.com` from the To Email field
5. Click **"Save"**

#### Template 3: Admin Notification (`template_admin_notification`)

1. Find the template with ID `template_admin_notification` (if it exists)
2. Click on it to edit
3. Update the **"To Email"** field to `thaddeus.tolani@taselhealth.com`
4. Click **"Save"**

### Step 4: Verify Email Service Connection

1. Go to **"Email Services"** in the left sidebar
2. Check that your email service (likely Gmail) is connected
3. **Important**: The email service must be connected to an account that can receive emails at `thaddeus.tolani@taselhealth.com`
   - If you're using Gmail, you may need to:
     - Add `thaddeus.tolani@taselhealth.com` as an alias/forwarding address in your Gmail settings
     - Or create a new EmailJS service connected to the `thaddeus.tolani@taselhealth.com` email account

### Step 5: Test the Changes

1. Go to your website (or local development server)
2. Fill out a contact/consultation form
3. Submit the form
4. Check the `thaddeus.tolani@taselhealth.com` inbox for the email
5. Verify the email arrived correctly

## Troubleshooting

### Emails Still Going to Old Address (e.g. gb.tolani@gmail.com)

- **Template "To Email" overrides code**: EmailJS uses the **To Email** value from the template in the dashboard. If it’s set to a fixed address (e.g. `gb.tolani@gmail.com`), all emails go there. Set it to **`{{to_email}}`** so the value from the code (`thaddeus.tolani@taselhealth.com`) is used.
- **"Send Message" form** uses template **`template_4ykts98`** — edit that template and set To Email to `{{to_email}}` or `thaddeus.tolani@taselhealth.com`.
- **Check code**: Verify `src/lib/emailjs.ts` has `thaddeus.tolani@taselhealth.com` in all three functions.
- **Clear browser cache**: Sometimes cached templates can cause issues.

### "Service not found" Error

- Verify your EmailJS Service ID is correct in the code
- Check that the email service is still connected in EmailJS dashboard

### Emails Not Arriving

- Check spam/junk folder
- Verify the email address `thaddeus.tolani@taselhealth.com` is set up and can receive emails
- Check EmailJS dashboard for error logs (go to "Logs" section)
- Verify your EmailJS account hasn't exceeded monthly email limits

### Template ID Mismatch

If you see errors about template IDs:
- Check `src/lib/emailjs.ts` for the correct template IDs
- Verify these match the template IDs in your EmailJS dashboard
- The template IDs in the code are:
  - `template_afqsz2o` (Consultation Request)
  - `template_4ykts98` (Simple Message)
  - `template_admin_notification` (Admin Notification)

## Quick Reference

**New Email Address**: `thaddeus.tolani@taselhealth.com`

**Templates to Update**:
- `template_afqsz2o` - Consultation Request
- `template_4ykts98` - Simple Message  
- `template_admin_notification` - Admin Notification (if exists)

**Code File**: `src/lib/emailjs.ts` (already updated)

## Need Help?

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: Available in your dashboard
- Check EmailJS dashboard "Logs" section for error messages
