/**
 * @Author: photowey
 * @Date: 2023/03/25 11:44:17
 * @LastEditTime: 2023/03/25 11:45:51
 * @LastEditors: photowey
 * @Description: NodeJS http model
 * @FilePath: /hello.js/http/http.js
 * @Copyright (c) 2023 by photowey<photowey@gmail.com>, All Rights Reserved
 */

const http = require('http')

const server = http.createServer((request, response) => {
    response.setHeader('content-type', 'application/json;charset=utf-8');
    response.end(`{
        "array": [
          1,
          2,
          3
        ],
        "boolean": true,
        "color": "gold",
        "null": null,
        "number": 123,
        "object": {
          "a": "b",
          "c": "d"
        },
        "string": "Hello World"
      }`)

    console.log(request.method)
    console.log(request.url)
    console.log(request.httpVersion)
    console.log(request.headers.host)
})

// curl -X GET http://localhost:9527
server.listen(9527, () => {
    console.log('Http server started on:[%d] port', 9527)
})
