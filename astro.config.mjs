// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    mdx(),
    icon({
      include: {
        ion: [
          "bookmark-outline",
          "logo-github",
          "logo-linkedin",
          "star-outline",
        ],
        mdi: [
          "book-open-page-variant",
          "cog",
          "eslint",
          "language-markdown",
          "lighthouse",
          "looks",
          "rocket",
          "tailwind",
          "theme-light-dark",
          "wheelchair-accessibility",
        ],
      },
    }),
  ],
});
