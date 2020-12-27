const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

const baseWebpackConfig = require("./webpack.base.js");
const manifestPlugin=require('pwa-manifest-webpack-plugin');
const devWebpackConfig = merge(baseWebpackConfig, {
  mode: "development",
  output: {
    // libraryTarget: "commonjs2",
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../dev_built"),
    chunkFilename: `[name].[hash].js`,
  },
  resolve: {
    // extensions: ['.js', '.json', '.vue'],
    alias: {
      // vue$: 'vue/dist/vue.esm.js'
    },
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
      "/xian":"http://59.110.143.244:9081",
      // "/xian": "http://localhost:9081",
      "/task": "http://localhost:9081",
      "/common": "http://localhost:9081",
    },
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
        include: [
          path.resolve(__dirname, "../src"),
          path.resolve(__dirname, "../common/components"),
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      //   Vue: ["vue/dist/vue.esm.js", "default"],
    }),
    new manifestPlugin({
      name:'award测试',
      short_name:'award',
      description:'award测试——pwa测试描述',
      display:'standalone',
      start_url:'/',
      orientation:'portrait-primary',
      icon:{
        src:path.resolve('src/test.png'),
        sizes:[200]
      },
      background_color: '#2d8cf0', // background_color是在应用的样式资源为加载完毕前的默认背景，因此会展示在开屏界面。background_color加上我们刚才定义的icons就组成了Web App打开时的“开屏图”。
      theme_color: '#2d8cf0' // 
        })
  ],
});
module.exports = devWebpackConfig;
// 可以增加编译完成提示访问链接
