/**
 * @Author: photowey
 * @Date: 2023/03/15 10:09:15
 * @LastEditTime: 2023/03/18 15:39:05
 * @LastEditors: photowey
 * @Description: NodeJS fs module
 * @FilePath: /hello.js/fs/fs.js
 * @Copyright (c) 2023 by photowey<photowey@gmail.com> All Rights Reserved
 */

// 导入模块
const fs = require('fs')

fs.writeFile('./hello.txt', '三人行,必有我师焉', err => {
    // 1.失败 err != null
    if (err != null) {
        console.log('write file hello.txt failed')
        return
    }

    console.log('write file hello.txt successful')
})