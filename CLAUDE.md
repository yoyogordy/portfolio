# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio website for Amit Gordon (עמית גורדון) — a Hebrew-language (RTL) copywriter and musician portfolio at amitgordon.com. Deployed on Vercel with automatic deploys from the main branch.

## Commands

- `npm run dev` — Start dev server on port 8080
- `npm run build` — Production build
- `npm run lint` — ESLint
- `npm run preview` — Preview production build

Uses **bun** as the package manager (bun.lockb present).

## Architecture

Single-page React app (Vite + TypeScript + Tailwind CSS + shadcn/ui).

- **Routing**: React Router with two routes: `/` (Index) and `*` (NotFound)
- **Page structure**: `Index.tsx` composes sections: Navbar → Hero → PortfolioSection → ContactSection → Footer
- **Portfolio data**: All portfolio items live in `src/data/portfolioItems.ts` as a flat array of `PortfolioItem` objects (videos/images grouped by `client` name). Items are categorized as `'work'` or `'english'` and rendered via `src/components/portfolio/` (PortfolioGrid, PortfolioCard, PortfolioFilters)
- **UI components**: shadcn/ui components in `src/components/ui/` — use `@/` path alias (maps to `./src`)
- **Styling**: Tailwind with CSS variables for theming (defined in `src/index.css`), font is Varela Round
- **RTL**: The site is fully RTL (`lang="he" dir="rtl"` on `<html>`)

## Key Conventions

- All user-facing text is in Hebrew
- Path alias: `@/` → `src/`
- shadcn/ui config: default style, slate base color, CSS variables enabled
