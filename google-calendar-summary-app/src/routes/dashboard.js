const express = require('express');
const router = express.Router();
const { getTomorrowEvents, generateEventSummary } = require('../services/calendarService');
const { sendTestEmail } = require('../services/emailService');

// Middleware to check authentication
function requireAuth(req, res, next) {
  if (!req.session.tokens || !req.session.user) {
    return res.redirect('/');
  }
  next();
}

// Dashboard page
router.get('/', requireAuth, async (req, res) => {
  try {
    // Get tomorrow's events
    const events = await getTomorrowEvents(req.session.tokens);
    const summary = generateEventSummary(events);
    
    res.render('dashboard', {
      user: req.session.user,
      events: events,
      summary: summary,
      emailTo: process.env.EMAIL_TO || req.session.user.email,
      cronSchedule: process.env.CRON_SCHEDULE || '0 20 * * *',
      timezone: process.env.TIMEZONE || 'America/New_York'
    });
  } catch (error) {
    console.error('Dashboard error:', error);
    res.render('dashboard', {
      user: req.session.user,
      error: 'Failed to fetch calendar events. Please try logging in again.',
      emailTo: process.env.EMAIL_TO || req.session.user.email,
      cronSchedule: process.env.CRON_SCHEDULE || '0 20 * * *',
      timezone: process.env.TIMEZONE || 'America/New_York'
    });
  }
});

// Send test email
router.post('/test-email', requireAuth, async (req, res) => {
  try {
    const result = await sendTestEmail(req.session.tokens, req.session.user.email);
    res.json(result);
  } catch (error) {
    console.error('Test email error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get preview of tomorrow's events
router.get('/preview', requireAuth, async (req, res) => {
  try {
    const events = await getTomorrowEvents(req.session.tokens);
    const summary = generateEventSummary(events);
    res.json({ success: true, events, summary });
  } catch (error) {
    console.error('Preview error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;