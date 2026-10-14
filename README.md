# Coffira

Coffira is a coffee & tea e-commerce storefront built with React, Redux Toolkit, React Router, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

## Scripts

- `npm run dev` – start the dev server
- `npm run build` – production build
- `npm run preview` – preview the production build
- `npm run lint` – run ESLint

## Project structure

- `src/pages` – route-level pages (Home, Shop, Product, Cart, Checkout, Account, Auth, etc.)
- `src/components` – reusable UI grouped by domain (common, layout, product, cart, checkout, category, home)
- `src/features` – Redux slices and RTK Query API endpoints per domain
- `src/redux` – store configuration and base API
- `src/routes` – route definitions and route guards
- `src/layouts` – shared page shells (MainLayout, AuthLayout, AccountLayout)
- `src/hooks` – reusable hooks (auth, cart, wishlist, debounce)
- `src/services` – API/auth/storage helper modules
- `src/utils` – formatting and validation helpers
- `src/data` – mock data used until a real backend is wired up
- `public/images` – logo, product, category, banner, and icon SVG assets
