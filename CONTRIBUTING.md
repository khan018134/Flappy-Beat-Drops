# Contributing

Thanks for considering a contribution to Flappy Beat Drop!

## Before you start

- For bugs, open an issue with steps to reproduce, expected behavior, actual behavior, and browser/device details.
- For a larger change, open an issue first to discuss the approach.
- Keep changes focused and avoid adding dependencies unless they are necessary and discussed first.

## Development

The game is a static site with no package manager or build step. Clone the repository and serve its root locally:

```bash
python -m http.server 8000
```

Open <http://localhost:8000/> in a modern browser. Service-worker and install behavior should be tested over localhost or HTTPS, not a `file://` URL.

## Before submitting a pull request

- Test the start, gameplay, pause/resume, retry, scoring, and sound controls.
- Check keyboard controls and touch/pointer gameplay where possible.
- Check a narrow mobile viewport as well as a desktop viewport.
- If you change cached app files, update the cache version in `sw.js`.
- Describe what changed, why it changed, and how you tested it.
- Include screenshots or a short recording for visual changes when useful.

There is no automated test suite at present. Please state any manual checks performed and call out anything you could not verify.
