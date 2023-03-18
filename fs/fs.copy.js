/**
 * @Author: photowey
 * @Date: 2023/03/18 16:28:13
 * @LastEditTime: 2023/03/18 16:33:48
 * @LastEditors: photowey
 * @Description: NodeJS file copy module
 * @FilePath: /hello.js/fs/fs.copy.js
 * @Copyright (c) 2023 by photowey<photowey@gmail.com>, All Rights Reserved
 */
// 导入模块
const fs = require('fs')

let data = fs.readFileSync('./观书有感.txt')
fs.writeFileSync('./观书有感-copy-1.txt', data)

const channelOut = fs.createWriteStream('./观书有感-copy-2.txt')
const channelIn = fs.createReadStream('./观书有感.txt')

channelIn.on('data', (chunk) => {
    channelOut.write(chunk)
})