import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { APP_PATH_ROUTER } from "./app/globalConsts/globalEnum";

const defaultLocale = "en";
const locales = ["en", "ru", "lv"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/api")) {
  return NextResponse.next();
}
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
  APP_PATH_ROUTER.MAIN,
  APP_PATH_ROUTER.TESTS,
  APP_PATH_ROUTER.NEWS,
  APP_PATH_ROUTER.ARTICLES,
  APP_PATH_ROUTER.CONSULTATION,
  APP_PATH_ROUTER.FAQ,
  APP_PATH_ROUTER.PRICING,
  APP_PATH_ROUTER.AUTHORIZATION
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