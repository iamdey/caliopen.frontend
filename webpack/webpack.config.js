const path = require('path');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const rootFolder = path.resolve(__dirname, '..');

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new DashboardPlugin(),
    new webpack.DefinePlugin({
      BUILD_TARGET: JSON.stringify('web'),
      CALIOPEN_ENV: JSON.stringify(process.env.NODE_ENV),
    }),
    new ExtractTextPlugin('style.css', {
      allChunks: true,
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, '../src/'),
        loaders: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
      },
    ],
  },
};
