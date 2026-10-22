# 35 Days Across Italy

Landing page for a charity run: 35 marathons in 35 days across Italy for Fundacja Twarze Depresji. Plain static site: no build step.

## Run locally
The route map loads the GPX file with `fetch`, which doesn't work from `file://`, so serve the folder:

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## What to edit
- **`js/main.js` → `CONFIG`**: your name, start date, email, donation link, fundraising goal/raised amount, social links.
- **`js/i18n.js`**: all page text in EN / PL / IT. Replace the `[BRACKETED]` placeholders (e.g. `about.story`) in all three languages.
- **`img/hero.jpg`, `img/hero-800.jpg`**: hero photo (4:5, square crop on phones). To replace it, export both sizes and keep the file names.
- **About video** (`CONFIG.aboutVideo`): vertical 9:16 MP4 next to "Why I'm running". Put the file in `video/` (e.g. `video/about.mp4`, ideally H.264, 720×1280, under ~15 MB) and set `src`. Subtitles: `video/about-pl.vtt`, `about-en.vtt`, `about-it.vtt` (WebVTT); the one matching the page language is shown. While `src` is `null` a "coming soon" placeholder is shown.
- **`gpx/route.gpx`**: the real route, merged from the 35 daily Komoot files `gpx/IT_D01_…gpx` … `IT_D35_…gpx` (1480 km). If the route changes, re-merge it. The page reads only `route.gpx`:
  - one `<trk>` per day → each becomes a stage (Day 1 … Day 35); a `<name>` like `Day 3: Ivrea – Vercelli` shows up in the stage list
  - one `<trk>` with several `<trkseg>` → each segment is a day
  - a single continuous track → shown as one line
  Total km on the page is calculated from the file.

## Deploy
Upload the folder as-is to Netlify, GitHub Pages, Vercel or any static host.
