const express = require('express')
const router = express.Router()
const transactionService = require('../service/transaction.service')

// const router = require('router')


router.get('/',async (req,res)=>{
    let alltransactions = await transactionService.getAlltransactions()
    
    res.send(alltransactions)
})
router.get('/:code',async (req,res)=>{
    let transaction = await transactionService.gettransactionById(req.params.code)
    if(transaction.length == 0 )
        res.send(404).json('no record with given id :'+ req.params.id)
    else{
        res.send(transaction)
    }
})

router.post('/addtransaction', async(req,res)=>{
    let {code,business_no,name,phone,username,profile,amount,type,station,admin_id} = req.body
    let affectedRows = await transactionService.addtransaction([code,business_no,name,phone,username,profile,amount,type,station,admin_id])
    res.send('success')
    
})

module.exports = router;