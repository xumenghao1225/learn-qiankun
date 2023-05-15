const { defineConfig } = require('@vue/cli-service')
const packageName = require('./package.json').name;

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    // devServer: {
    //   headers: {
    //     "Access-Control-Allow-Origin": "*"
    //   }
    // },
    // output: {
    //   library: `${packageName}-[name]`,
    //   libraryTarget: 'umd',
    //   chunkLoadingGlobal: `webpackJsonp_${packageName}`,//这个是webpack5 更新的属性 之前是jsonpFunction
    // },
  },
})
