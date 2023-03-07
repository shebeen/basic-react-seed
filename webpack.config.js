const path = require('path');
module.exports = {
    entry: './src/app.js',
    output:{
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module:{
        rules:[{
            loader:'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/,

        }]
    },
    devtool:'cheap-module-eval-source-map',
    devServer:{
        port:9000,
        host:'0.0.0.0',
        disableHostCheck:true,
        contentBase:path.join(__dirname,'public')
    }

};