# Včelárstvo Jozef Goňo

Webová stránka pre včelárstvo Jozef Goňo – Next.js s optimalizáciou pre SEO.

## Spustenie lokálne

**Predpoklady:** Node.js (npm)

1. Nainštaluj závislosti:
   ```bash
   npm install
   ```
2. Spusti vývojový server:
   ```bash
   npm run dev
   ```
3. Otvor [http://localhost:3000](http://localhost:3000) v prehliadači.

## Skripty

- `npm run dev` – vývojový server (port 3000)
- `npm run build` – produkčný build
- `npm run start` – spustenie produkčnej verzie
- `npm run lint` – kontrola kódu

## SEO

- Metadata (title, description, Open Graph, Twitter) v `app/layout.tsx`
- Sémantická štruktúra (sekcie, nadpisy, `aria-labelledby`)
- `app/sitemap.ts` – generovaná sitemapa
- `app/robots.ts` – pravidlá pre vyhľadávače
- JSON-LD štruktúrované dáta (LocalBusiness) v layout
- Jazyk stránky `lang="sk"`

## Premenné prostredia

- `NEXT_PUBLIC_SITE_URL` – plná URL stránky (pre metadata a sitemapu), napr. `https://vcelarstvo-gono.sk`
