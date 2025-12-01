const express = require('express');
const router = express.Router();
const axios = require('axios');
const Message = require('../models/Message');
const { sendSMS_MSG91, sendCall_Twilio, sendWA_Meta } = require('../utils/providers');

// Broadcast endpoint
router.post('/broadcast', async (req, res) => {
  try{
    const { type, numbers, message, campaign } = req.body;
    if(!type || !numbers || !message) return res.status(400).json({ error: 'Missing fields' });
    const results = [];
    for(const to of numbers){
      const msg = new Message({ type, to, message, campaign });
      await msg.save();
      // call provider depending on type (async fire-and-forget)
      if(type === 'sms') sendSMS_MSG91(to, message).then(r=>{ msg.status='sent'; msg.save(); }).catch(e=>{ msg.status='failed'; msg.save(); });
      if(type === 'call') sendCall_Twilio(to, message).then(r=>{ msg.status='ringing'; msg.save(); }).catch(e=>{ msg.status='failed'; msg.save(); });
      if(type === 'whatsapp') sendWA_Meta(to, message).then(r=>{ msg.status='sent'; msg.save(); }).catch(e=>{ msg.status='failed'; msg.save(); });
      results.push({ to, queued: true });
    }
    res.json({ ok: true, results });
  }catch(err){ res.status(500).json({ error: err.message }); }
});

// Get message history
router.get('/messages', async (req, res) => {
  const msgs = await Message.find().sort({ createdAt: -1 }).limit(200);
  res.json(msgs);
});

module.exports = router;
