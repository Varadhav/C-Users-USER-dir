const nodemailer = require('nodemailer');
const { loadTokens } = require('./googleAuth');
const { getTomorrowEvents, generateEventSummary } = require('./calendarService');
const fs = require('fs').promises;
const path = require('path');

// Create email transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Send email with calendar summary
async function sendEmail(to, subject, text, html) {
  const mailOptions = {
    from: `"Calendar Summary" <${process.env.EMAIL_USER}>`,
    to: to,
    subject: subject,
    text: text,
    html: html
  };
  
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

// Generate HTML email template
function generateEmailHTML(summary, userName) {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateStr = tomorrow.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f5f5f5;
        }
        .container {
          background-color: white;
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
          color: #1a73e8;
          margin-bottom: 10px;
          font-size: 24px;
        }
        .date {
          color: #666;
          font-size: 18px;
          margin-bottom: 20px;
        }
        .summary {
          white-space: pre-line;
          background-color: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #1a73e8;
        }
        .footer {
          margin-top: 30px;
          text-align: center;
          color: #999;
          font-size: 14px;
        }
        .footer a {
          color: #1a73e8;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>📅 Your Calendar Summary</h1>
        <div class="date">${dateStr}</div>
        <div class="summary">${summary.replace(/\n/g, '<br>')}</div>
        <div class="footer">
          <p>This is an automated email from your Calendar Summary app.</p>
          <p><a href="${process.env.APP_URL || 'http://localhost:3000'}/dashboard">Manage Settings</a></p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Send daily summary to all authenticated users
async function sendDailySummary() {
  try {
    // Get all stored tokens
    const tokenDir = path.join(__dirname, '../../tokens');
    let files;
    
    try {
      files = await fs.readdir(tokenDir);
    } catch (error) {
      console.log('No tokens directory found, no users to send emails to');
      return;
    }
    
    const tokenFiles = files.filter(f => f.endsWith('.json'));
    
    if (tokenFiles.length === 0) {
      console.log('No authenticated users found');
      return;
    }
    
    // Process each user
    for (const file of tokenFiles) {
      const userId = file.replace('.json', '');
      
      try {
        // Load user tokens
        const tokens = await loadTokens(userId);
        if (!tokens) {
          console.log(`No valid tokens for user ${userId}`);
          continue;
        }
        
        // Get tomorrow's events
        const events = await getTomorrowEvents(tokens);
        const summary = generateEventSummary(events);
        
        // Generate email
        const subject = `Your schedule for tomorrow - ${events.length} event${events.length !== 1 ? 's' : ''}`;
        const html = generateEmailHTML(summary, userId);
        
        // Send email
        const recipient = process.env.EMAIL_TO || userId;
        await sendEmail(recipient, subject, summary, html);
        
        console.log(`Daily summary sent to ${recipient}`);
      } catch (error) {
        console.error(`Error processing user ${userId}:`, error);
      }
    }
  } catch (error) {
    console.error('Error in sendDailySummary:', error);
    throw error;
  }
}

// Send test email
async function sendTestEmail(tokens, userEmail) {
  try {
    const events = await getTomorrowEvents(tokens);
    const summary = generateEventSummary(events);
    
    const subject = `Test: Your schedule for tomorrow - ${events.length} event${events.length !== 1 ? 's' : ''}`;
    const html = generateEmailHTML(summary, userEmail);
    
    const recipient = process.env.EMAIL_TO || userEmail;
    await sendEmail(recipient, subject, summary, html);
    
    return { success: true, message: `Test email sent to ${recipient}` };
  } catch (error) {
    console.error('Error sending test email:', error);
    return { success: false, error: error.message };
  }
}

module.exports = {
  sendEmail,
  sendDailySummary,
  sendTestEmail
};