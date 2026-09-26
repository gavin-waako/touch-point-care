# TouchPoint Care

TouchPoint Care is a marketing landing page for an electronic health record (EHR) platform concept designed for senior living communities. The page introduces the product and its focus on resident information, wellness coordination, and reporting for care teams.

## Landing Page

The homepage includes:

- Product introduction and demo calls to action
- Senior-living EHR messaging and platform highlights
- Resident wellness coordination and reporting content
- Responsive layouts for desktop and mobile

This project currently provides the marketing page only. Demo calls to action use email links; there is no connected lead form or EHR application backend.

## Run Locally

Requirements: Node.js and pnpm.

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the page.

## Project Commands

```bash
pnpm dev      # Start the development server
pnpm lint     # Run ESLint
pnpm build    # Create a production build
pnpm start    # Serve the production build
```

## Main Files

- `app/page.tsx` contains the landing page content and sections.
- `app/globals.css` contains the global styles, color palette, and responsive page styling.
- `app/layout.tsx` contains the shared document layout and page metadata.

The site is built with Next.js, React, TypeScript, and Tailwind CSS.
