/**
 * @Author: photowey
 * @Date: 2023/03/18 15:29:40
 * @LastEditTime: 2023/03/18 15:49:47
 * @LastEditors: photowey
 * @Description: 
 * @FilePath: /hello.js/fs/fs.sync.append.js
 * @Copyright (c) 2023 by photowey<photowey@gmail.com>, All Rights Reserved
 */

// 导入模块
const fs = require('fs')
const os = require('os')

// 同步写文件
fs.writeFileSync('./hello.txt', '三人行,必有我师焉。')

// 追加
fs.appendFileSync('./hello.txt', os.EOL + '择其善者而从之，其不善者而改之。')

console.log('append.file hello.txt sync successful')