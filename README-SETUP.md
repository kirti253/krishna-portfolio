# Contact Form Email Setup

This project uses Resend to send emails from the contact form. Follow these steps to set it up:

## 1. Install Resend Package

```bash
npm install resend
```

## 2. Get Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the API key

## 3. Configure Environment Variables

1. Create a `.env.local` file in the root of your project (if it doesn't exist)
2. Add the following environment variables:

```env
RESEND_API_KEY=re_your_api_key_here
FROM_EMAIL=onboarding@resend.dev
TO_EMAIL=your-email@example.com
```

**Important Notes:**

- `FROM_EMAIL`: Must be a verified domain in Resend. For testing, you can use `onboarding@resend.dev`
- `TO_EMAIL`: The email address where you want to receive contact form submissions
- Replace the placeholder values with your actual values

## 4. Verify Your Domain (Production)

For production use:

1. Add and verify your domain in Resend
2. Update `FROM_EMAIL` to use your verified domain (e.g., `contact@yourdomain.com`)

## 5. Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact form on your website
3. Fill out and submit the form
4. Check the email address specified in `TO_EMAIL`

## Alternative: Using Nodemailer

If you prefer to use Nodemailer instead of Resend, you can modify `app/api/contact/route.ts` to use Nodemailer. You'll need:

```bash
npm install nodemailer
```

Then configure it with your SMTP settings (Gmail, SendGrid, etc.)
