import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Every .md file in src/content/ideas is one journal entry.
const ideas = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/ideas" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),          // e.g. 2026-11-09T13:30:00+03:30
    abc: z.string().optional(),     // the notation, in ABC format
    photo: z.string().optional(),   // original handwritten photo, e.g. photos/2026-11-09-1330.jpg (inside public/)
  }),
});

export const collections = { ideas };
