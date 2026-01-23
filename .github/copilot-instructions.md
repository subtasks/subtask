# Copilot & AI Agent Instructions for Gilded Digital Presence

## Project Overview
- **Stack:** Vite + React + TypeScript + Tailwind CSS + shadcn-ui + Radix UI + TanStack React Query
- **Purpose:** Modern, modular digital presence site with reusable UI and section components.
- **Entry Point:** `src/main.tsx` bootstraps the app; `src/App.tsx` defines routing and global providers.

## Architecture & Patterns
- **Pages:** Main routes in `src/pages/` (e.g., `About.tsx`, `Services.tsx`).
- **Sections:** Homepage/landing sections in `src/components/sections/` (e.g., `Hero.tsx`, `ProcessSection.tsx`).
- **UI Components:** Atomic, shared UI in `src/components/ui/` (e.g., `button.tsx`, `card.tsx`).
- **Hooks:** Custom hooks in `src/hooks/` (e.g., `use-mobile.tsx`).
- **Utilities:** Shared helpers in `src/lib/utils.ts` (notably the `cn` function for class merging).
- **Routing:** Uses `react-router-dom`; all routes registered in `App.tsx`.
- **State/Async:** Uses `@tanstack/react-query` for async data/caching. Wrap components in `QueryClientProvider` as in `App.tsx`.
- **Styling:** Tailwind CSS with custom theme in `tailwind.config.ts`. Use `cn` for className merging.
- **Animation:** Uses `framer-motion` for transitions/effects.

## Developer Workflows
- **Install:** `npm install`
- **Dev Server:** `npm run dev` (auto-reloads at http://localhost:8080)
- **Build:** `npm run build` (production build)
- **Preview:** `npm run preview` (serves build output)
- **Lint:** `npm run lint`
- **Component Tagging:** In development, the `lovable-tagger` plugin auto-tags components for Lovable platform integration.

## Project Conventions
- **Imports:** Use `@/` alias for `src/` (see `vite.config.ts`).
- **Component Structure:** Prefer function components. Co-locate styles and logic. Use atomic UI from `ui/` when possible.
- **Class Names:** Use Tailwind utility classes. Use the `cn` helper for conditional classes.
- **Theming:** Colors/fonts set via CSS variables and Tailwind config. Use semantic color names (e.g., `bg-primary`).
- **Routing:** Add new pages to `src/pages/` and register in `App.tsx`.
- **UI Consistency:** Use shadcn-ui and Radix primitives for accessible UI.

## Integration & Deployment
- **Lovable Platform:** Designed for [Lovable](https://lovable.dev/). Changes via Lovable are auto-committed. Deploy via Lovable UI (Share → Publish).
- **Custom Domains:** Set up via Lovable Project > Settings > Domains.

## Key Files & Directories
- [src/App.tsx](src/App.tsx) – App shell, routing, providers
- [src/pages/](src/pages/) – Main route components
- [src/components/sections/](src/components/sections/) – Landing page sections
- [src/components/ui/](src/components/ui/) – Atomic UI components
- [tailwind.config.ts](tailwind.config.ts) – Theme, colors, fonts
- [vite.config.ts](vite.config.ts) – Build config, aliases, plugins

## Example: Adding a New Page
1. Create [src/pages/Foo.tsx](src/pages/Foo.tsx).
2. Add `<Route path="/foo" element={<Foo />} />` in [App.tsx](src/App.tsx).
3. Use UI primitives from [ui/](src/components/ui/) and Tailwind classes.

---

For more, see the README or Lovable docs. If any conventions are unclear or missing, please ask for clarification or suggest updates.
