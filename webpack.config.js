module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader", "eslint-loader"] },
      { test: /\.jsx$/, exclude: /node_modules/, use: ["babel-loader", "eslint-loader"] },
      {
        test: /\.css$/,
        loader: [
          { loader: 'file-loader', options: { name: 'styles/[name].[ext]' } },
          { loader: 'extract-loader', options: { publicPath: '../' } },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)/,
        use: {
          loader: 'url-loader',
          options: {
            name: 'assets/[name].[ext]',
            limit: 10000,
          },
        }
      },
    ]
  },
  devtool: 'source-map',
};
