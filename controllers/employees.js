const express = require('express')
const router = express.Router()
const employeesService = require('../service/employee.service')

// const router = require('router')


router.get('/',async (req,res)=>{
    let allEmployees = await employeesService.getAllEmployees()
    
    res.send(allEmployees)
})
router.get('/:id',async (req,res)=>{
    let Employee = await employeesService.getAllEmployeesById(req.params.id)
    if(Employee.length == 0 )
        res.send(404).json('no record with given id :'+ req.params.id)
    else{
        res.send(Employee)
    }
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
    let {firstname,lastname,email,phone,employeeType,salary,employeeRole} = req.body
    // console.log(firstname,lastname,email,phone,employeeType,salary,empdate,employeeRole,EmpID)
    let affectedRows = await employeesService.updateEmployee([firstname,lastname,email,phone,employeeType,salary,employeeRole,EmpID])
    res.send('success')
})
router.post('/addemployee', async(req,res)=>{
    // const pass = 'eeresd'
    let {firstname,lastname,email,phone,employeeType,salary,employeeRole} = req.body
    console.log(firstname,lastname,email,phone,employeeType,salary,empdate,employeeRole)
    let affectedRows = await employeesService.addEmployee([firstname,lastname,email,phone,employeeType,salary,employeeRole])
    res.send('success')
    
})

module.exports = router;