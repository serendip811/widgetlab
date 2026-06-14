# GitHub Pages Guide Site Plan

## Context
- Repository is currently empty except for `.git`.
- Goal: build a GitHub Pages-ready guide site for "위젯연구소".
- Primary audience: Instagram visitors who need a clean installation guide and a per-widget code page they can copy from on mobile.
- Constraint: keep the first version simple, static, and easy to deploy without a build step.

## Visual Thesis
Calm iPhone utility guide: bright, trustworthy, mobile-first, with crisp typography, restrained color, and copy-focused pages that make installation and code copy feel safe.

## Content Plan
- Main page: brand, one-sentence promise, primary actions for install guide, widget list, and widget request.
- Install page: Scriptable install, widget addition, script connection, and common mistakes.
- Widgets index: searchable/scannable widget list with short descriptions and direct detail links.
- Widget detail pages: description, install CTA, copyable Scriptable code, update notes, and DM-friendly share URL.
- Request page: lightweight request instructions for Instagram comments/DM and future form replacement.

## Interaction Thesis
- Sticky compact navigation so mobile users can jump between guide and widget list.
- Copy buttons on code blocks and share snippets to reduce DM friction.
- Small scroll/hover transitions only where they clarify affordance.

## Implementation Checklist
- [x] Create static site file structure for GitHub Pages.
- [x] Add shared CSS with responsive layout, accessible focus states, and no build dependency.
- [x] Add shared JavaScript for copy buttons and widget search/filtering.
- [x] Build `index.html` as the brand-first entry page.
- [x] Build `/install/` with step-by-step Scriptable guide.
- [x] Build `/widgets/` index with starter widgets: 서울대공원 캠핑장, 어린이박물관, 수영장 예약.
- [x] Build starter widget detail pages with placeholder Scriptable code blocks that can be replaced with real scripts.
- [x] Build `/request/` for widget request/contact flow.
- [x] Add `README.md` with GitHub Pages publishing instructions.
- [x] Verify local rendering with a static server.
- [x] Verify copy/search behavior manually in browser or with a DOM smoke test.
- [x] Review visual/UX details against the plan and adjust.

## Open Assumptions
- Use plain static HTML/CSS/JS instead of Astro/Vite for version 1 because the repo is empty and GitHub Pages can serve it directly.
- Use placeholder widget scripts for now unless real Scriptable code exists elsewhere.
- Do not add a custom domain yet; leave `widgetlab.kr` as a future option.

## Review
- Built a no-build static GitHub Pages site with main, install, widgets, widget detail, and request pages.
- Generated and copied a local hero image to `assets/widgetlab-hero.png`.
- Confirmed local links resolve across 7 HTML files.
- Confirmed all main routes return HTTP 200 from `python3 -m http.server 4173`.
- Confirmed browser rendering on mobile-width and desktop-width viewports.
- Confirmed widget search filters to the camping item when searching `캠핑`.
- Confirmed code copy button changes to `복사됨`.
- Elegance check: a plain static site is the smallest deployable approach for the current empty repository; Astro/Vite can wait until widget data or templating becomes painful.

## Publish Checklist
- [x] Verify GitHub SSH remote access.
- [x] Set `origin` to `git@github.com:serendip811/widgetlab.git`.
- [x] Re-run lightweight checks before commit.
- [x] Commit the initial GitHub Pages site.
- [x] Push the site branch to GitHub.
