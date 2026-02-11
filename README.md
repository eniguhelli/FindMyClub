# ⚽ FindMyClub

A full-stack football club discovery web application that allows users to explore major leagues, search for clubs instantly, and view detailed team information including coach, stadium, crest, founded year, and more.

---

## 🌍 Live Demo

**Frontend:**  
👉 https://find-my-club.vercel.app  

**Backend:**  
👉 https://findmyclub.onrender.com  

---

## ✨ Features:

### 🔎 Smart Club Search
- Fast and responsive club name search  
- Server-side caching for optimized performance  
- Reduced external API calls  

### 🏆 Browse by Major Leagues
Explore teams from:
- 🇬🇧 Premier League  
- 🇪🇸 La Liga  
- 🇮🇹 Serie A  
- 🇩🇪 Bundesliga  
- 🌍 World Cup  

### 🧩 Interactive Club Cards
- Clean, responsive UI  
- Clickable cards for quick access to club details  

### 📋 Detailed Club Modal
Each club includes:
- 🛡️ Club crest  
- 👔 Coach information  
- 🏟️ Stadium  
- 📅 Founded year  

### 🌙 Dark Mode
- Seamless light/dark toggle  
- Implemented using React Context API  

### ⚡ Performance Optimized
- Smart in-memory caching  
- Reduced API load  
- Faster browsing experience  

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)  
- Axios  
- Context API (Dark Mode)  
- Responsive Layout  
- Vercel Deployment  

### Backend
- Node.js  
- Express  
- Axios  
- CORS  
- Environment Variables  
- Render Deployment  

### External API
- [football-data.org (v4)](https://www.football-data.org/)

---

## 🔐 Caching Strategy

To reduce API calls and avoid rate limiting:

- Major league teams are **preloaded on server startup**
- Teams are cached in **server memory**
- Cache automatically **refreshes every 24 hours**
- If cache is empty (cold start), it reloads automatically

### ✅ Benefits
- Faster search performance  
- Reduced external API calls  
- Improved reliability  
- Better overall user experience  

---

## 🚀 Deployment

### Backend (Render)
- Hosted on Render  
- Environment variables configured in dashboard  
- CORS configured to allow Vercel frontend  

### Frontend (Vercel)
- Hosted on Vercel  
- Production API URL configured via environment variables  

---

## 🎯 Project Highlights

- Full-stack architecture  
- Production-ready deployment  
- Performance optimization via caching  
- Clean and responsive UI  
- Scalable backend structure  
