# Blog App

Remix-based blog application.

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

- `API_URL`: URL of the API server
- `SESSION_SECRET`: Session encryption secret (from root .env)

## Features

- Remix for server-side rendering
- Shared authentication with other apps
- Shared UI components from `@repo/ui`
- Type-safe environment variables
