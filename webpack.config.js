const path = require('path')

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
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}