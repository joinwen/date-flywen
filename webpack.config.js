const path = require("fs");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "date-flywen.js",
    library: "dateFlywen",
    libraryTarget: "umd"
  },
  mode: "production"
}
