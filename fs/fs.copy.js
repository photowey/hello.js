/**
 * @Author: photowey
 * @Date: 2023/03/18 16:28:13
 * @LastEditTime: 2023/03/18 16:50:52
 * @LastEditors: photowey
 * @Description: NodeJS file copy module
 * @FilePath: /hello.js/fs/fs.copy.js
 * @Copyright (c) 2023 by photowey<photowey@gmail.com>, All Rights Reserved
 */
// 导入模块
const fs = require('fs')
const process = require('process')

// let data = fs.readFileSync('./观书有感.txt')
// fs.writeFileSync('./观书有感-copy-1.txt', data)

// 21299200
// console.log('read memusage:%O', process.memoryUsage())

// ----------------------------------------------------------------

const channelOut = fs.createWriteStream('./观书有感-copy-2.txt')
const channelIn = fs.createReadStream('./观书有感.txt')

// v1
// channelIn.on('data', (chunk) => {
//     channelOut.write(chunk)
// })

// v2
channelIn.pipe(channelOut)

channelIn.on('end', () => {
    // v1 21651456
    // v2 21770240
    console.log('read memusage:%O', process.memoryUsage())
})

// 重命名
fs.rename('./hello.txt', './hello-v2.txt', (err) => {
    if (err) {
        console.log('Rename failed')
        return
    }

    console.log('Rename successful')
})

// 移动
fs.rename('./观书有感.txt', './docs/观书有感.txt', (err) => {
    if (err) {
        console.log('Rename failed:$O', err)
        return
    }

    console.log('Rename successful')
})