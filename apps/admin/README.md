# Admin App

Vite-based admin dashboard application.

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

- `VITE_API_URL`: URL of the API server
- `VITE_AUTH_URL`: URL of the authentication endpoint

## Features

- Vite for fast development
- Shared authentication with other apps
- Shared UI components from `@repo/ui`
- Type-safe environment variables 