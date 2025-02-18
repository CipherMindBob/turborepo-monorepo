# API Server

Express-based API server.

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

- `PORT`: Server port number
- `CORS_ORIGIN`: Allowed CORS origins (comma-separated)
- `JWT_SECRET`: JWT signing secret (from root .env)

## Features

- Express server with TypeScript
- JWT authentication
- CORS configuration
- Shared types with frontend apps 