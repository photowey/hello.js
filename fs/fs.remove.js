/**
 * @Author: photowey
 * @Date: 2023/03/25 10:48:16
 * @LastEditTime: 2023/03/25 10:55:35
 * @LastEditors: photowey
 * @Description: NodeJS fs remove module
 * @FilePath: /hello.js/fs/fs.remove.js
 * @Copyright (c) 2023 by photowey<photowey@gmail.com>, All Rights Reserved
 */

const fs = require('fs')


writeFileSync('./unlink.txt', '三人行,必有我师焉')
writeFileSync('./unlinkSync.txt', '三人行,必有我师焉')


// unlink
fs.unlink('./unlink.txt', (err) => {
    if (err) {
        console.log('unlink %s failed~', './unlink.txt')
        return;
    }
    console.log('unlink %s successfully~', './unlink.txt');
})


//unlinkSync
fs.unlinkSync('./unlinkSync.txt')
console.log('unlinkSync %s successfully~', './unlinkSync.txt')


/** 
 * @description: 同步写文件
 * @param {string} file 文件
 * @param {string} content 文件写入内容
 * @return {void} 空
 */
function writeFileSync(file, content) {
    fs.writeFileSync(file, content)
    console.log('write file %s successful', file)
}
