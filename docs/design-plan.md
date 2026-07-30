# Hardcover Foundation — Design Plan

Status: **Draft for review. Planning phase only. No implementation started from this document.**

Companion to `docs/content-strategy.md`. Covers visual direction, component
architecture, typed content model, hero concepts, and technical/deployment
risk.

---

## 1. Reference analysis (moodboards — not to be copied)

Both images in `../project-resources/design-references/` were reviewed for
principles only, per the restrictions in that folder's `README.md`.

**`hardcover-concept-01.jpeg`** — sports-nonprofit template style.
Principles worth noting: confident use of a hero collage, clear stat band,
consistent CTA color (red) repeated through the page, testimonial cards with
named quotes. Problems to avoid: near-identical card grids repeated four
times (audiences, programs, impact stats), a stats band with round invented-
looking numbers ("500+ teens served," "40+ partners," "85% confidence
growth"), heavy repeated logo/emblem use, generic rounded-card SaaS styling,
and a sports-camp visual identity that doesn't fit Hardcover's literacy
positioning.

**`hardcover-concept-02.jpeg`** — bold editorial style, closer in spirit to
the "reading life" positioning. Principles worth noting: large condensed
display type for the hero, a strong black/white/single-accent palette, a
literal book-as-product-shot used once (not repeated), and a clean
mission/vision split panel. Problems to avoid: the exact 50/50 split-panel
proportion, the specific "Our Areas of Impact" card layout implied below the
fold, and the condensed all-caps display face treatment if reused at the
same weight/scale throughout (would read as a copy rather than an homage).

**Hardcover's existing brand assets** (already owned by the org, not a
design reference — found in git history and `public/`):
- `favicon.svg` (still in `public/`): an abstract curved monochrome mark,
  black in light mode / white in dark mode via `prefers-color-scheme`.
- A former wordmark PNG (`assets/hardcover-logo.png`, removed from `public/`
  in the Astro rebuild but recoverable from git history at `dd40634`): bold
  slab-serif "HARDCOVER" lettering with a folded-corner ribbon/flag shape,
  monochrome black.

**Finding:** these two brand assets do not obviously belong to the same
logo system — one is an abstract organic glyph, the other a bold slab
wordmark with a flag device. Per the master prompt's instruction to "inspect
the approved logo before finalizing exact colors," this should be confirmed
with leadership before the final identity is locked: which mark (or both) is
current, and is there an approved full lockup combining wordmark + emblem.
Until confirmed, this plan treats the `favicon.svg` glyph as the working
emblem (it's the one currently live in the deployed site) and does not
assume the flag wordmark is still current.

## 2. How Hardcover's design stays original

- No layout, card system, section order, or proportion from either mockup is
  reused as-is. The homepage section rhythm in §5 is different from both
  (neither a stat-band-heavy template nor a strict 50/50 split system).
- No photography from either mockup is used. The plan assumes **no approved
  photography exists yet** (none was supplied outside the mockups) and
  designs sections that work with zero photography (typographic hero,
  editorial index, pull-quote treatments) rather than depending on stock or
  mockup images as placeholders.
- Palette (§3) is derived independently from the master prompt's suggested
  palette words and the existing `tokens.css` already committed on this
  branch, not sampled from either mockup.
- Typography is an editorial serif/sans pairing already partially
  established in `tokens.css` (Source Serif 4 + Inter), not the condensed
  all-caps display face used in either mockup.
- The book/chapter metaphor is used structurally and sparingly (chapter
  numerals as section labels, an index/table-of-contents pattern for
  navigation of literacy areas) rather than literally (no page-turn
  animation, no illustrated book graphics, per the explicit "avoid" list in
  the master prompt).

## 3. Visual direction

### Palette

The branch's existing `src/styles/tokens.css` already implements a palette
that matches the master prompt's direction well:

| Token | Value | Role |
|---|---|---|
| `--ink` | `#12161a` | Primary dark ground (charcoal) |
| `--ink-soft` | `#262b31` | Raised surface on ink |
| `--paper` | `#fbf9f5` | Primary light ground (warm ivory) |
| `--paper-dim` | `#f0ebe0` | Raised surface on paper |
| `--cobalt` / `--cobalt-deep` | `#1e4fd8` / `#15379c` | Restrained deep blue — links, active state |
| `--copper` / `--copper-deep` | `#bf5b2e` / `#954726` | Ember/copper — primary CTA |

**Recommended addition:** an "archive gold" tertiary token, used rarely (chapter
numerals, rule accents, small marks) — distinct from the copper CTA so gold
doesn't become a third competing action color:

```css
--gold: #9c7c3c;
--gold-soft: #c9ad74;
```

This directly answers the master prompt's suggested palette (ink, warm
paper, archive gold, ember/copper, restrained blue, white/graphite) with one
addition, and avoids concept-01's pattern of gold used as a second CTA
color throughout.

