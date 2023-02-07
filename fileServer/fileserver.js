const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
    fs.readFile('demo.html', function(err, data) { //para leer un archivo en el fs
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);


function crearOAgregarAlArchivo(nombreArchivo, contenido){
    //fs.appendFile agrega contenido a un archivo, sino existe el archivo lo intenta crear
    fs.appendFile(nombreArchivo, contenido, function (err) {
        if (err) throw err;
        console.log('File saved, papá!');
    });
}

//fs.writeFile() reemplaza el archivo por completo, si no existe lo crea
//fs.unlink() elimina el archivo especificado
//fs.rename renombra el archivo