const fs = require("fs");

fs.copyFile("naranja.txt", "limon.txt", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("el archivo ha sido copiado");
});
