// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = (env) => {
  let rel_path = env.file.dirname.substring(env.cwd.length + 1, env.file.dirname.length);
  let checkout_pc = (/^src\\views\\/g).test(rel_path)
  return (
    {
      plugins: {
        "postcss-import": {},
        "postcss-url": {},
        "postcss-aspect-ratio-mini": {},
        "postcss-write-svg": { utf8: false },
        "postcss-cssnext": {},
        "postcss-px-to-viewport": {

          viewportWidth: checkout_pc ? 1920 : 375,
          unitPrecision: 3,
          viewportUnit: "vw",
          selectorBlackList: [".ignore", ".hairlines"],
          minPixelValue: 1,
          mediaQuery: false,
        },
        "postcss-viewport-units": {},
        cssnano: {
          preset: "advanced",
          autoprefixer: false,
          "postcss-zindex": false,
        },
      },
    }
  )
};
