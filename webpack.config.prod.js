import path from 'path';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

export default {
  devtool: 'source-map',
  entry: [path.resolve(__dirname, 'app.js')],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist/public/'),
    publicPath: '/',
    filename: '[name]-[hash].min.js'
  },
  plugins: [
    //Minify JS
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [{ loader: 'babel-loader' }]
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      }
    ]
  }
};
