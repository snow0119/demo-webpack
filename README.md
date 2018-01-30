1. 创建package.json文件

        npm init

2. 安装webpack

        npm install --save_dev webpack

3. 新建文件夹app与public
> app 用来存放原始数据和JavaScript模块
> public 用来存放供浏览器读取的文件

4.创建三个文件
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
