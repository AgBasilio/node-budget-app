const { readFile } = require("fs");
const { promisify } = require("util");

//genera la estructura de promesas para readFile, readFile ya es async
const readFilePromise = promisify(readFile);

async function readFileAsync(fileName) {
  try {
    const text = await readFilePromise(fileName, "utf-8");
    console.log({ text });
  } catch (error) {
    console.error(error);
  }
}

readFileAsync(__dirname+"/textfile.txt");