# Hardcover Foundation — Phase 2 Implementation Checklist

Status: **Directionally approved, revised per corrections below. Planning
phase only. No code, pages, dependencies, or configuration have been changed
to produce this document.**

Companion to `docs/content-strategy.md` and `docs/design-plan.md`. Written
after reviewing the newly approved `approved-board-information.md` and
`approved-contact-information.md`, and after inspecting the actual Phase 1
build on this branch (single-page `index.astro` with anchor navigation, plus
`Header.astro`, `Footer.astro`, `BaseLayout.astro`, `content.config.ts` with
only a `programs` collection, and `site.config.ts` holding `donateUrl` /
`newsletterSignupUrl`, both still `null`).

**Revision note:** this version incorporates eight corrections from
leadership review — governance-language wording, Privacy/Terms treated as
conservative proposed policy rather than approved copy, a no-form contact
page, a tighter navigation scope, a homepage-preservation constraint (no
condensation in this pass), a stricter Programs empty-state, explicit board
publishing limits, and a revised seven-commit sequence. Superseded language
from the prior draft is replaced in place below rather than tracked as a
diff.

---

## 1. Pages to create

Fifteen scope items map to fifteen routes:

| # | Scope item | Route |
|---|---|---|
| 1 | About landing page | `/about` |
| 2 | Mission and Vision | `/about/mission-vision` |
| 3 | What Makes Hardcover Different | `/about/difference` |
| 4 | The Hardcover Philosophy | `/about/philosophy` |
| 5 | Leadership and Board | `/about/leadership` |
| 6 | Expanded Literacy | `/approach` |
| 7 | READ Framework | `/approach/read-framework` |
| 8 | How We Create Impact | `/approach/how-we-create-impact` |
| 9 | Programs overview | `/programs` |
| 10 | Get Involved overview | `/get-involved` |
| 11 | Contact | `/contact` |
| 12 | Governance and Transparency | `/about/governance` |
| 13 | Privacy | `/privacy` |
| 14 | Accessibility | `/accessibility` |
| 15 | Terms | `/terms` |

`/approach/*` nesting and the overall shape match the sitemap already proposed
in `docs/content-strategy.md` §4, adjusted to the Phase 2 scope list's exact
15 items (that sitemap also included `/impact`, `/news`, `/give`, and program
detail routes, which are explicitly **not** in Phase 2 scope and are not
included here).

`/programs/[...slug]` (the dynamic program-detail template) already exists
from Phase 1 and is out of scope for new work — Phase 2 scope excludes
"individual program-detail content."

## 2. Shared components to create or extend

**Extend:**
- `Header.astro` — replace the current same-page-anchor-only `navLinks`
  array with real routes now that pages beyond the homepage exist. Needs a
  single shared nav data source instead of the array currently hardcoded
  inline (see §12).
- `Footer.astro` — add a legal-links row (Privacy, Accessibility, Terms) and
  a Governance link; same nav-data-source consolidation as Header.
- `SectionHeading.astro`, `EditorialIndex.astro`, `PullQuote.astro`,
  `AudienceCluster.astro`, `ReadFrameworkSequence.astro` — reused as-is on
  new pages, no structural change needed.

**New:**
- `PageHero.astro` — a smaller interior-page banner (eyebrow + title +
  optional one-line dek), distinct from the homepage-only `Hero.astro`,
  which is sized and slotted for the homepage concept specifically.
- `ProsePage.astro` (layout, not component) — a wrapper for long-form legal
  text (`/privacy`, `/terms`, `/accessibility`, and the legal portions of
  `/about/governance`) with a defined heading/paragraph/list typography
  scale, since neither `tokens.css` nor `global.css` currently style
  long-form prose beyond individual homepage sections.
- `LeadershipList.astro` — renders name + title pairs only, reading from a
  small typed data source (see §12). No bio, headshot, initials-as-portrait/
  avatar, credential, employer, quote, or profile-link slot exists on the
  component at all — not just unused, structurally absent, so it cannot
  render fields `approved-board-information.md` prohibits.
