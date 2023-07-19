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

  if(pattern.test(color)){
    const matches = pattern.exec(color);
    if(matches){
      const hue = parseInt(matches[1]);
      const saturation = parseInt(matches[2]);
      const lightness = parseInt(matches[3]);
      const alpha = parseFloat(matches[4]);

      if (
        isNaN(hue) ||
        isNaN(saturation) ||
        isNaN(lightness) ||
        isNaN(alpha)
      ) {
        return {
          isValid: false,
        };
      }
      
      if(hue >= 0 && hue <= 360 && saturation >= 0 && saturation <= 100 && lightness >= 0 && lightness <= 100 && alpha >= 0 && alpha <= 1){
        return {
          isValid: true,
          hue,
          saturation,
          lightness,
          alpha
        }
      }
      else{
        return {
          isValid: false,
        };
      }
    }
  }
  else{
    return {
      isValid: false,
    };
  }
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

    if (
      r >= 0 &&
      r <= 255 &&
      g >= 0 &&
      g <= 255 &&
      b >= 0 &&
      b <= 255 &&
      a >= 0 &&
      a <= 1
    ) {
        return { r, g, b, a };
    }
    else{
      return null;
    }
  }

  return null;
}

export const parseRGB = (colour: string): { r: number; g: number; b: number } | null => {
  const regex = /^rgb\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3})\)$/i;
  const match = colour.match(regex);

  if (match) {
    const r = parseInt(match[1]);
    const g = parseInt(match[2]);
    const b = parseInt(match[3]);

    if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
      return { r, g, b };
    }
  }

  return null;
};

export function isValidHSLColor(color: string) {
  const pattern = /^hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/;

  if (pattern.test(color)) {
    const matches = pattern.exec(color);
    if (matches) {
      const hue = parseInt(matches[1]);
      const saturation = parseInt(matches[2]);
      const lightness = parseInt(matches[3]);

      if (
        isNaN(hue) ||
        isNaN(saturation) ||
        isNaN(lightness) ||
        hue < 0 ||
        hue > 360 ||
        saturation < 0 ||
        saturation > 100 ||
        lightness < 0 ||
        lightness > 100
      ) {
        return {
          isValid: false,
        }
      }

      return {
        isValid: true,
        hue,
        saturation,
        lightness,
      };
    }
  }

  return {
    isValid: false,
  };
}
