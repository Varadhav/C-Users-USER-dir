require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');
const cron = require('node-cron');

const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');
const { sendDailySummary } = require('./services/emailService');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/auth', authRoutes);
app.use('/dashboard', dashboardRoutes);

// Home route
app.get('/', (req, res) => {
  if (req.session.tokens) {
    res.redirect('/dashboard');
  } else {
    res.render('index');
  }
});

// Schedule daily email
const cronSchedule = process.env.CRON_SCHEDULE || '0 20 * * *'; // Default: 8 PM daily
cron.schedule(cronSchedule, async () => {
  console.log('Running daily summary email job...');
  try {
    await sendDailySummary();
    console.log('Daily summary email sent successfully');
  } catch (error) {
    console.error('Error sending daily summary:', error);
  }
}, {
  timezone: process.env.TIMEZONE || 'America/New_York'
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Daily summary scheduled for ${cronSchedule} in ${process.env.TIMEZONE || 'America/New_York'} timezone`);
});