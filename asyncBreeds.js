const fs = require("fs");

const breedDetailsFromFile = function(breed, cb) {
  console.log("breedDetailsFromFile: Calling readFile...");
  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) {
      cb(data);
    } else {
      cb(undefined);
    }
  });
};

const printBreed = breed => {
  console.log("Return value:", breed);
};

breedDetailsFromFile("Bombay", printBreed);

module.exports = { breedDetailsFromFile };
