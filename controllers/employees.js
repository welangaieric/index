const express = require('express')
const router = express.Router()
const employeesService = require('../service/employee.service')
const axios = require('axios')

// const router = require('router')


router.get('/',async (req,res)=>{
    let allEmployees = await employeesService.getAllEmployees()
    
    res.send(allEmployees)
})
router.get('/search/:phone',async (req,res)=>{
    let [Employee] = await employeesService.getAllEmployeesByPhone(req.params.phone)
    // if(Employee.length == 0 )
    //     res.send(404).json('no record with given id :'+ req.params.id)
    // else{
        res.send(Employee)
    // } 
})
router.get('/:id',async (req,res)=>{
    let Employee = await employeesService.getAllEmployeesById(req.params.id)
    // if(Employee.length == 0 )
    //     res.send(404).json('no record with given id :'+ req.params.id)
    // else{
        res.send(Employee)
    // } 
})

router.delete('/:id',async (req,res)=>{
    let affectedRows= await employeesService.deleteEmployee(req.params.id)
    if(!affectedRows )
        res.send(404).json('no record with given id :'+ req.params.id)
    else{
        res.send('Deleted successufully')
    }
})
router.put('/:id',async (req,res)=>{
    let EmpID = req.params.id
    let {email,phone,employeeType,salary,userType} = req.body
    console.log(email,phone,employeeType,salary,userType)
    let affectedRows = await employeesService.updateEmployee([email,phone,employeeType,salary,userType,EmpID])
    // console.log(affectedRows)
   res.send('success')
})
router.post('/addemployee', async(req,res)=>{
    // const pass = 'eeresd'
    const password = Math.random().toString(36).slice(-8)
    const id = Math.random().toString(36).slice(-8) 
    let {firstname,lastname,email,phone,employeeType,salary,employeeRole,userType} = req.body
    console.log(firstname,lastname,email,phone,employeeType,salary,employeeRole,userType,password)
    let affectedRows = await employeesService.addEmployee([id,firstname,lastname,email,phone,employeeType,salary,employeeRole,userType,password])
    res.send('success')
    const apiUrl = 'https://api.mobitechtechnologies.com/sms/sendsms';
    const apiKey = process.env.api_key;

    // Data to be sent in the POST request
    const postData = {
        mobile:`${phone}`,
        response_type:"json",
        sender_name:"konnekt",
        service_id:0,
        message:`WELCOME to KONNEKT SMARTLIFE\nEmployee id:${id}\nPassword:${password}\n`
    
    };
    const headers = {
        'Content-Type': 'application/json',
        'h_api_key': `${apiKey}`, 
    };
    axios.post(apiUrl, postData, { headers })
    .then(response => {
        // Handle success
        console.log('Response:', response.data);
    })
    .catch(error => {
        // Handle error
        console.error('Error:', error.message);
    });
})

module.exports = router;