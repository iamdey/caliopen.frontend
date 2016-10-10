const configBase = require('./webpack.config.js');

const path = require('path');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

const isDev = process.env.NODE_ENV === 'development';

const plugins = [
  new DashboardPlugin(),
  new webpack.DefinePlugin({
    BUILD_TARGET: JSON.stringify('cordova'),
    CALIOPEN_ENV: JSON.stringify(process.env.NODE_ENV),
  }),
  // Makes the public URL available as %PUBLIC_URL% in index.html, e.g.:
  // <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
  // In development, this will be an empty string.
  new InterpolateHtmlPlugin({
    HEAD: '',
    BODY_SCRIPT: '',
    MARKUP: '',
  }),
  // Generates an `index.html` file with the <script> injected.
  new HtmlWebpackPlugin({
    inject: true,
    template: path.join(__dirname, '..', 'template', 'index.cordova.html'),
  }),
];

const config = Object.assign(configBase, {
  output: {
    path: path.join(__dirname, '..', 'cordova', 'www'),
    filename: 'bundle.js',
  },
  plugins,
});

module.exports = config;
