# colour-codes

colour-codes is an npm package that provides functions to convert color codes between different formats, including RGBA, HEX, and HSLA. With this package, you can easily perform color code conversions in your JavaScript/Typescript projects.

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
     hslaToHex,
     hexToRgba,
     hslaToRgba,
   } from 'colour-codes';
 
 
 
   const test1 = rgbaToHex('rgba(255, 255, 255, 1)');
   console.log(test1); // Output: #ffffff

   const test2 = rgbaToHsla('rgba(255, 255, 255, 0.5)');
   console.log(test2); // Output: { type: 'hsla', hue: 0, saturation: 0, lightness: 1, alpha: 0.5, hslaString: 'hsla(0,0,1,0.5)' }

   const test3 = hexToHsla('#f34fffed');
   console.log(test3); // Output: { type: 'hsla', hue: 296, saturation: 100, lightness: 65, alpha: 0.93, hslaString: 'hsla(296,100,65,0.93)' }

   const test4 = hexToRgba('#f34fffed');
   console.log(test4); // Output: { type: 'rgba', red: 243, green: 79, blue: 255, alpha: 0.93, rgbaString: 'rgba(243,79,255,0.93)' }

   const test5 = hslaToHex('hsla(300, 53%, 57%, 1)');
   console.log(test5); // Output: #cb57cb

   const test6 = hslaToRgba('hsla(300, 53%, 57%, 1)').rgbaString;
   console.log(test6); // Output: rgba(203,87,203,1)
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