# Emmanuel Jimenez — Portfolio

Static site. No build step, no dependencies, no framework — HTML, CSS and vanilla JS.

## Contents

- `index.html` — the homepage (single page, all content)
- `css/styles.css` — design tokens and every style rule
- `js/main.js` — scroll reveals, active nav, progress bar, stat counters, case-study modals,
  archive filtering, photo lightbox, platforms marquee, viewport-aware video loops
- `images/` — 37 WebP assets (client logos, platform logos, project stills, photography, video posters)
- `videos/` — 3 MP4 loops (PanaHub, NASA VSGC, Love to Run Club)
- `favicon.svg`, `robots.txt`, `sitemap.xml`, `vercel.json`, `.gitignore`

Archivo loads from Google Fonts; everything else is local. All asset paths are relative,
so the site runs from any domain or subdirectory.

## Run locally

```bash
python3 -m http.server 8000    # http://localhost:8000
```

## Deploy

```bash
git init && git add . && git commit -m "Portfolio" && git branch -M main
git remote add origin https://github.com/USERNAME/portfolio.git
git push -u origin main
```

In Vercel: **Add New → Project → Import**. Framework preset **Other**, build command empty,
output directory empty. Deploy.

## Before launch

1. Swap the `Let's talk` link in `index.html` (`#final`) for a `mailto:` once you have a public address.
2. Set your real domain in `<link rel="canonical">`, `og:url` and `sitemap.xml`.
3. `images/og.webp` currently reuses the showreel poster — replace with a 1200×630 card if you want.
4. Check the third-party logos in `images/` are cleared for use.

## Editing

Case-study copy is the `CASES` object and the archive is the `PROJECTS` array, both at the top of
`js/main.js`. Platform logos are the `TOOLS` array. Everything else lives in `index.html`.
