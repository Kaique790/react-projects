import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const authenticate = false;

  if (req.nextUrl.pathname.startsWith("/dashboard") && !authenticate) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}
