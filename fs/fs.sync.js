/**
 * @Author: photowey
 * @Date: 2023/03/18 15:22:35
 * @LastEditTime: 2023/03/18 15:28:35
 * @LastEditors: photowey
 * @Description: 
 * @FilePath: /hello.js/fs/fs.sync.js
 * @Copyright (c) 2023 by photowey<photowey@gmail.com>, All Rights Reserved
 */

// 导入模块
const fs = require('fs')

// 函数调用
writeFileSync('./hello.txt', '三人行,必有我师焉')

console.log('后执行')

/** 
 * @description: 同步写文件
 * @param {string} file 文件
 * @param {string} content 文件写入内容
 * @return {void} 空
 */
function writeFileSync(file, content) {
    // writeFileSync 同步函数
    fs.writeFileSync(file, content)
    console.log('write file %s successful', file)
}
