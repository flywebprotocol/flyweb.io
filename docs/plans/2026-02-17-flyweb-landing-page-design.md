# FlyWeb Landing Page Design

**Date:** 2026-02-17
**Status:** Approved
**Repo:** flywebprotocol/flyweb.io

## What We're Building

A single-page manifesto-style landing page for flyweb.io — the home of the FlyWeb protocol. FlyWeb is an open protocol that makes the internet machine-readable with a built-in economic layer. Publishers add `/.well-known/flyweb.json` to declare what content they offer and at what price (free or $FLY tokens). AI agents check this file, pay per request, and the flywheel spins.

**Tagline:** "Robots.txt says NO. FlyWeb says HOW MUCH."

## Tech Stack

- **Framework:** Astro (static site generator)
- **Styling:** Tailwind CSS
- **Animations:** CSS animations + Intersection Observer for scroll reveals
- **Code highlighting:** Shiki (built into Astro)
- **Deployment:** GitHub Pages via GitHub Actions
- **Domain:** flyweb.io (custom domain with CNAME)

## Visual Design

- **Background:** Deep black (#0a0a0a) with subtle grain texture
- **Primary accent:** Electric amber/gold (#F59E0B)
- **Text:** White on dark, high contrast
- **Typography:** Inter or Space Grotesk — bold, modern, activist energy
- **Code blocks:** Dark with syntax highlighting, flyweb.json as visual centerpiece
- **Tone:** Bold & activist — EFF.org meets a protest poster meets Stripe's polish

## Page Sections

### 1. Hero
- Large bold: **"The Internet Is Dying."**
- Sub: "AI consumes everything. Publishers earn nothing. The content black hole is here."
- Punch: **"FlyWeb fixes it."**
- Tagline: `Robots.txt says NO. FlyWeb says HOW MUCH.`
- CTAs: "Read the Spec" (scroll) + "Star on GitHub"

### 2. The Problem (3 blocks)
- "AI scrapes the entire internet for free"
- "Publishers lose revenue, creators stop creating"
- "AI trains on AI slop. Model collapse. The internet dies."
- Visual: death spiral / funnel showing the collapse

### 3. The Solution
- One file: `/.well-known/flyweb.json`
- Full syntax-highlighted JSON example with annotation callouts
- Key message: "Publisher decides. Free or paid. Their terms."

Example:
```json
{
  "flyweb": "1.0",
  "entity": "TechCrunch",
  "resources": {
    "headlines": { "access": "free" },
    "full_articles": { "access": "paid", "cost": 0.05, "currency": "$FLY" },
    "archive_pre_2024": { "access": "free" },
    "archive_2024_plus": { "access": "paid", "cost": 0.02, "currency": "$FLY" }
  }
}
```

### 4. How It Works — The 4 Layers
1. **Discovery** — `/.well-known/flyweb.json` tells AI what's available
2. **Query** — Standard URL-based queries any agent can construct
3. **Payment** — $FLY microtransactions, publisher sets price
4. **Attribution** — AI cites source, drives traffic back

### 5. The Flywheel Diagram
- Circular animated diagram: Content → AI Pays → Creators Earn → More Content → repeat
- Core message: self-reinforcing, not charity

### 6. Two Audiences (side by side)
- **For Publishers:** Earn from AI consumption, control your terms, one JSON file
- **For AI Companies:** Clean structured data, legal access, no more scraping lawsuits

### 7. Roadmap
- Phase 1: Open protocol (free, no token)
- Phase 2: Adoption (1,000+ sites, AI company pilot)
- Phase 3: $FLY token launch on Base chain
- Phase 4: The flywheel spins

### 8. Join the Movement
- GitHub star button
- Email signup (Formspree or similar)
- Twitter/X link
- Future: "Add FlyWeb to your site"

## File Structure

```
flyweb.io/
├── src/
│   ├── layouts/Layout.astro
│   ├── pages/index.astro
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── Problem.astro
│   │   ├── Solution.astro
│   │   ├── HowItWorks.astro
│   │   ├── Flywheel.astro
│   │   ├── Audiences.astro
│   │   ├── Roadmap.astro
│   │   └── JoinCTA.astro
│   └── styles/global.css
├── public/
│   ├── favicon.svg
│   └── CNAME
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── .github/workflows/deploy.yml
```

## Deployment

- Astro builds static output to `dist/`
- GitHub Actions workflow triggers on push to main
- Deploys to GitHub Pages
- CNAME file points to flyweb.io
- SSL automatic via GitHub Pages

## Key Decisions

- **No JS framework** — pure Astro components, minimal client-side JS
- **No email backend** — use Formspree for static site email collection
- **Single page** — the story is told in one scroll, no fragmentation
- **Protocol first, token later** — the page emphasizes the open protocol, $FLY is mentioned in roadmap but isn't the lead
