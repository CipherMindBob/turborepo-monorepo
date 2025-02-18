# Storefront App

Next.js-based storefront application.

## Setup

1. Copy the environment variables:
```bash
cp .env.example .env
```

2. Update the `.env` file with your values.

3. Install dependencies from the root directory:
```bash
pnpm install
```

4. Start the development server:
```bash
pnpm dev
```

## Environment Variables

- `NEXT_PUBLIC_API_URL`: URL of the API server
- `GITHUB_ID`: GitHub OAuth App client ID (from root .env)
- `GITHUB_SECRET`: GitHub OAuth App client secret (from root .env)
- `JWT_SECRET`: JWT signing secret (from root .env)
- `SESSION_SECRET`: Session encryption secret (from root .env)

## Features

- Next.js 14 with App Router
- NextAuth.js for authentication
- Shared UI components from `@repo/ui`
- Type-safe environment variables 