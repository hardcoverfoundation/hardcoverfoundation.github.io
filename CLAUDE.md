# Hardcover Foundation Website Instructions

## Project

This repository powers the Hardcover Foundation website.

Production domain:

```text
https://hardcoverfoundation.org
```

The site is being rebuilt from a landing page into a maintainable nonprofit
website.

## Private source directory

Claude Code should be launched with:

```bash
claude --add-dir ../project-resources
```

Read these approved resources before proposing public content:

- `../project-resources/content/approved-messaging.md`
- `../project-resources/content/expanded-literacy.md`
- `../project-resources/content/read-framework.md`
- `../project-resources/content/content-inventory.md`
- `../project-resources/approved-public/legal-facts-for-website.md`

Reference material is located at:

- `../project-resources/design-references/`
- `../project-resources/legal-private/`

## Source hierarchy

Use sources in this order:

1. legally governing source documents
2. approved public organizational content
3. approved methodology and framework content
4. strategic positioning
5. proposed marketing copy
6. internal-only strategy

Do not allow proposed marketing language to override approved or governing
content.

## Privacy and publishing rules

Files under `legal-private` and `design-references` are reference-only.

Never:

- copy them into `public/`, `src/`, `docs/`, or another committed directory
- publish addresses, EINs, tracking IDs, payment details, or private contacts
- use photographs extracted from design mockups
- recreate supplied mockups exactly
- infer current board or officer roles from historical filings
- fabricate metrics, programs, partnerships, testimonials, outcomes, names, or
  events

## Approved positioning

Hardcover Foundation expands literacy beyond reading words.

It helps people read life: identity, culture, people, opportunities, systems,
finances, technology, leadership, and themselves.

The READ Framework is:

- Recognize
- Empower
- Articulate
- Develop

Programs should be presented as applications of Hardcover's charitable and
educational purposes.

## Corporate terminology

The corporation has no statutory members.

Do not create or imply:

- membership tiers
- member voting
- member benefits
- member directories
- corporate membership status

Use terms such as program participant, volunteer, mentor, initiative leader,
partner, sponsor, supporter, donor, or subscriber.

## Technical direction

Unless the approved design plan says otherwise:

- use Astro
- use TypeScript
- use Tailwind CSS
- keep editable content separate from layouts
- use reusable components and typed content
- maintain mobile-first responsive behavior
- target WCAG 2.2 AA practices
- minimize client-side JavaScript
- preserve the GitHub Pages custom-domain configuration
- run a production build before declaring implementation complete

## Workflow restrictions

Do not:

- push to GitHub
- merge branches
- deploy
- change DNS
- delete the current site
- install unexplained dependencies
- publish placeholders

without explicit approval.

## Current task sequence

1. Read `docs/master-design-and-content-prompt.md`.
2. Inspect the repository and approved resources.
3. Produce or update:
   - `docs/content-strategy.md`
   - `docs/design-plan.md`
4. Present the audit and strategy for approval.
5. Do not begin the full rebuild until the strategy is approved.
