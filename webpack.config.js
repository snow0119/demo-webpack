const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: "eval-source-map",
    entry: __dirname + "/src/main.js", // 唯一入口文件
    output: {
        path: __dirname + "/build",    // 打包后文件存放路径
        filename: "bundle.js"           // 打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./public",        // 本地服务器所加载的页面所在的目录
        historyApiFallback: true,       // 不跳转
        inline: true,                    // 实时刷新
        hot: true
    },
    module: {
        rules: [{
            test: /(\.js|\.jsx)$/,
            use: {
                loader: "babel-loader"
            },
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader",
                options: {
                    modules: true, // 指定启用css modules
                    localIdentName: '[name]__[local]--[hash:base64:5]'
                }
            }, {
                loader: "postcss-loader"
            }]
        }]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.tmpl.html' // new 一个该插件的实例，并传入相关参数
        }),
        new webpack.HotModuleRepalcementPlugin()  // 热加载插件
    ]
}