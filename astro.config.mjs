// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import rehypePrettyCode from "rehype-pretty-code";
import { remarkCodeMeta } from "./src/lib/remark-code-meta.ts";
import { CONFIG } from "./src/data/config.ts";

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
  theme: {
    light: "github-light",
    dark: "github-dark",
  },
  keepBackground: false,
};

export default defineConfig({
  site: CONFIG.site.url,
  trailingSlash: "never",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    mdx({
      gfm: true, // tables, task lists, etc. (uses MDX's bundled remark-gfm)
      remarkPlugins: [remarkCodeMeta],
      rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
      syntaxHighlight: false,
    }),
    sitemap(),
  ],
});
