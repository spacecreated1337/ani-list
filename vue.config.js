const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const {
  defineConfig
} = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  configureWebpack: {
    plugins: [new MiniCssExtractPlugin()]
  },
  publicPath: process.env.NODE_ENV === 'production' ?
    '/ani-list/' : '/',
});