const path = require('path');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');

const rootFolder = path.resolve(__dirname, '..');

module.exports = {
  devtool: 'eval',
  context: rootFolder,
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
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, '../src/'),
      loaders: ['babel-loader'],
    }]
  },
};
