import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth"

export const authOptions: NextAuthOptions = {
  providers: [],
  // Add your auth configuration here
}

export const handlers = NextAuth(authOptions) 