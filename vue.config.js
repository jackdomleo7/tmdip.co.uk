module.exports = {
  lintOnSave: false,
  outputDir: "docs",
  publicPath: "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/main.scss";
        `,
      },
    },
  },
};
