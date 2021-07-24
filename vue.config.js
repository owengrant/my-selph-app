module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/selph": {
        target: "http://localhost:8000",
        pathRewrite: { "^/selph": "" },
      },
    },
  },
};
