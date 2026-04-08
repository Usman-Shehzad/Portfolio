# Email Setup Guide

This guide will help you configure the contact form email functionality for your portfolio.

## Prerequisites

- A Gmail account (or any other SMTP email service)
- Node.js and npm/pnpm installed

## Setup Instructions

### 1. Install Dependencies

First, make sure all dependencies are installed:

```bash
npm install
# or
pnpm install
```

### 2. Configure Environment Variables

1. Copy the `.env.example` file to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` and add your email credentials:

   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   ```

### 3. Generate Gmail App Password

If you're using Gmail, you need to generate an App Password:

1. **Enable 2-Factor Authentication** on your Google account:
   - Go to https://myaccount.google.com/security
   - Under "How you sign in to Google," select "2-Step Verification"
   - Follow the setup process

2. **Generate an App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" as the app
   - Select "Other (Custom name)" as the device and give it a name like "Portfolio Contact Form"
   - Click "Generate"
   - Copy the 16-character password (without spaces)
   - Paste it into your `.env.local` file as `EMAIL_PASSWORD`

⚠️ **Important**: Use the App Password, NOT your regular Gmail password!

### 4. Alternative: Using Other Email Services

If you're not using Gmail, you can configure a custom SMTP server:

```env
EMAIL_USER=your-email@example.com
EMAIL_PASSWORD=your-password
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
```

Then update the API route (`src/app/api/send-email/route.ts`) to use the custom SMTP configuration (see the commented section in the code).

Common SMTP configurations:
- **Outlook/Hotmail**: `smtp.office365.com`, port `587`
- **Yahoo**: `smtp.mail.yahoo.com`, port `587`
- **SendGrid**: `smtp.sendgrid.net`, port `587`

### 5. Test the Contact Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to your contact form
3. Fill out the form and submit
4. Check your email inbox for the message

## How It Works

1. When a user submits the contact form, the data is sent to `/api/send-email`
2. The API route validates the data
3. Nodemailer sends the email using your configured SMTP settings
4. You receive the contact form submission in your inbox
5. You can reply directly to the sender (the form uses `replyTo` header)

## Troubleshooting

### "Failed to send message" Error

1. **Check your credentials**: Make sure `EMAIL_USER` and `EMAIL_PASSWORD` are correct
2. **App Password**: Ensure you're using an App Password for Gmail, not your regular password
3. **2FA Required**: Gmail requires 2-Factor Authentication to generate App Passwords
4. **Firewall/Network**: Some networks block SMTP ports (587, 465)

### Email not received

1. Check your spam/junk folder
2. Verify the `EMAIL_USER` in `.env.local` is correct
3. Check server logs for error messages

### Development vs Production

- For development, you can use Gmail with App Password
- For production, consider using professional email services like:
  - **SendGrid** (free tier: 100 emails/day)
  - **Mailgun** (free tier: 5,000 emails/month)
  - **AWS SES** (pay-as-you-go)
  - **Resend** (free tier: 3,000 emails/month)

## Security Notes

- ✅ `.env.local` is automatically ignored by git (see `.gitignore`)
- ✅ Never commit your `.env.local` file
- ✅ Never share your App Password
- ✅ The API includes basic validation and rate limiting
- ✅ Email addresses are validated before sending

## Additional Configuration

### Rate Limiting (Recommended for Production)

Consider adding rate limiting to prevent abuse:

```bash
npm install express-rate-limit
```

Then modify the API route to include rate limiting.

### Email Templates

The email template can be customized in `src/app/api/send-email/route.ts` within the `mailOptions.html` section.

## Support

If you encounter any issues, please check:
1. Your `.env.local` file is properly configured
2. All dependencies are installed
3. The development server is running
4. Your email credentials are valid

---

Happy coding! 🚀
