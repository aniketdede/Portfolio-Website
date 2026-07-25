# 2. Interactive Enhancements, Dark Mode Theme & Architecture Workflows

Date: 2026-07-25

## Status

Accepted

## Context

Following our `/grilling` session, the portfolio required enhanced recruiter engagement features, interactive architecture explanations for full-stack projects (GarageNET, GitaKosh), dark theme customization, and automated email delivery.

## Decision

1. **Automated Contact Delivery**: Integrated direct API email delivery in `/api/contact` using Web3Forms/Formspree endpoints while retaining mailto link fallback.
2. **Project Card Hover States**: Implemented magnetic scale and reveal hover animations on Project Cards highlighting primary performance metrics (+60% sourcing speedup).
3. **Dynamic Dark Mode**: Added a nav theme switch with Tailwind `dark:` classes and `localStorage` state persistence.
4. **Skill Highlighting System**: Interconnected skill tags to dynamically highlight matching projects and journey milestones on interaction.
5. **Interactive System Architecture Workflow**: Built a step-by-step interactive data flow tab component inside Project Modals (Client Request -> Server Process -> DB Audit).

## Consequences

- Direct recruiter conversion with seamless contact submission.
- High-impact visual feedback demonstrating deep system design capabilities.
- Flexible theme customization across light and dark modes.
