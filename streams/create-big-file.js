const { writeFile } = require("fs/promises"); //ctrl+a para ir al inicio de la linea

const createFile = async () => {
  await writeFile(__dirname + "/data/big-file.txt", "abcdefgh ".repeat(100_000));
  //   console.log(__dirname);
};

createFile();
