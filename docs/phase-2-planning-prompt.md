# Claude Phase 2 Planning Prompt — Hardcover Foundation Website

Begin Phase 2 planning using the newly approved organizational information.

## Required source review

First read:

- `CLAUDE.md`
- `docs/content-strategy.md`
- `docs/design-plan.md`
- `../project-resources/approved-public/approved-board-information.md`
- `../project-resources/approved-public/approved-contact-information.md`
- `../project-resources/approved-public/legal-facts-for-website.md`
- `../project-resources/content/approved-messaging.md`
- `../project-resources/content/expanded-literacy.md`
- `../project-resources/content/read-framework.md`

## Approved board information

The current Board of Directors and officer titles are approved for public
display as of July 30, 2026:

- Horace Allen — President
- Damon Thompson Sr. — Vice President
- Brittany Johnson — Secretary
- Xavier Lee — Treasurer

Publish names and titles only.

Do not create or infer:

- biographies
- headshots
- employment information
- credentials
- committee assignments
- LinkedIn profiles
- social-media links
- quotes from board members
- personal contact information

## Approved public contact

The only approved public contact information is:

```text
info@hardcoverfoundation.org
```

Do not publish:

- a phone number
- a mailing address
- personal contact information
- addresses taken from legal filings

Use the approved email for general contact, program-interest, volunteer,
initiative-leader, media, and partnership inquiries until separate intake
processes or addresses are approved.

## Donation status

No donation platform or donation URL is currently approved.

Keep `donateUrl` or its equivalent configuration value set to `null`.

Do not display:

- an active Donate button
- a disabled Donate button
- a placeholder donation link
- contribution amounts
- sponsorship prices
- claims about what a specific donation amount provides

Donation functionality will be added after the Foundation establishes its bank
account and selects a third-party donation service.

## Social-media status

No official Hardcover Foundation social-media account is currently approved.

Do not display social-media icons or links.

The Instagram account `wearehardcover` is affiliated with Harold Lilly's
company, but it is not the official Hardcover Foundation Instagram account.

Do not present it as an official Foundation account.

## Program and partnership status

The Foundation is currently completing strategic planning for programs and
partnerships.

No program, partnership, initiative, event, or service should be presented as
active or launched unless it is separately verified and approved.

Appropriate public positioning:

> Hardcover Foundation is developing community-centered initiatives grounded
> in expanded literacy, leadership, mentorship, culture, creativity, wellness,
> workforce development, and opportunity.

Do not create:

- active program entries
- registration links
- schedules
- participant counts
- impact results
- partner names or logos
- testimonials
- sponsor levels
- program owners
- launch dates

The Programs page may explain the Foundation's areas of focus and planning
approach, but it must clearly distinguish strategic directions from active
programs.

## IRS document publication

Do not publish or link the IRS determination-letter PDF during Phase 2.

The Governance and Transparency page may state:

> Hardcover Foundation is a tax-exempt public charity recognized under Section
> 501(c)(3) of the Internal Revenue Code.

It may also explain that the organization’s status can be verified through
public IRS records.

Do not publish:

- the EIN
- addresses from the letter
- an image or PDF of the determination letter
- IRS tracking information
- Form 1023 submission documents
- payment information

Do not imply that a public download of the determination letter is currently
available.

## Phase 2 scope

Propose implementation for:

1. About landing page
2. Mission and Vision
3. What Makes Hardcover Different
4. The Hardcover Philosophy
5. Leadership and Board
6. Expanded Literacy
7. READ Framework
8. How We Create Impact
9. Programs overview
10. Get Involved overview
11. Contact
12. Governance and Transparency
13. Privacy
14. Accessibility
15. Terms

Do not implement:

- individual program-detail content
- impact reports
- participant stories
- news articles
- events
- partner showcases
- donation processing
- newsletter integration
- social-media integration

## First deliverable only

Before changing code, produce a Phase 2 implementation checklist containing:

1. Pages to create
2. Shared components to create or extend
3. Approved copy source for each page
4. Pages that require honest planning-stage language
5. Navigation changes
6. Contact-form recommendation that does not require exposing secrets
7. Governance-page structure without publishing source PDFs
8. How the Programs page will distinguish areas of focus from active programs
9. Accessibility validation
10. Exact implementation and commit sequence
11. Any content or approvals still needed before implementation
12. Any conflict between Phase 2 scope and the current Phase 1 architecture

Do not:

- edit code
- install dependencies
- create pages
- modify configuration
- push
- merge
- deploy
- modify DNS
- modify GitHub Pages settings

Stop for approval after presenting the checklist.
