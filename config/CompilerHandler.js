const HtmlWebpackPlugin = require("html-webpack-plugin");
const path=require('path')
const fs=require('fs');
const tinify=require('tinify');
const Tinykey='3bWqN6M14QmB42hY24cQBVpG6Qq6XwBG'

tinify.key=Tinykey
// const { apply } = require("file-loader");

function TinzyPic() {}
// 1.编译结束，将文件上传压缩，再上传cdn（文件名不变）；
    // 1）编译文件名修改地方？url-loader
    // 2）
// 2.编译前上传，编译时替换文件名；


// TinzyPic.prototype.registerHook = function registerHook(compilation) {
//   let self = this;
//   if (HtmlWebpackPlugin && HtmlWebpackPlugin.getHooks) {
//     HtmlWebpackPlugin.getHooks(compilation).beforeAssetTagGeneration.tapAsync(
//       "a",
//       function(compilation) {
//         console.log("HtmlWebpackPlugin beforeAssetTagGeneration");
//       }
//     );

//     HtmlWebpackPlugin.getHooks(compilation).alterAssetTags.tapAsync(
//       "a",
//       function(data, callback) {
//         // console.log(data.assetTags, 17);
//       }
//     );
//   } else if (
//     compilation.hooks.htmlWebpackPluginAlterAssetTags &&
//     compilation.hooks.htmlWebpackPluginBeforeHtmlGeneration
//   ) {
//     compilation.hooks.htmlWebpackPluginAlterAssetTags.tapAsync(
//       "TinzyPic",
//       this.beforeHtmlGeneration.bind(this, compilation)
//     );
//     compilation.hooks.htmlWebpackPluginBeforeHtmlGeneration.tapAsync(
//       "TinzyPic",
//       this.beforeHtmlGeneration.bind(this, compilation)
//     );
//   } else {
//     console.log("hooks not exist", 45);
//   }
// };

// TinzyPic.prototype.apply = function apply(compiler) {
//   //   if (compiler.hooks) {
//   //     compiler.hooks.afterPlugins.tap("htmlMock", this.afterPlugin.bind(this));
//   //   }

//   compiler.hooks.afterCompile.tap(
//     "HtmlWebpackPluginHooks",
//     // this._printAsset.bind(this)
//     // compiler.hooks.emit.tap(
//     this.registerHook.bind(this)
//   );
// };

TinzyPic.prototype.apply = function apply(compiler) {
  compiler.plugin('after-emit',(compilation,callback)=>{
    try{
      let fileList=filterPics(compilation.assets);
    }catch(e){
      console.log(e,'apply error')
    }
  })
};

const limitSize=50*1024
function filterPics(assets){
  // console.log(assets,24)
  // Object.keys(fileList).forEach(o=>{

  //   console.log(o,25)
  // })
  let relativePathList=Object.keys(assets)
  // console.log(relativePathList,30)
  for(let curPath of relativePathList){
    if((/.(png|jpg|jpeg|gif)/g).test(curPath.toLocaleLowerCase())){
      // 处理图片资源
      // console.log(assets[curPath].existsAt,33)
      let realPath=assets[curPath].existsAt;
      fs.stat(realPath,function(error,stats){
        if(stats.size>limitSize){
          compressPic(realPath)
        }
        // console.log('size',stats.size,40)
      })
  
    }
  }

}
// tiny密钥
function compressPic(path){
  console.log(path,100)
  let newPath=path.replace(/\b(?=\.)/g,'_01');

  console.log(newPath,102)
  let obj=tinify.fromFile(path).toFile(newPath,function (err){
    console.log(err,104)
  });
}
module.exports = TinzyPic;
