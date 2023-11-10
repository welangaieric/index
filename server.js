const express = require('express')
require('dotenv').config({})
const app = express()
const morgan = require('morgan')
var path = require('path')
var rfs = require('rotating-file-stream')
const port = process.env.port


//  log app activity to a log file
var accessLogStream = rfs.createStream('access.log', {
    interval: '1d', // rotate daily
    path: path.join(__dirname, 'log')
  })
   


//server 
app.listen(port,()=>{
    console.log(`app running on port ${port}`)
})

// middlewares 
app.use(express.static('public'))
app.set('views','ejs')
app.use(morgan('combined', { stream: accessLogStream }))// setup the logger

app.get('/',(req,res)=>{
    res.send('fuck im running')
})