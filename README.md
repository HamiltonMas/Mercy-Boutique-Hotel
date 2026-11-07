# Mercy Boutique Hotel — Royal Luxury

A multi-page React + Vite website using the hotel's supplied photography. The visual direction is Royal Luxury: charcoal, champagne gold and ivory, editorial typography, cinematic image transitions and rounded geometry.

## Pages and source structure

Each top-level page has its own JSX module under `src/pages/`:

- `Home.jsx` — cinematic home page and booking search
- `Hotel.jsx` — hotel story and facilities
- `Rooms.jsx` and `RoomDetail.jsx` — room collection and individual room pages
- `Experiences.jsx` — pool and hotel experiences
- `Dining.jsx` — dining information and enquiry
- `Events.jsx` — celebrations and business event enquiries
- `Discover.jsx` — Thohoyandou / Limpopo visitor guide and map
- `Offers.jsx` — stay ideas and special-offer enquiries
- `Gallery.jsx` — category filters and image lightbox
- `Tour.jsx` — interactive photographic tour
- `Book.jsx` — date, guest and room selection routed to Booking.com
- `Contact.jsx` — WhatsApp enquiry form and map
- `Dashboard.jsx` — hotel operations dashboard concept

Shared navigation, footer, booking controls and page elements are in `src/components/Site.jsx`. Hotel content and photo references are in `src/data.js`.

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Before launch — integrations and verification

The website is a polished front-end foundation. The following require hotel-owned accounts, credentials, verified information or a backend and are intentionally not simulated as live features:

1. **Live inventory / PMS:** connect a property-management or channel-management system to synchronise availability, prices, restrictions and reservations.
2. **Payments and deposits:** integrate a compliant payment provider and server-side booking workflow. Do not collect card details in this static front end.
3. **Staff dashboard:** `/manage` is a non-production concept page. Add authentication, role-based permissions, audit logs and a secure API before using it for real guest or booking data.
4. **Analytics and conversion tracking:** add the hotel's approved Google Analytics / Tag Manager property ID and consent configuration.
5. **Direct WhatsApp:** replace generic `wa.me` links with the hotel's confirmed international-format WhatsApp number.
6. **Contact details:** add verified hotel telephone and email addresses; none have been invented.
7. **Offers, event capacity and dining:** confirm current packages, prices, restaurant menu, service hours, dietary options and venue capabilities with hotel management before publishing specific claims.
8. **360° virtual tour:** the current tour is interactive photography, not a 360° panorama. Supply panoramic photos or a hosted tour provider to enable a true 360° experience.
9. **Guest reviews:** links point to the Booking.com listing. No fabricated testimonials or ratings are displayed.
10. **Map pin and address:** verify the exact property pin and address with the hotel before launch.
11. **SEO:** update canonical domain, social preview image, sitemap and Google Business Profile details after the production domain is known.

The booking form forwards selected dates, adults and rooms to Booking.com; it does not claim to hold inventory or guarantee a rate on this website.

## Photography

The `public/hotel/` directory contains the actual hotel images supplied for this project. Dining pages deliberately avoid fake food/restaurant imagery because the supplied archive did not contain restaurant photographs.


## Environment configuration

Copy `.env.example` to `.env` and set `VITE_HOTEL_WHATSAPP` to the hotel's verified WhatsApp number in international format (digits only, e.g. `27...`). Do not publish a placeholder number. Without this value, WhatsApp links open with the prepared message but no recipient prefilled.

The `/manage` prototype route is intentionally not exposed in the public app. It is not an authenticated management system; production staff access must be implemented with server-side authentication, authorization and a hotel PMS/backend before the route is restored.


## Spa page
A dedicated `/spa` page has been added with the spa service menu, supplied price list poster, and a generated spa hero image. Confirm appointment availability and the hotel's WhatsApp contact details before publishing.
