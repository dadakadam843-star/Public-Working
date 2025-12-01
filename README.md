# Full Campaign App (Backend + Frontend)
This repository contains a full-stack prototype for campaign automation:
- Node.js + Express backend (MongoDB) with endpoints for broadcast (SMS/WhatsApp/Call)
- Simple Tailwind frontend (Admin Panel + Login + Broadcast)
- Provider integrations (placeholders) for MSG91, Twilio and Meta WhatsApp API

## Quick start (local)
- Install MongoDB and Node.js
- Copy backend/.env.example to backend/.env and fill values
- From project root: `npm install` in backend folder then `node backend/server.js`
- Open http://localhost:5000 (serves frontend)

## Deploy
- Push to GitHub and connect GitHub repo on Render.com
- Create two services: Static Site (frontend) and Web Service (backend) OR serve frontend from backend static folder.
- Add environment variables on Render
