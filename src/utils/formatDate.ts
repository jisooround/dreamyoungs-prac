export function formatDate(date: string | undefined) {
  if (date) return date.replace(/\./g, "-");
  return null;
}
