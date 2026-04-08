import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    draft: z.boolean().optional().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    url: z.string().optional(),
    repo: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    pinned: z.boolean().optional().default(false),
    order: z.number().optional().default(0),
  }),
});

export const collections = { blog, projects };
