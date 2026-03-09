export function getLocaleFromParams(
  params: { locale?: string }
): string {
    console.log('getLocaleFromParams called with params:', params);
  return params.locale ?? "en";
}