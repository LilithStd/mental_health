import { headers } from "next/headers";

export async function getLocale() {
  return (await headers()).get("x-locale") ?? "en";
}