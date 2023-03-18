/**
 * @Author: photowey
 * @Date: 2023/03/18 16:08:53
 * @LastEditTime: 2023/03/18 16:26:31
 * @LastEditors: photowey
 * @Description: NodeJS file read module
 * @FilePath: /hello.js/fs/fs.read.js
 * @Copyright (c) 2023 by photowey<photowey@gmail.com>, All Rights Reserved
 */

// 导入模块
const fs = require('fs')
const os = require('os')

// readFile -> 异步
// readFileSync -> 同步
// createReadStream -> 流式

// 异步
fs.readFile('./观书有感.txt', (err, data) => {
    if (err) {
        console.log('read file:%s', err)
        return
    }
    console.log('------------------------- Async')
    console.log(data)
    console.log('-------------------------')
    console.log(data.toString())
    console.log('-------------------------')
    console.log('read data:' + os.EOL + '%s', data)
})

// 同步
let data = fs.readFileSync('观书有感.txt')
console.log('------------------------- Sync')
console.log('read data:' + os.EOL + '%s', data)

// 流式
const channel = fs.createReadStream('./观书有感.txt')
channel.on('data', (chunk) => {
    // chunk 64KB
    console.log('------------------------- Stream')
    console.log('stream.read chunk data:' + os.EOL + '%s', chunk)
})

channel.on('end', () => {
    console.log('stream.read chunk finished')
})