import type { DefaultSession } from "next-auth"
import type { JWTPayload as JoseJWTPayload } from 'jose'

export interface JWTPayload extends JoseJWTPayload {
  sub: string
  email?: string
  name?: string
  [key: string]: unknown
}

declare module "next-auth" {
  interface Session {
    user: {
      id: string
    } & DefaultSession["user"]
  }
} 