const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 进度条
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

const VueLoaderPlugin = require("vue-loader/lib/plugin");
const merge = require('webpack-merge');

const baseWebpackConfig = require('./webpack.base');
const prodWebpackConfig = merge(baseWebpackConfig, {
    mode: "production",
    output: {
        filename: "award_dist/js/[name].[hash].js",
        chunkFilename: "award_dist/js/[name].[hash].js",
        crossOriginLoading: "anonymous",
        path: path.resolve(__dirname, "../built"),
        publicPath: "./",
    },
    devtool: "inline-source-map",
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: '"production"',
            },
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "./index.html",
            title: "award project",
            template: "./template.html",
            inject: true,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            Vue: ["vue/dist/vue.esm.js", "default"],
        }),
        new ProgressBarPlugin(),
        // new MinCssExtractPlugin({
        //     filename:'[name].css',
        //     chunkFilename:'[id].css'
        // })

    ],
});
// console.log(prodWebpackConfig.module,59)
module.exports = prodWebpackConfig;
