# Abdelghani Hireche — Portfolio

A modern, single-page portfolio built with **React + Vite + Tailwind CSS**, redesigned
with a **Claude AI–inspired theme** (warm cream background, terracotta accent, and the
Claude sunburst mark used as the brand icon). Deployable for free on **GitHub Pages**.

## ✨ Features

- Bento-grid home page (Profile, Resume, Education, Experience, Projects, Certificates, Badges, Stats)
- Dedicated pages: About, Certificates, Badges, Contact
- Claude-style palette, serif display type, soft shadows, subtle animations
- Fully responsive
- No backend required — the contact form opens the visitor's mail client

## 🧱 Tech stack

| Purpose      | Tool                      |
| ------------ | ------------------------- |
| UI framework | React 18                  |
| Build tool   | Vite 5                    |
| Styling      | Tailwind CSS 3            |
| Routing      | React Router (HashRouter) |
| Deployment   | GitHub Pages + Actions    |

## 🚀 Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server → http://localhost:5173
npm run build    # production build → /dist
npm run preview  # preview the production build
```

## 🖊️ Editing content

All text lives in [`src/data/content.js`](src/data/content.js): profile, about,
experiences, education, projects, certificates, badges and contact info.

### Add real images

Drop files in the `public/` folder and reference them from `content.js`:

- Profile photo → `public/profile.jpg`
- Resume PDF → `public/resume.pdf`
- Certificate scan → set `image: './certs/my-cert.png'` on a certificate entry
- Badge image → set `image: './badges/my-badge.png'` on a badge entry

## 🌐 Deploy to GitHub Pages

1. Create a new GitHub repository and push this project to the `main` branch.
2. In the repo, go to **Settings → Pages → Build and deployment → Source** and choose
   **GitHub Actions**.
3. Every push to `main` triggers the workflow in
   [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site
   and publishes it. Your site will be available at
   `https://<username>.github.io/<repo-name>/`.

> The Vite `base` is set to `'./'` and routing uses `HashRouter`, so the site works under
> any repository name without extra configuration.

## 📄 License

Personal portfolio — content © Abdelghani Hireche.
