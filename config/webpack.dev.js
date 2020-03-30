const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    mode: "development",
    entry: {
        main: ["./src/app.js"]
    },
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, "../dev_built"),
        chunkFilename: `[name].[hash].js`
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
            '/xian/xianProperty': {
                target: 'http://localhost:5000',
                changeOrigin: true
            }

        }
    },
    resolve: {
        extensions: [`.js`, ".json", ".vue"],
        alias: {
            vue$: "vue/dist/vue.esm.js",
            TagCanvas: path.resolve(__dirname, "../common/lib/tagcanvas.js")
        }
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|jpeg|gif)$/,
                use: {
                    loader: "url-loader"
                },
                include: [
                    path.resolve(__dirname, "../src"),
                    path.resolve(__dirname, "../common/components")
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
                include: [
                    path.resolve(__dirname, "../src"),
                    path.resolve(__dirname, "../common/components")
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, "../src"),
                    path.resolve(__dirname, "../common/components")
                ]
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
