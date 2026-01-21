// middleware.ts
// import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// export function middleware(req: NextRequest) {
//   const token = req.cookies.get('accessToken');

//   if (!token && req.nextUrl.pathname.startsWith('/dashboard')) {
//     return NextResponse.redirect(new URL('/login', req.url));
//   }
// }
export function middleware(req: NextRequest) {
  console.log('MIDDLEWARE:', req.nextUrl.pathname)
}