#!/usr/bin/env node

const http = require('http')
const fs = require('fs')

const port = process.env.PORT || 8080

const server = http.createServer((req, res) => {

    res.statusCode = 200
    const reqURL = new URL(req.url, `http://${req.headers.host}`)
    if (reqURL.pathname === "/index.html" || reqURL.pathname == "/" || reqURL.pathname == "") {
        fs.readFile('./index.html', 'utf8' , (err, data) => {
            if (err) {
                console.error(err)
                return
            }
            res.setHeader('Content-Type', 'text/html')
            res.end(data)
            })
         
    }
    else if (reqURL.pathname === "/about.html") {
        fs.readFile('./about.html', 'utf8' , (err, data) => {
            if (err) {
                console.error(err)
                return
            }
            res.setHeader('Content-Type', 'text/html')
            res.end(data)
            })
         
    }
        else if (reqURL.pathname === "/contact-me.html") {
        fs.readFile('./contact-me.html', 'utf8' , (err, data) => {
            if (err) {
                console.error(err)
                return
            }
            res.setHeader('Content-Type', 'text/html')
            res.end(data)
            })
         
    }
    else {
           fs.readFile('./404.html', 'utf8' , (err, data) => {
            if (err) {
                console.error(err)
                return
            }
            res.setHeader('Content-Type', 'text/html')
            res.end(data)
            })
         
   
    }

 
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})