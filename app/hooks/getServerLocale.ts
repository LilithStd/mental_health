import { LocaleType } from "../types/types" 

export async function getServerLocale(
  params: Promise<{ locale: LocaleType }>
): Promise<LocaleType> {
  const { locale } = await params
  return locale
}