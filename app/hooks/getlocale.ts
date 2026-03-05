import { headers } from "next/headers";

export async function getLocale(): Promise<string> {
  const headersList = headers();

  const pathname =
    (await headersList).get("x-pathname") ||
    (await headersList).get("next-url");

  if (!pathname) return "en";

  return pathname.split("/")[1] || "en";
}