require("dotenv").config();
const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: { 
    clientes: "./simulations/clientes.test.js",
    produtos: "./simulations/produtos.test.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "commonjs",
    filename: "[name].test.js", 
  },
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader" }],
  },
  target: "web",
  externals: /k6(\/.*)?/,
};