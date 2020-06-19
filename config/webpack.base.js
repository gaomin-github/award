const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
    entry: {
        main: ['./src/app.js']
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
            // vue$: "vue/dist/vue.esm.js",
            TagCanvas: path.resolve(__dirname, "../common/lib/tagcanvas.js"),
            request: path.resolve(__dirname, "../utils/request.js"),
            "lottie-web": "lottie-web/build/player/lottie.js",
            lib: path.resolve(__dirname, "../common/lib"),
            components: path.resolve(__dirname, '../common/components')
        },
    },
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
            // {
            //     test: /\.(css|scss)$/,
            //     use: process.env.NODE_ENV !== 'development' ? [{
            //         loader: MinCssExtractPlugin.loader,
            //         options: {
            //             publicPath: '../../',
            //             // outputPath: '../built/award_dist/css/',
            //         }
            //     }, 'css-loader', "postcss-loader", "sass-loader"] : ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
            //     exclude: /node_modules/,
            //     include: [
            //         path.resolve(__dirname, "../src"),
            //         path.resolve(__dirname, "../common/components"),
            //     ],
            // }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
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
console.log(`process.env.NODE_ENV：${process.env.NODE_ENV}`)