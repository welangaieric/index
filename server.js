const express = require('express')
require('dotenv').config({})
const morgan = require('morgan')
require('express-async-errors')
var cors = require('cors')
var bodyParser = require('body-parser')
const PORT = process.env.port
const app = express()
const db = require('./db')
const employeeContr = require('./controllers/employees')
const clientCtrl = require('./controllers/clients')
const profileCtrl = require('./controllers/profiles')
const transactionCtrl = require('./controllers/transactions')
const pageroutes = require('./routes/pageroutes')

let  server = app.listen(PORT,()=>{
    console.log(`app running on port ${PORT}`)
})
//server 
db.query('select 1')
.then(()=>{
    console.log('database connected')
    
})
.catch((err) => {
    console.error('Error connecting to the database:', err.message);
})



// middlewares 
app.use(express.static('public'))
app.set('view engine','ejs')
app.use(express.json());
app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(morgan('dev'))// setup the logger
app.use('/api/employees',employeeContr)
app.use('/api/clients',clientCtrl)
app.use('/api/profiles',profileCtrl)
app.use('/api/transactions',transactionCtrl)
app.use(pageroutes)
app.use((err,req,res,next)=>{
    console.log(err)
    res.status(err.status || 500).send('someting went wrong')
})


// const io = require('socket.io')(server)

// app.use(express.static(path.join(__dirname, 'public')))

// let socketsConected = new Set()

// io.on('connection', onConnected)

// function onConnected(socket) {
//   console.log('Socket connected', socket.id)
//   socketsConected.add(socket.id)
//   io.emit('clients-total', socketsConected.size)

//   socket.on('disconnect', () => {
//     console.log('Socket disconnected', socket.id)
//     socketsConected.delete(socket.id)
//     io.emit('clients-total', socketsConected.size)
//   })

//   socket.on('message', (data) => {
//     // console.log(data)
//     socket.broadcast.emit('chat-message', data)
//   })

//   socket.on('feedback', (data) => {
//     socket.broadcast.emit('feedback', data)
//   })
// }