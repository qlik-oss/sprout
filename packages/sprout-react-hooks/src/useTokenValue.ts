export function getTokenValue(token: string, element?: HTMLElement): string | undefined {
  const safeElement = element || document.documentElement;

  const computedStyle = window.getComputedStyle(safeElement);
  const value = computedStyle.getPropertyValue(token);

  // If the value is empty, it means the token is not set
  if (!value) return undefined;

  // Remove quotes and whitespace
  return value.replace(/['"]/g, "").trim();
}

export function getTokenInt(token: string, element?: HTMLElement): number | undefined {
  const value = getTokenValue(token, element);
  if (value === undefined) return undefined;

  // Convert the value to an integer

  const intValue = parseInt(value, 10);
  return Number.isNaN(intValue) ? undefined : intValue;
}
