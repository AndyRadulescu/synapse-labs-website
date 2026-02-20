# Synapse Labs Website

A modern, high-performance web application built with **Next.js 16** using the **App Router** architecture. It emphasizes high-quality user experience through smooth animations and responsive design.

## Project Overview

- **Framework:** [Next.js 16](https://nextjs.org/) (React 19)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) (using SCSS)
- **Animations:** [GSAP](https://gsap.com/) with [@gsap/react](https://www.npmjs.com/package/@gsap/react)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Features:** React Compiler enabled.

## Building and Running

### Development
```bash
npm run dev
```
The application will be available at `http://localhost:3000`.

### Production
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

## Development Conventions

### Directory Structure
- `src/app/`: Main application routes, layouts, and global styles.
- `src/app/components/`: Page-specific components (e.g., `menu/`, `hero-slider/`).
- `public/`: Static assets.

### Components and Styling
- **App Router:** All pages and layouts reside in `src/app`.
- **Styling:** Tailwind CSS 4 is used, configured via `@tailwind` directives in `src/app/globals.scss`. Custom SCSS and co-located CSS files (e.g., `menu.css`) are used for complex styling and animations.
- **Client Components:** Use `'use client';` for interactivity or GSAP animations.

### Animations
- Use **GSAP** for complex animations.
- Use the `useGSAP` hook for safe lifecycle management.

### Code Style
- Proper TypeScript typing for all components and props.
- Keep components focused and modular.
- React Compiler is enabled (`reactCompiler: true` in `next.config.ts`), which optimizes React components automatically.
