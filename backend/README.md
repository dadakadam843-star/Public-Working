# Backend for Full Campaign App
This Node.js + Express backend provides:
- Auth (register / login) with JWT
- Broadcast endpoint for SMS / WhatsApp / Calls (uses MSG91 / Twilio / Meta WhatsApp)

## Setup
- Copy `.env.example` to `.env` and fill credentials
- `npm install`
- `npm start`

## Deploy on Render
- Create new Web Service, point to this repo, start command `node server.js`
- Add environment variables in Render dashboard
