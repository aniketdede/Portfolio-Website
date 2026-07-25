# System Architecture & Technical Specifications

This document outlines the technical design, component architecture, and script mechanisms of **Aniket Vikas Dede's Portfolio Website**.

---

## 1. System Architecture Overview

The portfolio is architected as an ultra-fast, zero-framework, single-page application (SPA) optimized for client-side performance, mobile responsiveness, and high accessibility scores.

```
[ Viewport / Browser ]
        │
        ├── Navigation & Scroll-Spy Observer (IntersectionObserver)
        ├── Hero Section & Real-time Live Clock Script
        ├── About & Professional Summary Stats
        ├── Experience & Education Sticky Timeline
        ├── Category Filtered Projects (All | B2B & SaaS | AI & ML | Web Apps)
        │       └── Project Modal Overlay Engine (GarageNET, GitaKosh, RoadRescue)
        ├── Skills Competency Matrix
        ├── Certifications & Achievements
        ├── Official Resume Viewer & Download Module
        └── Interactive Contact Modal & Form Validator
```

---

## 2. Interactive Components & Script Engines

### A. Project Category Filter & Modal Engine
- **Category Filter**: Tabbed navigation filtering project cards based on `data-category="b2b|ai|web"` attributes with CSS opacity transitions.
- **Project Modal**: Dynamic JavaScript modal renderer injecting rich JSON objects into an accessible overlay (`#projectModalOverlay`). Includes full system specs, metrics, architecture notes, and GitHub links.

### B. Interactive Contact Form Modal
- Real-time client validation for `#contactName`, `#contactEmail`, `#contactSubject`, `#contactMessage`.
- Handles form submission feedback states (Sending, Success) and opens a mailto link fallback to `aniketdede12@gmail.com`.

### C. Scroll Animation Engine
- Uses native browser `IntersectionObserver` to add `.is-visible` classes to `.reveal-on-scroll` elements when they enter the viewport.
- Zero external animation library dependencies (e.g. GSAP or Framer Motion), ensuring minimal bundle size.

### D. Scroll-Spy Navigation
- Tracks current section scroll position and highlights active link (`.active-nav`) on the sticky navigation bar in real time.

---

## 3. Projects Summary

1. **GarageNET (B2B SaaS)**:
   - Stack: Django, Python, Tailwind CSS, REST APIs.
   - Core Features: Job cards management, automated billing with inventory deduction, GSearch AI parts finder (60% sourcing boost), JWT RBAC.
2. **GitaKosh (AI Devotional App)**:
   - Stack: React.js, Node.js, MongoDB Atlas, Google Gemini AI API, Google OAuth.
   - Core Features: Contextual AI chatbot, 700+ verse data cleaning pipeline, gamification streaks & leaderboards.
3. **RoadRescue (Emergency Locator Prototype)**:
   - Stack: React.js, Node.js, Express.js, Geolocation API.
   - Core Features: Real-time driver-mechanic geolocation matching interface.
