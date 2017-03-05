const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/app.js',
  output: {
    path: 'dist',
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: ['css-loader', 'sass-loader'],
          publicPath: '/dist'
        })
      }
    ]
  },
  plugins:
    [
      new HtmlWebpackPlugin({
        title: 'Custom template',
        minify: {
          collapseWhitespace: false
        },
        hash: true,
        template: './src/index.html',
      }),
      new ExtractTextPlugin({
        filename: 'app.css',
        disable: false,
        allChunks: true
      }),
  ]
}