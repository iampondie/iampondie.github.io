import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro:content';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    authors: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
    coverImage: z.string().optional(),
  }),
});

const plastering = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/plastering' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    serviceType: z.enum(['Interior', 'Exterior', 'Decorative', 'Repair']),
    galleryImages: z.array(z.string()),
    testimonial: z.string().optional(),
  }),
});

export const collections = {
  'blog': blog,
  'plastering': plastering,
};
