const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// console.log('__dirname : ', __dirname); --> __dirname :  E:\document\webpack
// console.log('path.resolve() : ', path.resolve()); --> path.resolve() :  E:\document\webpack
// console.log(`path.resolve(__dirname, 'dist') : `, path.resolve(__dirname, 'dist')); --> path.resolve(__dirname, 'dist') :  E:\document\webpack\dist

module.exports = (env) => {
    const isDevelopment = Boolean(env.development);//true
    return {
        mode: isDevelopment ? 'development' : 'production',
        entry: {
            app: path.resolve('src/script.js') //file đầu vào
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js', // name = app , contenthash = mã bất kì , file đầu ra
            clean: true // xoá những file cũ không cần thiết 
        },
        devtool: isDevelopment ? 'source-map' : false, // chỉ development mới có source-map , nếu production có sẽ làm tăng kích thước trang Web và làm lộ mã nguồn của bạn
        module: {
            rules: [
                {
                    test: /\.s[ac]ss|css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] // file app.css được sinh ra lúc ban đầu
                },
                {
                    test: /\.js$/, // lùi verson ở tất cả những file js
                    exclude: /node_modules/, // không áp dụng với các package trong node_modules
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        debug: true, // Hiển thị debug lên terminal để dễ debug
                                        useBuiltIns: 'usage', // Dùng cái này thì đơn giản nhất, không cần import core-js vào code
                                        corejs: '3.34.0' // nên quy định verson core-js để babel-preset-env nó hoạt động tối ưu (Kiểm tra trong devDependencies)
                                    }
                                ]
                            ]
                        }
                    }
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
}