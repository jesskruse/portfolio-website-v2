// https://docs.astro.build/en/guides/content-collections/#defining-collections
// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const blogCollection = defineCollection({ 
    type: 'content',
    schema: z.object({
        title: z.string(),
        author: z.string(),
        dates: z.object({
            published: z.date(),
            modified: z.date(),
        }),
        description: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }),      
        tags: z.array(z.string()).optional(),
    })
 });
const portfolioCollection = defineCollection({ type: 'content',
    schema: z.object({
        title: z.string(),
        author: z.string(),
        description: z.string(),
        dates: z.object({
            published: z.date(),
            modified: z.date(),
            projectYear: z.date(),
        }),
        timeline: z.string(),
        context: z.string(),
        role: z.string(),
        tools: z.array(z.string()).optional(),
        team: z.array(z.string()).optional(),
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }),      
        tags: z.array(z.string()).optional(),
    })
});
const peopleCollection = defineCollection({ type: 'data',
    schema: z.object({
        firstName: z.string(),
        lastName: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        occupation: z.string().optional(),
        state: z.string().optional(), 
        skills: z.array(z.string()).optional(), 
        hobbies: z.array(z.string()).optional(),     
        tags: z.array(z.string()).optional(),
    })
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
  'portfolio': portfolioCollection,
  'people': peopleCollection,
};