const path = require("path");
const webpack = require("webpack");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const merge = require("webpack-merge");

const baseWebpackConfig = require("./webpack.base.js");
const devWebpackConfig = merge(baseWebpackConfig, {
  mode: "development",
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../dev_built"),
    chunkFilename: `[name].[hash].js`,
  },
  devServer: {
    historyApiFallback: true,
    clientLogLevel: "info",
    host: "0.0.0.0",
    port: "8090",
    open: false,
    contentBase: path.resolve(__dirname, "../"),
    publicPath: "/",
    disableHostCheck: true,
    proxy: {
      "/xian": "http://localhost:9081",
      "/task": "http://localhost:9081",
      "/common": "http://localhost:9081",
    },
  },
  devtool: "inline-source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "award project",
      template: "./template.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      Vue: ["vue/dist/vue.esm.js", "default"],
    }),
  ],
});
module.exports = devWebpackConfig;
// 可以增加编译完成提示访问链接
