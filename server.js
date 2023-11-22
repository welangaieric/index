const express = require('express')
require('dotenv').config({})
const morgan = require('morgan')
require('express-async-errors')
var bodyParser = require('body-parser')
const PORT = process.env.port
const app = express()
const db = require('./db')
const employeeContr = require('./controllers/employees')
const clientCtrl = require('./controllers/clients')
const profileCtrl = require('./controllers/profiles')
const transactionCtrl = require('./controllers/transactions')


//server 
db.query('select 1')
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`app running on port ${PORT}`)
    })
})
.catch((err) => {
    console.error('Error connecting to the database:', err.message);
})



// middlewares 
app.use(express.static('public'))
app.set('views','ejs')
app.use(express.json());
app.use(bodyParser.json())
app.use(morgan('dev'))// setup the logger
app.use('/api/employees',employeeContr)
app.use('/api/clients',clientCtrl)
app.use('/api/profiles',profileCtrl)
app.use('/api/transactions',transactionCtrl)
app.use((err,req,res,next)=>{
    console.log(err)
    res.status(err.status || 500).send('someting went wrong')
})


