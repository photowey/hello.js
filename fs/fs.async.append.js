/**
 * @Author: photowey
 * @Date: 2023/03/18 15:29:24
 * @LastEditTime: 2023/03/18 15:47:14
 * @LastEditors: photowey
 * @Description: 
 * @FilePath: /hello.js/fs/fs.async.append.js
 * @Copyright (c) 2023 by photowey<photowey@gmail.com>, All Rights Reserved
 */

// 导入模块
const fs = require('fs')
const os = require('os')

// 同步写文件
fs.writeFileSync('./hello.txt', '三人行,必有我师焉。')


// 追加
fs.appendFile('./hello.txt', '择其善者而从之，其不善者而改之。', err => {
    // 1.失败 err != null
    if (err != null) {
        console.log('append file hello.txt failed')
        return
    }

    console.log('append file hello.txt successful')
})

// 继续追加
fs.writeFile('./hello.txt', os.EOL + '志于道，据于德，依于仁，游于艺。', {
    flag: 'a'
}, err => {
    // 1.失败 err != null
    if (err != null) {
        console.log('write.file.append file hello.txt failed')
        return
    }

    console.log('write.file.append hello.txt successful')
})