var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var cssnext = require('cssnext');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
// var mixins = require('./app/public/css/mixins.js');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = TARGET === 'build' ?
       path.resolve(ROOT_PATH, 'build') :
       path.resolve(ROOT_PATH, 'build-dev');

var common = {
  entry: [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    APP_PATH
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.[hash].min.js',
    publicPath: '/',
    chunkFilename: "[name].[chunkhash].min.js"
  },
  module: {
    rules:[
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          loader: 'css-loader!postcss-loader',
        })
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }, {
        test: /\.(ttf|eot|svg|otf)(\?v=\d(\.\d){2})?$/,
        loader: 'file'
      }, {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.resolve(ROOT_PATH, 'app')
      },
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: function(webpack) {
          return [
            require('postcss-import')(),
            require('postcss-url')(),
            require('postcss-px2rem')({remUnit: 75}),
            require("postcss-mixins")(),
            require('postcss-cssnext')({
              browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9',
              ]
            }),
            require("postcss-nested")()
          ]
        }
      },

    }),

    new HtmlWebpackPlugin({
      title: '掉钱眼儿',
      favicon: '',
      template: 'template-index.html',
      inject: 'body'
    })
  ]
};

if (TARGET === 'start' || TARGET === 'dev') {
  module.exports = merge(common, {
    devtool: '#cheap-module-eval-source-map',
    module: {
      rules: [{
          test: /\.(js|jsx)$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          include: path.resolve(ROOT_PATH, 'app'),
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        }
      ],
    },

    plugins: [
      // CopyWebpackPlugin([
      //   {from: APP_PATH + '/utils/godcss.js'}
      // ])
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"'
      }),

      // new ExtractTextPlugin('bundle.[contenthash].min.css'),

      new webpack.HotModuleReplacementPlugin(),
    ]
  })
}


if (TARGET === 'build') {
  module.exports = merge(common, {
    devtool: '#cheap-module-source-map',
    plugins: [
      new ExtractTextPlugin('bundle.[contenthash].min.css'),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
      }),
      new OccurrenceOrderPlugin(),
      new UglifyJsPlugin({
        compress: {
          warnings: true
        }
      })
    ]
  })
}