var webpack = require("webpack"),
    path = require("path")

var SRC = path.resolve(__dirname, "src")
var BUILD = path.resolve(__dirname, "build")

var config = {
  entry: SRC + "/index.js",
  output: {
    path: BUILD,
    filename: "bundle.js"
  },
  module : {
    loaders: [{
      test:/\.js$/,
      loader: "babel-loader",
      exclude:/node_modules/,
      query: {
        presets: ["es2015", "react", "stage-1"]
      }
    }]
  }
}

module.exports = config
