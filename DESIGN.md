# DESIGN.md — Hongbo Costumes B2B Site

Visual design contract (main-flow fallback: standardized B2B lead-gen build; no `canvas-designer` SubAgent used — requirements fully specified by user, references inspected directly by main Agent).

- Audience: B2B buyers — retailers, Amazon/eBay sellers, party-store chains, event & rental companies, cosplay boutiques (US/EU/Global).
- Visual direction: **Bold high-impact vibrant** (user-selected). Poster-grade typography, high-saturation clashing accents (electric violet / hot pink / neon lime / tangerine), carnival-fun energy, still clearly professional for wholesale buyers.
- Reference sources (structure/pattern inspiration only, never copied): Miccostumes (hero → product rails by theme; mega categories), Funidelia (bold value-prop statements, "Hall of Fame" bestseller grid), Smiffys (campaign hero, themed collection tiles), FancyDress.com (trust strips, category tiles, SEO copy band). Homepage layout uses the shared costume-ecommerce skeleton adapted to B2B: hero → ticker → category tiles → bestseller rail → brand proof → process → OEM CTA.
- Do-not-copy: those retailers' copy, logos, licensed character names as brand claims. Product copy originates from the owner's own Alibaba listings (ouwanni.en.alibaba.com).

## Color tokens (CSS variables)
- `--ink` `#170B26` deep plum-black (primary text & dark sections)
- `--cream` `#FFF6E9` warm paper background
- `--white` `#FFFFFF`
- `--violet` `#7C3AED`, `--violet-deep` `#4C1D95`
- `--pink` `#FF2E88`
- `--lime` `#C8F04B`
- `--orange` `#FF7A1A`
- `--sky` `#4CC9F0`
- `--wa` `#1FAF53` (WhatsApp green)
- Functional: `--line` ink 2px borders; offset hard shadows `8px 8px 0` in pink/lime/ink.

## Typography
- Display: `"Archivo Black"` (self-hosted woff2, latin) → fallback stack. Uppercase, tight leading, clamp sizes up to ~5.5rem for H1. Used for hero, section headings, big numerals, marquee.
- Body/UI: system stack `system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` (per frontend policy), 600/700 weights for labels, 400 for copy.
- No external font/CDN references anywhere.

## Core components
- Top mini-bar (ink): email + WhatsApp + "Factory direct" claims.
- Sticky header: wordmark chip "HONG BO" on lime; nav (Home / Products w/ category flyout / Inquiry); CTA pill "Get a Quote"; mobile slide-down panel.
- Ticker marquee (lime bg, ink text, infinite scroll, pause on hover/reduced-motion).
- Hero (ink): oversized headline w/ rotated sticker badges; product polaroid collage (3 store images, alternating rotation, thick borders); CTAs: primary pink "Get Wholesale Quote" → /inquiry; secondary lime "Chat on WhatsApp" (wa.me).
- Category tiles: 6 loud cards, per-category accent color frame, image, label, count, hover skew/arrow.
- Product card: white card, ink border 2px, offset shadow (pink/lime alternating), image 3:4, category chip, 2-line title, price "From $X.XX/pc", actions: detail link + inquiry link prefilled (`/inquiry?product=id`).
- Stats/trust band: numbers in Archivo Black with accent chips (4.7/5, ≤4h, 91%, 25% + 7+ yrs, 41 staff…).
- Section headers: small sticker label ("WHY HONG BO") + Archivo Black H2 + lime underline slash.
- CTA band (gradient violet→pink or ink): big text + WA + quote buttons.
- WhatsApp float: fixed bottom-right green pill w/ icon, ink border, hover expand "Chat with us".
- Footer (ink): wordmark, category links, contact, legal line incl. manufacturing entity + honesty note on prices.

## Pages (React Router)
1. `/` Home — sections above.
2. `/products` — filter chips (All + 6 categories via `?cat=`), count, grid; note card linking to full 2000+ SKU Alibaba store.
3. `/products/:id` — breadcrumb, single big image, category chip, H1 name, blurb, price range, real-facts bullets (7-day samples, OEM/ODM, QC, FBA), Get-Quote (prefill) + WhatsApp buttons, spec box incl. original listing link, related products (same category).
4. `/inquiry` — form: Name, Company, Email, WhatsApp, Product type (select incl. Custom OEM/ODM), Estimated quantity, Message + optional product prefill from query; POST to formsubmit.co (owner email Zoe@hoburn.group, activation on first submit); success state w/ WhatsApp fallback; aside: WhatsApp card, email card, steps.
5. `*` 404.

## Responsive & motion
- Mobile-first breakpoints 720/1024/1280; grid collapses to 2→1 col; polaroid collage stacks; hamburger nav; no horizontal overflow (verify at 375px).
- Motion: marquee ticker, fade-up on load, hover lift; all gated by `prefers-reduced-motion`.

## Content integrity
- All product titles, images (sc04.alicdn.com), price ranges and company stats come from the owner's Alibaba storefront. Prices labeled as reference wholesale ranges. No fabricated materials/specs.
