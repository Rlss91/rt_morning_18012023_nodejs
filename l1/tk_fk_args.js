const fs = require("node:fs/promises"); //const fs = require("fs");
const path = require("node:path"); //const fs = require("path");

const writeToFile = async () => {
  try {
    if (process.argv.length < 3) {
      throw "please provide file name and text";
    }
    let fileName = process.argv[2];
    let textData = process.argv[3];
    await fs.writeFile(path.join(__dirname, fileName), textData);
  } catch (err) {
    console.log(err);
  }
};
writeToFile();
