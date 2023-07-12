export function isValidHexCode(hexCode:string) {
  const hexRegex =
    /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{4}|[A-Fa-f0-9]{8}|[A-Fa-f0-9]{3})$/;

  return hexRegex.test(hexCode);
}

export function isValidHSLAColor(color:string) {
  // Regular expression pattern for validating HSLA color
  const pattern =
    /^hsla\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%,\s*((0(\.\d+)?)|1(\.0+)?)\)$/;

  // Test the color against the pattern
  return pattern.test(color);
}

export function parseRGBA(color : string) {
  const rgbaRegex =
    /^rgba\(\s*(\d+),\s*(\d+),\s*(\d+),\s*([01](?:\.\d+)?)\s*\)$/i;

  const matches = rgbaRegex.exec(color);
  if (matches) {
    const r = parseInt(matches[1]);
    const g = parseInt(matches[2]);
    const b = parseInt(matches[3]);
    const a = parseFloat(matches[4]);

    return { r, g, b, a };
  }

  return null;
}

