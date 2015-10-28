var path = require('path');
var webpack = require('webpack');
var srcRoot = './src';

module.exports = {
  devtool: 'eval',
  entry: {
    vendor: ['jquery', 'react', 'webpack-hot-middleware/client?http://localhost:3000'],
    index: ['./src/index', 'webpack-hot-middleware/client?http://localhost:3000']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
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