- `ContactList.astro` (renamed from the prior draft's `ContactMailto.astro`
  to reflect that it lists inquiry purposes, not a form) — renders
  `info@hardcoverfoundation.org` as visible, selectable text plus a
  `mailto:` link, alongside a plain list of inquiry purposes (General
  Questions, Programs and Community Initiatives, Volunteering and
  Mentorship, Partnerships, Media) that all route to the same address. No
  `<form>` element, no third-party form-service script, no client-side API
  key.

## 3. Approved copy source per page

| Page | Primary source(s) |
|---|---|
| `/about` | `approved-messaging.md` (mission/vision framing, public engagement message) |
| `/about/mission-vision` | `approved-messaging.md` — Mission, Vision (verbatim) |
| `/about/difference` | `approved-messaging.md` — "Core distinction" section (verbatim) |
| `/about/philosophy` | `approved-messaging.md` — "Hardcover philosophy" section (verbatim reflective question + qualities list) |
| `/about/leadership` | `approved-board-information.md` — names/titles only; no biographies, headshots, initials-as-portraits, credentials, employer information, quotations, or profile links |
| `/approach` | `expanded-literacy.md` (already partially built as the homepage progression section; expand per that doc's "website presentation guidance") |
| `/approach/read-framework` | `read-framework.md` — full expanded version (guiding questions under Recognize/Articulate, literacy list under Empower, "transformation, not information alone" under Develop) |
| `/approach/how-we-create-impact` | `approved-messaging.md` — "Community-impact platform positioning" + "Desired outcomes"; no verified metrics exist, so no stat content (Tier 4 gap, see §11) |
| `/programs` | `expanded-literacy.md` literacy-area list + `content-strategy.md` §7 taxonomy; **no populated program instances** — `src/content/programs/` currently holds only `.gitkeep` |
| `/get-involved` | `approved-messaging.md` — audience list + engagement message; reuse the three-cluster grouping already built on the homepage (`content-strategy.md` §6), expanded to full granularity per that section |
| `/contact` | `approved-contact-information.md` — the single approved email only |
| `/about/governance` | `legal-facts-for-website.md` — approved governance-page language verbatim, entity facts, formal purposes; `approved-board-information.md` for the board list |
| `/privacy`, `/terms` | **Not approved organizational content.** Draft as conservative *proposed* website policies describing only the site's actual current functionality — no contact form, no donation processing, no user accounts, no program registration, no newsletter integration, no analytics/advertising integrations — since none of those exist in the code. Do not claim cookies, analytics, advertising technology, payment processors, newsletter services, or data collection unless the feature is actually present. Mark both pages in source comments/doc as requiring Foundation leadership review before production launch (see §11) — this note is for the codebase, not a visitor-facing "unapproved" banner on the page itself. |
| `/accessibility` | No dedicated source document; recommend a short, factual accessibility-statement built from the technical commitments already in `CLAUDE.md`/`docs/design-plan.md` §10 (WCAG 2.2 AA target, keyboard/focus support, contact path for accessibility issues) rather than fabricated compliance claims (e.g., do not claim a conformance level that hasn't been tested) |

## 4. Pages requiring honest planning-stage language

- `/programs` — must state clearly that programming and partnerships are
  currently in strategic development; the literacy-area list is a set of
  focus areas, not confirmed active programs (mirrors the homepage's
  existing "Areas of Focus" disclaimer copy). No active-program cards,
  schedules, registration links, partner logos, participant counts, or
  outcomes.
- `/approach/how-we-create-impact` — no verified outcome numbers exist;
  page must describe the *approach* to creating impact (READ Framework +
  literacy areas), not claim results.
- `/get-involved` — pathways (mentor, volunteer, partner, lead an
  initiative) can be described, but must not promise specific placements,
  timelines, or an active intake pipeline that doesn't exist yet.
- `/about/governance` — must not promise that filings will be posted on the
  website. Use: "Governance documents and public filings will be referenced
  or made available as approved for publication." May additionally state
  that Hardcover Foundation's tax-exempt status can be verified through
  public IRS resources. Must not imply the determination letter, Form 1023,
  EIN, filing addresses, or payment/tracking information are or will be
  published here.
- `/contact` — must not imply a dedicated program/media/partnership intake
  address exists; all inquiry types route to the one approved email.
- `/privacy`, `/terms` — must read as conservative, current-functionality-only
  proposed policy, flagged internally as pending leadership review (see the
  copy-source table in §3 and the approval item in §11).

`/about/leadership` is **not** in this list anymore — the board roster and
titles are now approved for direct, non-provisional display (unlike the
"placeholder until approved" treatment `content-strategy.md` §4/§12
recommended before July 30, 2026).

## 5. Navigation changes

- **Header primary nav** converts from same-page anchors
  (`#approach`, `#programs`, `#get-involved`) to real top-level routes:
  `About` (`/about`), `Approach` (`/approach`), `Programs` (`/programs`),
  `Get Involved` (`/get-involved`), `Contact` (`/contact`). Flat links, no
  dropdowns — keeps keyboard/screen-reader nav simple and matches the
  "avoid decorative complexity" direction in `docs/design-plan.md`.
- **Do not add** Donate, Newsletter, News, Events, or Social links to any
  nav until those destinations are approved and functional — the current
  five routes are the entire Phase 2 primary nav.
- **Footer** gains a second row: `Governance` (`/about/governance`),
  `Privacy` (`/privacy`), `Accessibility` (`/accessibility`),
  `Terms` (`/terms`) — the conventional utility-link placement, keeping the
  primary footer nav uncluttered.
- **Homepage section CTAs** may continue to use homepage anchors
  (`#approach`, `#programs`, `#get-involved`, `#credibility`, `#give`) where
  appropriate — those anchors are not being removed, only the sitewide
  header/footer nav is changing to real routes (see §5 homepage-scope note
  and §12).
- **Current-page indication:** add `aria-current="page"` to the active nav
  link in both `Header.astro` and `Footer.astro` on every route.
- **Preserve existing mobile-menu behavior:** the current toggle button
  (`aria-expanded`, `aria-controls="primary-nav"`, focus handling) carries
  over unchanged to the new route-based link set — this is a data change to
  `navLinks`, not a rebuild of the disclosure pattern.
- No nav label anywhere may imply membership, per `CLAUDE.md` and
  `legal-facts-for-website.md` — already true of current labels, must stay
  true of every new label added.

## 6. Contact page (no form in Phase 2, no secrets exposed)

Confirmed: **do not create a contact form during Phase 2.** GitHub Pages
serves static files only — there is no server-side code to receive a form
POST or hold a secret, and no form service is being adopted this phase.

- `/contact` displays `info@hardcoverfoundation.org` as visible, selectable
  text and as a `mailto:` link — both, not one or the other.
- The page may list inquiry purposes as plain text/links, all pointing to
  the same address: General Questions, Programs and Community Initiatives,
  Volunteering and Mentorship, Partnerships, Media.
- No phone number, no mailing address, anywhere on the page.
- No form-service dependency (Formspree, Web3Forms, or similar) is
  installed, and no client-side API key of any kind is introduced. If a
  true HTML form is wanted later, that is a separate future decision
  requiring its own explicit approval — not part of Phase 2.

## 7. Governance-page structure (no source PDFs published)

Recommended `/about/governance` section order:

1. Approved governance-page legal paragraph, verbatim, from
   `legal-facts-for-website.md`.
2. Corporate facts: Virginia nonstock corporation, no statutory members,
   Certificate of Restatement effective date (Sept 17, 2025) — text only,
   no PDF link or embed.
3. Formal charitable/educational purposes, as listed (three bullet areas).
4. Board of Directors: names and titles only, reusing `LeadershipList.astro`
   from §2 (or linking to `/about/leadership`).
5. Filings and transparency: **"Governance documents and public filings
   will be referenced or made available as approved for publication."**
   This replaces any "will be posted when available" phrasing — the page
   does not promise that filings will appear on the website. The section
   may additionally state that Hardcover Foundation's tax-exempt status can
   be verified through public IRS resources.
6. Explicit non-inclusions to enforce during build: do not publish or link
   the IRS determination letter, do not link the Form 1023 submission, do
   not publish the EIN, do not publish filing addresses, do not publish
   payment or tracking information — and do not imply that a public
   download of the determination letter is currently available (all per
   `phase-2-planning-prompt.md`'s IRS section).

## 8. Programs page: focus areas vs. active programs

- `/programs` must clearly state that programming and partnerships are
  currently in strategic development — not implied, stated directly, near
  the top of the page.
- It renders the ten literacy-area taxonomy (already defined in
  `content.config.ts`'s `literacyArea` enum and `lib/programLabels.ts`) as
  **categories**, using the same disclaimer pattern already shipped on the
  homepage's "Areas of Focus" section ("broad areas of focus... not
  verified active programs").
- No active-program cards, schedules, registration links, partner logos,
  participant counts, or outcomes anywhere on the page.
- **Keep `src/content/programs/` empty** (only `.gitkeep`) through Phase 2.
  The `approved: boolean` gate in the collection schema is the structural
  enforcement for later. **Do not create a sample/test program entry to
  exercise the `[...slug]` template** — even a clearly-labeled test entry
  risks shipping or being mistaken for real content; verify the template
  renders correctly by other means (e.g., a local-only fixture that is
  never committed) if template QA is needed. Authoring any real entry is
  outside Phase 2 scope regardless ("individual program-detail content" is
  explicitly excluded).
- The page copy itself must state directly that specific programs will
  appear here once confirmed, rather than leaving the empty state
  unexplained.

## 9. Accessibility validation

- Re-run the WCAG 2.2 AA checklist from `docs/design-plan.md` §10 against
  every new route, not just the homepage: logical heading order (no skipped
  levels, including inside `ProsePage.astro`), visible `:focus-visible`
  states on every new interactive element (nav links, footer links, the
  mailto contact link), 44px minimum touch targets on new nav/footer links,
  and the existing skip-link continuing to work from every new page (it's
  wired once in `BaseLayout.astro`, so this should hold automatically —
  verify rather than assume).
- Contrast-check `--copper` text/background combinations wherever reused on
  new pages (flagged as unverified in `docs/design-plan.md` §10, still
  unresolved).
- Manual keyboard-only pass across all 15 new routes plus the updated
  Header/Footer before calling Phase 2 complete.
- `/privacy`, `/terms`, `/accessibility` specifically need a check that
  long-form prose doesn't rely on visual formatting alone (list semantics,
  not just indentation) — this is the first content in the site with
  paragraph-heavy legal text.

## 10. Exact implementation and commit sequence

Revised per leadership review. Seven commits, in order, once this checklist
is approved (nothing below has been done yet):

**Commit 1 — Planning record**
- `docs/phase-2-planning-prompt.md`
- `docs/phase-2-checklist.md`

**Commit 2 — Navigation and shared layout foundation**
- Multi-page navigation (`Header.astro` / `Footer.astro` route data,
  `aria-current="page"`, preserved mobile-menu behavior — §5)
- Shared page-layout components (`PageHero.astro`, `ProsePage.astro`,
  `LeadershipList.astro`, `ContactList.astro` — §2)
- Active-route accessibility (focus states, heading order groundwork for
  the new layout components)

**Commit 3 — About and Governance**
- `/about`
- `/about/mission-vision`
- `/about/philosophy`
- `/about/leadership`
- `/about/governance`

(`/about/difference` ships in this commit as well, as part of the About
section — grouped with the rest of `/about/*` rather than split out.)

**Commit 4 — Approach and Programs**
- `/approach` (Expanded Literacy)
- `/approach/read-framework`
- `/approach/how-we-create-impact`
- `/programs` overview (strategic-development state, §8)

**Commit 5 — Get Involved and Contact**
- `/get-involved`
- `/contact`

**Commit 6 — Legal/utility pages**
- `/privacy`
- `/accessibility`
- `/terms`

**Commit 7 — Homepage integration and final QA**
- Homepage "Learn More" links from existing sections to their new dedicated
  pages, and removal of only clear duplication created by the new pages —
  no broader homepage condensation or redesign in this pass (§5 homepage
  scope; a separate condensation recommendation follows after visual
  review, per that section)
- Minimal integration adjustments needed for the new nav/pages to fit
  cleanly with the existing Phase 1 homepage
- Final responsive and accessibility corrections across all routes (§9)
- `npm run build` production build verification (required by `CLAUDE.md`
  before declaring implementation complete)

No push, merge, deploy, or DNS/Pages-settings change at any point in this
sequence without separate explicit approval, unchanged from current
restrictions.

## 11. Content or approvals still needed before implementation

- **Privacy Policy and Terms of Use — leadership review before production
  launch.** Phase 2 ships both as conservative, current-functionality-only
  proposed policy (§3, §4), with a source-comment/doc note flagging that
  they need Foundation leadership sign-off before the site goes live. This
  note is internal only — ordinary visitors do not see an "unapproved"
  warning on the rendered page.
- **Donation platform / URL** — still `null`; no Donate button (active,
  disabled, or placeholder) can appear anywhere in Phase 2.
- **Newsletter provider / form action** — still `null`; "Subscribe for
  Updates" stays non-functional/absent until supplied.
- **Leadership bios/headshots** — still not approved; `/about/leadership`
  ships names and titles only, with no initials-as-portrait substitute.
- **Form 990-series filings / annual report** — not yet available;
  governance page uses the approved "referenced or made available as
  approved for publication" language rather than promising a posting date.
- **Verified impact metrics, stories, partner names** — none exist; no page
  in Phase 2 scope should reference any (How We Create Impact page stays
  narrative/methodology-only).
- **Accessibility-statement conformance claims** — need confirmation of
  what level of testing (if any) has been done before publishing any
  specific WCAG conformance claim beyond "target."
- **Homepage condensation** — explicitly deferred. A separate
  recommendation will follow after the Phase 2 pages are implemented and
  visually reviewed (§5); no larger homepage redesign decision is needed
  before Phase 2 implementation can begin.

None of these block finalizing this checklist, but each blocks populating
the affected page with final (non-placeholder) content during
implementation.

## 12. Conflicts between Phase 2 scope and current Phase 1 architecture

- **Nav model mismatch.** Phase 1's `Header.astro`/`Footer.astro` assume
  every link is a same-page anchor on a single-page site. Phase 2 requires
  a real multi-page nav — this is a structural rewrite of the nav arrays in
  both components, not an additive change.
- **Homepage content duplication, deliberately not resolved in Phase 2.**
  The homepage currently contains full-length Approach, Programs (Areas of
  Focus), Get Involved, and Governance sections inline. Per the homepage
  scope constraint (§5): Phase 2 adds "Learn More" links from these
  sections to the new dedicated pages and removes only *clear* duplication
  the new pages create — it does not condense or redesign the homepage
  sections themselves. Some copy will therefore live in two places
  (homepage section + dedicated page) through the end of Phase 2 by
  design; a separate condensation recommendation is the intended follow-up
  once the new pages are visually reviewed, not an oversight to fix now.
- **No data source for leadership.** `content.config.ts` only defines a
  `programs` collection; there is no `team`/`board` collection. Four
  name+title entries don't justify a full content-collection — recommend a
  small typed array (e.g. `src/data/board.ts`) instead, which is a new
  pattern not present on this branch yet.
- **No long-form prose styling exists.** `tokens.css`/`global.css` style
  homepage sections and components, not paragraph-heavy legal text —
  `/privacy`, `/terms`, `/accessibility`, and part of `/about/governance`
  need a typography treatment that doesn't exist yet (`ProsePage.astro`,
  §2).
- **`canGive` gating pattern is currently local to `Header.astro`/
  `index.astro`.** `/contact` and `/get-involved` need the same
  null-safe donate/newsletter gating; this pattern should be shared
  (e.g., exported from `site.config.ts`) rather than re-implemented per
  page.
- **`docs/content-strategy.md`'s original sitemap is broader than Phase 2
  scope** (it includes `/impact`, `/news`, `/give`, and program-detail
  routes). This checklist deliberately narrows to the 15 approved Phase 2
  items only; the broader sitemap remains a later-phase reference, not a
  Phase 2 commitment.

---

**Nothing was changed to produce this document.** No code, content file,
dependency, configuration, or component was created, edited, installed,
pushed, merged, or deployed. This file and its presentation to you are the
only output of this task.
