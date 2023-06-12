const fs = require('fs');
const util = require('util');

// uses promisify method to read data from file
const readFromFile = util.promisify(fs.readFile);
/**
//  writes content as a JSON string and writes to destination
*/
const writeToFile = async (destination, content) =>
  await fs.writeFile(destination, JSON.stringify(content, null), (err) =>
    err ? console.error(err) : console.info("Data has been written to destination")
  );


module.exports = { readFromFile, writeToFile };
