import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET ?? 'eg-telemedicina-secret-fallback'
)
const COOKIE = 'eg_session'

async function getTokenPayload(req: NextRequest) {
  const token = req.cookies.get(COOKIE)?.value
  if (!token) return null
  try {
    const { payload } = await jwtVerify(token, SECRET)
    return payload as { id: string; email: string; role: string }
  } catch {
    return null
  }
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const payload = await getTokenPayload(req)

  if (pathname.startsWith('/plataforma')) {
    if (!payload || payload.role !== 'PATIENT') {
      return NextResponse.redirect(new URL('/login', req.url))
    }
  }

  if (pathname.startsWith('/admin')) {
    if (!payload) {
      return NextResponse.redirect(new URL('/login', req.url))
    }
    if (payload.role === 'PATIENT') {
      return NextResponse.redirect(new URL('/plataforma', req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/plataforma/:path*', '/admin/:path*'],
}
