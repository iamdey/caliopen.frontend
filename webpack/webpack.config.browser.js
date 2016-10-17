const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./config.js');

const isDev = process.env.NODE_ENV === 'development';

const config = Object.assign(baseConfig.getBase('web'), {
  entry: [path.join(__dirname, '../src/index.js')],
  output: {
    path: path.join(__dirname, '..', 'dist/browser/'),
    filename: 'bundle.js',
    publicPath: '/',
  },
});

if (isDev) {
  config.entry.unshift(
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    'webpack/hot/only-dev-server'
  );

  config.output.publicPath = '/build/';

  config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
}

module.exports = config;
