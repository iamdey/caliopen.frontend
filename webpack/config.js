const path = require('path');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractTextPlugin = new ExtractTextPlugin('style.css');
const initialConfig = {
  entry: [],
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
      extractTextPlugin,
    ],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          include: path.join(__dirname, '../src/'),
          loaders: ['babel-loader', 'eslint-loader'],
        },
        {
          test: /\.css$/,
          loader: extractTextPlugin.extract('style-loader', 'css-loader'),
        },
        {
          test: /\.scss$/,
          loader: extractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
          ],
        },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml' },
        { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/font-woff' },
        { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/font-woff' },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/octet-stream' },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
      ],
      preLoaders: [
        {
          test: /\.scss$/,
          include: path.join(__dirname, '../src/'),
          loader: 'sasslint',
        },
      ],
    },
    sassLoader: {
      includePaths: [
        path.resolve(__dirname, '../src'),
        path.resolve(__dirname, '../node_modules'),
      ],
    },
    sasslint: {
      configFile: path.resolve(__dirname, '../.sass-lint.yml'),
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
  }),
};
