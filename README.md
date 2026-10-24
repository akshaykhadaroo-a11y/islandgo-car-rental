# Island Drive — Mauritius car rental website

A responsive Phase 1 website for IslandGo, built with Next.js App Router, TypeScript and Tailwind CSS. The IslandGo name and WhatsApp number are configured. Vehicle records, prices and photos remain demonstration content. The site is not connected to Supabase or a Hostinger deployment.

## Phase 1 includes

- A custom homepage with the requested “Rent Your Car in Mauritius” hero, trip search, featured sample vehicles, categories, benefits, and delivery information.
- A fleet page with category, transmission, seating and daily-price filters.
- Shared responsive navigation, vehicle cards, footer and mobile WhatsApp contact button.
- Sample vehicle data kept in `src/data/cars.ts`; business settings are in `src/config/site.ts`.

Search sends the selected trip dates and location to the fleet page. At this stage dates are not checked against actual vehicle availability. WhatsApp links use IslandGo's configured number, open WhatsApp with a pre-filled message, and never send a message automatically.

## Configure sample content

1. Open `src/config/site.ts` to update the business name, WhatsApp number and email. IslandGo and +230 5978 1302 are configured. The WhatsApp number setting must contain digits only, including the country code, with no `+`, spaces or punctuation.
2. Open `src/data/cars.ts` to update sample names, prices, specifications and image URLs. Each `image` property can later be replaced with a path from your own photo library or Supabase Storage.
3. The Unsplash images are temporary demonstration photography. Replace them before publishing as business fleet photos.

## Run locally

Requirements: Node.js 20.9 or newer and pnpm (or npm).

```sh
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Production build

```sh
pnpm build
pnpm start
```

`start` runs the Next.js production server and binds to `0.0.0.0`, as required by managed Node.js hosts.

## Environment and services

`.env.example` is a placeholder for later Supabase setup. Phase 1 has no database, authentication, admin dashboard, online payments or real availability data. Supabase schema, RLS policies and secure administrator provisioning are planned for Phase 3. WhatsApp-first vehicle enquiry forms and detail pages are planned for Phase 2.

## Deployment

The source repository is https://github.com/akshaykhadaroo-a11y/islandgo-car-rental. Hostinger deployment is not configured or verified. For a Node.js deployment, select a supported Node.js version (20.9+), use `pnpm install`, `pnpm build` and `pnpm start`, add production environment variables in Hostinger, and connect the domain in its control panel.

## Current missing business details

- Final logo and contact email
- Actual fleet, photos, pricing, categories and delivery/availability rules
- Supabase project credentials and authorized administrator
- GitHub repository, Hostinger app and custom domain
