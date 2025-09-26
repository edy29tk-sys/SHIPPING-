const express = require('express');
const router = express.Router();

// In-memory user store (replace with DB in production)
let users = [{ username: 'admin', password: 'password' }];

// Simple login route
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

module.exports = router;
