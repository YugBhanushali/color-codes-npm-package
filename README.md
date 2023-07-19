# colour-codes

colour-codes is an npm package that provides functions to convert color codes between different formats, including RGBA, HEX, HSLA, RGB, and HSL. With this package, you can easily perform color code conversions in your JavaScript/TypeScript projects.

## Installation

You can install colour-codes using npm:

```shell
npm install colour-codes
```

## Usage

```javascript
import {
  rgbaToHex,
  rgbaToHsla,
  hexToHsla,
  hexToRgba,
  hslaToHex,
  hslaToRgba,
  rgbaToRgb,
  rgbToRgba,
  hslaToHsl,
  hslToHsla,
  ColourCode
} from 'colour-codes';

// Convert RGBA to HEX
const test1 = rgbaToHex('rgba(255, 255, 255, 1)');
console.log(test1); // Output: "#ffffff"

// Convert RGBA to HSLA
const test2 = rgbaToHsla('rgba(255, 255, 255, 0.5)');
console.log(test2); // Output: { type: "hsla", hue: 0, saturation: 0, lightness: 100, alpha: 0.5, hslaString: "hsla(0, 0%, 100%, 0.5)" }

// Convert HEX to HSLA
const test3 = hexToHsla('#f34fffed');
console.log(test3); // Output: { type: "hsla", hue: 308, saturation: 61, lightness: 74, alpha: 0.93, hslaString: "hsla(308, 61%, 74%, 0.93)" }

// Convert HEX to RGBA
const test4 = hexToRgba('#f34fffed');
console.log(test4); // Output: { type: "rgba", red: 243, green: 79, blue: 255, alpha: 0.93, rgbaString: "rgba(243, 79, 255, 0.93)" }

// Convert HSLA to HEX
const test5 = hslaToHex('hsla(300, 53%, 57%, 1)');
console.log(test5); // Output: "#9c4b6e"

// Convert HSLA to RGBA
const test6 = hslaToRgba('hsla(300, 53%, 57%, 1)').rgbaString;
console.log(test6); // Output: "rgba(156, 75, 110, 1)"

// Convert RGBA to RGB
const test7 = rgbaToRgb('rgba(255, 255, 255, 1)');
console.log(test7); // Output: { type: "rgb", red: 255, green: 255, blue: 255, rgbString: "rgb(255, 255, 255)" }

// Convert RGB to RGBA
const test8 = rgbToRgba('rgb(255, 255, 255)');
console.log(test8); // Output: { type: "rgba", red: 255, green: 255, blue: 255, alpha: 1, rgbaString: "rgba(255, 255, 255, 1)" }

// Convert HSLA to HSL
const test9 = hslaToHsl('hsla(300, 53%, 57%, 1)');
console.log(test9); // Output: { type: "hsl", hue: 300, saturation: 53, lightness: 57, hslString: "hsl(300, 53%, 57%)" }

// Convert HSL to HSLA
const test10 = hslToHsla('hsl(300, 53%, 57%)');
console.log(test10); // Output: { type: "hsla", hue: 300, saturation: 53, lightness: 57, alpha: 1, hslaString: "hsla(300, 53%, 57%, 1)" }

// Convert color to desired format using ColourCode function
const test11 = ColourCode('rgba(255, 255, 255, 1)', 'hsla');
console.log(test11); // Output: "hsla(0, 0%, 100%, 1)"

const test12 = ColourCode('#ffffff', 'hex');
console.log(test12); // Output: "#ffffff"

const test13 = ColourCode('rgba(255, 255, 255, 1)', 'rgba');
console.log(test13); // Output: "rgba(255, 255, 255, 1)"

const test14 = ColourCode('rgba(255, 255, 255, 1)', 'rgb');
console.log(test14); // Output: "rgb(255, 255, 255)"

const test15 = ColourCode('rgba(255, 255, 255, 1)', 'hsl');
console.log(test15); // Output: "hsl(0, 0%, 100%)"
```

## API

The following functions are available in the `colour-codes` package:

- `rgbaToHex(colour)`: Converts an RGBA color code to a hexadecimal color code.
- `rgbaToHsla(colour)`: Converts an RGBA color code to an HSLA color code.
- `hexToHsla(hexColor)`: Converts a hexadecimal color code to an HSLA color code.
- `hslaToHex(hsla)`: Converts an HSLA color code to a hexadecimal color code.
- `hexToRgba(hexColor)`: Converts a hexadecimal color code to an RGBA color code.
- `hslaToRgba(hsla)`: Converts an HSLA color code to an RGBA color code.
- `rgbaToRgb(colour)`: Converts an RGBA color code to an RGB color code.
- `rgbToRgba(colour)`: Converts an RGB color code to an RGBA color code.
- `hslaToHsl(colour)`: Converts an HSLA color code to an HSL color code.
- `hslToHsla(colour)`: Converts an HSL color code to an HSLA color code.
- `ColourCode(colour, format)`: Converts a color code to the desired format.

## License

This package is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request on the [GitHub repository](https://github.com/YugBhanushali/color-codes-npm-package).

## Author

- [Yug Bhanushali](https://github.com/YugBhanushali)

## Bugs/Issues

If you encounter any bugs or have any specific issues with the package, please report them on the [GitHub Issues](https://github.com/YugBhanushali/color-codes-npm-package/issues) page.
```

Feel free to modify the content further to match your project's specific use cases and requirements.