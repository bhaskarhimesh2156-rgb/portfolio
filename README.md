# Bhaskar Himesh Portfolio - Setup Guide

## Folder Structure
```
portfolio/
├── public/
│   ├── profile.png          ← Your photo (already added)
│   ├── avatar-spritesheet.png ← Avatar expressions (already added)
│   └── resume.pdf           ← Your resume (already added)
├── src/
│   ├── components/          ← All UI components
│   ├── hooks/               ← Custom React hooks
│   ├── utils/               ← Data & sounds
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Local Setup Steps

### 1. Install Node.js
Download from https://nodejs.org (choose LTS version)

### 2. Install VS Code Extensions
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier

### 3. Open terminal in the portfolio folder
```bash
cd portfolio
npm install
npm run dev
```

### 4. Open browser at http://localhost:5173

## Deploy to Vercel (Free)
1. Push code to GitHub
2. Go to vercel.com → Import Project → Select repo
3. Click Deploy — done!

## Deploy to Netlify (Free)
1. Go to netlify.com → Add new site → Deploy manually
2. Drag the `dist` folder (after running `npm run build`)
