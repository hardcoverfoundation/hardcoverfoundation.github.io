# Policy pages — internal review notes

Internal documentation only. Do not serve this file as a public web page or
link to it from any route.

## Status

`/privacy`, `/accessibility`, and `/terms` (`src/pages/privacy.astro`,
`src/pages/accessibility.astro`, `src/pages/terms.astro`) are **proposed
website drafts** written by Claude Code per `docs/phase-2-checklist.md`
§3/§11. None have been reviewed by Hardcover Foundation leadership and none
have been reviewed by an attorney. All three **require Foundation leadership
review and sign-off before production launch** — no "unapproved" banner is
shown to visitors on the rendered pages; this file is the only record of
that pending status.

`/accessibility` uses restrained, aspirational language — it states that
Hardcover Foundation aims to provide an accessible website and is working
toward alignment with WCAG 2.2 Level AA practices, and describes measures
already present in the build. It does not claim WCAG compliance,
certification, a completed third-party audit, or a guarantee of
accessibility for every visitor or assistive technology, since none of
those has been performed or can be truthfully claimed.

## Assumptions used when drafting `/privacy` and `/terms`

The current site, as built:

- has no analytics, tracking pixels, or advertising cookies
- sets no cookies beyond ordinary, technically necessary browser behavior
  (none are currently set by this site at all)
- has no contact form or third-party form service
- does not process donations or payments
- has no newsletter or email-marketing integration
- does not create or require user accounts
- offers no online program registration
- contact is mailto-only — `info@hardcoverfoundation.org`, opened via the
  visitor's own email application

If any of these become true (an analytics tool, a form service, a donation
processor, a newsletter signup, or account creation is added), `/privacy`
and `/terms` need to be revised before that feature ships, and leadership
review should be repeated for the affected sections.

## Dates

Both pages display "Last updated: July 30, 2026" — the date this draft copy
was written. This is not represented as a legal adoption date anywhere on
either page.
