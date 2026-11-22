import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import siteSettings from './content/siteSettings/siteSettings.json';

const siteSettingsCollection = defineCollection({
  loader: () => [{ id: 'siteSettings', ...siteSettings }],
  schema: z.object({
    schoolName: z.string(),
    shortName: z.string(),
    tagline: z.string(),
    description: z.string(),
    logo: z.string().optional(),
    favicon: z.string().optional(),
    primaryCtaLabel: z.string().optional(),
    primaryCtaUrl: z.string().optional(),
    secondaryCtaLabel: z.string().optional(),
    secondaryCtaUrl: z.string().optional(),
    whatsappUrl: z.string(),
    instagramUrl: z.string(),
    email: z.string(),
    mapsUrl: z.string(),
    address: z.string(),
  })
});

const quickLinksCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: "./src/content/quickLinks" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    url: z.string(),
    icon: z.string(),
    category: z.string(),
    badge: z.string().optional(),
    isActive: z.boolean().default(true),
    isFeatured: z.boolean().default(false),
    sortOrder: z.number().default(0),
  })
});

const announcementsCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: "./src/content/announcements" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    badge: z.string().optional(),
    ctaLabel: z.string().optional(),
    ctaUrl: z.string().optional(),
    isActive: z.boolean().default(true),
    startDate: z.string().optional().nullable(),
    endDate: z.string().optional().nullable(),
  })
});

const programsCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: "./src/content/programs" }),
  schema: z.object({
    title: z.string(),
    level: z.enum(['preschool', 'elementary']),
    context: z.string().optional(),
    description: z.string(),
    ctaLabel: z.string().optional(),
    ctaUrl: z.string().optional(),
    sortOrder: z.number().default(0),
    isActive: z.boolean().default(true),
  })
});

const updatesCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: "./src/content/updates" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    publishedDate: z.string(),
    isPublished: z.boolean().default(false),
    coverImage: z.string().optional(),
  })
});

export const collections = {
  'siteSettings': siteSettingsCollection,
  'quickLinks': quickLinksCollection,
  'announcements': announcementsCollection,
  'programs': programsCollection,
  'updates': updatesCollection,
};
