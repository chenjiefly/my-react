var path = require('path');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var HtmlwebpackPlugin = require('html-webpack-plugin');

// __dirname为当前开发文件所在路径
// var ROOT_PATH = path.resolve(__dirname);
// var DIST_PATH = path.resolve(ROOT_PATH, 'dist');



module.exports = {
    entry: path.resolve(__dirname, './js/main.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js'  //'[name].js'
    },
    // devtool: 'source-map',  //enable dev source map
    
    // devServer: {  // enable dev server
    //     historyApiFallback: true,
    //     hot: true,
    //     inline: true,
    //     port: 7777,
    //     progress: true
    // },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.(jpg|png)$/,
            loader: 'url',
            query: {
                limit: 8192
            }
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.jsx?$/,
            loader: 'babel',
            // include: ROOT_PATH,
        }]
    },
    resolve: {
        alias: { // 路径重映射配置

        },
        extensions: ['', '.js', '.jsx']  // 把jsx这种扩展名添加进去，这样就可以在js中import加载jsx这种扩展名的脚本
                                         // 比如 Hello.jsx 这样的文件就可以直接用 require(./Hello) 引用
    },
    externals: { // 在页面中单独加载的第三方库变量
        // jquery: 'jQuery'
    },
    // babel: {
    //     presets: ['es2015', 'react']
    // },
    plugins: [
        // new HtmlwebpackPlugin({
        //     title: 'my react'
        // }),
        // new ExtractTextPlugin("[name].css")
    ]
};
