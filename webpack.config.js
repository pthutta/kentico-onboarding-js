/* eslint-disable object-curly-newline */
/* eslint-disable object-property-newline */
/* eslint-disable no-path-concat */
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: [
        'babel-loader',
        'eslint-loader'
      ] },
      { test: /\.css$/, use: [
        { loader: 'file-loader', options: { name: 'styles/[name].[ext]' } },
        { loader: 'extract-loader', options: { publicPath: '../' } },
        { loader: 'css-loader' }
      ] },
      { test: /\.(eot|svg|ttf|woff|woff2)/, use: [
        { loader: 'url-loader', options: { name: 'assets/[name].[ext]', limit: 10000 } }
      ] },
      { test: /\.(html|jpg|jpeg|png|ico|gif)/, use: [
        { loader: 'file-loader', options: { name: '[path][name].[ext]', context: 'public' } }
      ] }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin(['build'])
  ],
  devtool: 'source-map',
};
