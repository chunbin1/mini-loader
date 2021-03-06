const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "output.bundle.js",
  },
  mode:'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          // 'style-loader',
          // {
          //   loader:'css-loader',
          //   options: {
          //     modules: true
          //   }
          // }
          {
            loader: path.resolve("./my-loader/style-loader"),
          },
          {
            loader: path.resolve("./my-loader/css-loader"),
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
  },
  plugins: [new HtmlWebpackPlugin()],
};
