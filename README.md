1. 创建package.json文件

        npm init

2. 安装webpack

        npm install --save_dev webpack

3. 新建文件夹app与public
> app 用来存放原始数据和JavaScript模块
> public 用来存放供浏览器读取的文件

4. 创建三个文件
> index.html --放在public文件夹中;
> Greeter.js --放在app文件夹中;
> main.js --放在app文件夹中;

5. 通过配置文件来使用
新建webpack.config.js 文件
添加

        module.exports = {
            entry: __dirname + "/app/main.js", // 唯一入口文件
            output: {
                path: __dirname + "/public",    // 打包后文件存放路径
                filename: "bundle.js"           // 打包后输出文件的文件名
            }
        }

6. 更快捷的执行打包任务
在package.json文件中的scripts对象中添加

        "start": "webpack"

执行：

        npm start

7. 生成Source Maps（使调试更容易）
在webpack.config.js 文件
添加

        devtool: "eval-source-map"

8. 使用webpack构建本地服务器

        npm install --save-dev webpack-dev-server

 在webpack.config.js 文件
 添加

    devServer: {
        contentBase: "./public",    // 本地服务器所加载的页面所在的目录
        historyApiFallback: true,   // 不跳转
        inline: true                // 实时刷新
    }

在package.json中的scripts对象中添加如下命令，用以开启本地服务器：

        "server": "webpack-dev-server --open"

在终端中输入

        npm run server

即可在本地的8080端口查看结果
9. Babel
a. Babel的安装，一次性安装这些依赖包

        npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react

b. Babel的配置

        module: {
                rules: [
                    {
                        test: /(\.jsx|\.js)$/,
                        use: {
                            loader: "babel-loader",
                            options: {
                                presets: [
                                    "env", "react"
                                ]
                            }
                        },
                        exclude: /node_modules/
                    }
                ]
            }

10. React的安装

    npm install --save react react-dom