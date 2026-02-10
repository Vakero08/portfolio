# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview
This is a portfolio website built with Next.js 16 using the App Router architecture, React 19, TypeScript, and Tailwind CSS v4. The project uses the React Compiler feature (`reactCompiler: true` in next.config.ts) for automatic optimization.

## Development Commands

### Core Development
- **Start dev server**: `npm run dev` (runs on http://localhost:3000)
- **Build production**: `npm run build`
- **Start production**: `npm start`
- **Lint code**: `npm run lint`

### Key Technologies
- **Framework**: Next.js 16.1.6 with App Router
- **React**: v19.2.3 with React Compiler enabled
- **Styling**: Tailwind CSS v4 (PostCSS-based architecture)
- **TypeScript**: v5 with strict mode enabled
- **Fonts**: Geist Sans and Geist Mono from `next/font/google`

## Project Architecture

### Path Aliases
- `@/*` maps to `./src/*` (configured in tsconfig.json)

### Directory Structure
- `src/app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with Geist font configuration and metadata
  - `page.tsx` - Home page component
  - `globals.css` - Global styles with Tailwind imports and CSS custom properties for theming
- `public/` - Static assets (SVG icons: next.svg, vercel.svg, file.svg, globe.svg, window.svg)

### Styling Architecture
- Uses Tailwind CSS v4 with PostCSS architecture (not the legacy JIT compiler)
- CSS custom properties in `globals.css` define theme colors (`--background`, `--foreground`)
- `@theme inline` directive maps custom properties to Tailwind utilities
- Dark mode support via `prefers-color-scheme` media query
- Font variables (`--font-geist-sans`, `--font-geist-mono`) injected by layout.tsx

### Next.js Configuration
- **React Compiler**: Enabled for automatic React optimization
- **ESLint**: Uses Next.js core-web-vitals and TypeScript configs with custom ignore patterns
- **TypeScript**: Strict mode, ES2017 target, Next.js plugin for types
- **Module Resolution**: Bundler strategy for modern import handling

## Important Patterns
- This project uses Next.js App Router (not Pages Router)
- Server Components are the default; add `"use client"` only when needed
- Image optimization via `next/image` is already in use
- Font optimization via `next/font/google` loads Geist fonts with variable CSS support
