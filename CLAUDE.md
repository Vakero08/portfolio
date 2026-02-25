# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

This project uses **pnpm** as the package manager.

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## Architecture

This is a **Next.js 16 App Router** portfolio site for Jhonatan Duran (UX/UI Designer). It uses React 19, TypeScript, Tailwind CSS v4, and shadcn/ui components.

### Routing structure

- `/` — Home page with hero and portfolio grid (`src/app/page.tsx`)
- `/case1`, `/case2`, `/case3` — Individual UX/UI case study pages
- `/about`, `/cv` — Planned pages (linked in header, not yet implemented)

### Key architectural patterns

**Content data**: All project data (titles, descriptions, images) lives in `src/resources/content.tsx` as a `projects` array. Case study pages reference this array by index to get their images/metadata.

**Layout**: `src/app/layout.tsx` wraps all pages with `ThemeProvider` → `Header` → `{children}` → `Footer`. The header is fixed at 84px height, so page content uses `mt-[84px]` to avoid overlap.

**Theme system**: Dark/light mode via `next-themes` with `attribute="class"`. CSS variables for colors are defined in `src/app/globals.css` using oklch color space. The primary color is `oklch(0.6898 0.135 228.6)` (blue). Tailwind v4 is configured via CSS `@theme inline` block rather than a `tailwind.config.js` file.

**Header behavior**: The header (`src/components/Header/Header.tsx`) is a `"use client"` component using Framer Motion (`motion` package). It shrinks to a pill shape (800px wide, rounded) when the user scrolls down past 150px.

**Path alias**: `@/*` maps to `./src/*` (configured in `tsconfig.json`).

**React Compiler**: Enabled in `next.config.ts` (`reactCompiler: true`) via `babel-plugin-react-compiler`.

### Component locations

- `src/components/ui/` — shadcn/ui primitives (button, card, separator, dropdown-menu, etc.)
- `src/components/kibo-ui/image-zoom/` — Image zoom wrapper around `react-medium-image-zoom`
- `src/components/CardHome.tsx` — Portfolio project card used on the home page (alternates image left/right based on index)
- `src/components/CardMoreProject.tsx` — Horizontal card used at the bottom of case study pages to link to other projects
- `src/components/Header/Header.tsx` — Animated scroll-aware navigation
- `src/components/Footer/Footer.tsx` — Site footer
- `src/components/theme-provider.tsx` — Thin wrapper around `next-themes`
- `src/components/languaje.tsx` — Language selector component

### Fonts

Defined in `src/app/ui/fonts.ts`: `Quicksand` (primary body font applied in layout), `Inter`, and `Reenie_Beanie` — all loaded via `next/font/google`.

### Images

Static images are in `public/images/`, organized by case study (`case1/`, `case2/`, `case3/`).
