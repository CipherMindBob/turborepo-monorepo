import { createEnv } from "@t3-oss/env-core"
import { z } from "zod"

export const env = createEnv({
  server: {
    GITHUB_ID: z.string().min(1),
    GITHUB_SECRET: z.string().min(1),
    JWT_SECRET: z.string().min(32),
    SESSION_SECRET: z.string().min(32),
  },
  runtimeEnv: process.env,
}) 