module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
