var path = require('path');
var webpack = require('webpack');
var jsRoot = './src/js';
var scssRoot = './src/scss';

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    vendor: ['jquery', 'react', 'reflux', 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'],
    index: [jsRoot+'/index', 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor"],
      minChunks: Infinity
    })
  ],
  module: {
    loaders: [
        {
          test: /\.js$/,
          loaders: ['babel'],
          include: path.join(__dirname, 'src')
        },
        { test: /\.scss/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap'] }
    ]
  },
  resolve: {
      root: [path.resolve(jsRoot), path.resolve(scssRoot)]
  }
};
