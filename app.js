const express = require('express')
const mysql = require('mysql2')
const app = express()
app.listen(3000,()=>{
    console.log(`app running on port 3000`)
})

const pool = mysql.createPool({
        host:'127.0.0.1',
        user:'radius',
        port:3360,
        password:'konnekted@2023',
        database:'radius'
}).promise()

const getTransactions = async function(){
    const connection = pool.connect((err)=>{
        if (err ) throw err
        console.log('connected')
    })
        return connection;
}
app.get('/',getTransactions,(req,res)=>{
    res.send(connection)
})