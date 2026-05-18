# Welcome

### This is the source code for Florian Kühne's portfolio page, which has no reason to be this complex. Feel free to take inspiration 🌈 (or copy) from it.

---

## Project manual

### Overview

Single-page portfolio built with **Next.js 16** (App Router), **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Sass modules**. Content is bilingual (**German** default, **English**) via **next-intl**. The site ships as a **PWA** with an offline fallback page.

| Layer     | Technology                                    |
| --------- | --------------------------------------------- |
| Framework | Next.js 16 (`app/`)                           |
| UI        | React 19, Tailwind 4, SCSS modules            |
| i18n      | next-intl, JSON files in `translations/`      |
| PWA       | `@ducanh2912/next-pwa`                        |
| Fonts     | Montserrat via `next/font` (Latin subset, build-time) |
| Analytics | Vercel Speed Insights (optional on Vercel)    |

### Prerequisites

- **Node.js** 20+ (LTS recommended)
- **npm** (comes with Node)

### Getting started

```bash
# Install dependencies
npm install

# Development (PWA disabled in dev)
npm run dev

# Production build (uses webpack; required for PWA plugin)
npm run build

# Run production server locally
npm run start

# Lint
npm run lint
npm run lint:fix
```

Open [http://localhost:3000](http://localhost:3000). Locale is chosen from the `NEXT_LOCALE` cookie or the browser `Accept-Language` header (see [Internationalization](#internationalization)).

### Project structure

```
portfolio/
├── public/                 # Static assets (icons, fonts, PWA output)
│   ├── icons/              # App icons (source SVGs + generated PNGs)
│   └── Montserrat/         # Legacy; optional — app uses `next/font` in `src/lib/fonts.ts`
├── scripts/
│   └── generate-pwa-icons.mjs
├── translations/
│   ├── de/                 # German copy (one JSON file per namespace)
│   └── en/                 # English copy
├── src/
│   ├── app/                # Routes & global layout
│   ├── components/
│   │   ├── icons/          # SVG icon components (+ logo/ subfolder)
│   │   ├── layout/         # Header, sidebar nav, footer, shell
│   │   ├── sections/       # Page sections (hero, career, …)
│   │   └── ui/             # Reusable UI primitives
│   ├── data/               # Structured content (career, tech stack, nav)
│   ├── hooks/              # Client hooks (scroll spy, hash nav)
│   ├── i18n/               # Locale routing & message loading
│   ├── lib/                # Shared helpers (e.g. career translation)
│   └── styles/             # Global SCSS config & module styles
└── next.config.ts          # PWA + next-intl + React Compiler
```

### Routes

| Path                    | Purpose                                       |
| ----------------------- | --------------------------------------------- |
| `/`                     | Home (all main sections as hash anchors)      |
| `/legal`                | Legal notice                                  |
| `/privacy`              | Privacy policy                                |
| `/~offline`             | PWA offline fallback                          |
| `/manifest.webmanifest` | Web app manifest (from `src/app/manifest.ts`) |

Home sections use **in-page anchors** (`/#welcome`, `/#techstack`, …). Navigation and scroll-spy rely on matching `id` attributes on `<section>` elements in `src/app/page.tsx`.

### Architecture notes

**Server vs client components**

- Most sections and pages are **Server Components** (async, `getTranslations` from `next-intl/server`).
- **Client Components** (`'use client'`) are used where browser APIs or interaction are required: mobile nav drawer, language switcher, career timeline accordion, scroll-spy hooks.

**Internationalization**

- Config: `src/i18n/routing.ts` — locales `de` | `en`, default `de`, no URL prefix (`localePrefix: 'never'`).
- Request config: `src/i18n/request.ts` — resolves locale from cookie `NEXT_LOCALE` or `Accept-Language`.
- Messages: `src/i18n/loadMessages.ts` loads JSON modules for the current route only (see `src/i18n/routeNamespaces.ts`). `src/middleware.ts` sets the `x-pathname` header used in `src/i18n/request.ts`.
- Client bundle: `src/i18n/pickClientMessages.ts` trims loaded messages before `NextIntlClientProvider` (nav, footer, language switcher, offline copy).

**Career timeline**

- Copy lives in `translations/{locale}/career.json`.
- Structure and metadata live in `src/data/career.ts` (`careerKeys` map translation paths).
- Server: `careerSection.tsx` translates data via `src/lib/translateCareer.ts`.
- Client: `careerTimeline.tsx` + `timelineItem.tsx` handle UI and accordion state only.

**Icons**

- **Navigation / menu**: `src/components/icons/iconRegistry.ts` — register keys used in `src/data/navigation.ts`.
- **Tech stack logos**: imported directly in `src/data/techstack.ts` (not via the registry).
- **Section decorations** (hero, contact, flags): direct imports in the relevant component.

**Styling**

- Global: `src/app/globals.css` (Tailwind + CSS variables + Montserrat `@font-face`).
- Shared SCSS tokens: `src/styles/config.scss` (breakpoints, colors) — `@use` from `*.module.scss` files.
- Prefer Tailwind utilities in components; use SCSS modules for complex layout/animation (hero, timeline, header).

**PWA**

- Enabled in production builds only (`disable` in development).
- Generated files in `public/` (`sw.js`, workbox chunks) — do not edit by hand; regenerated on `npm run build`.
- ESLint ignores these generated files.

---

## Common tasks

### Change homepage copy

1. Edit the matching namespace under `translations/de/` and `translations/en/`.
2. Examples:
   - Hero name/role → `hero.json`
   - Section titles/intros → `home.json`
   - Welcome line, footer, contact lead → `common.json`
3. In components, use `getTranslations('namespace')` on the server or `useTranslations('namespace')` on the client.

### Add or reorder main navigation

1. Update `src/data/navigation.ts` (`href`, `translationKey`, `iconKey`).
2. Add labels in `translations/*/navigation.json`.
3. Ensure `src/app/page.tsx` has a `<section id="…">` matching the hash (without `#`).
4. If using a new nav icon, add the component to `iconRegistry.ts` and use its key in `navigationData`.

### Update tech stack skills

1. Edit `src/data/techstack.ts` — categories, labels, `level` (`primary` | `secondary` | `tertiary`), optional `icon` import.
2. Add category/level labels in `translations/*/techstack.json`.
3. For a new logo: add `src/components/icons/logo/<name>.tsx` (SVG component implementing `IconProps` from `@/utils`), then import it in `techstack.ts`.

### Update career history

1. Edit structure in `src/data/career.ts` (groups, projects, dates, technologies).
2. Extend `careerKeys` when adding new translatable fields.
3. Add/update strings in `translations/de/career.json` and `translations/en/career.json`.
4. No change to client timeline code unless you add new UI labels — then extend `CareerUiLabels` in `src/lib/translateCareer.ts`.

### Change contact links

Edit `src/data/contactLinks.ts` (LinkedIn, GitHub, email). Contact UI is in `src/components/sections/contactSection.tsx`.

### Change legal / privacy pages

- Copy: `translations/*/legal.json`, `translations/*/privacy.json`
- Pages: `src/app/legal/page.tsx`, `src/app/privacy/page.tsx`

### Switch language (runtime)

`LanguageSwitcher` sets cookie `NEXT_LOCALE=de|en` and calls `router.refresh()`. No locale segment in the URL.

### Regenerate PWA / favicon assets

After changing `public/icons/icon.svg` or `maskable-icon.svg`:

```bash
npm run generate-pwa-icons
```

This writes PNG sizes and `favicon.ico` via `sharp`. Metadata references are in `src/app/layout.tsx` and `src/app/manifest.ts`.

### Add a new translation namespace

1. Create `translations/de/<name>.json` and `translations/en/<name>.json`.
2. Add `<name>` to `messageModules` in `src/i18n/messageModules.ts`.
3. Register the route in `src/i18n/routeNamespaces.ts` (or it falls back to `notFound` + global namespaces).
4. If client components need it, add the merged top-level key to `pickClientMessages.ts`.

### Add a new page route

1. Create `src/app/<route>/page.tsx`.
2. Add translations if needed and load them with `getTranslations`.
3. For static metadata, use `generateMetadata` or export `metadata`.

---

## Development checklist

| Task               | Command / location                     |
| ------------------ | -------------------------------------- |
| Run locally        | `npm run dev`                          |
| Full CI locally    | `npm run ci`                           |
| Typecheck + build  | `npm run build`                        |
| Lint               | `npm run lint` (scopes to `src/`)      |
| Unit tests         | `npm run test` / `npm run test:ci`     |
| Icons / PWA assets | `npm run generate-pwa-icons`           |
| Env                | No `.env` required for basic local dev |

Before committing:

1. Run `npm run ci` (lint, tests, production build).
2. Update **both** `de` and `en` translation files when changing copy.
3. Do not commit generated PWA files unless you intentionally refreshed them (`public/sw.js`, `workbox-*.js`, `fallback-*.js`).

---

## CI

GitHub Actions (`.github/workflows/ci.yml`) runs on pushes and pull requests to `main`, `develop`, and `master`:

1. `npm ci`
2. `npm run lint`
3. `npm run test:ci`
4. `npm run build` (webpack, required for the PWA plugin)

Node version is pinned via `.nvmrc` (22) and `package.json` `engines`.

---

## Deployment (Vercel)

The repo includes `vercel.json` with the production build command. Vercel auto-detects Next.js; no environment variables are required for a standard deploy.

| Setting        | Value              |
| -------------- | ------------------ |
| Framework      | Next.js            |
| Node.js        | 22.x (from `.nvmrc`) |
| Install        | `npm ci`           |
| Build          | `npm run build`    |
| Output         | Next.js default    |

**Connect the repo**

1. Import the GitHub repository in the [Vercel dashboard](https://vercel.com/new).
2. Use default settings (they match `vercel.json`).
3. Deploy — PWA assets are generated during `npm run build`.

**Optional**

- Enable [Vercel Speed Insights](https://vercel.com/docs/speed-insights) in the project settings (already integrated in `layout.tsx`).
- Add a production domain in Vercel → Settings → Domains.

**Other hosts**

- Build: `npm run build`
- Start: `npm run start`
- Ensure `public/icons/*.png` exist (`npm run generate-pwa-icons` if SVG sources changed).

---

## Troubleshooting

| Issue                          | What to check                                                                                |
| ------------------------------ | -------------------------------------------------------------------------------------------- |
| Nav highlight wrong            | Section `id` must match `navigation.ts` hash; scroll-spy uses `NAV_SECTION_IDS`              |
| Missing translation            | Key in JSON for both locales; module listed in `routeNamespaces.ts` for that path            |
| Client `useTranslations` fails | Top-level key included in `pickClientMessages.ts`                                            |
| PWA not updating               | Hard refresh; rebuild production; clear site data                                            |
| Sass deprecation warnings      | Prefer `sass:map` / `sass:math` in SCSS (`config.scss` uses `map.get`; hero uses `math.div`) |
| Build requires webpack         | `package.json` uses `next build --webpack` for PWA compatibility                             |

---

## License & author

ISC — Florian Kuehne. See `package.json` for repository links.
