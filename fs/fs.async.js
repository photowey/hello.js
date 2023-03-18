/**
 * @Author: photowey
 * @Date: 2023/03/18 15:29:24
 * @LastEditTime: 2023/03/18 15:33:46
 * @LastEditors: photowey
 * @Description: 
 * @FilePath: /hello.js/fs/fs.async.js
 * @Copyright (c) 2023 by photowey<photowey@gmail.com>, All Rights Reserved
 */

// 导入模块
const fs = require('fs')

// 函数调用
writeFile('./hello.txt', '三人行,必有我师焉', () => {
    console.log('write file hello.txt successful')
}, (err) => {
    console.log('write file hello.txt failed:%s', err)
})

console.log('先 callback 执行')

/** 
 * @description: 写文件
 * @param {string} file 文件
 * @param {string} content 文件写入内容
 * @param {function} resolve  执行成功回调函数
 * @param {function} reject 执行失败回调函数
 * @return {void} 空
 */
function writeFile(file, content, resolve, reject) {
    // writeFile 异步函数
    fs.writeFile(file, content, err => {
        if (err) {
            reject(err)
            return
        }

        resolve()
    })
}