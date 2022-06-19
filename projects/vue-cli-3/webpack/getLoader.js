const vueLoader = require.resolve('vue-loader')
const vueReg = /\.vue$/
const babelExclude = [
  /node_modules(?!(\/|\\)@bilibili\/)/,
]
function getJsHandleLoader () {
    const jsReg = /\.(js|jsx|ts|tsx)$/
    const swcLoader = 'swc-loader'
    const nodeModulesReg = /node_modules/
    return {
        test: jsReg,
        loader: swcLoader,
        options: {
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
              react: {
                runtime: 'automatic', // or classic
                throwIfNamespace: true,
                useBuiltins: true,
                development: true,
              },
            },
          }
        },
        exclude: babelExclude,
    }
}
module.exports = {
  getLoader() {
    return [
      // vue
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // js ts
      // getJsHandleLoader(), 
  ]
  }
}