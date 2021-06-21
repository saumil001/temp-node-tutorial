// read and write file
// const { readFile, writeFile } = require('fs');

// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err)
//         return
//     }

//     const first = result;


//     readFile('./content/second.txt', 'utf8', (err, result) => {
//         if (err) {
//             console.log(err)
//             return
//         }
//         const second = result;

//         writeFile('./content/result-async.txt',
//             `Here is the result: ${first}, ${second}`,
//             (err, result) => {
//                 if (err) {
//                     console.log(err)
//                     return
//                 }
//                 console.log(result)
//             }
//         )
//     })
// })

//server

// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end('Welcome to our home !!')
//     }
//     if (req.url === '/about') {
//         res.end('Here is our short history')
//     }
//     res.end(`
//         <h1>Oops!</h1>
//         <p>We can't seem to find th epage you are looking for</p>
//         <a href="/">Back Home</a>
//     `)
// })

// server.listen(5000)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)