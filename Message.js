const mongoose = require('mongoose');
const MessageSchema = new mongoose.Schema({
  type: String, // sms|whatsapp|call
  to: String,
  message: String,
  status: { type: String, default: 'queued' },
  campaign: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Message', MessageSchema);
