import { NextRequest, NextResponse } from "next/server";

const defaultLocale = "en";
const locales = ["en", "ru", "lv"];

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // редирект с /
  if (pathname === "/") {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}`, request.url)
    );
  }

  // определяем locale из URL
  const locale = pathname.split("/")[1];

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(
    "x-locale",
    locales.includes(locale) ? locale : defaultLocale
  );

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    "/",
    "/(en|ru|lv)/:path*",
  ],
};