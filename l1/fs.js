const fs = require("node:fs/promises"); //const fs = require("fs");
const path = require("node:path"); //const fs = require("path");

// fs.writeFile(path.join(__dirname, "text1.txt"), "hello file");
const readFromFile = async () => {
  try {
    let txt = await fs.readFile(path.join(__dirname, "text1.txt"), {
      encoding: "utf8",
    });
    console.log("txt", txt);
  } catch (err) {
    console.log(err);
  }
};
// readFromFile();

const createDirectory = async () => {
  try {
    await fs.mkdir(path.join(__dirname, "d2", "d22"), { recursive: true });
  } catch (err) {
    console.log(err);
  }
};
// createDirectory();
const removeDirectory = async () => {
  try {
    await fs.rm(path.join(__dirname, "d2"), {
      recursive: true,
      maxRetries: 100,
    });
  } catch (err) {
    console.log(err);
  }
};
removeDirectory();
