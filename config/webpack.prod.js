const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 进度条
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
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
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin({
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } }
        }), new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true,
            uglifyOptions: {
                comments: false,
                warnings: false,
                compress: {
                    unused: true,
                    dead_code: true,
                    collapse_vars: true,
                    reduce_vars: true
                },
                output: {
                    comments: false
                }
            }
        })]
    }
});
// console.log(prodWebpackConfig.module,59)
module.exports = prodWebpackConfig;
