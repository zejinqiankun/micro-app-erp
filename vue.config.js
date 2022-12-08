const { defineConfig } = require('@vue/cli-service')
const {name} = require('./package.json')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8081, // 父应用配置微应用端口，要与微应用端口一致
    allowedHosts: 'all', // 关闭主机检查，使微应用可以被 fetch
    headers: {
      'Access-Control-Allow-Origin': '*' //因为qiankun内部请求都是fetch来请求资源，所以子应用必须允许跨域
    }
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`, // 微应用的包名，这里与主应用中注册的微应用名称一致
      libraryTarget: 'umd', // 这里设置为umd意思是在 AMD 或 CommonJS 的 require 之后可访问。
      chunkLoadingGlobal: `webpackJsonp_${name}` // webpack用来异步加载chunk的JSONP 函数。
    }
  }
})
