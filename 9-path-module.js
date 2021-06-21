const path = require('path')
console.log("sep", path.sep)

const filePath = path.join('/content', 'subfolder', 'text.txt')

console.log("filePath", filePath)

const base = path.basename(filePath)

console.log("base", base)

const absolute = path.resolve(__dirname, 'current', 'subfolder', 'test.txt')

console.log("absolute", absolute)