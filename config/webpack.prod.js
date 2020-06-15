const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 进度条
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
// css压缩
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// js压缩
const TerserPlugin = require('terser-webpack-plugin');
// 多线程编译，加快打包速度
const HappyPack = require('happypack');
const happyLoaderId = 'happypack-for-react-babel-loader';
// 编译分析
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// preload
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const merge = require('webpack-merge');

const baseWebpackConfig = require('./webpack.base');
const prodWebpackConfig = merge(baseWebpackConfig, {
    mode: "production",
    output: {
        filename: "award_dist/js/[name].[chunkhash].js",
        chunkFilename: "award_dist/js/[name].[chunkhash].js",
        crossOriginLoading: "anonymous",
        path: path.resolve(__dirname, "../built"),
        publicPath: "./",
    },
    devtool: "inline-source-map",
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'happypack/loader',
            query: {
                id: happyLoaderId
            },
            include: '/../src'
        }]
    },
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
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            Vue: ["vue/dist/vue.esm.js", "default"],
        }),
        new ProgressBarPlugin(),
        new PreloadWebpackPlugin({
            rel: 'preload',
            as: 'script'
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    // maxSize: 5000,
                    chunks: 'initial',
                    priority: 10,
                },
                common: {
                    name: 'common',
                    test: /[\\/]src[\\/]/,
                    // minSize: 1024,
                    chunks: 'async',
                    priority: 5
                }
            }
        },
        minimizer: [new OptimizeCssAssetsPlugin({
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } }
        }),
        new TerserPlugin({
            cache: true,
            parallel: true,
            sourceMap: true,
            terserOptions: {
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
        })
            //  new UglifyJsPlugin({
            //     cache: true,
            //     parallel: true,
            //     sourceMap: true,
            //     uglifyOptions: {
            //         comments: false,
            //         warnings: false,
            //         compress: {
            //             unused: true,
            //             dead_code: true,
            //             collapse_vars: true,
            //             reduce_vars: true
            //         },
            //         output: {
            //             comments: false
            //         }
            //     }
            // })
        ]
    }
});
if (process.env.npm_config_report) {
    prodWebpackConfig.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerHost: 'localhost',
        analyzerPort: 8090,
        reportFilename: 'report.html',
        defaultSizes: 'parsed',
        generateStatsFile: false,
        statsFilename: 'stats.json',
        statsOptions: null,
        logLevel: 'info'
    }))
}

prodWebpackConfig.plugins.push()
module.exports = prodWebpackConfig;
