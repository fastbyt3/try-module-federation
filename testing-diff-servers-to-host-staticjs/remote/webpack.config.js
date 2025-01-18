const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const path = require("path");

const { name, version } = require("./package.json");

module.exports = {
  entry: "./src/index",

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 9000,
  },
  output: {
    filename: `${version}/[name].[contenthash:8].js`,
    chunkFilename: `${version}/[name].[contenthash:8].chunk.js`,
    assetModuleFilename: "static/media/[name].[hash][ext]",
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: name,
      filename: `${version}/remoteEntry.js`,
      exposes: {
        "./Counter": "./src/components/Counter",
      },
      shared: [
        { react: { singleton: true }, "react-dom": { singleton: true } },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
