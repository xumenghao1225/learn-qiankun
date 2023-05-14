const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      port: 7101,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    output: {
      // 微应用的包名，这里与主应用中注册的微应用名称一致
      library: `qiankunvue3`,
      // 将你的 library 暴露为所有的模块定义下都可运行的方式
      libraryTarget: "umd",
      chunkLoadingGlobal: `webpackJsonp`, //这个是webpack5 更新的属性 之前是jsonpFunction
    },
  },
});
