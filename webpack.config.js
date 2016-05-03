var path = require('path');

var ROOT  = path.resolve(__dirname),
    ENTRY = path.resolve(ROOT, './main.js'),
    DIST  = path.resolve(ROOT, './dist/');

var config = {
    entry: ENTRY,

    output: {
        path: DIST,
        filename: 'index.js',
    },

    // devServer: {
    //    inline: true,
    //    port: 7777
    // },

    module: {
        loaders: [{
            test: /\.(js|jsx)?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },
    babel: {
        presets: ['es2015', 'react']
    },
    resolve: {
        alias: {

        }
    },
    // 声明挂在window上的的第三方库变量
    externals: {
        jquery: 'jQuery'
    }
};

module.exports = config;
