const fs = require('fs')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const rootPath = `${__dirname}/..`
const distPath = `${rootPath}/dist`
const srcRootPath = `${rootPath}`

module.exports = env => {
  const config = {}

  config.entry = {
    "index": path.resolve(__dirname, './src/index.js'),
    "index.min": path.resolve(__dirname, './src/index.js')
  }

  config.output = {
    filename: '[name].[chunkHash].js',
    path: path.resolve(__dirname, "dist")
  }

  config.module = {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
  }

  config.devtool = "source-map",

  config.plugins = [
    new UglifyJsPlugin({
      include: /\.min.*\.js$/
    }),
    new HtmlWebpackPlugin({
      chunks: ['index.min'],
      template: path.resolve(__dirname, './index.html')
    })
  ]

  return config
}
