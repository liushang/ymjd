const path = require('path')
const vueLoader = require.resolve('vue-loader')
const vueReg = /\.vue$/
const babelExclude = [
  /node_modules(?!(\/|\\)@bilibili\/)/,
]

const jsReg = /\.(js|jsx|ts|tsx)$/
const swcLoader = 'swc-loader'
const nodeModulesReg = /node_modules/


const getLoader = require('./webpack/getLoader.js').getLoader
const { VueLoaderPlugin } = require('vue-loader')
const { defineConfig } = require('@vue/cli-service')

const isDev = true

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
        .loader('vue-loader')
    config.module.rule('js').uses.clear()
    config.module.rule('ts').uses.clear()
    config.module.rule('js').test(jsReg)
    .use(swcLoader).loader(swcLoader).options({
      module: {
        type: 'es6',
        ignoreDynamic: true,
      },
      "jsc": {
        parser: {
          syntax: 'typescript',
          dynamicImport: true,
          decorators: true,
          tsx: true,
        },
        loose: true,
        target: 'es2015',
        externalHelpers: true,
        transform: {
          legacyDecorator: true,
          decoratorMetadata: true,
        },
      }
    })
  }
  // configureWebpack: {
  //   module: {
  //     rules: [
  //       {
  //         test: /\.vue$/,
  //         loader: 'vue-loader'
  //       },
  //       {
  //         test: jsReg,
  //         loader: swcLoader,
  //         options: {
  //           module: {
  //             type: 'es6',
  //             ignoreDynamic: true,
  //           },
  //           "jsc": {
  //             parser: {
  //               syntax: 'typescript',
  //               dynamicImport: true,
  //               decorators: true,
  //               tsx: true,
  //             },
  //             loose: true,
  //             target: 'es5',
  //             externalHelpers: true,
  //             transform: {
  //               legacyDecorator: true,
  //               decoratorMetadata: true,
  //             },
  //           }
  //         },
  //         exclude: babelExclude,
  //       }
  //     ],
  //   },
  //   plugins: [ new VueLoaderPlugin() ]
  // }
})
