const http = require('http')

const server = http.createServer((request, response) => {
    response.setHeader('content-type', 'application/json;charset=utf-8');

    let body = '';
    request.on('data', chunk => {
        body += chunk;
    })

    request.on('end', () => {
        console.log(body);
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
    })
})

// curl -X POST -d '{"greeting":"Hello World"}' http://localhost:9527
server.listen(9527, () => {
    console.log('Http server started on:[%d] port', 9527)
})
