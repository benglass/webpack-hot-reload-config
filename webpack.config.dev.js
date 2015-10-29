var path = require('path');
var webpack = require('webpack');
var jsRoot = './src/js';
var scssRoot = './src/scss';
var webpackConfig = require('./webpack.config.prod.js');

// Hot reload plugin, replace the prod env/uglify plugins
webpackConfig.plugins.splice(1, 2, new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin());

// Add source maps to styles
webpackConfig.devtool = 'inline-source-map';
webpackConfig.module.loaders[1].loaders = ['style', 'css?sourceMap', 'sass?sourceMap'];

module.exports = webpackConfig;
