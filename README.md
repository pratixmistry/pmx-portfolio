# Pratik Mistry — Portfolio

My personal portfolio website, built with Astro, React, TypeScript, Tailwind CSS, and MDX.

🌐 [pratixmistry.xyz](https://www.pratixmistry.xyz)

---

## Tech Stack

- [Astro](https://astro.build) — framework
- [React](https://react.dev) — interactive UI
- [TypeScript](https://www.typescriptlang.org) — type safety
- [Tailwind CSS](https://tailwindcss.com) — styling
- [shadcn/ui](https://ui.shadcn.com) — UI components
- [MDX](https://mdxjs.com) — content and blog
- [Vite](https://vite.dev) — build tooling

---

## Quick Edits

Most of the portfolio content is separated from the UI, so you usually don't need to edit components for simple content changes.

| I want to change...       | Edit this                         |
| ------------------------- | --------------------------------- |
| Name, bio & personal info | `src/data/resume.tsx`             |
| Work experience           | `src/data/resume.tsx`             |
| Education                 | `src/data/resume.tsx`             |
| Projects                  | `src/data/resume.tsx`             |
| Skills                    | `src/data/resume.tsx`             |
| Photos                    | `src/data/resume.tsx` + `public/` |
| Social & contact links    | `src/data/resume.tsx`             |
| Site URL & SEO            | `src/data/config.ts`              |
| Theme colors              | `src/data/config.ts`              |
| Fonts                     | `src/styles/global.css`           |
| Blog posts                | `src/content/blog/`               |
| UI / design               | `src/components/`                 |
| Routes / pages            | `src/pages/`                      |

---

## Editing the Portfolio

### 1. Personal Information

Most portfolio content lives in:

```text
src/data/resume.tsx
```

This file contains the main `DATA` object used throughout the portfolio.

You can edit:

- Name
- Initials
- Location
- Bio
- About/summary
- Avatar
- Open Graph image
- Skills
- Navigation
- Social links
- Contact information
- Work experience
- Education
- Projects
- Photos

For normal content changes, start here before modifying any components.

---

### 2. Site Configuration

Global site settings live in:

```text
src/data/config.ts
```

This includes:

- Site URL
- Locale
- SEO settings
- Theme colors
- Blog posts per page
- Other global configuration

Example:

```ts
export const CONFIG = {
  site: {
    url: "https://www.pratixmistry.xyz",
    locale: "en_US",
  },

  // ...
};
```

`site.url` is used for canonical URLs, Open Graph tags and the sitemap. It must be the final production URL (the `www` domain; the apex domain redirects to it).

---

### 3. Adding or Editing Projects

Projects are managed from:

```text
src/data/resume.tsx
```

Find the `projects` section and add or edit an entry there.

Example:

```ts
{
  title: "Project Name",
  description: "A short description of the project.",
  href: "https://example.com",
  technologies: [
    "React",
    "TypeScript",
  ],
  image: "/project-name.webp",
}
```

Follow the structure of the existing project objects when adding a new project.

The project UI automatically reads from this data, so you generally don't need to modify the component itself.

---

### 4. Adding or Editing Work Experience

Work experience is also managed in:

```text
src/data/resume.tsx
```

Find the `work` section and add or edit an entry following the existing structure.

This keeps the experience data separate from the UI that displays it.

---

### 5. Adding or Editing Skills

Skills are managed from:

```text
src/data/resume.tsx
```

Add or remove technologies from the existing skills structure.

Keep the skill data consistent with the technologies you actually use or want to showcase.

---

### 6. Adding Photos

The photo information is managed through:

```text
src/data/resume.tsx
```

Actual image files should be placed inside:

```text
public/
```

Example:

```ts
{
  src: "/photos/kerala.webp",
  alt: "Kerala backwaters",
  width: 1000,
  height: 1333,
}
```

Use descriptive `alt` text for images, and set `width`/`height` to the image's real pixel size (prevents layout shift while photos load).

Before adding a photo, resize it (about 1000px wide is plenty), convert it to WebP, and **strip its metadata**. Phone photos embed GPS coordinates in EXIF data, and anything in `public/` is publicly downloadable.

---

## Blog

Blog posts live inside:

```text
src/content/blog/
```

Create a new `.mdx` file for each post.

Example:

```mdx
---
title: "My First Post"
publishedAt: "2026-09-16"
summary: "A short description of the post."
image: "https://example.com/image.jpg"
---

Write your post here.

You can use Markdown, HTML, React components,
and code blocks through MDX.
```

The `image` field is optional. `updatedAt` is also optional and is used for the post's modified date.

The blog index is paginated statically (`/blog`, `/blog/2`, ...) using `blog.postsPerPage` from `src/data/config.ts`.

While the folder has no posts, the build prints a "no files found" warning for the blog collection. That's expected and goes away once the first post is added.

---

## Changing Fonts

Fonts are managed using [Fontsource](https://fontsource.org).

### 1. Find a font

Browse available variable fonts on Fontsource.

### 2. Install the font

For example:

```bash
npm install @fontsource-variable/inter
```

### 3. Update the global styles

Open:

```text
src/styles/global.css
```

Update the font import and the corresponding CSS variable.

For example:

```css
@import "@fontsource-variable/inter";

--font-sans: "Inter Variable", sans-serif;
```

Both `--font-sans` and `--font-mono` currently use Inter. To use a different mono font for code, install it and point `--font-mono` at it.

---

## Changing Theme Colors

Theme colors are managed from:

```text
src/data/config.ts
```

The theme contains separate values for light and dark mode.

You can use themes from:

- [shadcn/ui Themes](https://ui.shadcn.com/themes)
- [tweakcn](https://tweakcn.com)

When copying CSS variables into the configuration, remove the `--` prefix and convert kebab-case names to camelCase.

For example:

```css
--card-foreground
```

becomes:

```ts
cardForeground;
```

---

## Showing or Hiding Sections

Homepage sections are controlled through the portfolio data/configuration.

If you want to show or hide a section, first check:

```text
src/data/resume.tsx
```

for the relevant section configuration.

The UI components consume this data, so avoid modifying the component unless you need to change how the section itself works.

---

## Changing the UI

For design or functionality changes, look inside:

```text
src/components/
src/layouts/
src/styles/
```

### Content changes

Usually edit:

```text
src/data/resume.tsx
src/data/config.ts
src/content/blog/
public/
```

### Design changes

Usually edit:

```text
src/components/
src/layouts/
src/styles/
```

Keeping content separate from presentation makes the portfolio easier to maintain.

---

## Project Structure

```text
src/
├── components/       # UI components
├── content/
│   └── blog/         # MDX blog posts
├── data/
│   ├── resume.tsx    # Personal and portfolio content
│   └── config.ts     # Site configuration
├── layouts/          # Page layouts
├── lib/              # Utilities and helpers
├── pages/            # Website routes
└── styles/           # Global styles

public/               # Images, icons and static assets
```

---

## Getting Started

### Requirements

- Node.js `>= 22.12.0`
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The site will normally be available at:

```text
http://localhost:4321
```

---

## Commands

| Command           | Action                               |
| ----------------- | ------------------------------------ |
| `npm install`     | Install dependencies                 |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Build the site for production        |
| `npm run preview` | Preview the production build locally |
| `npm run check`   | Type-check the project               |
| `npm run astro`   | Run the Astro CLI                    |

---

## Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Always run the production build before pushing major changes.

---

## Deployment

The portfolio is deployed through [Vercel](https://vercel.com).

The project is a fully static Astro site, so no adapter or server function is needed. Security headers, asset caching and trailing-slash handling are configured in `vercel.json`.

The production website is:

**[pratixmistry.xyz](https://www.pratixmistry.xyz)**

---

## Before Pushing Changes

After making changes:

```bash
npm run build
```

If the build succeeds, run:

```bash
npm run dev
```

and review the changed sections locally.

Then check:

```bash
git status
```

Make sure generated folders such as `node_modules`, `dist`, and `.astro` are ignored by Git.

---

## License

This project is based on an open-source Astro portfolio template and has been customized for personal use.

See [`LICENSE`](./LICENSE) for licensing information.
