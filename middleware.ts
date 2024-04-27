// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// export function middleware(request: NextRequest) {
//   request.headers;
//   if (request.nextUrl.pathname.startsWith('/users')) {
//     return;
//   }
//   const response = NextResponse.next();

//   response.cookies.set({
//     name: 'author',
//     value: 'Eng Premma',
//     path: '/',
//   });

//   return response;
// }

// const isProtectedRoute = createRouteMatcher(['/posts(.*)', '/forum(.*)']);

export default clerkMiddleware((auth, req) => {
  // if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
