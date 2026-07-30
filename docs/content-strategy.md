# Hardcover Foundation — Content Strategy

Status: **Draft for review. Planning phase only. No implementation started from this document.**

This document audits existing content, classifies it by source authority, and
proposes the sitemap, homepage narrative, program taxonomy, and messaging
strategy for the rebuilt site. It is a companion to `docs/design-plan.md`.

---

## 1. Audit finding: unauthorized content already in this branch

Before any strategy, one thing needs direct attention.

The `website-v2` branch already contains a full Astro rebuild (commit
`66cd2e6`, "Rebuild site as Astro project with content collections"). That
commit ran ahead of the approval gate this task is operating under: it deleted
the legacy static landing page (`index.html`, `assets/`) and replaced it with
new pages, and it introduced **fabricated content** that conflicts directly
with `CLAUDE.md`:

| File | Problem |
|---|---|
| `src/content/programs/chapter-01-literacy-labs.md` | Presents "Literacy Labs" as an existing, named, numbered program with invented outcomes and an invented sponsorship price ("Fund a shelf. $250 stocks one classroom library for a full year."). No source document verifies this program exists. |
| `src/content/news/spring-2026-chapter-launch.md` | Announces a fabricated "Chapter Two" launch "backed by 40 founding sponsors." No partner or sponsor data has been verified anywhere in the resource pack. |
| `src/content/stories/a-shelf-of-her-own.md` | A fabricated first-person-adjacent impact story about a named child ("Amara") with a byline ("Marisol Vega") who does not appear in any approved source. This is the kind of testimonial/story content `content-inventory.md` explicitly lists as missing and requiring approval. |
| `src/content/team/founder.md` | Lists a "Founder & Director" with a bio. `approved-board-information.md` states no board/leadership entries have been supplied and explicitly warns not to infer roles from organizing documents. |

**Recommendation:** none of this should be reused as-is. When implementation
resumes, these four files should be replaced with either (a) real,
leadership-approved entries, or (b) clearly-labeled placeholder/roadmap
content that does not assert specific numbers, names, or events (see §8,
Program Taxonomy). This is flagged here rather than fixed now because fixing
it is implementation work, and this task is planning-only.

**Also note:** production is not at risk. `main` still has the original
static landing page untouched — the fabricated rebuild only exists on
`website-v2` (pushed to `origin/website-v2`, not merged). The "do not delete
the current landing page" restriction in `CLAUDE.md` is still satisfiable:
`main` is intact.

## 2. Audit finding: legacy landing page content is not in the approved packet

The live `index.html` on `main` includes a founding narrative and tagline that
do **not** appear anywhere in `../project-resources/`:

- "Founded by Grammy Award-winning songwriter Harold Lilly Jr."
- Tagline: "The Legacy. The Lyrics. The Lift."
- Programs listed: "reading initiatives and writing workshops to boot camps"

This may all be true and simply predates the resource pack, but per the
source hierarchy in `CLAUDE.md`, unverified copy cannot be carried forward
just because it was previously published. **Recommendation:** confirm with
leadership whether the founder narrative and any specific claims from the
legacy page are still accurate and approved before reusing them. Until
confirmed, treat them as classification 3 (proposed) at best, not governing
fact.

## 3. Content classification

Using the four-tier system from `content-inventory.md`:

### Tier 1 — Legally governing source
- Entity type, Virginia nonstock status, no statutory members (`legal-facts-for-website.md`)
- 501(c)(3) status, public charity classification, exemption effective date July 6, 2025 (`legal-facts-for-website.md`)
- The two approved legal-language paragraphs (general and governance-page) — use verbatim, do not paraphrase into something looser
- Formal charitable/educational purposes (literacy, storytelling, mentorship, creative programming; youth/community empowerment; nonprofit collaboration)

### Tier 2 — Approved public organizational content
- Mission and Vision statements (`approved-messaging.md`)
- "Reading life, not just books" core distinction
- Hardcover philosophy ("our lives are books that will be read by many")
- The READ Framework (Recognize, Empower, Articulate, Develop) in full, including guiding questions
- Expanded literacy foundational idea and the list of things people must learn to read
- The eleven audience categories (youth, parents, educators, mentors, artists, athletes, entrepreneurs, businesses, nonprofits, municipalities, donors)
- Public engagement message and desired outcomes
- Approved terminology restrictions (no "members," use participant/volunteer/mentor/partner/sponsor/donor/subscriber)

### Tier 3 — Proposed public marketing copy (requires sign-off before publishing as final)
- "Read Life. Write the Future." tagline
- Any new homepage hero headline
- Rewritten audience-pathway copy
- Program category labels
- "Lead an Initiative" and partner/business-benefit language
- Donation and sponsorship copy
- Governance-page narrative framing

