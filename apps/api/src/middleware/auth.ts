import { verifyToken } from "@repo/auth"
import type { Request, Response, NextFunction } from "express"

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies['auth-token'] || req.headers.authorization?.split(' ')[1]
  
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const payload = await verifyToken(token)
  if (!payload) {
    return res.status(401).json({ error: 'Invalid token' })
  }

  req.user = payload
  next()
} 