import { NextResponse } from 'next/server';

export function middleware(request) {
  // Log route 
  console.log(`Route: ${request.nextUrl.pathname}`);

  // Continue to the next middleware or route
  return NextResponse.next();
}


export const config = {
    matcher: [
      '/((?!_next/static|_next/image|favicon.ico).*)', // Exclude static assets
    ],
  };
  