const http = require('http');
const url = require('url');
const fs = require('fs'); //ctrl+e para ir al final de la linea

http.createServer(function (req, res){
    let query = url.parse(req.url, true);
    let filepath = "." + query.pathname;
console.log({filepath});
    fs.readFile(filepath, function(err, data){
        if (err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);