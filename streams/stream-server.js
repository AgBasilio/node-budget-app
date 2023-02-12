const http = require("http");

const { createReadStream } = require("fs");

http
  .createServer((req, res) => {
    const filestream = createReadStream(
      __dirname + "/data/big-file.txt",
      "utf-8"
    );
    filestream.on("data", (chunk) => {
      filestream.pipe(res);
    });
    filestream.on('end', () => {
        res.end()
    })
  })
  .listen(3000);
