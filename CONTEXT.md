# Domain Glossary & Model

## Portfolio Domain Concepts

### Project Modal
An interactive overlay UI component triggered when selecting a Project Card. Presents comprehensive technical details, system architecture notes, key metrics (e.g. performance speedups, dataset size), tech stack tags, and repository/live deployment links. Project Cards feature a magnetic scale and reveal hover state showing primary metrics.

### Category Filter
A set of UI tabs (`All`, `B2B & SaaS`, `AI & ML`, `Web Apps`) allowing dynamic real-time filtering of visible project cards based on domain tags without page reloads.

### Interactive Contact Form
A modal overlay with real-time client-side field validation (Name, Email, Subject, Message), animated submission states (Sending, Success, Reset), and automated backend API email delivery (using Web3Forms or Formspree) with fallback.

### Resume Viewer
A structured document display section featuring key resume sections (Summary, Education, Experience, Projects, Skills) with print and download capability.

### Scroll Animation Engine
Native IntersectionObserver-driven animation controller providing smooth element reveals (fade-in, slide-up, scale) without heavy third-party runtime overhead.

### Scroll-Spy Navigation
Observer-based section tracking system that automatically updates active navigation indicators as the viewport traverses page sections.

### Deployment & Analytics Strategy
Vercel / Netlify zero-config edge deployment pipeline with GitHub CI/CD integration, automatic SSL, custom domain mapping support, and Vercel Speed Insights / Google Analytics telemetry.

### Dark Mode Toggle
A theme customization switch integrated in the navbar using Tailwind `dark:` variant classes and client state storage (`localStorage`) to toggle between a light editorial layout and a premium dark slate layout.

### Skill Highlighting System
An interactive connection module where selecting a specific skill tag dynamically highlights matching projects and career experience items that utilize that technology.

### Interactive Architecture Workflow
A step-by-step visual system workflow tab component embedded in Project Modals that demonstrates end-to-end data flow (Client Request -> Server Logic -> Database Audit Trail) for complex platforms like GarageNET and GitaKosh.
