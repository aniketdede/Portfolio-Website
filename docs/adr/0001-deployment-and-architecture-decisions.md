# 1. Portfolio Architecture & Deployment Strategy

Date: 2026-07-25

## Status

Accepted

## Context

The portfolio website for Aniket Vikas Dede requires a fast, responsive, and interactive experience to showcase full-stack projects (GarageNET, GitaKosh, RoadRescue), EY GDS internship experience, and technical skills. It needs high performance, client-side interactivity, and zero-downtime deployment capabilities.

## Decision

1. **Front-End Architecture**: Next.js 15 App Router (`src/app`), React.js components (`src/components`), and Tailwind CSS for rapid responsive utility layout and Server-Side Rendering (SSR). Includes API Route (`/api/contact`) for contact form processing.
2. **Interactive Components**:
   - **Project Modals & Category Filters**: Tabbed filtering (`All`, `B2B & SaaS`, `AI & ML`, `Web Apps`) and rich interactive modal overlays for deep technical specs.
   - **Interactive Contact Modal**: Client-side form validation with real-time feedback, Web3Forms integration, and direct `mailto:` fallback.
   - **Scroll Animation Engine**: Native `IntersectionObserver` scroll animations and scroll-spy active section navigation highlighting.
3. **Deployment Target**: Vercel / Netlify edge deployment connected directly to the GitHub repository `aniketdede/Portfolio-Website` with automatic build triggers, free SSL, and Vercel Analytics integration.

## Consequences

- Extremely lightweight (< 100KB gzipped core assets), lightning-fast performance score (100/100 Lighthouse target).
- Simple maintainability without complex build toolchains.
- Smooth CI/CD deployment pipeline on every `git push`.
