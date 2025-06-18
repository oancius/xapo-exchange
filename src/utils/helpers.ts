export function getSeparators(locale: string) {
  const parts = new Intl.NumberFormat(locale).formatToParts(12345.6);
  const group = parts.find((p) => p.type === "group")?.value ?? ",";
  const decimal = parts.find((p) => p.type === "decimal")?.value ?? ".";
  return { group, decimal };
}

export function parseNumber(input: string, locale: string): number | "" {
  const { group, decimal } = getSeparators(locale);

  const normalized = input
    .replace(new RegExp(`\\${group}`, "g"), "") // remove group sep
    .replace(new RegExp(`\\${decimal}`), "."); // normalize decimal to dot

  const parsed = parseFloat(normalized);
  return isNaN(parsed) ? "" : parsed;
}

export function formatNumber(
  value: number,
  locale: string = "en-US",
  maxDecimals: number = 2,
): string {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: maxDecimals,
  }).format(value);
}
