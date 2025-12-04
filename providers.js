const axios = require('axios');

async function sendSMS_MSG91(to, message){
  const key = process.env.MSG91_KEY;
  if(!key) throw new Error('MSG91_KEY missing');
  // MSG91 HTTP API example (modify per current MSG91 docs)
  const url = `https://api.msg91.com/api/v5/one-to-one/message/sms`;
  const body = {
    "message": message,
    "to": [ to.replace('+','') ],
    "sender": process.env.MSG91_SENDER || 'TXTIND'
  };
  const headers = { "authkey": key, "content-type": "application/json" };
  const resp = await axios.post(url, body, { headers });
  return resp.data;
}

async function sendCall_Twilio(to, message){
  const SID = process.env.TWILIO_SID, AUTH = process.env.TWILIO_AUTH, FROM = process.env.TWILIO_FROM;
  if(!SID || !AUTH || !FROM) throw new Error('Twilio creds missing');
  // Very simple Twimlet call using Twilio REST API
  const url = `https://api.twilio.com/2010-04-01/Accounts/${SID}/Calls.json`;
  const twimlUrl = `http://twimlets.com/message?Message%5B0%5D=${encodeURIComponent(message)}`;
  const params = new URLSearchParams();
  params.append('To', to);
  params.append('From', FROM);
  params.append('Url', twimlUrl);
  const resp = await axios.post(url, params, { auth: { username: SID, password: AUTH } });
  return resp.data;
}

async function sendWA_Meta(to, message){
  const TOKEN = process.env.WA_TOKEN;
  const PHONE_ID = process.env.WA_PHONE_NUMBER_ID;
  if(!TOKEN || !PHONE_ID) throw new Error('WA config missing');
  const url = `https://graph.facebook.com/v15.0/${PHONE_ID}/messages`;
  const body = {
    messaging_product: "whatsapp",
    to: to.replace('+',''),
    type: "text",
    text: { body: message }
  };
  const resp = await axios.post(url, body, { headers: { Authorization: `Bearer ${TOKEN}` } });
  return resp.data;
}

module.exports = { sendSMS_MSG91, sendCall_Twilio, sendWA_Meta };