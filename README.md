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

11. CSS
a. 安装
webpack提供两个工具处理样式表，css-loader 和 style-loader，二者处理的任务不同，css-loader使你能够使用类似@import 和 url(...)的方法实现 require()的功能,style-loader将所有的计算后的样式加入页面中，二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中。

        npm install --save-dev style-loader css-loader

b. 使用

        module.exports = {

           ...
            module: {
                rules: [
                    {
                        test: /(\.jsx|\.js)$/,
                        use: {
                            loader: "babel-loader"
                        },
                        exclude: /node_modules/
                    },
                    {
                        test: /\.css$/,
                        use: [
                            {
                                loader: "style-loader"
                            }, {
                                loader: "css-loader"
                            }
                        ]
                    }
                ]
            }
        };

12. CSS module
在webpack.config.js中添加

        options: {
            modules: true, // 指定启用css modules
            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
        }

13. CSS预处理器:可以把特殊类型的语句转化为浏览器可识别的CSS语句。
存在一个CSS的处理平台-PostCSS，它可以帮助你的CSS实现更多的功能。
举例来说如何使用PostCSS，我们使用PostCSS来为CSS代码自动添加适应不同浏览器的CSS前缀。

首先安装postcss-loader 和 autoprefixer（自动添加前缀的插件）

        npm install --save-dev postcss-loader autoprefixer


[原文链接](https://www.jianshu.com/p/42e11515c10f)