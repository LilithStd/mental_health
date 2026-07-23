export function getLocaleFromParams(
  params: { locale?: string }
): string {
  return params.locale ?? "en";
}