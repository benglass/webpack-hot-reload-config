var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.dev');
var PORT = process.env.PORT || 3000;
var HOST = process.env.HOST || 'localhost';
var URL = 'http://'+HOST+':'+PORT;

var app = express();

// Add webpack hot client to all entry points
var origPublicPath = webpackConfig.output.publicPath;
webpackConfig.output.publicPath = URL+origPublicPath;
console.log(webpackConfig.output.publicPath);
console.log(origPublicPath);
webpackConfig.entry = Object
                        .keys(webpackConfig.entry)
                        .reduce(function(entries, name) {
                            entries[name] = webpackConfig.entry[name].concat(['webpack-hot-middleware/client?path='+URL+'/__webpack_hmr']);
                            return entries;
                        }, {});

var compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: origPublicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, HOST, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at '+URL);
});
