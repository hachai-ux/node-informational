#!/usr/bin/env node

const express = require('express')
const app = express();
const port = process.env.PORT || 8080



app.get('/', (req, res) => {
  res.sendFile(__dirname +'/index.html')
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname +'/about.html')
});

app.get('/contact-me', (req, res) => {
  res.sendFile(__dirname +'/contact-me.html')
});

app.get('*', (req, res) => {
  res.sendFile(__dirname +'/404.html')
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

/*
const fs = require('fs')

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

*/