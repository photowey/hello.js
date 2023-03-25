/**
 * @Author: photowey
 * @Date: 2023/03/25 10:48:16
 * @LastEditTime: 2023/03/25 11:19:07
 * @LastEditors: photowey
 * @Description: NodeJS fs dir module
 * @FilePath: /hello.js/fs/fs.dir.js
 * @Copyright (c) 2023 by photowey<photowey@gmail.com>, All Rights Reserved
 */

const fs = require('fs')


// mkdir
fs.mkdir('./tmp', (err) => {
    if (err) {
        console.log('make dir:[%s] failed~', 'tmp')
        return;
    }
    console.log('make dir:[%s] successfully~', 'tmp')
})

// mkdirSync
fs.mkdirSync('./tmpSync')
console.log('sync: make dir:[%s] successfully~', 'tmpSync')


// mkdir recursive
fs.mkdir('./retmp/tmp1/tmp2', { recursive: true }, (err) => {
    if (err) {
        console.log('recursive: make dir:[%s] failed~', 'retmp/tmp1/tmp2')
        return;
    }
    console.log('recursive: make dir:[%s] successfully~', 'retmp/tmp1/tmp2')
})


// readdir
fs.readdir('./docs', (err, data) => {
    if (err) {
        console.log('read dir:[%s] failed~', 'docs')
        return;
    }
    console.log('read dir:[%s] successfully~', 'docs')
    console.log(data)
    console.log('read data %O', data)
})

// rmdir
fs.rmdir('./tmp', (err) => {
    if (err) {
        console.log('rmdir dir:[%s] failed~', 'tmp')
        return;
    }
    console.log('rmdir dir:[%s] successfully~', 'tmp')
})

// recursive rmdir
fs.rm('./retmp', { recursive: true }, err => {
    if (err) {
        console.log('recursive: rmdir dir:[%s] failed~', 'retmp')
        return;
    }
    console.log('recursive: rmdir dir:[%s] successfully~', 'retmp')
});