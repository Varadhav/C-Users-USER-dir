# Google Calendar Summary Email App

A web application that authenticates with Google and sends you a daily email summary of tomorrow's calendar events. The app sends beautifully formatted, natural-language summaries every evening at your configured time.

## Features

✨ **Natural Language Summaries** - Get human-readable summaries of your events, not just a list  
📧 **Daily Email Delivery** - Automatically sends summaries every evening  
🔒 **Secure Authentication** - Uses Google OAuth 2.0 for secure access  
⏰ **Customizable Schedule** - Configure when you want to receive your daily summary  
🎨 **Beautiful UI** - Modern, responsive web interface  
📱 **Mobile Friendly** - Works great on all devices  

## Prerequisites

- Node.js (v14 or higher)
- A Google account
- Gmail account for sending emails (can be the same as your Google account)
- Google Cloud Console project with Calendar API enabled

## Setup Instructions

### 1. Clone and Install

```bash
git clone <repository-url>
cd google-calendar-summary-app
npm install
```

### 2. Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Calendar API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Calendar API"
   - Click on it and press "Enable"
4. Create OAuth 2.0 credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth client ID"
   - Choose "Web application"
   - Add authorized redirect URI: `http://localhost:3000/auth/google/callback`
   - Copy the Client ID and Client Secret

### 3. Email Setup (Gmail)

1. Go to your Google Account settings
2. Enable 2-factor authentication (required for app passwords)
3. Generate an app password:
   - Go to Security settings
   - Under "2-Step Verification", click on "App passwords"
   - Generate a new app password for "Mail"
   - Copy this password

### 4. Environment Configuration

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` with your configuration:
   ```env
   # Google OAuth Credentials
   GOOGLE_CLIENT_ID=your_client_id_here
   GOOGLE_CLIENT_SECRET=your_client_secret_here
   GOOGLE_REDIRECT_URI=http://localhost:3000/auth/google/callback

   # Email Configuration
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password_here
   EMAIL_TO=recipient@example.com

   # Session Secret (generate a random string)
   SESSION_SECRET=your_random_session_secret_here

   # App Configuration
   PORT=3000
   CRON_SCHEDULE=0 20 * * *  # 8 PM daily
   TIMEZONE=America/New_York
   ```

### 5. Run the Application

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

Visit `http://localhost:3000` in your browser.

## Configuration Options

### Cron Schedule Format

The `CRON_SCHEDULE` uses standard cron syntax:
- `0 20 * * *` = 8:00 PM daily
- `0 19 * * *` = 7:00 PM daily
- `30 18 * * *` = 6:30 PM daily
- `0 9 * * *` = 9:00 AM daily

Format: `minute hour day month day-of-week`

### Timezone

Set `TIMEZONE` to your local timezone. Examples:
- `America/New_York`
- `America/Los_Angeles`
- `Europe/London`
- `Asia/Tokyo`

## Usage

1. **Sign In**: Click "Sign in with Google" on the homepage
2. **Authorize**: Grant the app permission to read your calendar
3. **Dashboard**: View your tomorrow's events and email preview
4. **Test Email**: Send a test email to verify everything works
5. **Automatic Delivery**: Emails will be sent automatically at your configured time

## Email Format

The daily summary email includes:
- Tomorrow's date
- All-day events (if any)
- Timed events with start/end times
- Event locations
- Brief event descriptions
- A count of total events
- Helpful observations (e.g., "Your morning looks busy!")

## Security

- OAuth tokens are stored locally in the `tokens/` directory
- Sessions expire after 24 hours
- All sensitive data is kept in environment variables
- The app only requests read-only calendar access

## Troubleshooting

### "Authentication failed" error
- Verify your Google OAuth credentials are correct
- Ensure the redirect URI matches exactly
- Check that Calendar API is enabled in Google Cloud Console

### Emails not sending
- Verify your Gmail app password is correct
- Check that 2-factor authentication is enabled
- Ensure EMAIL_USER matches the account that generated the app password

### No events showing
- Make sure you have events in tomorrow's calendar
- Check that your Google account has calendar events
- Try logging out and back in

## Production Deployment

For production deployment:

1. Update environment variables:
   - Set `NODE_ENV=production`
   - Update `GOOGLE_REDIRECT_URI` to your production URL
   - Use a secure `SESSION_SECRET`

2. Use a process manager like PM2:
   ```bash
   npm install -g pm2
   pm2 start src/server.js --name calendar-summary
   ```

3. Set up a reverse proxy (nginx/Apache)

4. Use HTTPS (required for Google OAuth in production)

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.