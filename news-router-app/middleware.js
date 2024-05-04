import { NextResponse } from "next/server";

//reserved fileName in root project folder for middleware
export function middleware(request) {
  //forward any incoming request to the next middleware
  //This could be use to intercept and modify the request, authenticate or redirect the user

  // console.log(request);

  //or NextResponse.redirect(), etc.
  return NextResponse.next();
}

/**
 * Filter for certain matched requests. It could match a single route or multiple routes
 */
export const config = {
  matcher: "/news",
};
