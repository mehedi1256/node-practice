var http = require('http');
var fs = require('fs');

/**
 * create a file named mynewfile1.txt:
 */
var file_content = "write file here for test.";

http.createServer(function(req, res) {

    /**
     * for creating file in server
     */
    
    fs.writeFile('./files/file1.txt', file_content, function(err, file) {

        if(err) throw err;
        console.log('Saved');

        return res.end();
    });

    /**
     * read file from server
     */

    /* fs.readFile('./files/file3.txt', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    }) */
}).listen(8080);
