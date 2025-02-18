# Turborepo kitchen sink starter (Updated Version)

This is an updated version of the Turborepo kitchen sink starter. You can find the original version maintained by the Turborepo core team at [kitchen-sink](https://github.com/vercel/turbo/tree/main/examples/kitchen-sink).

This example also shows how to use [Workspace Configurations](https://turbo.build/repo/docs/core-concepts/monorepos/configuring-workspaces).

## Using this example

Run the following command:

```sh
npx create-turbo@latest -e kitchen-sink
```

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

#### Apps
- `admin`: a [Vite](https://vitejs.dev/) single page app (http://localhost:3001)
- `blog`: a [Remix](https://remix.run/) blog (http://localhost:3002)
- `storefront`: a [Next.js](https://nextjs.org/) app (http://localhost:3003)
- `api`: an [Express](https://expressjs.com/) server (http://localhost:3004)

#### Packages
- `@repo/eslint-config`: ESLint configurations used throughout the monorepo
- `@repo/jest-presets`: Jest configurations
- `@repo/logger`: isomorphic logger (a small wrapper around console.log)
- `@repo/ui`: a dummy React UI library (which contains `<CounterButton>` and `<Link>` components)
- `@repo/typescript-config`: tsconfig.json's used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Development

To start all apps:
```sh
pnpm dev
```

To start a specific app:
```sh
pnpm --filter <app_name> dev
```

For example:
```sh
pnpm --filter admin dev
pnpm --filter blog dev
pnpm --filter storefront dev
pnpm --filter api dev
```

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting

### Notes
- The UI components from `@repo/ui` can be imported directly:
  ```typescript
  import { CounterButton } from "@repo/ui/counter-button";
  import { Link } from "@repo/ui/link";
  ```

## Environment Setup

1. Copy the root `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Update the `.env` file with your values:
- `GITHUB_ID`: GitHub OAuth App client ID
- `GITHUB_SECRET`: GitHub OAuth App client secret
- `JWT_SECRET`: Random string (min 32 chars) for JWT signing
- `SESSION_SECRET`: Random string (min 32 chars) for session encryption

3. For local development, you may also need to set up app-specific `.env` files in:
- `apps/storefront/.env`
- `apps/admin/.env`
- `apps/blog/.env`
- `apps/api/.env`

## Detailed Documentation

Each app has its own README with specific setup instructions and environment variables:

- [Storefront App](apps/storefront/README.md)
- [Admin Dashboard](apps/admin/README.md)
- [Blog](apps/blog/README.md)
- [API Server](apps/api/README.md)

### Known Issues

- Some subdependencies have deprecation warnings:
  - `abab@2.0.6`
  - `domexception@4.0.0`
  - `glob@7.2.3`
  - `inflight@1.0.6`

These are deep dependencies and don't affect functionality. They will be updated when their parent packages release new versions.
