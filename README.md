# Ramnarayan weds Prashansa – Wedding Invitation

A single-file static website. No install or build step.

## Run locally
Double-click `index.html`, or serve the folder: `python3 -m http.server 8000` and open http://localhost:8000

## Where to edit details
Open `index.html`, find the block marked `EDIT YOUR WEDDING DETAILS HERE` (inside the `<script>`).
Names, blessing text, ceremony dates and times, venues, family names, contact numbers, countdown date and the music path are all there.
- Add/remove/reorder ceremonies: edit the `events` list in that block (also add a `SC` illustration entry or it will use a plain icon).
- Directions buttons are built automatically from each venue's name and address.

## Add the background song
Put your mp3 next to `index.html` (for example `song.mp3`) and set `music: "song.mp3"` in the details block.
It loops after the guest taps "Open Invitation". Leave `music: ""` to hide the music button. Use only music you have permission to share.

## Images
The artwork (Ganesha, couple, thali, mortar, horse rider, mandap, hotel, lotus, corner) is embedded in `index.html` as base64 so the page works as one file.
The originals are in `assets/` for reuse.

## Deploy
- Vercel / Netlify: drag and drop this folder.
- GitHub Pages: push the folder to a repo and enable Pages on the main branch.
Fonts load from Google Fonts; the page falls back to system fonts if blocked.

## Social preview (WhatsApp)
Add a 1200x630 image `preview.jpg` and, in `<head>`, add:
`<meta property="og:image" content="https://YOUR-DOMAIN/preview.jpg">`
