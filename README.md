# Pastebin Lite — Frontend ⚡

A minimal React frontend for the Pastebin‑Lite take-home assignment built with Vite and Tailwind CSS.

This repo implements a small single-page application that lets users create and view text "pastes" backed by a simple API.

---

## 🚀 Features

- Create, save, and view pastes
- Clean minimal UI using Tailwind CSS
- Uses environment variable for API base URL
- Client-side routing with React Router

---

## 🧭 Tech stack

- React 18
- Vite
- Tailwind CSS
- React Router DOM

---

## 📦 Getting started

Requirements:
- Node.js (v16+ recommended)
- npm or yarn

Clone and install:

```bash
git clone <repo-url>
cd pastebin-lite-frontend
npm install
```

Create a local environment file (`.env` or `.env.local`) with the API base URL used by the frontend:

```env
VITE_API_BASE_URL=http://localhost:3000
```

Start dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview a production build locally:

```bash
npm run preview
```

---

## 🔌 Environment variables

- `VITE_API_BASE_URL` — Base URL of the backend API (example: `http://localhost:3000`). The frontend expects the API to expose these endpoints:
  - `POST /api/pastes` — create a new paste
  - `GET /api/pastes/:id` — fetch an existing paste

These are used in `src/api.js`.

---

## 🗂 Project structure

- `index.html` — Vite entry
- `src/` — application source
  - `main.jsx` — app bootstrap
  - `App.jsx` — routes and layout
  - `api.js` — small helper for API requests
  - `pages/` — route components (`CreatePaste.jsx`, `ViewPaste.jsx`, `NotFound.jsx`)
  - `index.css` — Tailwind base styles

---

## 🛠 Development notes

- Hot reload is handled by Vite.
- Tailwind classes are used for styling; see `tailwind.config.js` and `postcss.config.js`.

If you need to change the API URL for local testing, update the `VITE_API_BASE_URL` in your `.env` file and restart the dev server.

---

