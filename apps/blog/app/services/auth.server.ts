import { verifyToken } from "@repo/auth"
import { createCookieSessionStorage } from "@remix-run/node"

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "auth-session",
    secure: process.env.NODE_ENV === "production",
    secrets: [process.env.SESSION_SECRET],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
})

export async function requireAuth(request: Request) {
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  )
  
  const token = session.get("token")
  if (!token) {
    throw new Response("Unauthorized", { status: 401 })
  }
  
  const payload = await verifyToken(token)
  if (!payload) {
    throw new Response("Invalid token", { status: 401 })
  }
  
  return payload
} 