**Open item:** exact hex values should be revisited once the logo question
in §1 is resolved — if a confirmed logo lockup specifies brand colors, this
palette should be reconciled against it rather than the reverse.

### Typography

Keep the existing pairing already wired in `tokens.css`:
- Display: `Source Serif 4` (editorial serif, licensed under SIL OFL, good
  performance as a variable font) — used for headings, pull quotes, chapter
  labels.
- Body/interface: `Inter` (licensed under SIL OFL) — used for body copy,
  navigation, UI.

**Recommendation for implementation phase:** self-host both fonts (e.g. via
`@fontsource-variable/source-serif-4` and `@fontsource-variable/inter`)
rather than a Google Fonts `<link>`, to avoid an external network request,
keep the "minimize client-side JavaScript"/performance goal, and avoid a
third-party privacy dependency. This is a new dependency and should be
called out for explicit approval before it's installed (per the "do not
install unexplained dependencies" rule) — flagging it now so it isn't a
surprise at implementation time.

## 4. Homepage layout (wireframe-level, no copy yet)

Distinct from both mockups: mixed dark/light rhythm (per
`docs/design-feedback-prompts.md`'s "too dark" note), asymmetric proportions,
no repeated four-card grids.

1. **Hero (ink ground)** — typographic, no stock photo dependency. Large
   serif headline + one-line sub, two CTAs (primary copper "Donate"/"Support
   the Mission," secondary outline). See §7 for three concept directions.
2. **Philosophy strip (ink ground, full-bleed, short)** — "Our lives are
   books that will be read by many" as a single full-width statement with
   the reflective question, breaking up the hero without a hard color
   change yet.
3. **Mission/Vision (paper ground)** — two-column but asymmetric (not 50/50):
   a wider mission column with body copy, a narrower vision column styled as
   a short pull-quote block. No product-shot book graphic (avoids the
   literal-book-everywhere pitfall).
4. **Expanded literacy progression (paper-dim ground)** — the "reading
   words → rooms → people → opportunity → self" index from content-strategy
   §8, laid out as a horizontal editorial index with thin rules, not cards.
5. **The READ Framework (ink ground)** — condensed four-stage sequence,
   connected by a progression line/arrow rather than four equal boxes.
6. **Areas of impact / literacy categories (paper ground)** — the ten
   literacy-area labels as a compact tag/index list linking into `/programs`,
   explicitly not framed as ten active programs.
7. **Ways to participate (paper-dim ground)** — the three audience clusters
   from content-strategy §6, each as an editorial row (heading + short copy
   + 2–3 links), not eleven photo cards.
8. **Verified community impact (ink ground)** — structurally a stat band,
   but content-gated per content-strategy §10; ships as an honest
   "in progress" state, not fabricated numbers.
9. **Featured story (paper ground)** — one large feature slot; content-gated,
   same rule.
10. **Partnership pathways (paper-dim ground)** — short editorial block,
    community/education framing only.
11. **Donate + subscribe (ink or copper-accented band)** — dual CTA, kept
    visually distinct from the hero so it doesn't read as a repeat.
12. **Institutional credibility (paper ground, footer-adjacent)** — 501(c)(3)
    verbatim language + link to governance page.

At 390px: single column throughout, hero CTAs stack, the literacy-progression
index and READ Framework sequence become vertical, minimum 20px side
padding, 44px touch targets — directly answering the "weak mobile layout"
item in `docs/design-feedback-prompts.md`.

## 5. Component architecture

Building on what's already in `src/components/` and `src/layouts/`:

```text
src/components/
  Header.astro                 (exists — extend with mobile nav disclosure)
  Footer.astro                 (exists — extend with governance/legal links)
  Hero.astro                   (new — typographic hero, slot-based so copy can change without touching layout)
  SectionHeading.astro         (new — chapter-numeral + heading pattern, reusable across pages)
  EditorialIndex.astro         (new — the literacy-progression / literacy-category list pattern, reusable for §4 and §6)
  ReadFrameworkSequence.astro  (new — used at both condensed (home) and full (dedicated page) size via a `variant` prop)
  AudienceCluster.astro        (new — one of the three grouped audience rows)
  StatBand.astro               (new — renders either verified stats or the honest empty-state; never both a real and placeholder number)
  FeatureStory.astro           (new — same content-gating pattern as StatBand)
  PullQuote.astro              (new — for the philosophy strip and vision column)
  CtaBand.astro                (new — donate/subscribe band, reused on non-home pages too)
```

`Hero.astro`, `StatBand.astro`, and `FeatureStory.astro` should each accept an
explicit "no content yet" path rather than requiring the caller to remember
not to fabricate — this makes the empty-state policy structural rather than
a matter of remembering not to type in a fake number later.

## 6. Typed content model

The existing `src/content.config.ts` already defines `programs`, `stories`,
`news`, `team`, and (in the current uncommitted working change) `events`
collections. Recommended revisions:

```ts
const programs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/programs' }),
  schema: z.object({
    literacyArea: z.enum([
      'academic', 'financial', 'emotional', 'digital', 'cultural',
      'leadership', 'civic', 'career-workforce', 'communication', 'self',
    ]),
    status: z.enum(['active', 'planned', 'pilot', 'archived']), // new — required
    readStages: z.array(z.enum(['recognize', 'empower', 'articulate', 'develop'])).optional(), // new — links a program to the framework
    title: z.string(),
    purpose: z.string(),
    outcomes: z.array(z.string()).optional(), // now optional — omit rather than invent for planned/pilot programs
    audience: z.string().optional(),
    sponsorCall: z.string().optional(), // now optional — only when a real, approved ask exists
    description: z.string().optional(),
    heroImage: z.string().optional(),
    publishDate: z.coerce.date().optional(),
  }),
});
```

Key changes from the current schema and why:
- `status` becomes required, directly implementing the missing-content item
  in `content-inventory.md` and letting the template render an honest state
  instead of implying an operating program.
- `outcomes` and `sponsorCall` become optional so a `planned`/`pilot` entry
  doesn't have to invent numbers to satisfy the schema — this is the exact
  gap that produced the fabricated `$250 stocks one classroom library`
  claim flagged in content-strategy §1.
- `literacyArea` replaces the free-floating "chapter" framing as the primary
  taxonomy key (see content-strategy §7), while `chapterNumber`-style
  sequencing can remain as optional display order if wanted editorially.
- `readStages` is new and lets `/approach/read-framework` and `/programs`
  cross-link honestly once real programs exist.

`stories`, `news`, `team`, and `events` schemas are structurally fine as
typed shapes; the issue with the current instances is entirely about
unverified content in the data files, not the schema (see content-strategy
§1). Recommend adding an `approved: boolean` or `approvedBy`/`approvalDate`
pair (mirroring the YAML fields already sketched in
`approved-board-information.md`) to `team` specifically, so an entry can't
render without a recorded approval — the clearest structural guard against a
repeat of the `founder.md` issue.

## 7. Three original hero concepts

All three assume no approved photography exists yet and work with typography
alone; a photo can be layered in later without a redesign once approved
images exist.

**Concept A — "The Index."** Ink ground. Large serif headline
("Most people read books. We read life.") on the left two-thirds; on the
right, a vertical, understated table-of-contents-style list of literacy
areas (Identity — Culture — Systems — Opportunity — Self) that doubles as a
visual anchor and a preview of the literacy-progression section below. No
imagery required. Lowest production risk (no photo dependency at launch).

**Concept B — "The Open Book" (asymmetric, not 50/50).** A 60/40 split, ink
on the wider left panel (headline + sub + CTAs), paper on the narrower right
panel holding a single restrained pull-quote from the philosophy
("Our lives are books that will be read by many") set in large serif type
with a thin rule above and below — no product-shot photography, no split
exactly matching concept-02's proportions.

**Concept C — "The Marginalia."** Paper ground. Headline treated like a book
title (large serif, tight leading) with a letter-spaced small-caps subhead
beneath it; to the side, small marginal annotations in copper ink
("recognize" / "empower" / "articulate" / "develop") positioned like
handwritten margin notes, tying the hero directly to the READ Framework
without a decorative four-box graphic. Most original of the three, slightly
higher typographic-execution risk (fine-tuning the marginalia positions
responsively).

**Recommendation:** Concept A for initial build — zero photo dependency,
cleanest mobile behavior, most directly expresses "reading life" without
requiring the framework or philosophy sections to explain it first.

## 8. Three tagline options

1. **"Read Life. Write the Future."** — already proposed in
   `approved-messaging.md`, still pending final approval there. Included
   here as the baseline option since it's the only tagline with any existing
   organizational sign-off history.
2. **"Every Life Is a Chapter Worth Reading."** — new, original. Leans
   directly on the Hardcover philosophy ("our lives are books read by
   many") and the chapter/book structural metaphor without being literal
   about it.
3. **"Literacy Beyond the Page."** — new, original. States the expanded-
   literacy distinction plainly and works as a shorter, more utilitarian
   tagline for space-constrained placements (favicon-adjacent header lockup,
   social previews).

All three are Tier 3 (proposed marketing copy per content-strategy §3) and
need sign-off before being treated as final.

## 9. Technical direction assessment

The Astro/TypeScript/Tailwind/content-collections/GitHub-Pages stack the
master prompt asks to assess is **already implemented** on this branch
(`astro.config.mjs`, `tailwindcss` v4 via `@tailwindcss/vite`, `content.config.ts`,
`public/CNAME` preserved). Assessment: appropriate — static output fits
GitHub Pages, content collections give typed frontmatter (directly enables
the `status`/`approved` guards in §6), and Tailwind v4's CSS-based config
keeps the token system in plain CSS (`tokens.css`) rather than a JS config
file, which is easy to hand back to a non-engineer for palette tweaks later.

No new dependency is required to keep the stack running as-is. The one
dependency change flagged for approval is the font self-hosting packages in
§3 — everything else in this plan (new components, revised schema) is
buildable with what's already installed.

`public/CNAME` is already present and correctly preserved from the legacy
site; no DNS or Pages-configuration change is implied by anything in this
plan.

## 10. Accessibility plan (WCAG 2.2 AA target)

- Color pairs: `--ink` on `--paper` and `--paper` on `--ink` both pass AA for
  body text; the `--copper` CTA color needs a contrast check against both
  `--paper` (button fill) and as text-on-ink before final lock — flag for a
  contrast-ratio check during implementation, not guessed here.
- All interactive elements (nav links, CTAs, program cards) get visible
  focus states — not currently defined in `global.css` beyond browser
  default; needs an explicit `:focus-visible` treatment in the token system.
- Hero and section headings follow a single logical heading order (no
  skipped levels) across the page, including inside `EditorialIndex` and
  `ReadFrameworkSequence`.
- Any future "marginalia" or annotation-style treatment (Concept C) must
  remain in normal document flow / reading order for screen readers, not
  purely decorative absolute positioning without an accessible order.
- Minimum 44px touch targets on mobile nav and CTAs (already a stated goal
  in `docs/implementation-phase-prompt.md`).
- Self-hosting fonts (§3) also removes a third-party-request accessibility/
  performance risk (render-blocking external font request).

## 11. Risks

**GitHub Pages / deployment**
- Low risk: `CNAME` and static-output config are already correctly in place
  on this branch. Main risk is procedural, not technical — see the branch
  finding in content-strategy §1: `website-v2` is ahead of `main` and
  contains content that must not ship as-is. Do not merge `website-v2` into
  `main` until the fabricated content is replaced or gated, regardless of
  how the visual design is received.

**Privacy**
- The `legal-private/` PDFs and `design-references/` images must stay out of
  any committed directory — no scanned/converted copies, no auto-extracted
  images from the PDFs, ever added to `public/`.
- No EIN, tracking ID, or address from those PDFs should be typed into any
  content file even as a "TODO: verify" placeholder value — a literal
  placeholder value has a way of shipping. Prefer an empty field or a
  comment noting what's needed.

**Accessibility**
- Two structural risks called out above: undefined focus states in the
  current `global.css`, and the not-yet-verified copper-on-paper contrast
  ratio. Both are easy to fix but should be checked, not assumed, during
  implementation.

**Content/legal**
- The single biggest risk this audit found: the existing `website-v2`
  content already violates the no-fabrication rule (content-strategy §1).
  If implementation resumes from this branch without addressing that, the
  fabricated program, story, news item, and founder bio will still be
  sitting in `src/content/` underneath whatever new design lands on top of
  them.
- Reusing legacy-page claims (founder narrative, old tagline) without
  reverification (content-strategy §2) is a smaller version of the same
  risk.

## 12. Legal and Governance Alignment

- All public tax-status language must match `legal-facts-for-website.md`
  verbatim in the two approved forms (general and governance-page); no
  paraphrasing that loosens "recognized under Section 501(c)(3)" or drops
  "to the extent permitted by law."
- No membership terminology anywhere in components, nav labels, or content
  schemas — checked the current `Header.astro`/`Footer.astro` nav ("Programs,"
  "Stories," "News," "Team," "Give") and none currently violate this; new
  nav items proposed in §4/§5 (e.g., "Get Involved," "Partner," "Sponsor")
  should be reviewed against the same rule as they're built.
- Governance page (`/about/governance`) is the single place the 501(c)(3)
  status, exemption date, and future Form 990/annual-report links live;
  homepage credibility section links here rather than duplicating full
  legal language inline.
- Leadership/board content structurally deferred (content-strategy §12)
  until `approved-board-information.md` is completed — the `team` schema's
  new `approved` guard (§6) enforces this at build time, not just by
  convention.

## 13. Branch strategy

This section responds directly to the branch-history finding in
content-strategy §1 and supersedes any earlier suggestion of fixing that
content in place.

1. **Start the real rebuild from a new branch cut from `main`**, not from
   `website-v2`. `main` still has the untouched legacy static site and no
   fabricated content, so it's the correct base once this planning phase is
   approved.
2. **`website-v2` is reference-only from this point forward.** It stays in
   the repo (nothing here proposes deleting the branch), but it is not a
   staging branch for the rebuild — it's a prototype to look at, not build
   on top of.
3. **Commit `66cd2e6` ("Rebuild site as Astro project with content
   collections") must not be cherry-picked or merged wholesale**, in whole
   or in part as a single operation. It bundles legitimate project scaffolding
   together with the fabricated content identified in content-strategy §1, so
   there is no safe way to bring it over in one step — anything taken from it
   has to be pulled out file-by-file and reviewed individually, per point 4.
4. **Individual files worth reviewing later for selective reuse** (structure
   only, copy/data re-authored fresh in every case):
   - `astro.config.mjs` — Tailwind Vite plugin wiring, no content
   - `package.json` / `package-lock.json` — the dependency set itself
     (`astro`, `tailwindcss`, `@tailwindcss/vite`, `@astrojs/check`,
     `typescript`) is reasonable and matches the approved technical
     direction; still requires a fresh install/audit on the new branch
     rather than copying `node_modules` or assuming the lockfile is current
   - `tsconfig.json` — plain TypeScript config, no content
   - `src/styles/tokens.css` — the token *structure* (ink/paper/cobalt/
     copper naming pattern) is a reasonable starting point for §3's palette
     work; exact values still need the logo-reconciliation step in §1/§2
     before being treated as final
   - `src/styles/global.css` — the Tailwind `@theme inline` mapping pattern
     is reusable structure
   - `src/content.config.ts` — the *pattern* of typed Zod schemas per
     collection is worth keeping; the actual field sets need to be rebuilt
     per §6 of this document (e.g. `sponsorCall` and `outcomes` need to
     become optional, `status` needs to be added) rather than copied as-is,
     since the current fields were shaped around the fabricated Literacy
     Labs entry
   - `src/pages/programs/[...slug].astro` — the dynamic-route/template
     *mechanism* (`getStaticPaths` off a content collection) is reusable;
     the copy and section layout inside it should be redone against the
     revised schema and real approved data
   - `.gitignore`, `.vscode/` — trivial config, fine to reuse directly
5. **What is explicitly not structure and must not carry over as-is:**
   - `src/content/programs/chapter-01-literacy-labs.md`,
     `src/content/news/spring-2026-chapter-launch.md`,
     `src/content/stories/a-shelf-of-her-own.md`,
     `src/content/team/founder.md` — all fabricated data, per
     content-strategy §1
   - `src/pages/index.astro` — the file is structurally simple, but its
     copy ("Living libraries, chosen by the kids who read them," "Chapters")
     is written entirely around the fabricated Literacy Labs program and
     should be re-authored from approved messaging, not edited in place
   - The "living libraries" framing repeated in `src/components/Header.astro`'s
     description default and `src/components/Footer.astro`'s tagline
     (`BaseLayout.astro`'s default `description` prop, and Footer's
     "Building living libraries where kids choose their own books.") — same
     issue: these are copy, not structure, and encode the same unverified
     program framing
   - The general rule: if a file only defines shape (schema, routing,
     token names, config), it's a structure candidate for point 4; if it
     contains a string asserting a fact, name, number, date, or claim, treat
     it as content and re-author it from approved sources on the new branch,
     never copy it forward.
6. **Nothing was modified to produce this section or the rest of this
   planning pass.** No content, code, dependency, or configuration file in
   this repository was changed, installed, removed, cherry-picked, merged,
   pushed, or deployed. `docs/content-strategy.md` and `docs/design-plan.md`
   are the only files written during this session.
