import { NextRequest, NextResponse } from "next/server";

const defaultLocale = "en";
const locales = ["en", "ru", "lv"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;


  if (pathname === "/") {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     Только для root и locale маршрутов
     */
    "/",
    "/(en|ru|lv)/:path*",
  ],
};