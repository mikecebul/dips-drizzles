# Dips and Drizzles CHX

Website and CMS for Dips and Drizzles CHX, built with Payload CMS, Next.js, and Tailwind CSS.

## Overview

Dips and Drizzles CHX is a small business website with a Payload-powered admin area for managing marketing content, media, forms, redirects, and SEO metadata.

## Tech Stack

- **Framework**: Next.js 16 with React 19
- **CMS**: Payload CMS 3
- **Database**: MongoDB
- **Styling**: Tailwind CSS 4 and shadcn/ui
- **Email**: React Email with Resend/Nodemailer support
- **Storage**: Local uploads in development, S3-compatible storage in production

## Getting Started

### Installation

```bash
pnpm install
```

### Environment Setup

Copy `.env.example` to `.env` and configure the required values.

Required:

- `DATABASE_URI`: MongoDB connection string

Optional, depending on enabled features:

- `S3_ENABLED`
- `S3_ACCESS_KEY_ID`
- `S3_SECRET_ACCESS_KEY`
- `S3_REGION`
- `S3_ENDPOINT`
- `S3_BUCKET`
- `NEXT_PUBLIC_S3_HOSTNAME`
- `NEXT_PUBLIC_UPLOAD_PREFIX`
- `GOOGLE_MAPS_API_KEY`
- `RESEND_API_KEY`
- `RESEND_DEFAULT_EMAIL`

### Development

```bash
pnpm run dev
```

Open `http://localhost:3000` to view the site.

Payload admin and API routes live under `src/app/(payload)/`.

## Scripts

- `pnpm run dev`: Start the local development server
- `pnpm run build`: Run Payload migrations and build the app
- `pnpm run start`: Start the production server
- `pnpm run lint`: Run ESLint
- `pnpm run typecheck`: Run TypeScript checks
- `pnpm run generate:types`: Generate Payload types
- `pnpm run generate:importmap`: Generate Payload import map
- `pnpm run email:dev`: Start the React Email preview server

## Project Structure

- `src/app/(frontend)/`: Public website routes, layout, and theme
- `src/app/(payload)/`: Payload admin/API routes and admin styles
- `src/collections/`: Payload collections
- `src/globals/`: Payload globals
- `src/blocks/`: CMS content blocks
- `src/forms/`: Form runtime logic
- `src/components/`: Shared UI and marketing components

## Content Management

Use the Payload admin panel to manage pages, media, navigation, forms, redirects, and SEO content. After changing Payload schemas or config, run:

```bash
pnpm run generate:types
pnpm run generate:importmap
```

## Deployment

Production deployments require MongoDB and the relevant environment variables for any enabled integrations. The build process runs migrations before building, so database connectivity must be available during deployment.
