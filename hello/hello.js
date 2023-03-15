/**
 * @Author: photowey
 * @Date: 2023/03/15 09:39:48
 * @LastEditTime: 2023/03/15 10:07:36
 * @LastEditors: photowey
 * @Description: NodeJS hello module
 * @FilePath: /hello.js/hello/hello.js
 * @Copyright (c) 2023 by photowey<photowey@gmail.com> All Rights Reserved
 */
console.log('Hello World~')

// Global object
console.log(globalThis === global)

// function invoke
sayHello('djungo')

/** 
 * @description: say hello to someone.
 * @param {string} name the target of say hello.
 * @return {void}
 */
function sayHello(name) {
    console.log('Hello %s~', name)
}