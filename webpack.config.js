const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [path.resolve(__dirname, 'PATH TO DIRECTORY YOU WANT TO START AT')],
  output: {
    path: path.resolve(__dirname, 'PATH TO OUTPUT DIRECTORY'),
    publicPath: '/',
    filename: '[name]-[hash].min.js'
  },
  plugins: [
    // Minify JS
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
