var path = require('path');
var webpack = require('webpack');
var srcRoot = './src';

module.exports = {
  devtool: 'eval',
  entry: {
    vendor: ['jquery', 'react', 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'],
    index: ['./src/index', 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr']
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
        { test: /\.css$/, loader: 'style!css' }
    ]
  },
  resolve: {
      root: [path.resolve(srcRoot)]
  }
};
