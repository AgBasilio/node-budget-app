const http = require("http");

//para importar modulos se usa la keyword 'require'
const agModule = require("./myfirstmodule");
//en el caso de mi modulo, le paso la direccion donde encontrarlo

//tambien se puede exportar solo lo que se va a utilizar del modulo
const { myAddress, myLastname } = require("./myfirstmodule");

console.log( { myLastname, myAddress });

const url = require("url"); //modulo para jugar con la url

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    // res.write("Hello " + agModule.myName() + "! ");
    // res.write("The current date and time are: "+ agModule.myDateTime());

    //res.write(req.url);//req representa el request que viene del cliente

    //la url se puede separar, usando el modulo url
    let query = url.parse(req.url, true).query;
    let txt = query.year + " " + query.month;
    res.end(txt); //res.end('Hello World!');
  })
  .listen(8080);

//para iniciar el server: node filename.js
//para pararlo ctrl+c
