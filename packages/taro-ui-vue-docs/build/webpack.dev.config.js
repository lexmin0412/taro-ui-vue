const path = require('path')
const webpack = require('webpack')

const conf = require('./conf')
const { getProjectRoot } = require('./util')

const projectRoot = getProjectRoot()

module.exports = {
  mode: 'development',
  devtool: 'inline',
  output: {
    path: path.resolve(projectRoot, conf.output),
    filename: 'js/[name].js',
    chunkFilename: 'chunk/[name].chunk.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      BASE_NAME: '`/`',
      BUILD_MODE: `'dev'`,
    }),
  ],
}
