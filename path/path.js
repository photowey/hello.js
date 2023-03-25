/**
 * @Author: photowey
 * @Date: 2023/03/15 10:09:28
 * @LastEditTime: 2023/03/25 11:41:42
 * @LastEditors: photowey
 * @Description: NodeJS path module
 * @FilePath: /hello.js/path/path.js
 * @Copyright (c) 2023 by photowey<photowey@gmail.com> All Rights Reserved
 */

const fs = require('fs')
const path = require('path')

fs.writeFileSync('./index.html', 'hello')
// fs.writeFileSync('/users/phohowey/node/hello.js/index.html', 'hello')
//fs.writeFileSync('D:/index.html', 'abs.hello')
fs.writeFileSync('/index.html', 'abs.hello')

// __dirname 所在文件的所在目录的绝对路径
fs.writeFileSync(__dirname + '/index.html', 'dirname.hello')


console.log(__dirname + '/index.html')
console.log(path.resolve(__dirname, './index.html'))

let indexHtml = '/users/phohowey/node/hello.js/index.html'
console.log(path.basename(indexHtml))
console.log(path.dirname(indexHtml))
console.log(path.extname(indexHtml))