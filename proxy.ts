import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const defaultLocale = "en";
const locales = ["en", "ru", "lv"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 🌍 1. Редирект с /
  if (pathname === "/") {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}`, request.url)
    );
  }

  // 🌍 2. Определяем locale
  const locale = pathname.split("/")[1];

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(
    "x-locale",
    locales.includes(locale) ? locale : defaultLocale
  );

  // 🔒 3. AUTH логика

  const token = request.cookies.get("token")?.value;

  // пути, где НЕ нужна авторизация
const PUBLIC_PATHS = [
  "/login",
  "/register",
];

const isPublicPage = PUBLIC_PATHS.some((path) =>
  pathname.includes(path)
);
  if (!token && !isPublicPage) {
    return NextResponse.redirect(
      new URL(`/${locale}/login`, request.url)
    );
  }

  try {
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET!);
    }
  } catch {
    return NextResponse.redirect(
      new URL(`/${locale}/login`, request.url)
    );
  }

  // 👉 если всё ок
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/", "/(en|ru|lv)/:path*"],
};