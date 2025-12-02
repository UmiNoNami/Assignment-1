import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
