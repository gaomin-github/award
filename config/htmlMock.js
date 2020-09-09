const HtmlWebpackPlugin = require("html-webpack-plugin");
const { apply } = require("file-loader");

function htmlMock() {}

htmlMock.prototype.beforeHtmlGeneration = function beforeHtmlGeneration(
  compilation,
  pluginArgs,
  callback
) {
  let self = this;
  console.log(pluginArgs.assets, 11);
  if (pluginArgs.assets && pluginArgs.assets["js"]) {
    pluginArgs.assets["js"] = pluginArgs.assets["js"].map((o) => {
      return `${o}.gz`;
    });
  }
  // if (pluginArgs.assets && pluginArgs.assets["css"]) {
  //   pluginArgs.assets["css"] = pluginArgs.assets["css"].map((o) => {
  //     return `${o}.gz`;
  //   });
  // }
  console.log(pluginArgs.assets, 19);
  callback(null, pluginArgs);
};

htmlMock.prototype.registerHook = function registerHook(compilation) {
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
      "htmlMock",
      this.beforeHtmlGeneration.bind(this, compilation)
    );
    compilation.hooks.htmlWebpackPluginBeforeHtmlGeneration.tapAsync(
      "htmlMock",
      this.beforeHtmlGeneration.bind(this, compilation)
    );
  } else {
    console.log("hooks not exist", 45);
  }
};

// gin

htmlMock.prototype.apply = function apply(compiler) {
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
htmlMock.prototype._printAsset = function _printAsset(compilation) {
  const { assets } = compilation;
  Object.keys(assets).map((assetName) => {
    console.log(assetName, 76);
  });
};

module.exports = htmlMock;
