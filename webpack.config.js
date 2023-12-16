const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// console.log('__dirname : ', __dirname); --> __dirname :  E:\document\webpack
// console.log('path.resolve() : ', path.resolve()); --> path.resolve() :  E:\document\webpack
// console.log(`path.resolve(__dirname, 'dist') : `, path.resolve(__dirname, 'dist')); --> path.resolve(__dirname, 'dist') :  E:\document\webpack\dist

module.exports = {
    mode: 'production',
    entry: {
        app: path.resolve('src/script.js') //file đầu vào
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js', // name = app , contenthash = mã bất kì , file đầu ra
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss|css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] // file app.css được sinh ra lúc ban đầu
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css' // file app.123....css và app.123....js được sinh ra để thể hiện 1 chức năng mới
        }),
        new HtmlWebpackPlugin({
            title: 'Webpack App', // tên tiêu đề phải đc đặt trong template
            filename: 'index.html', //tên file được sinh ra
            template: 'src/template.html' //file mẫu được gắn vào khi index.html được sinh ra
        })
    ],
    devServer: {
        static: {
            directory: 'dist' // Đường dẫn tương đối đến với thư mục chứa index.html
        },
        port: 3000, // Port thay cho port mặc định
        open: true, // Mở trang webpack khi chạy terminal
        hot: true, // Bật tính năng reload nhanh Hot Module Replacement
        compress: true, // Bật Gzip cho các tài nguyên
        historyApiFallback: true // Set true nếu bạn dùng cho các SPA và sử dụng History API của HTML5
    }
}