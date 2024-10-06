import { NextResponse } from "next/server";

export function middleware(request: Request) {
  // global middlware applied here

  return NextResponse.next();
}
