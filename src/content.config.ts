import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Recreated independently for the Astro version installed on this branch
// (astro@7) and the approved strategy in content-strategy.md §7 and
// design-plan.md §6 — not copied from website-v2's content.config.ts
// (see docs/design-plan.md §13).
//
// `approved` is the structural gate: getStaticPaths in the program route
// filters on it, so a program entry cannot appear in a public build until
// someone has explicitly set it to true. `status` is separate — it lets an
// *approved* entry still say "planned" or "pilot" honestly rather than
// implying an active operating program.
const programs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/programs" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    purpose: z.string(),
    audience: z.string(),
    status: z.enum(["active", "pilot", "planned", "archived"]),
    literacyAreas: z
      .array(
        z.enum([
          "academic",
          "financial",
          "emotional",
          "digital",
          "cultural",
          "leadership",
          "civic",
          "career-workforce",
          "communication",
          "self",
        ]),
      )
      .min(1),
    readStages: z
      .array(z.enum(["recognize", "empower", "articulate", "develop"]))
      .min(1),
    // Ties every program back to a governing purpose from
    // legal-facts-for-website.md rather than allowing a free-text claim.
    legalPurposeAlignment: z.enum([
      "literacy-storytelling-mentorship-creative-programming",
      "youth-community-educational-cultural-creative",
      "nonprofit-educational-community-collaboration",
    ]),
    approved: z.boolean().default(false),
    approvedBy: z.string().optional(),
    approvedDate: z.coerce.date().optional(),
  }),
});

export const collections = { programs };
