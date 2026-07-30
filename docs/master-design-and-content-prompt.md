# Claude Master Prompt — Hardcover Foundation Website Strategy

Act as the senior UX designer, content strategist, and frontend architect for
the Hardcover Foundation website.

## Objective

Transform the current GitHub Pages landing page into a complete, maintainable
nonprofit website with the content depth and institutional credibility of a
well-developed education foundation website, while creating an original
Hardcover Foundation visual identity.

Do not copy another organization's layout, design system, source code,
photography, or wording.

## Required source review

Before proposing changes, review:

- the complete repository
- `CLAUDE.md`
- `../project-resources/content/approved-messaging.md`
- `../project-resources/content/expanded-literacy.md`
- `../project-resources/content/read-framework.md`
- `../project-resources/content/content-inventory.md`
- `../project-resources/approved-public/legal-facts-for-website.md`
- the images in `../project-resources/design-references/`
- the source documents in `../project-resources/legal-private/` only when
  factual verification is necessary

Treat `design-references` and `legal-private` as reference-only directories.
Do not copy their files into the repository.

## Core organizational positioning

Hardcover Foundation does not focus only on reading books. It expands literacy
to include the ability to accurately interpret, understand, and respond to the
world around us.

The organizing concept is:

> Most organizations focus on reading books. Hardcover focuses on reading
> life.

The READ Framework is the central methodology:

- Recognize
- Empower
- Articulate
- Develop

Programs should be presented as applications of this methodology and the
Foundation's charitable and educational purposes.

## Design concept

Create an original modern editorial nonprofit design inspired by:

- books and chapters
- identity and storytelling
- knowledge and access
- culture and legacy
- leadership and opportunity
- community impact

Use these concepts subtly through structure, typography, chapter labels,
indexes, pull quotations, dividers, and narrative progression.

Avoid:

- generic SaaS styling
- generic charity templates
- excessive rounded cards
- glassmorphism
- decorative gradients without purpose
- literal book graphics everywhere
- page-turn animations
- school-sports branding
- direct replication of supplied mockups

## Proposed visual direction

Explore a palette based on:

- ink or charcoal
- warm paper or ivory
- archive gold
- controlled ember or copper
- restrained deep blue
- white and graphite

Inspect the approved logo before finalizing exact colors.

Explore an editorial display typeface paired with a readable body and interface
typeface. Any proposed fonts must be properly licensed and performant.

## Homepage narrative

Propose a homepage that communicates:

1. Hardcover's central belief about expanded literacy
2. What makes Hardcover different
3. The READ Framework
4. The philosophy that our lives are books read by many
5. Areas of impact
6. Ways to participate
7. Verified community impact
8. A featured initiative or story
9. Partnership pathways
10. Donation and newsletter pathways
11. Institutional credibility and governance

Do not invent programs, statistics, stories, quotes, partners, or outcomes.

## Audience pathways

The architecture must support:

- youth and students
- parents and families
- educators and schools
- mentors and volunteers
- artists and creators
- athletes and coaches
- entrepreneurs and professionals
- businesses and corporate partners
- nonprofits and community organizations
- municipalities and public-sector partners
- donors and sponsors

Do not present every audience as an identical homepage card.

## Suggested information architecture

Evaluate and refine:

```text
Home

About
- Mission and Vision
- What Makes Hardcover Different
- The Hardcover Philosophy
- Our Story
- Leadership
- Board
- Governance and Reports

Our Approach
- Expanded Literacy
- The READ Framework
- How We Create Impact

Programs
- Program index
- Reusable program detail template
- Verified program categories

Impact
- Community Impact
- Stories
- Outcomes
- Reports
- Partners

Get Involved
- Join a Program
- Become a Mentor
- Volunteer
- Lead an Initiative
- Become a Partner
- Sponsor the Mission
- Donate

News and Events
Contact
Privacy
Accessibility
Terms
```

## Legal and governance alignment

Maintain consistency with the approved legal summary.

The website may state that Hardcover Foundation is a tax-exempt public charity
recognized under Section 501(c)(3), with contributions tax-deductible to the
extent permitted by law.

Do not publish restricted identifiers or addresses.

Do not create a corporate membership structure.

Do not promise contracts, revenue, customers, employment, publicity, tax
outcomes, or business opportunities.

Public partnership language should emphasize educational and community impact.

## Technical recommendation to assess

Assess a migration to:

- Astro
- TypeScript
- Tailwind CSS
- typed content collections
- GitHub Actions
- GitHub Pages

Preserve the custom domain and CNAME behavior.

Do not install dependencies until the plan explains why each dependency is
needed.

## First deliverable only

Do not begin the full implementation.

First:

1. Inspect the repository.
2. Audit existing content and assets.
3. Analyze the reference images.
4. Identify design principles from each reference.
5. Explain how the Hardcover design will remain original.
6. Classify content as:
   - legally governing source
   - approved public content
   - proposed public marketing copy
   - internal or restricted
7. Propose the final sitemap.
8. Propose the homepage narrative.
9. Produce three original hero concepts.
10. Produce three original tagline directions.
11. Recommend a program taxonomy.
12. Recommend how to present expanded literacy.
13. Recommend how to present the READ Framework.
14. Propose the component architecture.
15. Propose the typed content model.
16. Identify missing content, images, metrics, approvals, and integrations.
17. Identify GitHub Pages, deployment, privacy, and accessibility risks.
18. Add a Legal and Governance Alignment section.
19. Write the results to:
    - `docs/content-strategy.md`
    - `docs/design-plan.md`
20. Present the recommendations for approval.

Do not:

- push
- merge
- deploy
- change DNS
- delete the current landing page
- publish placeholders
- fabricate claims
- start the complete rebuild
