const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index",

  mode: "development",

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
    port: 8000,
  },
  output: {
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
      name: "remote",
      exposes: {
        "./Counter": "./src/components/Counter",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react,
          eager: true, // Add this
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
          eager: true, // Add this
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
