/* de esta manera utilizamos promisify
const { readFile } = require("fs");
const { promisify } = require("util");

//genera la estructura de promesas para readFile, readFile ya es async
const readFilePromise = promisify(readFile); */

//otra forma de hacerlo donde la promesa ya esta implementada
const { readFile } = require("fs/promises");

async function readFileAsync(fileName) {
  try {
    // const text = await readFilePromise(fileName, "utf-8");
    const text = await readFile(fileName, "utf-8");
    console.log({ text });
  } catch (error) {
    console.error(error);
  }
}

readFileAsync(__dirname + "/textfile.txt");
