/**
 * Formats text by removing extra spaces.
 */
export function formatText(text: string): string {
  return text.trim().replace(/\s+/g, " ");
}

/**
 * Capitalizes the first letter of a string.
 */
export function capitalize(text: string): string {
  if (!text) return "";

  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Formats the current date and time.
 */
export function formatTimestamp(date: Date): string {
  return date.toLocaleString();
}

/**
 * Checks whether the provided string is empty.
 */
export function isEmpty(value: string): boolean {
  return value.trim().length === 0;
}
