/**
 * @Author: photowey
 * @Date: 2023/03/18 16:52:20
 * @LastEditTime: 2023/03/18 16:55:41
 * @LastEditors: photowey
 * @Description: 
 * @FilePath: /hello.js/fs/fs.rename.move.js
 * @Copyright (c) 2023 by photowey<photowey@gmail.com>, All Rights Reserved
 */
// 导入模块
const fs = require('fs')
const process = require('process')

// ----------------------------------------------------------------

// 移动
fs.rename('./观书有感-copy-2.txt', './docs/观书有感.txt', (err) => {
    if (err) {
        console.log('Rename.move failed:$O', err)
        return
    }

    console.log('Rename.move successful')
    console.log('Rename.move memusage:%O', process.memoryUsage())
})