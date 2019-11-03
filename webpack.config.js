const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output:{
        path: path.resolve(__dirname,'dist'),  //joining the current working directory with dist.js. This is the path, where we want our bundle to be in.
        filename: 'js/bundle.js'
    },
    devServer : {
        contentBase : './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/index.html'
    })
    ]
};