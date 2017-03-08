const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const DashboardPlugin = require('webpack-dashboard/plugin');
const {resolve, join} = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: ['css-loader', 'sass-loader'],
          publicPath: '/dist'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    stats: "errors-only",
    open: true,
    historyApiFallback: true
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
      new DashboardPlugin(),
  ]
}