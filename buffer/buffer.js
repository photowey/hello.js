/**
 * @Author: photowey
 * @Date: 2023/03/16 00:09:42
 * @LastEditTime: 2023/03/16 00:21:02
 * @LastEditors: photowey
 * @Description: NodeJS buffer module
 * @FilePath: /hello.js/buffer/buffer.js
 * @Copyright (c) 2023 by photowey<photowey@gmail.com>, All Rights Reserved
 */
// 1. alloc
let buf = Buffer.alloc(10)
// <Buffer 00 00 00 00 00 00 00 00 00 00>
// console.log(buf)

// 2. allocUnsafe
let buf_2 = Buffer.allocUnsafe(10000);
// console.log(buf_2)

// 3. from
let buf_3 = Buffer.from('hello');
// <Buffer 68 65 6c 6c 6f>
// console.log(buf_3);

// 01101000
// console.log(buf_3[0].toString(2));

buf_3[0] = 361 // 舍弃高位的数字
// <Buffer 69 65 6c 6c 6f>
// console.log(buf_3);

let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
// <Buffer 69 6c 6f 76 65 79 6f 75>
// console.log(buf_4);

// iloveyou
// console.log(buf_4.toString())

let buf_5 = Buffer.from('你好,世界~');
// <Buffer e4 bd a0 e5 a5 bd 2c e4 b8 96 e7 95 8c 7e>
// console.log(buf_5);