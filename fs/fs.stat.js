/**
 * @Author: photowey
 * @Date: 2023/03/25 10:48:16
 * @LastEditTime: 2023/03/25 11:22:00
 * @LastEditors: photowey
 * @Description: NodeJS fs stat module
 * @FilePath: /hello.js/fs/fs.stat.js
 * @Copyright (c) 2023 by photowey<photowey@gmail.com>, All Rights Reserved
 */

const fs = require('fs')

fs.stat('./docs/观书有感.txt', (err, data) => {
    if (err) {
        console.log('fs stat:[%s] failed~', 'docs/观书有感.txt');
        return;
    }
    console.log(data);

    console.log(data.isFile());
    console.log(data.isDirectory());
});