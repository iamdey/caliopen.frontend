const configBase = require('./webpack.config.js');

const path = require('path');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';

const entry = configBase.entry.slice();

if (isDev) {
  entry.push(
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    'webpack/hot/only-dev-server'
  );
}

const plugins = configBase.plugins.slice()

if (isDev) {
  plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
}

const config = Object.assign(configBase, {
  entry,
  output: Object.assign(configBase.output, {
    path: path.join(__dirname, '..', 'server', 'dist'),
    publicPath: '/',
  }),
  plugins,
});

module.exports = config;
