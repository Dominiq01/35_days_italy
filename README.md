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
- **`img/hero.svg`, `img/about.svg`**: placeholders. Add your photos (e.g. `img/hero.jpg`) and update the `src` in `index.html`.
- **`gpx/route.gpx`**: a *sample* route. Replace it with your merged GPX file:
  - one `<trk>` per day → each becomes a stage (Day 1 … Day 35); a `<name>` like `Day 3: Ivrea – Vercelli` shows up in the stage list
  - one `<trk>` with several `<trkseg>` → each segment is a day
  - a single continuous track → shown as one line
  Total km on the page is calculated from the file.

## Deploy
Upload the folder as-is to Netlify, GitHub Pages, Vercel or any static host.
