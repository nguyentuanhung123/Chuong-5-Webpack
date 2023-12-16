const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// console.log('__dirname : ', __dirname); --> __dirname :  E:\document\webpack
// console.log('path.resolve() : ', path.resolve()); --> path.resolve() :  E:\document\webpack
// console.log(`path.resolve(__dirname, 'dist') : `, path.resolve(__dirname, 'dist')); --> path.resolve(__dirname, 'dist') :  E:\document\webpack\dist

module.exports = {
    mode: 'production',
    entry: {
        app: path.resolve('src/script.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss|css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/template.html'
        })
    ]
}