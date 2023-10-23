var fs = require('fs');

/**
 * delete file using node file system module
 */

fs.unlink('./files/file1.txt', function(err, file) {
    if(err) throw err;
    console.log('file deleted');
})