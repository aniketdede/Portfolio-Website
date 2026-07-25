# Portfolio Technical Documentation & Architecture Manual

**Project**: Aniket Dede – Full-Stack Software Engineer Portfolio  
**Framework**: Next.js 16.2.11 (Turbopack) / React 19  
**Styling System**: Tailwind CSS v4, Vanilla CSS Glassmorphism  
**Author**: Aniket Vikas Dede (<aniketdede12@gmail.com>)

---

## 1. System Architecture & Component Mapping

```
Portfolio App Root (src/app)
 ├── layout.js                 # Global Metadata, OpenGraph & Fonts
 ├── page.js                   # Main Container Component
 ├── globals.css               # Design System Tokens & Glassmorphism
 └── api/
     └── contact/
         └── route.js          # Contact Inquiry Endpoint & Server Validation

Components Registry (src/components)
 ├── Navbar.jsx                # Fixed Header, Scroll-Spy & Mobile Menu
 ├── Hero.jsx                  # Hero Banner & Full Head-to-Stomach Framing
 ├── About.jsx                 # Professional Summary & Key B2B Metrics
 ├── Experience.jsx            # Career Timeline & EY GDS Internship
 ├── Projects.jsx              # Project Showcase, Category Filters & Action Badges
 ├── ProjectModal.jsx          # Interactive System Architecture & Data Workflow Overlay
 ├── Skills.jsx                # Interactive Tech Stack Tag Filtering Engine
 ├── Certifications.jsx        # Credentials & Professional Badge Showcase
 ├── ResumeSection.jsx         # Formal Resume Specifications & PDF Print Handler
 └── Footer.jsx                # Copyright, Social Links & Real-Time Date Indicator
```

---

## 2. Implemented Upgrades & Feature Enhancements

### 2.1 OpenGraph & Social Preview Sharing Cards
- **File**: [`src/app/layout.js`](file:///c:/Users/Aniket/Desktop/Portfolio/Portfolio-Website/src/app/layout.js)
- **Features**:
  - Configured `openGraph` and `twitter` card metadata pointing to `/newimg.png` (1200x630 banner).
  - Share links on LinkedIn, Twitter, and WhatsApp render rich visual cards displaying Aniket's profile, title, and credentials.

### 2.2 Direct Project Action Buttons ("Live Demo ↗" & "GitHub Code ↗")
- **File**: [`src/components/Projects.jsx`](file:///c:/Users/Aniket/Desktop/Portfolio/Portfolio-Website/src/components/Projects.jsx)
- **Features**:
  - Added direct action links on every project card (`GarageNET`, `GitaKosh`, `RoadRescue`).
  - Allows technical recruiters to launch live application deployments or inspect source code in one click.

### 2.3 Interactive Project Specs & Workflow Overlay
- **File**: [`src/components/ProjectModal.jsx`](file:///c:/Users/Aniket/Desktop/Portfolio/Portfolio-Website/src/components/ProjectModal.jsx)
- **Features**:
  - Dual tab interface: *Overview & Features* vs *End-to-End System Data Workflow*.
  - Sticky header bar (`×` close button) + sticky action footer (`Close Specs`, `View Repository`).
  - Mouse wheel and touch drag scrolling with explicit CSS flex bounds (`max-h-[85vh]`).

### 2.4 Navigation Scroll-Spy & Lock Mechanism
- **File**: [`src/components/Navbar.jsx`](file:///c:/Users/Aniket/Desktop/Portfolio/Portfolio-Website/src/components/Navbar.jsx)
- **Features**:
  - Real-time `getBoundingClientRect()` scroll-spy tracks section visibility.
  - Clicking any nav link locks auto scroll-spy for 900ms, preventing indicator flickering during smooth scrolling.

---

## 3. Automated Test Suite Matrix

The project maintains 5 Playwright E2E automation scripts in `scratch/`:

1. **`scratch/test_portfolio.py`**: Full E2E user journeys across all sections, navigation links, filters, and overlays.
2. **`scratch/test_project_modal_tdd.py`**: Behavior-driven test verifying the interactive system architecture modal seam.
3. **`scratch/test_scroll_spy.py`**: Verifies active section indicator tracking for all 7 anchor links (`#home`, `#about`, `#experience`, `#projects`, `#skills`, `#certifications`, `#docs`).
4. **`scratch/test_nav_clicks.py`**: Tests instant click state activation and 900ms scroll-spy lock.
5. **`scratch/test_all_projects_modal_scroll.py`**: Verifies modal scroll accessibility across `GarageNET`, `GitaKosh`, and `RoadRescue`.

---

## 4. Production Build & Deployment Instructions

### Local Development
```bash
npm run dev
```

### Production Build Verification
```bash
npm run build
```
*Build Result: Compiled cleanly in 4.3s with 0 errors and 0 warnings.*
