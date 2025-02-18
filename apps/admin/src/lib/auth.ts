import { createToken, verifyToken } from "@repo/auth"

export async function checkAuth() {
  const token = localStorage.getItem('auth-token')
  if (!token) return null
  
  return await verifyToken(token)
}

export async function handleLogin(credentials: { email: string; password: string }) {
  // Authenticate against your API
  const response = await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify(credentials)
  })
  
  if (response.ok) {
    const { token } = await response.json()
    localStorage.setItem('auth-token', token)
  }
} 