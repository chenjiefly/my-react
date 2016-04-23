var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlwebpackPlugin = require('html-webpack-plugin');

// __dirname为当前开发文件所在路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');


module.exports = {
  entry: {
    app: path.resolve(APP_PATH, 'index.jsx')
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  //enable dev source map
  devtool: 'eval-source-map',
  //enable dev server
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  //babel重要的loader在这里
  module: {
    loaders: [
      {
        test: /\.css$/, 
        loader: 'style!css'
      },
      {
        test: /\.js$/, 
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|png)$/, 
        loader: 'url',
        query: {
          limit: 8192
        }
      },
      {
        test: /\.scss$/, 
        loader: 'style!css!sass'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: APP_PATH,
        query: {
          //添加两个presents 使用这两种presets处理js或者jsx文件
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    alias: {

    },
    extensions: {
      
    }
  },
  externals: {  // 在页面中单独加载的第三方库变量
    // jquery: 'jQuery'
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'My first react app'
    }),
    new ExtractTextPlugin("[name].css")
  ]
};