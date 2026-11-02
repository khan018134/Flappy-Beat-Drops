<div align="center">
  <img src="assets/cover.svg" alt="Flappy Beat Drop — neon rhythm arcade" width="100%">
  <h1>Flappy Beat Drop</h1>
  <p><strong>Flap. Dodge. Drop the beat.</strong></p>
  <p>A neon rhythm-inspired arcade game made for quick browser sessions on desktop and mobile.</p>
  <p>
    <a href="https://golden-elf-10a0d8.netlify.app/"><strong>▶ Play the live demo</strong></a>
    &nbsp;·&nbsp;
    <a href="https://github.com/khan018134/flappy-beat-drop">View source</a>
  </p>
</div>

## About

Take control of a musical character and weave through glowing speaker stacks. Collect vinyl, build score combos, and use power-ups to keep your run alive. The game is a lightweight static site built with vanilla JavaScript and the Canvas API—no install or build step required.

## Features

- Three character skins: MC Mic, Boombox, and Grillz
- Responsive canvas rendering with neon city-inspired visuals
- Endless obstacle course with gradually increasing challenge
- Combo scoring with multipliers up to 4×
- Vinyl bonus pickups, protective Shield, and temporary Slow-Mo
- Synthesized sound effects using the Web Audio API, with a mute toggle
- Personal best saved locally in the browser
- Pause and resume, including automatic pause when the page is hidden
- Mobile touch, desktop click, and keyboard controls
- Installable as a home-screen web app with offline game-shell caching

## Play and install

- **Play online:** [Flappy Beat Drop](https://golden-elf-10a0d8.netlify.app/)
- **Install / prepare offline play:** [Open the install guide](https://golden-elf-10a0d8.netlify.app/install.html)

Open the install guide over HTTPS while online. The service worker caches the game shell for offline use. On Android, use the browser's **Install app** option. On iPhone, open in Safari and choose **Share → Add to Home Screen**. Visit the game online once before going offline so its files are cached. Browser and platform install options vary.

## How to play

| Action | Control |
| --- | --- |
| Flap / start | Tap or click the game canvas; press **Space** on desktop |
| Pause / resume | **Esc** or **P**, or use the pause button |
| Toggle sound | Use the sound button in the header |

Fly through each speaker gap without hitting an obstacle or the stage boundary. Clearing obstacles builds your combo; pickups add points or temporary abilities.

## Run locally

No dependencies or build tools are needed. Open `index.html` in a modern browser for basic play. To test service-worker/offline behavior, serve the repository over localhost (service workers require HTTPS or localhost):

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000/install.html> to register the service worker and prepare the offline cache.

## Deploy

This is a static website. Deploy the repository root with GitHub Pages, Netlify, Vercel, or another static host. The site entry point is `index.html`. After adding or changing these files, redeploy the repository so the live site serves `manifest.webmanifest`, `sw.js`, `install.html`, and the icons.

The game has no runtime package dependencies. Some browsers may need a user gesture before synthesized sound starts. A first online visit is required to cache the game for offline use.

## Built with

- HTML5 and CSS
- Vanilla JavaScript and Canvas API
- Web Audio API
- Google Fonts (Space Grotesk and DM Mono)
- Web App Manifest and Service Worker APIs

## Project layout

```text
.
├── assets/
│   ├── app-icon.svg  # Installable app icon
│   └── cover.svg     # Repository banner artwork
├── favicon.svg
├── index.html       # Game, styles, and logic
├── install.html     # Mobile install and offline setup guide
├── manifest.webmanifest
├── README.md
└── sw.js            # Offline app-shell caching
```

## License

No license has been specified. All rights are reserved by default; please contact the repository owner before reusing or redistributing this project.
