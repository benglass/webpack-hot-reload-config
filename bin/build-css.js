var glob = require("glob");
var fs = require('fs');
var uglifycss = require('uglifycss');

glob('css/*.css', function(er, files) {
    files.forEach(function(file) {
        var uglified = uglifycss.processFiles([file]);
        fs.writeFile(file, uglified);
    });
});
