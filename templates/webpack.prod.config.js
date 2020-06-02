/* eslint-disable  import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'production',
  target: 'web',
  cache: true,
  entry: {
    javascripts: path.resolve(__dirname, './public/javascript/YOUR_FILE.js'),
    styles: path.resolve(__dirname, './public/stylesheets/YOUR_FILE.css'),
    shared: ['./public/javascript/YOUR_FILE.js']
  },
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin(), new OptimizeCSSAssetsPlugin()],
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];

            return `npm.${packageName.replace('@', '')}`;
          }
        }
      }
    }
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new ManifestPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[name].[chunkhash].css',
      ignoreOrder: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [{ loader: 'file-loader' }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{ loader: 'file-loader' }]
      }
    ]
  }
};
