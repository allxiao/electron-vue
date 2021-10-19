const path = require('path')
const rules = require('./webpack.rules')
const {VueLoaderPlugin} = require('vue-loader')

rules.push({
  test: /\.css$/,
  use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
}, {
  test: /\.vue$/,
  use: 'vue-loader'
})

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['*', '.js', '.ts', '.tsx', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'src')
    }
  }
}
