
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ROOT = process.cwd();

module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    watchOptions: {
      ignored: /node_modules/
    },
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: '8082',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader'
        }],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg|otf)(\?v=\d(\.\d){2})?$/,
        use: 'file-loader'
      },
      {
        test: /\.woff(2)?(\?v=\d(\.\d){2})?$/,
        use: 'url?limit=10000&minetype=application/font-woff'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'index.html',
      hash: true
    }),
  ]
}
