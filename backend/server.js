require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/campaigndb';
mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=>console.log('MongoDB connected'))
  .catch(err=>console.error('MongoDB error', err));

app.use('/api/auth', authRoutes);
app.use('/api', apiRoutes);

// Serve frontend static (if used)
app.use(express.static('../frontend'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log('Server running on port', PORT));
