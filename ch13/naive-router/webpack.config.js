const path = require('path')

module.exports = {
  mode: 'development',
  // defines the file to start bundling (entry-point)
  entry: './jsx/app.jsx',
  output: {
    path: path.join(__dirname, '/js/'),
    filename: 'bundle.js'
  },
  devtool: '#sourcemap',
  module: {
    rules: [
      /**
       * Specifies the loader to import, and then inject CSS
       * into the web page from JavaScript
       */
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ['babel-loader']
      }
    ]
  }
}