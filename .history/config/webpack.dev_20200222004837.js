const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development",
  entry: {
    main: ["./src/app.js"]
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../built")
  },
  devServer: {
    historyApiFallback: true,
    clientLogLevel: "info",
    host: "0.0.0.0",
    port: "8090",
    open: false,
    contentBase: path.resolve(__dirname, "../"),
    publicPath: "/"
  },
  resolve: {
    extensions: [`.js`, ".json", ".vue"],
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        use: {
          loader: "url-loader"
        },
        includes: [
          path.resolve(__dirname, "../src"),
          path.resolve(__dirname, "../src")
        ]
      },
      {
        test: /\.(ts|js)?$/,
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(vue)?$/,
        loader: "vue-loader",
        exclude: /node_modules/,
        include: [path.resolve(__dirname, "../src")]
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /node_modules/,
        include: [path.resolve(__dirname, "../src")]
      }
    ]
  },
  devtool: "inline-source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "award project",
      template: "./template.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      Vue: ["vue/dist/vue.esm.js", "default"]
    })
  ]
};
