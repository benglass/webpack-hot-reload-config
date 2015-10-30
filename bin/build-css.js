var glob = require("glob");
var fs = require('fs');
var uglifycss = require('uglifycss');

glob('assets/css/*.css', function(er, files) {
    files.forEach(function(file) {
        console.log(file);
        var uglified = uglifycss.processFiles([file]);
        fs.writeFile(file, uglified);
    });
});
