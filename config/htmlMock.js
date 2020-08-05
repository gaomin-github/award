const HtmlWebpackPlugin = require("html-webpack-plugin");

function htmlMock() {}

htmlMock.prototype.beforeHtmlGeneration = function beforeHtmlGeneration(
  compilation,
  pluginArgs,
  callback
) {
  let self = this;
  if (pluginArgs.assets && pluginArgs.assets["js"]) {
    pluginArgs.assets["js"] = pluginArgs.assets["js"].map((o) => {
      console.log(o, 14);
      return `${o}.gz`;
    });
  }
  if (pluginArgs.assets && pluginArgs.assets["css"]) {
    pluginArgs.assets["css"] = pluginArgs.assets["css"].map((o) => {
      return `${o}.gz`;
    });
  }
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

// htmlMock.prototype.thisCompilation = function thisCompilation(
//   compiler,
//   compilation
// ) {
//   compiler.hooks.compilation.tap(
//     "HtmlWebpackPluginHooks",
//     this.registerHook.bind(this)
//   );
// };

// htmlMock.prototype.afterPlugin = function afterPlugin(compiler) {
//   if (compiler.hooks) {
//     compiler.hooks.thisCompilation.tap(
//       "htmlMock",
//       this.thisCompilation.bind(this, compiler)
//     );
//   } else {
//     compiler.plugin(
//       "this-compilation",
//       this.thisCompilation.bind(this, compiler)
//     );
//   }
// };

htmlMock.prototype.apply = function apply(compiler) {
  //   if (compiler.hooks) {
  //     compiler.hooks.afterPlugins.tap("htmlMock", this.afterPlugin.bind(this));
  //   }

  compiler.hooks.afterCompile.tap(
    "HtmlWebpackPluginHooks",
    this.registerHook.bind(this)
  );
};

module.exports = htmlMock;
