
## Screep游戏本地编码环境

1. 本项目提供了基本的本地向服务器Commit local分支的方法，详见`提交代码`小节。
1. 集成了js代码补全库：[ScreepsAutocomplete](https://github.com/Garethp/ScreepsAutocomplete)，配置方法见源库的Readme.md文件。
1. 更多有趣的编程扩展，见[第三方工具](https://docs.screeps.com/third-party.html)、[本地开发和API接口](https://docs.screeps.com/commit.html).

## 项目环境搭建
项目环境为Node.js,需要搭建grunt及其脚手架.

具体过程为：
进入`.\Screeps\Scripts`，依次执行以下命令：

    npm install -g grunt-cli

    npm install grunt --save-dev

    npm install grunt-screeps

**不建议**直接利用Scripts中的`package-lock.json`执行`npm init`；

## 提交代码
你的代码应当保存在`.\Scripts\dist`中
1. 打开`.\Scripts\Gruntfile.js`填写你的账号(邮箱)和密码，以及分支名*(即服务器上的分支，注意：会直接覆盖掉服务器上的文件，提交default分支时需要谨慎)*
1. 该文件中的默认分支被我修改为`dev`，以防不小心将原branch覆盖掉，所以先需要在服务器上创建一个dev分支
1. 运行批处理脚本`提交.bat`


## 自动补全
功能来自Github:[ScreepsAutocomplete](https://github.com/Garethp/ScreepsAutocomplete)，已集成到了`./lib/`文件夹下，推荐使用WebStorm来搭建环境(*更佳的提示和静态检验*)，当然更优雅的方式是使用 `ATOM` 或是 `VS CODE`.

详见:[https://github.com/Garethp/ScreepsAutocomplete](https://github.com/Garethp/ScreepsAutocomplete)