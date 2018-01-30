module.exports = {
    entry: __dirname + "/app/main.js", // 唯一入口文件
    output: {
        path: __dirname + "/public",    // 打包后文件存放路径
        filename: "bundle.js"           // 打包后输出文件的文件名
    }
}