### Tier 4 — Internal/restricted (never enters `public/`, `src/`, or `docs/`)
- Form 1023 submission proof, IRS determination letter, Virginia restated articles (PDFs in `legal-private/`)
- EIN, Pay.gov/tracking identifiers, payment details
- Any personal or administrative address
- The two paid-source design mockups themselves (reference only)
- Unapproved names, titles, biographies, headshots

## 4. Proposed sitemap

```text
/                          Home
/about                     Mission and Vision
/about/philosophy          What Makes Hardcover Different + "reading life" philosophy
/about/story               Our Story (pending verified founding narrative)
/about/leadership          Leadership (placeholder until approved-board-information.md is completed)
/about/governance          Governance and Reports (tax status, filings when available)

/approach                  Expanded Literacy overview
/approach/read-framework   The READ Framework (expanded)
/approach/how-we-work      How We Create Impact

/programs                  Program index (taxonomy, not fabricated instances)
/programs/[slug]           Reusable program detail template

/impact                    Community Impact overview
/impact/stories            Stories (empty/placeholder until approved)
/impact/reports            Reports (empty/placeholder until available)
/impact/partners           Partners (empty/placeholder until approved)

/get-involved              Overview + pathway index
/get-involved/join         Join a Program
/get-involved/mentor       Become a Mentor
/get-involved/volunteer    Volunteer
/get-involved/lead         Lead an Initiative
/get-involved/partner      Become a Partner
/get-involved/sponsor      Sponsor the Mission
/give                      Donate

/news                      News and Events index
/news/[slug]               Article detail
/events/[slug]             Event detail

/contact                   Contact
/privacy                   Privacy Policy
/accessibility             Accessibility Statement
/terms                     Terms of Use
```

Notes:
- `/about/story` and `/about/leadership` route to real pages so the
  information architecture is stable, but each renders a clearly-labeled
  "content pending approval" state rather than fabricated bios — see §9.
- Collapsing "Governance and Reports" and "Impact/Reports" was considered;
  kept separate because governance reporting (Form 990, bylaws) is a
  different audience/purpose than program-outcome reporting.
- `/give` is kept as a short top-level path (matches existing `Header.astro`
  link) rather than nested under `/get-involved`, since donation is the
  highest-intent CTA and deserves a short URL.

## 5. Homepage narrative (content sequence)

Mapping the master prompt's required 11 beats to actual approved source:

1. **Central belief** — "Most organizations focus on reading books. Hardcover focuses on reading life." (Tier 1/2, verbatim available)
2. **What makes Hardcover different** — literacy as interpretation/response to the world, not just phonetics (`expanded-literacy.md`)
3. **The READ Framework** — condensed 4-step homepage version linking to the full page
4. **"Our lives are books read by many"** — the philosophy section with the reflective question ("When people read your life, what do they get?") framed as invitation, not judgment
5. **Areas of impact** — presented as literacy *categories* (financial, emotional, digital, cultural, leadership, civic, career, self), explicitly not claimed as active programs unless verified
6. **Ways to participate** — audience pathways, differentiated per §7 below, not 11 identical cards
7. **Verified community impact** — **currently empty.** No verified metric exists anywhere in the resource pack. Do not build a stats band with placeholder numbers (see the "500+ / 40+ / 85%" pattern in `hardcover-concept-01.jpeg` — do not reproduce that pattern with invented numbers). See §10 for the recommended empty-state.
8. **Featured initiative or story** — **currently empty**, same constraint. Recommend this section is structurally present but content-gated: it should not render until a real story is approved.
9. **Partnership pathways** — framed around the approved purposes (educational/community impact), never around business benefit, revenue, or exposure
10. **Donation and newsletter pathways**
11. **Institutional credibility and governance** — 501(c)(3) status using the approved verbatim language, plus a link to `/about/governance`

Sections 7 and 8 are the two places most likely to tempt fabrication during
implementation. Both should ship structurally ready but empty/deferred until
real content lands, rather than filled with plausible-sounding placeholders.

## 6. Audience pathways strategy

The master prompt is explicit: **do not present all eleven audiences as
identical homepage cards.** Recommended treatment:

- Group the eleven into three narrative clusters rather than eleven boxes:
  - **Learn & Grow** — youth/students, parents/families, educators/schools
  - **Guide & Give Time** — mentors/volunteers, artists/creators, athletes/coaches
  - **Invest & Partner** — entrepreneurs/professionals, businesses, nonprofits, municipalities, donors/sponsors
- Each cluster gets one editorial paragraph + a short list of specific entry
  points (e.g., "Become a Mentor," "Lead an Initiative"), not a photo card
  per audience.
- Full granularity (all eleven, individually addressed) lives on
  `/get-involved`, not the homepage.
- No audience's pathway should promise contracts, revenue, customers,
  employment, publicity, or tax outcomes (per `CLAUDE.md` and the legal
  facts doc) — this constrains the businesses/municipalities/nonprofits copy
  in particular.

## 7. Program taxonomy recommendation

