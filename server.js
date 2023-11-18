const express = require('express')
require('dotenv').config({})
const morgan = require('morgan')
// var path = require('path')
// var rfs = require('rotating-file-stream')
const mysql = require('mysql2')
const port = process.env.port
const app = express()



// configurations
const pool = mysql.createPool({
    host:'212.224.93.159',
    user:'radius',
    password:'konnekted@2023',
    database:'radius'
}).promise()
// dotenv.config({})

const getTransactions = async function(){
    const connection = pool.connect((err)=>{
        if (err ) throw err
        console.log('connected')
    })
    
    // const [rows] = await pool.query('SELECT * FROM transactions')
    return connection;
}

   
// db middleware 


//server 
app.listen(port,()=>{
    console.log(`app running on port ${port}`)
})

// middlewares 
app.use(express.static('public'))
app.set('views','ejs')
app.use(morgan('combined'))// setup the logger

app.get('/',getTransactions,(req,res)=>{
    res.send(connection)
})