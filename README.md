# WizeCleaner — cleaning services website

Static, serverless Next.js site (App Router). No backend, no database, no forms — every enquiry goes to WhatsApp.

## Pages
- `/` Home: hero with squeegee wipe, services, before/after slider, process, why us, FAQ
- `/services` all services
- `/services/[slug]` 8 service detail pages (pre-rendered at build)
- `/about`, `/contact`, custom 404, `sitemap.xml`, `robots.txt`, Open Graph image

## Change business details
Edit **one file**: `src/shared/config/site.ts` — name, WhatsApp number (digits only, e.g. `923001234567`), phone, email, address, hours, areas, domain (`url`).
Service text lives in `src/features/services/data.ts`.

## Replace images
Put new photos in `public/images/` with the same file names (any size, WebP/JPG). For real before/after photos pass `beforeSrc` to `<BeforeAfter />` — until then the "before" side is a staged dusty version of the same photo.

## Run locally
```bash
pnpm install   # or npm install
pnpm dev       # http://localhost:3000
pnpm build && pnpm start
```

## Deploy on Vercel
Repo: https://github.com/ikramzafar0343/WizeCleaner

1. vercel.com → Add New Project → import `ikramzafar0343/WizeCleaner` (Framework Preset: **Next.js**, Root Directory: `.`, build: `npm run build`, output: default).
2. No environment variables required for the static site.
3. Node.js **20.x** or newer (see `engines` in `package.json`).
4. After the first deploy, set `url` in `src/shared/config/site.ts` to your live domain and redeploy (canonical URLs + sitemap use it).
5. Project → Settings → Domains → add your custom domain and follow the DNS steps.

## Font
Nourd (Hanken Design Co.) is included from the owner's licence for this site only — do not redistribute the font files.
