# Seamless Immutable JSON loader for Webpack
Same as json-loader but returns an Immutable json using [Seamless Immutable](https://github.com/rtfeldman/seamless-immutable) library.

## Installation

`npm install seamless-immutable-json-loader`

## Usage

``` javascript
var json = require(" seamless-immutable-json!./file.json");
// => returns file.json content as json parsed object
```

Don't forget to polyfill `require` if you want to use it in node.
See `webpack` documentation.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
