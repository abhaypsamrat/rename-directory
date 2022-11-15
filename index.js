const fs = require("fs");

const replaceThis = "hello";
const replaceThat = "Namaste";
const preview = true;

try {
  fs.readdir("data", (err, data) => {
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      let newFile = "data/" + item.replaceAll(replaceThis, replaceThat);
      if (!preview) {
        fs.rename("data/" + item, newFile, () => {
          console.log("Rename Success!");
        });
      } else {
        if ("data/" + item !== newFile)
          console.log("data/" + item + " will be renamed to " + newFile);
      }
    }
  });
} catch (err) {
  console.error(err);
}
