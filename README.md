# CutWire Studios Website

Marketing site and documentation for [cutwire.org](https://cutwire.org), built with Nuxt 4.

See [`../PLAN.md`](../PLAN.md) for architecture and phased delivery, and [`../DESIGN.md`](../DESIGN.md) for the visual system.

## Quick start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start dev server |
| `pnpm build` | Production build (prerender + Nitro) |
| `pnpm preview` | Preview production build |

## Stack

- **Nuxt 4** with `app/` directory layout
- **Tailwind CSS v4** + CutWire design tokens
- **shadcn-vue** (Reka UI) components
- **Nuxt Content v3** for docs, blog, and product data
- **@nuxtjs/seo** for sitemap, robots, OG images

## Project layout

```
app/
  components/   # UI, layout, marketing, docs, content (MDC)
  composables/
  layouts/      # default, docs, blog, legal
  pages/        # File-based routes
content/        # Markdown + YAML collections
server/         # API routes (newsletter, support, RSS)
```

## Content

Add docs under `content/docs/<product>/`, blog posts under `content/blog/`, and product metadata in `content/products/*.yml`. Navigation is driven by `.navigation.yml` files and frontmatter.

## Environment

Server routes (`/api/newsletter`, `/api/support`) log submissions until a provider is configured — see PLAN.md §13 for open decisions.
