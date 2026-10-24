# Island Drive — Mauritius car rental website

A responsive Phase 1 website built with Next.js App Router, TypeScript and Tailwind CSS. The site uses demonstration branding, sample vehicle records and replaceable photo URLs. It is not connected to a rental business, WhatsApp account or Supabase project.

## Phase 1 includes

- A custom homepage with the requested “Rent Your Car in Mauritius” hero, trip search, featured sample vehicles, categories, benefits, and delivery information.
- A fleet page with category, transmission, seating and daily-price filters.
- Shared responsive navigation, vehicle cards, footer and mobile WhatsApp contact button.
- Sample data kept in `src/data/cars.ts` and business placeholders in `src/config/site.ts`.

Search sends the selected trip dates and location to the fleet page. At this stage dates are not checked against actual vehicle availability. The WhatsApp URL and copy are demonstration values; no messages are sent automatically.

## Configure sample content

1. Open `src/config/site.ts` to update the business name, WhatsApp number and email. IslandGo and +230 5978 1302 are configured. The number must contain digits only, including the country code, with no `+`, spaces or punctuation.
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

This project is structured for a Node.js host. Deployment through GitHub and Hostinger has not been configured or verified. Before deployment, connect your GitHub repository in Hostinger's Node.js web app flow, select a Node.js version supported by the account (20.9+), use `pnpm install` for build dependencies, `pnpm build` as the build command and `pnpm start` as the production start command. Add any production environment variables through Hostinger's environment-variable settings, then connect the custom domain and enable HTTPS in the Hostinger control panel. Confirm the supported Node.js versions and Next.js runtime requirements in the Hostinger plan before going live.

## Current missing business details

- Final business name and logo
- Business WhatsApp number and contact email
- Actual fleet, photos, pricing, categories and delivery/availability rules
- Supabase project credentials and authorized administrator
- GitHub repository, Hostinger app and custom domain
