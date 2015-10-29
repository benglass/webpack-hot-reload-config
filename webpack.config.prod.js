var path = require('path');
var webpack = require('webpack');
var jsRoot = './src/js';
var scssRoot = './src/scss';

module.exports = {
  entry: {
    vendor: ['jquery', 'react', 'reflux'],
    index: [jsRoot+'/index']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor"],
      minChunks: Infinity
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },{ 
      test: /\.scss/,
      loaders: ['style', 'css', 'sass']
    }]
  },
  resolve: {
    root: [path.resolve(jsRoot), path.resolve(scssRoot)]
  }
};
