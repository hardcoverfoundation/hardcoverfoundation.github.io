// Human-readable labels for the enums in content.config.ts, shared between
// the program template and the homepage literacy-area index so the two
// never drift out of sync.

export const literacyAreaLabels: Record<string, string> = {
  academic: "Academic literacy",
  financial: "Financial literacy",
  emotional: "Emotional literacy",
  digital: "Digital literacy",
  cultural: "Cultural literacy",
  leadership: "Leadership literacy",
  civic: "Civic literacy",
  "career-workforce": "Career and workforce literacy",
  communication: "Communication literacy",
  self: "Self-literacy",
};

export const readStageLabels: Record<string, string> = {
  recognize: "Recognize",
  empower: "Empower",
  articulate: "Articulate",
  develop: "Develop",
};

export const statusLabels: Record<string, string> = {
  active: "Active",
  pilot: "Pilot",
  planned: "Planned",
  archived: "Archived",
};

// Full text of the formal purposes from
// project-resources/approved-public/legal-facts-for-website.md — used
// verbatim so a program can only ever be tied to a governing purpose that
// leadership has already stated, not a paraphrase.
export const legalPurposeLabels: Record<string, string> = {
  "literacy-storytelling-mentorship-creative-programming":
    "Preserving and elevating cultural and literary heritage through literacy, storytelling, mentorship, and creative programming",
  "youth-community-educational-cultural-creative":
    "Empowering youth and communities through educational workshops, cultural partnerships, and creative initiatives",
  "nonprofit-educational-community-collaboration":
    "Collaborating with nonprofit organizations for educational and community enrichment",
};
