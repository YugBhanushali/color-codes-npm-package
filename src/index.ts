import { isValidHSLAColor, isValidHexCode, parseRGBA } from "./validator";

export const rgbaToHex = (colour: string) => {
  const tempRGBA = parseRGBA(colour);

  if (tempRGBA !== null) {
    if (colour.slice(0, 4) === "rgba") {
      const rgba = colour.replace("rgba(", "").replace(")", "").split(",");
      const red = parseInt(rgba[0]);
      const green = parseInt(rgba[1]);
      const blue = parseInt(rgba[2]);
      const alpha = parseFloat(rgba[3]);

      if (
        red >= 0 &&
        red <= 255 &&
        green >= 0 &&
        green <= 255 &&
        blue >= 0 &&
        blue <= 255 &&
        alpha >= 0 &&
        alpha <= 1
      ) {
        const hex = (r: number, g: number, b: number): string => {
          return (
            "#" +
            [r, g, b]
              .map((x) => {
                const hex = x.toString(16);
                return hex.length === 1 ? "0" + hex : hex;
              })
              .join("")
          );
        };

        if (alpha > 0 && alpha < 1) {
          return (
            hex(Number(red), Number(green), Number(blue)) +
            Math.round(alpha * 255).toString(16)
          );
        } else if (alpha === 0) {
          return hex(Number(red), Number(green), Number(blue)) + "00";
        } else {
          return hex(Number(red), Number(green), Number(blue));
        }
      } else {
        return {
          type: "invalid",
        };
      }
    }
  } else {
    return {
      type: "invalid",
    };
  }
};

export const rgbaToHsla = (colour: string) => {
  const tempRGBA = parseRGBA(colour);

  if (tempRGBA !== null) {
    if (colour.slice(0, 4) === "rgba") {
      const rgba = colour.replace("rgba(", "").replace(")", "").split(",");
      const red = parseInt(rgba[0]);
      const green = parseInt(rgba[1]);
      const blue = parseInt(rgba[2]);
      const alpha = parseFloat(rgba[3]);

      if (
        red >= 0 &&
        red <= 255 &&
        green >= 0 &&
        green <= 255 &&
        blue >= 0 &&
        blue <= 255 &&
        alpha >= 0 &&
        alpha <= 1
      ) {
        const r = red / 255;
        const g = green / 255;
        const b = blue / 255;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let l = (max + min) / 2;
        const d = max - min;
        let h: number = 0;
        let s: number = 0;
        if (d === 0) {
          h = s = 0; // achromatic
        } else {
          s = d / (1 - Math.abs(2 * l - 1));
          switch (max) {
            case r:
              h = ((g - b) / d + 6) % 6;
              break;
            case g:
              h = (b - r) / d + 2;
              break;
            case b:
              h = (r - g) / d + 4;
              break;
          }
          h /= 6;

          h = Math.round(h * 360);
          s = Math.round(s * 100);
          l = Math.round(l * 100);
        }
        return {
          hue: h,
          saturation: s,
          lightness: l,
          alpha: alpha,
          hslString: `hsla(${h},${s},${l},${alpha})`,
        };
      } else {
        return {
          type: "invalid",
        };
      }
    }
  } else {
    return {
      type: "invalid",
    };
  }
};

