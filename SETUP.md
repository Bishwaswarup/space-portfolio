# Setup

1. `npm install`
2. `npm run dev` — local dev server (Vite, hot reload)
3. Edit `src/data/projects.js` with your real repos, stats, and colors
4. In GitHub: create a repo, e.g. `space-portfolio`
5. In `vite.config.js`, set `base: '/your-repo-name/'`
6. In repo Settings → Pages, set Source = "GitHub Actions"
7. Push to `main` — the included workflow (`.github/workflows/deploy.yml`) builds and deploys automatically
8. Site goes live at `https://yourusername.github.io/your-repo-name/`

## What was added beyond the original outline
- Full working React Three Fiber scene: central star + 4 orbiting planets on elliptical rings, glow halos, starfield, autorotating orbit camera
- Click a planet (or a nav-rail button) to open the HUD drawer with stats, stack tags, and a GitHub link
- Click the star itself to close the drawer / return to overview
- Hover labels above planets using drei's `Html`
- Sci-fi HUD: corner scan brackets, telemetry strip, nav rail — all pure CSS, no extra libraries
- Responsive breakpoint for mobile (collapses telemetry strip, shrinks nav rail, full-width drawer)
- GitHub Actions workflow using the modern `actions/deploy-pages` flow (no `gh-pages` branch needed)

## Next steps worth doing
- Swap flat-color spheres for textured planets (`useTexture` from drei) if you want more visual richness
- Add a loading screen while the star/planet textures load
- Add keyboard navigation (arrow keys cycle through nav-rail items) for accessibility
- Consider `prefers-reduced-motion` handling to pause `autoRotate` and orbital motion
- Wire real GitHub stats via the GitHub REST API at build time instead of hardcoding stars/commits
