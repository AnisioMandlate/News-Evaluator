const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  entry: "./src/client/index.js",
  mode: "development",
  optimization: [new TerserPlugin({}), new OptimizerCss({})],
  module: {
    rules: [
      {
        test: "/.js$",
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        text: "/.scss$",
        use: [
          MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html",
    }),
    new CleanWebpackPlugin({
      dry: true,
      verbose: true,
      cleanStaleWebpackAssets: true,
      proctectWebpackAssets: false,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new WorkboxPlugin.GenerateSW(),
  ],
};
