const path = require('path');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const initialConfig = {
  plugins: [],
  module: {
    loaders: [],
  },
};

module.exports = {
  getBase: buildTarget => Object.assign(initialConfig, {
    plugins: [
      new DashboardPlugin(),
      new webpack.DefinePlugin({
        BUILD_TARGET: JSON.stringify(buildTarget),
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
          loaders: ['babel-loader', 'eslint-loader'],
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
        },
      ],
    },
    sassLoader: {
      includePaths: [
        path.resolve(__dirname, '../src'),
        path.resolve(__dirname, '../node_modules'),
      ],
    },
    resolve: {
      alias: { jquery: 'jquery/src/jquery' },
      extensions: ['', '.js', '.jsx'],
    },
  }),
};
