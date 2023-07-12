# colour-codes

colour-codes is an npm package that provides functions to convert color codes between different formats, including RGBA, HEX, and HSLA. With this package, you can easily perform color code conversions in your JavaScript/Typescript projects.

## Installation

You can install colour-codes using npm:

```shell
npm install colour-codes
```

## Usage

```javascript
const {
  rgbaToHex,
  rgbaToHsla,
  hexToHsla,
  hslaToHex,
  hexToRgba,
  hslaToRgba,
} = require('colour-codes');

// Example usage: Convert RGBA to HEX
const rgbaColor = 'rgba(255, 0, 0, 0.5)';
const hexColor = rgbaToHex(rgbaColor);
console.log(hexColor); // Output: #ff000080

// Example usage: Convert HEX to HSLA
const hexColor2 = '#00ff00';
const hslaColor = hexToHsla(hexColor2);
console.log(hslaColor); // Output: { hue: 120, saturation: 100, lightness: 50, alpha: 1, hslString: 'hsla(120,100,50,1)' }

// ... Other conversion functions
```

## API

The following functions are available in the `colour-codes` package:

- `rgbaToHex(colour)`: Converts an RGBA color code to a hexadecimal color code.
- `rgbaToHsla(colour)`: Converts an RGBA color code to an HSLA color code.
- `hexToHsla(hexColor)`: Converts a hexadecimal color code to an HSLA color code.
- `hslaToHex(hsla)`: Converts an HSLA color code to a hexadecimal color code.
- `hexToRgba(hexColor)`: Converts a hexadecimal color code to an RGBA color code.
- `hslaToRgba(hsla)`: Converts an HSLA color code to an RGBA color code.

## License

This package is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request on the [GitHub repository](https://github.com/YugBhanushali/color-codes-npm-package).

## Author

- [Yug Bhanushali](https://github.com/YugBhanushali)

## Bugs/Issues

If you encounter any bugs or have any specific issues with the package, please report them on the [GitHub Issues](https://github.com/YugBhanushali/color-codes-npm-package/issues) page.

```

Feel free to modify the content as per your requirements and add any additional information you think would be helpful.