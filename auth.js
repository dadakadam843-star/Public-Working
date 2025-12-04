const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register (simple)
router.post('/register', async (req, res) => {
  try{
    const { name, email, phone, password } = req.body;
    if(!phone || !password) return res.status(400).json({ error: 'Phone and password required' });
    const existing = await User.findOne({ phone });
    if(existing) return res.status(400).json({ error: 'User exists' });
    const hashed = await bcrypt.hash(password, 10);
    const u = new User({ name, email, phone, password: hashed });
    await u.save();
    res.json({ ok: true });
  }catch(err){ res.status(500).json({ error: err.message }); }
});

// Login
router.post('/login', async (req, res) => {
  try{
    const { phone, password } = req.body;
    const u = await User.findOne({ phone });
    if(!u) return res.status(400).json({ error: 'Invalid creds' });
    const ok = await bcrypt.compare(password, u.password);
    if(!ok) return res.status(400).json({ error: 'Invalid creds' });
    const token = jwt.sign({ id: u._id, role: u.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
    res.json({ token, user: { name: u.name, phone: u.phone, role: u.role } });
  }catch(err){ res.status(500).json({ error: err.message }); }
});

module.exports = router;
