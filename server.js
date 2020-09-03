const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()
 
app.use('/', serveStatic(path.join(__dirname, '/dist')))
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
 const port = process.env.PORT || 8080
app.listen(port)

console.log('listening on port:' + port)