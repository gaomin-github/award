const path=require('path')
module.exports={
    entry:{
        main:['./src/app.js']
    },
    node:{
        fs:'empty',
        net:'empty',
        tls:'empty'
    },
    resolve:{
        extensions: [`.js`, ".json", ".vue"],
        alias: {
            vue$: "vue/dist/vue.esm.js",
            TagCanvas: path.resolve(__dirname, "../common/lib/tagcanvas.js"),
            request: path.resolve(__dirname, "../utils/request.js"),
            "lottie-web": "lottie-web/build/player/lottie.js",
            lib: path.resolve(__dirname, "../common/lib"),
            components: path.resolve(__dirname, '../common/components')
        },
    },
    module:{
        rules: [
            {
                test: /\.(jpg|png|jpeg|gif)$/,
                use: {
                    loader: "url-loader",
                },
                include: [
                    path.resolve(__dirname, "../src"),
                    path.resolve(__dirname, "../common/components"),
                ],
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
                use: ["style-loader", "css-loader", "postcss-loader","sass-loader"],
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, "../src"),
                    path.resolve(__dirname, "../common/components"),
                ],
            },
        ],
    }
}