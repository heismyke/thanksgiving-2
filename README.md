# Thanksgiving – Site 2 (Multi-product store)

Q4 calibration e-commerce site for the **Thanksgiving** event.
Site 2 of 2: a small **store with several products** for Thanksgiving shopping.

| | |
|---|---|
| **Event** | Thanksgiving |
| **Type** | Multi-product store |
| **Owner** | Person 3 |
| **Stack** | React + Vite |
| **Hosting** | Netlify (auto-deploy from `main`) |
| **Deliver by** | 6:00 AM WAT, 30 Sept 2026 |
| **Live URL** | _TBD_ |

## Concept

- **Brand name:** Maison Merci
- **Product category:** Thanksgiving table and home: linen, wood, stoneware, candles, spices, gift boxes (8 products, 4 categories)
- **Main offer:** Thanksgiving week, up to -35 %, free delivery from 30 000 FCFA, "Merci" gift box as the hero bundle
- **Target customer:** people in Benin dressing a festive table or buying a thank-you gift
- **Mood / palette:** minimal, off-white `#fafaf7`, ink `#141414`, olive `#4f5b3a`
- **Font:** DM Sans only, self-hosted
- **Language:** French
- **Images:** AI-generated, see [IMAGES.md](IMAGES.md) for the prompts and file names
- **Content:** products, prices and reviews live in `src/data/products.js`

## Pages

| Page | Purpose |
|---|---|
| **Home** | Offer banner, countdown, featured categories, best sellers, reviews |
| **Shop / Category** | Product grid with filters, sale badges, old/new prices |
| **Product** | Gallery, price, stock urgency, reviews, "Add to cart", related products |
| **Cart** | Items, upsell ("add X for free shipping"), total, checkout button |
| **Checkout** | Short form, payment logos, trust badges (demo only) |
| **Confirmation** | Order number, summary, "Confirm on WhatsApp" button |

## Conversion checklist

Graded on 10 points across the buyer journey. A beautiful site isn't enough; it has to sell.

**Attract**
- [ ] Themed hero with a clear offer
- [ ] Loads in under 3s (compressed images)
- [ ] Works on mobile

**Retain**
- [ ] Countdown timer to end of offer
- [ ] Easy navigation, categories, strong product photos

**Convince**
- [ ] Old price crossed out, new price shown
- [ ] Customer reviews + star rating on products
- [ ] Guarantee, returns, delivery, secure-payment badges
- [ ] FAQ

**Convert**
- [ ] "Add to cart" / "Buy now" always visible, sticky on mobile
- [ ] Urgency ("only X left") and bundles / upsells
- [ ] Short checkout flow, payment logos, WhatsApp/contact button

## Planned structure

```
src/
  assets/          images, icons
  components/      Header, AnnouncementBar, Countdown, ProductCard,
                   ProductGrid, Reviews, TrustBadges, CartDrawer, Footer
  pages/           Home, Shop, Product, Cart, Checkout
  data/            products.js (names, prices, images, stock, reviews)
  context/         CartContext (cart state)
  styles/          global styles, theme colours
  App.jsx          routes
  main.jsx
```

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build in dist/
```

## Deploy

Netlify → *Add new site* → *Import from GitHub* → `team-q4-calibrage/thanksgiving-2`

- Build command: `npm run build`
- Publish directory: `dist`
- Site name: random, not guessable (e.g. `tg2-xxxx.netlify.app`)
- Client-side routing: add `public/_redirects` with `/* /index.html 200`

## Rules

- Keep this repo **private**; share the live link only in the team group.
- Commit and push often (commit times prove the work is ours).
- No password on the live site: the organizers must be able to open it.
