const fs = require('fs');
const path = require("path");

let uploadMockPlugin = function (options) {
    options = options || {};
    this.options = options;
}
uploadMockPlugin.prototype.apply = function (compiler) {
    compiler.plugin('after-emit', function (compilation, callback) {
        let assetList = Object.keys(compilation.assets);
        console.log(assetList[0], 12)
        assetList.forEach(assetPath => {
            let pathArr = assetPath.split('/');
            let destPath = assetPath.replace(pathArr[pathArr.length - 1], `copy_${pathArr[pathArr.length - 1]}`);
            console.log(destPath, 15)
            fs.rename(path.join(__dirname, '../', `built/${assetPath}`), path.join(__dirname, '../', `copy/${destPath}`), (err) => {
                if (err) {
                    console.log(err, 14)
                    return;
                };
                fs.stat(path.join(__dirname, '../', `copy/${destPath}`), (error, stats) => {
                    if (error) {
                        console.log(error, 19)
                        return;
                    }
                })
            })
        })
        // console.log(assetList, 10)
    })
    // compiler.hooks.emit.tap('MyPlugin', compilation => {
    // })
}
module.exports = uploadMockPlugin;
