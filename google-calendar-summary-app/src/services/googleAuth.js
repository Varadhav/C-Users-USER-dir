const { google } = require('googleapis');
const fs = require('fs').promises;
const path = require('path');

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

// Scopes needed for calendar access and email sending
const SCOPES = [
  'https://www.googleapis.com/auth/calendar.readonly',
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile'
];

// Generate auth URL
function getAuthUrl() {
  return oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: 'consent'
  });
}

// Exchange authorization code for tokens
async function getTokens(code) {
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);
  return tokens;
}

// Set credentials from stored tokens
function setCredentials(tokens) {
  oauth2Client.setCredentials(tokens);
}

// Get authenticated client
function getAuthClient() {
  return oauth2Client;
}

// Store tokens to file
async function storeTokens(userId, tokens) {
  const tokenPath = path.join(__dirname, '../../tokens');
  await fs.mkdir(tokenPath, { recursive: true });
  
  const filePath = path.join(tokenPath, `${userId}.json`);
  await fs.writeFile(filePath, JSON.stringify(tokens, null, 2));
}

// Load tokens from file
async function loadTokens(userId) {
  try {
    const filePath = path.join(__dirname, '../../tokens', `${userId}.json`);
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return null;
  }
}

// Get user info
async function getUserInfo(tokens) {
  setCredentials(tokens);
  const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client });
  const { data } = await oauth2.userinfo.get();
  return data;
}

module.exports = {
  getAuthUrl,
  getTokens,
  setCredentials,
  getAuthClient,
  storeTokens,
  loadTokens,
  getUserInfo
};