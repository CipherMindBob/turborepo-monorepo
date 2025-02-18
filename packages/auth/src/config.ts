import NextAuth from "next-auth"
import type { NextAuthConfig, Session, User } from "next-auth"
import type { JWT } from "next-auth/jwt"
import GitHub from "next-auth/providers/github"
import type { NextRequest } from "next/server"

if (!process.env.GITHUB_ID) {
  throw new Error("GITHUB_ID is required");
}

if (!process.env.GITHUB_SECRET) {
  throw new Error("GITHUB_SECRET is required");
}

export const authConfig: NextAuthConfig = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = token.sub ?? '';
      }
      return session;
    },
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    }
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  }
}

const auth = NextAuth(authConfig)

export type { Session, User, JWT }

export const handlers = {
  GET: async (req: NextRequest) => {
    // @ts-expect-error - The type of auth.auth is not yet properly exposed
    return await auth.auth(req)
  },
  POST: async (req: NextRequest) => {
    // @ts-expect-error - The type of auth.auth is not yet properly exposed
    return await auth.auth(req)
  }
}

interface SignInOptions {
  callbackUrl?: string
  redirect?: boolean
  [key: string]: any
}

interface SignOutOptions {
  callbackUrl?: string
  redirect?: boolean
}

export const {
  signIn,
  signOut,
}: {
  signIn: (provider?: string, options?: SignInOptions, authorizationParams?: Record<string, string>) => Promise<void>
  signOut: (options?: SignOutOptions) => Promise<void>
} = auth

export { auth } 