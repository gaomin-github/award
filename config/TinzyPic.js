const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { apply } = require("file-loader");

function TinzyPic() {}

TinzyPic.prototype.beforeHtmlGeneration = function beforeHtmlGeneration(
  compilation,
  pluginArgs,
  callback
) {
  let self = this;
  console.log(pluginArgs.assets, 11);
//   if (pluginArgs.assets && pluginArgs.assets["js"]) {
//     pluginArgs.assets["js"] = pluginArgs.assets["js"].map((o) => {
//       return `${o}.gz`;
//     });
//   }
  // if (pluginArgs.assets && pluginArgs.assets["css"]) {
  //   pluginArgs.assets["css"] = pluginArgs.assets["css"].map((o) => {
  //     return `${o}.gz`;
  //   });
  // }
  console.log(pluginArgs.assets, 19);
  callback(null, pluginArgs);
};

TinzyPic.prototype.registerHook = function registerHook(compilation) {
  let self = this;
  if (HtmlWebpackPlugin && HtmlWebpackPlugin.getHooks) {
    HtmlWebpackPlugin.getHooks(compilation).beforeAssetTagGeneration.tapAsync(
      "a",
      function(compilation) {
        console.log("HtmlWebpackPlugin beforeAssetTagGeneration");
      }
    );

    HtmlWebpackPlugin.getHooks(compilation).alterAssetTags.tapAsync(
      "a",
      function(data, callback) {
        console.log(data.assetTags, 17);
      }
    );
  } else if (
    compilation.hooks.htmlWebpackPluginAlterAssetTags &&
    compilation.hooks.htmlWebpackPluginBeforeHtmlGeneration
  ) {
    compilation.hooks.htmlWebpackPluginAlterAssetTags.tapAsync(
      "TinzyPic",
      this.beforeHtmlGeneration.bind(this, compilation)
    );
    compilation.hooks.htmlWebpackPluginBeforeHtmlGeneration.tapAsync(
      "TinzyPic",
      this.beforeHtmlGeneration.bind(this, compilation)
    );
  } else {
    console.log("hooks not exist", 45);
  }
};

// gin

TinzyPic.prototype.apply = function apply(compiler) {
  //   if (compiler.hooks) {
  //     compiler.hooks.afterPlugins.tap("htmlMock", this.afterPlugin.bind(this));
  //   }

  compiler.hooks.afterCompile.tap(
    "HtmlWebpackPluginHooks",
    // this._printAsset.bind(this)
    // compiler.hooks.emit.tap(
    this.registerHook.bind(this)
  );
};
TinzyPic.prototype._printAsset = function _printAsset(compilation) {
  const { assets } = compilation;
  Object.keys(assets).map((assetName) => {
    console.log(assetName, 76);
  });
};

module.exports = TinzyPic;
