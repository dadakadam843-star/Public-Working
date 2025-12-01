const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, sparse: true },
  phone: { type: String, unique: true, sparse: true },
  password: String,
  role: { type: String, default: 'user' }, // admin or user
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('User', UserSchema);
