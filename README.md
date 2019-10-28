
# Screep游戏本地编码环境

![License](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)
<a href="https://zenodo.org/badge/latestdoi/193202175"><img src="https://zenodo.org/badge/193202175.svg" alt="DOI"></a>

> **注意** 开发环境有新的变动，请到[脚本官网](https://whiterobe.github.io/ScreepLocalCodingEnv/)拉取新的API接口

1. 本项目提供了基本的本地向服务器Commit local分支的方法，详见[提交代码](#提交代码)小节。
2. 集成了js代码补全库：[ScreepsAutocomplete](https://github.com/Garethp/ScreepsAutocomplete)，配置方法见源库的Readme.md文件。
3. 更多有趣的编程扩展，见[第三方工具](https://docs.screeps.com/third-party.html)、[本地开发和API接口](https://docs.screeps.com/commit.html).

## 项目环境搭建
项目环境为Node.js，需要搭建grunt及其脚手架。

具体过程为：
进入`.\Screeps\Scripts`，依次执行以下命令：

    npm install -g grunt-cli

    npm install grunt --save-dev

    npm install grunt-screeps

**不建议**直接利用Scripts中的`package-lock.json`执行`npm init`；

> 若因版本迭代原因出现兼容性问题，建议尝试手动移除`package-lock.json`文件后执行以上三个命令。

## 提交代码
你的代码应当保存在`.\Scripts\dist`中
1. 打开`.\Scripts\Gruntfile.js`填写你的账号(邮箱)和密码，以及相应分支名(即服务器上的分支，注意：这会直接覆盖掉服务器相关分支上的文件，提交到default分支时需要谨慎)
2. 该文件中的默认分支被我修改为`dev`，以防不小心将原branch覆盖掉，所以先需要在服务器上创建一个dev分支
3. 运行批处理脚本`提交代码到服务器.bat` 或执行命令`grunt screeps`，向服务器提交代码。


## 自动补全
功能来自Github:[ScreepsAutocomplete](https://github.com/Garethp/ScreepsAutocomplete)，已集成到了`./lib/`文件夹下，推荐使用`WebStorm`来搭建环境(更佳的提示和静态检验)，或是使用 `ATOM` 或是 `VS CODE`.

详见:[https://github.com/Garethp/ScreepsAutocomplete](https://github.com/Garethp/ScreepsAutocomplete)

配置过程见此:[WebStrom配置](https://github.com/Garethp/ScreepsAutocomplete#webstorm-or-other-jetbrains-ides)
