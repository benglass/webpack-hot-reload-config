var path = require('path');
var webpack = require('webpack');
var jsRoot = './src/js';
var scssRoot = './src/scss';

// Define a __DEV__ variable which can be used to add dev-only code
// Anything wrapped in if (__DEV__) will be removed during production due to uglifyjs dead code removal 
// since __DEV__ is transformed to the literal value false in production
var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
});

module.exports = {
  entry: {
    vendor: ['jquery', 'react', 'reflux'],
    index: [jsRoot+'/index'],
    style: [scssRoot+'/style.scss']
  },
  output: {
    path: path.join(__dirname, 'assets/js'),
    filename: '[name].js',
    publicPath: '/assets/js/'
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
    }),
    definePlugin
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
    root: [
        path.resolve(jsRoot),
        path.resolve(scssRoot)
    ]
  },
  sassLoader: {
      includePaths: [path.resolve(__dirname, './node_modules')]
  }
};
