// 导入模块
const fs = require('fs')
const process = require('process')

// ----------------------------------------------------------------

// 重命名
fs.rename('./hello.txt', './hello-v2.txt', (err) => {
    if (err) {
        console.log('Rename failed:$O', err)
        return
    }

    console.log('Rename successful')
    console.log('Rename memusage:%O', process.memoryUsage())
})
