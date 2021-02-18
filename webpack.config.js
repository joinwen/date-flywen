const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "date-flywen.js",
    library: "dateFlywen",
    libraryTarget: "umd",
    module: false
  },
  mode: "production"
}
