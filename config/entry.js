const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


const entryList = {
  mobile: {
    type: 'mobile',
    path: './src/mobile.js'
  },
  pc: {
    type: 'pc',
    path: './src/pc.js'
  }
}

function getEntry() {
  return Object.keys(entryList).map(key => {
    return {
      key: entryList[key].path
    }
  })
}

function htmlPlugins() {
  console.log(getEntry(), 23)
  let templateList = Object.keys(entries).map(key => {
    return new HtmlWebpackPlugin({
      filename: `${key}.html`,
      template: `./template.${process.env.NODE_ENV !== 'development' ? 'prod' : 'dev'}.html`,
      inject: true,
    })
  })
  return templateList
}

// function loaders() {
// }
module.exports = Object.keys(entryList).map(o => {
  return {
    mode: 'development',

    entry: `${entryList[o].path}`,
    output: {
      filename: `${entryList[o].path}_[name].[hash].js`,
      path: path.resolve(__dirname, "../dev_built"),
      chunkFilename: `[name].[hash].js`,
    },
    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    },
    stats: {
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    },
    resolve: {
      extensions: [`.js`, ".json", ".vue"],
      alias: {
        vue$: "vue/dist/vue.esm.js",
        TagCanvas: path.resolve(__dirname, "../common/lib/tagcanvas.js"),
        request: path.resolve(__dirname, "../utils/request.js"),
        "lottie-web": "lottie-web/build/player/lottie.js",
        lib: path.resolve(__dirname, "../common/lib"),
        components: path.resolve(__dirname, '../common/components'),
        views: path.resolve(__dirname, '../src/views')
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
        "/xian": "http://localhost:9081",
        "/task": "http://localhost:9081",
        '/common': 'http://localhost:9081',
        '/backend_rbac': 'http://localhost:9081',
      },
    },
    devtool: "inline-source-map",
    module: {
      rules: [
        {
          test: /\.(jpg|png|jpeg|gif)$/,
          loader: "url-loader",
          include: [
            path.resolve(__dirname, "../src"),
            path.resolve(__dirname, "../common/components"),
          ],
          options: {
            esModule: false,
            name: 'award_dist/imgs/[name].[ext]',
            limit: 10000
          }
        },
        {
          test: /\.(ts|js)?$/,
          loader: "babel-loader",
          exclude: /(node_modules|bower_components)/,
        },
        {
          test: /\.(vue)?$/,
          loader: "vue-loader",
          exclude: /node_modules/,
          include: [
            path.resolve(__dirname, "../src"),
            path.resolve(__dirname, "../common/components"),
          ],
        },
        {
          test: /\.(css|scss)$/,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
          include: [
            path.resolve(__dirname, '../src'),
            path.resolve(__dirname, '../common/components'),
          ]
        }
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new VueLoaderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.ProvidePlugin({
        Vue: ["vue/dist/vue.esm.js", "default"],
      }),
      new HtmlWebpackPlugin({
        filename: './index.html',
        title: 'award project',
        template: `./template.${process.env.NODE_ENV !== 'development' ? 'prod' : 'dev'}.html`,
        inject: true,
        // minify: {
        //     removeComments: true,
        //     collapseWhitespace: true,
        //     removeAttributeQuotes: true
        // },
        // chunksSortMode: 'dependency'
      }),
    ]
  }

})
// module.exports = {
//   entries,
//   htmlPlugins
// }