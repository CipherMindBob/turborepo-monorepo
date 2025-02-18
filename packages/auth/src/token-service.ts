import { SignJWT, jwtVerify } from 'jose'
import { type JWTPayload } from './types'

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is required");
}

const secret = new TextEncoder().encode(process.env.JWT_SECRET)

export async function createToken(payload: JWTPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('1h')
    .sign(secret)
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret)
    return payload as JWTPayload
  } catch {
    return null
  }
} 