import { isValidHSLAColor, isValidHexCode, parseRGBA, parseRGB ,isValidHSLColor } from "./validator";

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
          type: "hsla",
          hue: h,
          saturation: s,
          lightness: l,
          alpha: alpha,
          hslaString: `hsla(${h}, ${s}%, ${l}%, ${alpha})`,
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
        type: "rgba",
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
    if (isValidHSLAColor(hsla)?.isValid) {
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
          type: "rgba",
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

export const rgbaToRgb = (colour: string) => {
  const tempRGBA = parseRGBA(colour);

  if (tempRGBA !== null) {
    return{
      type:"rgb",
      red:tempRGBA.r,
      green:tempRGBA.g,
      blue:tempRGBA.b,
      rgbString:`rgb(${tempRGBA.r},${tempRGBA.g},${tempRGBA.b})`
    }
  }

  return {
    type:"invalid"
  };
};

export const rgbToRgba = (colour: string) => {
  const tempRGB = parseRGB(colour);

  if (tempRGB !== null) {
    return{
      type:"rgba",
      red:tempRGB.r,
      green:tempRGB.g,
      blue:tempRGB.b,
      alpha:1,
      rgbaString:`rgba(${tempRGB.r},${tempRGB.g},${tempRGB.b},1)`
    }
  }

  return {
    type:"invalid"
  };
}

export const hslaToHsl = (colour: string) => {
  const tempHSLA = isValidHSLAColor(colour);

  if (tempHSLA?.isValid) {
    return {
      type:"hsl",
      hue:tempHSLA?.hue,
      saturation:tempHSLA?.saturation,
      lightness:tempHSLA?.lightness,
      hslString:`hsl(${tempHSLA?.hue}, ${tempHSLA?.saturation}%, ${tempHSLA?.lightness}%)`
    }
  }
  else {
    return {
      type:"invalid"
    }
  }
}

export const hslToHsla = (colour: string) => {
  const tempHSL = isValidHSLColor(colour);

  if (tempHSL?.isValid) {
    return {
      type:"hsla",
      hue:tempHSL?.hue,
      saturation:tempHSL?.saturation,
      lightness:tempHSL?.lightness,
      alpha:1,
      hslaString:`hsla(${tempHSL?.hue}, ${tempHSL?.saturation}%, ${tempHSL?.lightness}%, 1)`
    }
  }
  else {
    return {
      type:"invalid"
    }
  }
}

export const ColourCode = (colour: string, format: "rgba" | "hex" | "hsla" | "rgb" | "hsl"): string => {
  let output: any;

  if (isValidHexCode(colour)) {
    switch (format) {
      case "rgba":
        output = hexToRgba(colour)?.rgbaString || "Invalid format";
        break;
      case "rgb":
        const temp = hexToRgba(colour).rgbaString || "Invalid format";
        output = rgbaToRgb(temp)?.rgbString || "Invalid format";
        break;
      case "hsla":
        output = hexToHsla(colour)?.hslaString || "Invalid format";
        break;
      case "hsl":
        const temp2 = hexToHsla(colour)?.hslaString || "Invalid format";
        output = hslaToHsl(temp2)?.hslString || "Invalid format";
        break;
      case "hex":
        output = colour; 
        break;
      default:
        output = "Invalid format";
        break;
    }
  } else if (parseRGBA(colour)) {
    switch (format) {
      case "hex":
        output = rgbaToHex(colour) || "Invalid format";
        break;
      case "hsla":
        output = rgbaToHsla(colour)?.hslaString || "Invalid format";
        break;
      case "hsl":
        const temp3 = rgbaToHsla(colour)?.hslaString || "Invalid format";
        output = hslaToHsl(temp3)?.hslString || "Invalid format";
        break;
      case "rgba":
        output = colour;
        break;
      case "rgb":
        output = rgbaToRgb(colour)?.rgbString || "Invalid format";
        break;
      default:
        output = "Invalid format";
        break;
    }
  } else if (isValidHSLAColor(colour)?.isValid) {
    switch (format) {
      case "hex":
        const rgbaColor = hslaToRgba(colour)?.rgbaString || "Invalid format";
        output = rgbaToHex(rgbaColor);
        break;
      case "rgba":
        output = hslaToRgba(colour)?.rgbaString || "Invalid format";
        break;
      case "rgb":
        const temp4 = hslaToRgba(colour)?.rgbaString || "Invalid format";
        output = rgbaToRgb(temp4)?.rgbString || "Invalid format";
        break;
      case "hsla":
        output = colour;
        break;
      case "hsl":
        output = hslaToHsl(colour)?.hslString || "Invalid format";
        break;
      default:
        output = "Invalid format";
        break;
    }
  }
  else if (isValidHSLColor(colour)?.isValid) {
    switch (format) {
      case "hex":
        const temp = hslToHsla(colour)?.hslaString || "Invalid format";
        output = hslaToHex(temp) || "Invalid format";
        break;
      case "rgba":
        const temp2 = hslToHsla(colour)?.hslaString || "Invalid format";
        output = hslaToRgba(temp2)?.rgbaString || "Invalid format";
        break;
      case "rgb":
        const temp3 = hslToHsla(colour)?.hslaString || "Invalid format";
        const temp4 = hslaToRgba(temp3)?.rgbaString || "Invalid format";
        output = rgbaToRgb(temp4)?.rgbString || "Invalid format";
        break;
      case "hsla":
        const temp5 = hslToHsla(colour)?.hslaString || "Invalid format";
        output = temp5;
        break;
      case "hsl":
        output = colour;
        break;
      default:
        output = "Invalid format";
        break;
    }
  }
  else if (parseRGB(colour)) {
    switch (format) {
      case "hex":
        const temp = rgbToRgba(colour)?.rgbaString || "Invalid format";
        output = rgbaToHex(temp) || "Invalid format";
        break;
      case "hsla":
        const temp2 = rgbToRgba(colour)?.rgbaString || "Invalid format";
        output = rgbaToHsla(temp2)?.hslaString || "Invalid format";
        break;
      case "hsl":
        const temp3 = rgbToRgba(colour)?.rgbaString || "Invalid format";
        const temp4 = rgbaToHsla(temp3)?.hslaString || "Invalid format";
        output = hslaToHsl(temp4)?.hslString || "Invalid format";
        break;
      case "rgba":
        output = rgbToRgba(colour)?.rgbaString || "Invalid format";
        break;
      case "rgb":
        output = colour;
        break;
      default:
        output = "Invalid format";
        break;
    }
  }
  else {
    output = "Invalid color";
  }

  return output;
};


