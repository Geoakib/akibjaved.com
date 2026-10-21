# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`akibjaved.com` is a one-page **personal research portfolio** for Akib Javed (remote sensing / GeoAI / GIS academic). Built with **React 19 + TypeScript + Vite**, styled entirely with plain CSS (no Tailwind, no UI library). Client work — no server, no backend, no tests.

## Commands

```bash
npm run dev       # Vite dev server (HMR)
npm run build     # tsc -b && vite build  → emits dist/ (type errors fail the build)
npm run lint      # eslint .
npm run preview   # serve dist/ locally
```

Node 20 is what CI uses. There is no test runner and no test setup.

## Architecture

The entire site is **one component** — `src/App.tsx` (~766 lines) — plus two stylesheets:

- **`src/App.tsx`** — a single `App` component. All site content lives *inline in this file* as plain-typed data arrays (`milestones`, `conferences`, `projects`, `publications`, `impacts`, `certifications`, …) that are mapped to JSX with `framer-motion` for scroll/entrance animations. Content edits are data-array edits; there is no CMS, no data file, no router.
- **`src/index.css`** — design system: CSS custom properties (`--accent-hyper` blue, `--accent-mint` green, `--bg-lab` dark) on a dark "technical lab" theme, Google Fonts (Outfit + JetBrains Mono). Define any new color via a token here, not inline.
- **`src/App.css`** — all component/section styling.

### Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds and publishes `dist/` to **GitHub Pages on push to `master`**. Two details matter:

- `vite.config.ts` sets `base: '/akibjaved.com/'` — this is matched to the Pages project path. Don't change it unless the Pages URL changes.
- `public/CNAME` is `akibjaved.com.bd` — the live custom domain.

`supporting_info/` (untracked) holds the source CV/photo PDFs that the site's content is drawn from.

## Gotchas

- **React StrictMode is on** (`src/main.tsx`) — it double-invokes effects/render in dev. `STATIC_NODES` in App.tsx is deliberately pre-computed rather than using `Math.random()` inside the component to keep renders stable; keep it that way.
- `framer-motion` is a heavy cost — reuse the existing `whileInView` pattern rather than adding new animation approaches.

Branch is `master`; CI deploys from it. Commit/push only when asked.
