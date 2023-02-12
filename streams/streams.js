const { createReadStream } = require("fs");

const stream = createReadStream(__dirname + "/data/big-file.txt", "utf-8");

stream.on("data", (chunk) => {
  console.log({ chunk });
});

stream.on('end', () => { console.log("Ya termino de leer el archivo")})