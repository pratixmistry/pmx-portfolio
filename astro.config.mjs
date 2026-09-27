// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
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

  markdown: {
    syntaxHighlight: false, // handled by rehype-pretty-code
    // Astro 7 defaults to the "satteri" processor, which ignores remark/rehype
    // plugins; the unified processor keeps code titles and highlighting working.
    processor: unified({
      gfm: true,
      remarkPlugins: [remarkCodeMeta],
      rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
    }),
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    mdx(), // inherits markdown.processor
    sitemap(),
  ],
});
