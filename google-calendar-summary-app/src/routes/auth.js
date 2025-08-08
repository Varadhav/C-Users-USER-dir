const express = require('express');
const router = express.Router();
const { getAuthUrl, getTokens, storeTokens, getUserInfo } = require('../services/googleAuth');

// Redirect to Google OAuth
router.get('/google', (req, res) => {
  const authUrl = getAuthUrl();
  res.redirect(authUrl);
});

// Handle OAuth callback
router.get('/google/callback', async (req, res) => {
  const { code } = req.query;
  
  if (!code) {
    return res.status(400).send('Authorization code not provided');
  }
  
  try {
    // Exchange code for tokens
    const tokens = await getTokens(code);
    
    // Get user info
    const userInfo = await getUserInfo(tokens);
    
    // Store tokens with user email as ID
    await storeTokens(userInfo.email, tokens);
    
    // Save to session
    req.session.tokens = tokens;
    req.session.user = {
      email: userInfo.email,
      name: userInfo.name,
      picture: userInfo.picture
    };
    
    res.redirect('/dashboard');
  } catch (error) {
    console.error('OAuth callback error:', error);
    res.status(500).send('Authentication failed. Please try again.');
  }
});

// Logout
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Logout error:', err);
    }
    res.redirect('/');
  });
});

module.exports = router;