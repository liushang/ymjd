const { defineConfig } = require('@vue/cli-service')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = defineConfig({
  transpileDependencies: [
    // 'vue-echarts',
    'resize-detector'
  ],
  configureWebpack(config) {
    config.plugins.push(new BundleAnalyzerPlugin())
  }
})
