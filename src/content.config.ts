import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const programs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/programs' }),
  schema: z.object({
    chapterNumber: z.number().int().positive(),
    title: z.string(),
    purpose: z.string(),
    outcomes: z.array(z.string()),
    audience: z.string(),
    sponsorCall: z.string(),
    description: z.string().optional(),
    heroImage: z.string().optional(),
    publishDate: z.coerce.date().optional(),
  }),
});

const stories = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    publishDate: z.coerce.date(),
    excerpt: z.string(),
    heroImage: z.string().optional(),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    summary: z.string(),
    heroImage: z.string().optional(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    photo: z.string().optional(),
    order: z.number().int().optional(),
  }),
});

export const collections = { programs, stories, news, team };
