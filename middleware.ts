import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // console.log('request :>> ', request);
  request.headers;
  if (request.nextUrl.pathname.startsWith('/users')) {
    return;
  }
  const response = NextResponse.next();

  response.cookies.set({
    name: 'author',
    value: 'Eng Premma',
    path: '/',
  });

  return response;
}
