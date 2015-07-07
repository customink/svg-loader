# svg loader for webpack

This loader is a combination of the [file-loader](https://github.com/webpack/file-loader) and the [raw-loader](https://github.com/webpack/raw-loader). This loader allows you to utilize an SVG file in an embedded or inline manor.

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

``` javascript
var url = require("svg!./file.svg");
// emits file.svg as file in the output directory and returns the public url
// i.e. returns "/public-path/file.svg"

var svg = require("svg?inline!./file.svg");
// the variable svg now contains the raw contents of file.svg
```

Query parameters are passed on to the child loader. See the documentation for [file-loader](https://github.com/webpack/file-loader) and [raw-loader](https://github.com/webpack/raw-loader) for details.

```javascript
var url = require("svg?name=[name]-[hash].[ext]!./file.svg");
// emits file.svg as file-abc123hash.svg and returns the public url
// i.e. returns "/public-path/file-abc123hash.svg"
```

### Using with a pre-configured loader

If you have pre-configured the svg-loader in your webpack config:

```javascript
...
loaders: [
  { test: /\.svg$/, loader: 'svg-loader'}
]
...
```

Then if you wish to require an svg for inline usage, you'll have to specify the loader:

```javascript
var svg = require("!svg?inline!./file.svg");
```

See [webpack/webpack#89](https://github.com/webpack/webpack/issues/89) for details.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
