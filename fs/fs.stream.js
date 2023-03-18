/**
 * @Author: photowey
 * @Date: 2023/03/18 15:53:10
 * @LastEditTime: 2023/03/18 15:59:22
 * @LastEditors: photowey
 * @Description: NodeJS fs stream module
 * @FilePath: /hello.js/fs/fs.stream.js
 * @Copyright (c) 2023 by photowey<photowey@gmail.com>, All Rights Reserved
 */

// 导入模块
const fs = require('fs')
const os = require('os')

// 适合 大文件或者频繁写入的场景
const channel = fs.createWriteStream('./观书有感.txt')

// 写
channel.write('半亩方塘一鉴开，' + os.EOL)
channel.write('天光云影共徘徊。' + os.EOL)
channel.write('问渠那得清如许？' + os.EOL)
channel.write('为有源头活水来。')

// 关闭 通道
channel.close()