export const hexToRgba = (hexColor: string) => {
  //valid hex number length is 3, 4, 6, 8
  var hex = hexColor.replace("#", "");

  var hexLength = hex.length;

  // Check if the hex code is of length 3 or 4
  if (hexLength === 3 || hexLength === 4) {
    // Expand the short hex code to 6 or 8 digits
    var expandedHex = "";
    for (var i = 0; i < hexLength; i++) {
      expandedHex += hex.charAt(i) + hex.charAt(i);
    }
    hex = expandedHex;
    hexLength = hex.length;
  }

  if (hexLength === 6 || hexLength === 8) {
    if (isValidHexCode("#" + hex)) {
      var red = parseInt(hex.substring(0, 2), 16);
      var green = parseInt(hex.substring(2, 4), 16);
      var blue = parseInt(hex.substring(4, 6), 16);

      // Check if the hex code is of length 8 and extract the alpha component
      var alpha = hexLength === 8 ? parseInt(hex.substring(6, 8), 16) / 255 : 1;

      if (
        isNaN(red) ||
        isNaN(green) ||
        isNaN(blue) ||
        isNaN(alpha)
      ) {
        return {
          type: "invalid",
        };
      }

      // Return the RGBA values as an object
      return {
        red: red,
        green: green,
        blue: blue,
        alpha: parseFloat(alpha.toFixed(2)),
        rgbaString: `rgba(${red},${green},${blue},${parseFloat(
          alpha.toFixed(2)
        )})`,
      };
    } else {
      return {
        type: "invalid",
      };
    }
  } else {
    return {
      type: "invalid",
    };
  }
  // Split the hex code into red, green, blue, and alpha components
};

export const hslaToRgba = (hsla: string) => {
  if (hsla.slice(0, 4) === "hsla") {
    if (isValidHSLAColor(hsla)) {
      const values:any = hsla.match(/\d+(\.\d+)?/g);

      const hue = parseInt(values[0]);
      const saturation = parseInt(values[1]);
      const lightness = parseInt(values[2]);
      const alpha = parseFloat(values[3]);

      if (
        isNaN(hue) ||
        isNaN(saturation) ||
        isNaN(lightness) ||
        isNaN(alpha)
      ) {
        return {
          type: "invalid",
        };
      }

      // Convert HSLA to RGBA
      const h = hue / 360;
      const s = saturation / 100;
      const l = lightness / 100;

      let red: number, green: number, blue: number;

      if (s === 0) {
        red = green = blue = l;
      } else {
        const hueToRgb = (p: number, q: number, t: number): number => {
          if (t < 0) t += 1;
          if (t > 1) t -= 1;
          if (t < 1 / 6) return p + (q - p) * 6 * t;
          if (t < 1 / 2) return q;
          if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
          return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;

        red = Math.round(hueToRgb(p, q, h + 1 / 3) * 255);
        green = Math.round(hueToRgb(p, q, h) * 255);
        blue = Math.round(hueToRgb(p, q, h - 1 / 3) * 255);
      }

      if (
        alpha >= 0 &&
        alpha <= 1 &&
        red >= 0 &&
        red <= 255 &&
        green >= 0 &&
        green <= 255 &&
        blue >= 0 &&
        blue <= 255
      ) {
        return {
          red: red,
          green: green,
          blue: blue,
          alpha: alpha,
          rgbaString: `rgba(${red},${green},${blue},${alpha})`,
        };
      } else {
        return {
          type: "invalid",
        };
      }
    } else {
      return {
        type: "invalid",
      };
    }
  } else {
    return {
      type: "invalid",
    };
  }
};

export const hexToHsla = (hexColor: string) => {
  const test = hexToRgba(hexColor);
  if (test.type === "invalid") {
    return {
      type: "invalid",
    };
  } else {
    const tempHSLA:any = rgbaToHsla(
      `rgba(${test.red},${test.green},${test.blue},${test.alpha})`
    );
    if (tempHSLA.type === "invalid") {
      return {
        type: "invalid",
      };
    } else {
      return tempHSLA;
    }
  }
};

export const hslaToHex = (hsla: string) => {
  const test = hslaToRgba(hsla);
  if (test.type === "invalid") {
    return {
      type: "invalid",
    };
  } else {
    const tempHex:any = rgbaToHex(`${test?.rgbaString}`);
    if (tempHex?.type === "invalid") {
      return {
        type: "invalid",
      };
    } else if (tempHex?.type === undefined) {
      return tempHex;
    }
  }
};


