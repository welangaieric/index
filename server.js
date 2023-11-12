const express = require('express')
require('dotenv').config({})
const morgan = require('morgan')
// var path = require('path')
// var rfs = require('rotating-file-stream')
const mysql = require('mysql2')
// import mysql from 'mysql2'
// import express from 'express'
// import dotenv from 'dotenv'
// import morgan from 'morgan'
// import path from 'path'
// import rfs from 'rotating-file-stream'
const port = process.env.port
const app = express()



// configurations
const pool = mysql.createPool({
    host:'120.0.0.1',
    user:'root',
    password:'',
    database:'radius'
}).promise()
// dotenv.config({})

const getTransactions = async function(){
    
    const [rows] = await pool.query('SELECT * FROM transactions')
    rows
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
    res.send(rows)
})