No verified active program exists in any approved source. `expanded-literacy.md`
is explicit: the ten literacy areas "are strategic content directions. Do not
claim that a formal program currently exists for every category unless
leadership verifies it."

Recommended taxonomy (category labels, not instances):

- Academic literacy
- Financial literacy
- Emotional literacy
- Digital literacy
- Cultural literacy
- Leadership literacy
- Civic literacy
- Career and workforce literacy
- Communication literacy
- Self-literacy

For the `/programs` index and detail template, recommend a `status` field
(`active`, `planned`, `pilot`, `archived` — directly from the "missing or
requiring confirmation" list in `content-inventory.md`) so the template can
render an honest "In development" state instead of implying an operating
program. The existing `chapter-01-literacy-labs.md` schema (chapter number,
purpose, outcomes, audience, sponsor call) is a reasonable *shape* to reuse,
but every instance populated from it needs a `status` field and must not
assert numbers or claims that haven't been supplied by leadership. See
`docs/design-plan.md` §6 for the revised schema.

## 8. Expanded literacy presentation

Per `expanded-literacy.md`'s explicit guidance, avoid a flat ten-item
checklist. Recommend an editorial progression:

> Reading words → reading rooms and people → reading opportunity and systems
> → reading yourself

rendered as a short horizontal/vertical index (not ten equal cards), with the
ten literacy areas available as an expandable or secondary list underneath —
so the primary read is the *progression*, and the *taxonomy* is secondary,
supporting detail. Keep the "traditional reading still matters" framing
explicit near the top, since the source doc warns against implying books are
unimportant.

## 9. READ Framework presentation

Treat as a substantive four-stage methodology, not a decorative acronym
(explicit requirement in `read-framework.md`):

- Homepage: condensed version — four stages in sequence, each with a
  one-line description, linking to `/approach/read-framework` for depth.
- Dedicated page: full version with the guiding questions under Recognize
  and Articulate, the literacy-area list under Empower, and the "literacy
  should produce transformation, not information alone" principle under
  Develop.
- Show the stages as a progression (recognition → empowerment →
  articulation → development → impact), not four identical boxes — this
  directly answers the "READ Framework feels decorative" item in
  `docs/design-feedback-prompts.md`.
- Where programs exist, show which stage(s) they serve — but only for
  programs that are actually approved and populated (see §7).

## 10. Empty-state and "missing content" policy

Several homepage sections (verified impact, featured story, partners,
leadership bios, governance reports) currently have no approved content.
Recommend a house style for this rather than solving it ad hoc per section:

- A short, honest, non-apologetic line (e.g., under Impact: "We're building
  our first verified impact report — check back soon," under Leadership:
  "Leadership profiles are being finalized.").
- Never a fabricated number, name, or quote standing in for the real thing.
- Sections should be visually complete (not broken-looking) but should not
  imply an operating history that doesn't exist yet.

## 11. Legal and governance alignment

- Use the two approved legal paragraphs verbatim on `/about/governance` and
  in the homepage credibility section — do not paraphrase "tax-exempt public
  charity... 501(c)(3)... tax-deductible to the extent permitted by law" into
  looser marketing language.
- Do not publish the EIN, any Pay.gov/tracking identifier, payment details,
  or any address sourced from the legal-private PDFs.
- Do not state or imply a membership structure anywhere (nav labels, footer,
  forms) — this affects word choice on `/get-involved` and any newsletter
  signup ("subscribe," not "join as a member").
- Partnership and sponsorship copy must stay anchored to educational/
  community impact and must not promise contracts, revenue, customers,
  employment, publicity, or tax outcomes — this constrains `/get-involved/
  partner` and `/get-involved/sponsor` copy specifically.
- Governance page should link out to Form 990-series filings and an annual
  report once they exist; until then, state plainly that filings will be
  posted when available rather than omitting the section.

## 12. Missing content and approvals needed (blocking full population)

Carried forward and organized from `content-inventory.md`, confirmed still
accurate after this audit:

- **Leadership:** current board roster, officer titles, approved bios/
  headshots, bylaws-for-publication decision, conflict-of-interest policy
- **Programs:** which literacy-area programs are actually active vs. planned,
  owners, audiences, eligibility, locations, schedules, outcomes, approved
  images, registration links, status per program
- **Impact:** any verified number (youth served, volunteers, mentors,
  partners), verified outcome measures, approved stories/testimonials with
  media-release permission
- **Partners:** approved partner names/logos, sponsor levels if any, intake
  process
- **Contact/operations:** public email, public phone, public mailing
  address, social links, donation platform URL, newsletter provider/form
  action, volunteer/mentor intake process, privacy-policy owner
- **Legacy content verification:** confirm whether the founder narrative and
  tagline on the current live `index.html` are still accurate (§2)
- **Brand:** a single confirmed logo lockup — see `docs/design-plan.md` §2
  for the discrepancy found between the two existing logo assets

None of these block finishing the planning documents, but all of them block
populating real (non-placeholder) content during implementation.
