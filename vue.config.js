const webpack = require('webpack');

module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  // https://cli.vuejs.org/guide/webpack.html#chaining-advanced
  chainWebpack: config => {
    config.plugins.delete('prefetch');
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        VUE_APP_LOAD_MODE: JSON.stringify('eager')
      })
    ],
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.runtime.esm.js'
      }
    },
    devtool: 'source-map'
  },
  filenameHashing: true,
  productionSourceMap: false
};
