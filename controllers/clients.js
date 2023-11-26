const express = require('express')
const router = express.Router()
const clientService = require('../service/clients.service')

// const router = require('router')


router.get('/',async (req,res)=>{
    let allclients = await clientService.getAllclients()
    
    res.send(allclients)
})
router.get('/:username',async (req,res)=>{
    let client = await clientService.getClientById(req.params.username)
    if(client.length == 0 )
        res.send(404).json('no record with given id :'+ req.params.username)
    else{
        res.send(client)
    }
})
router.delete('/:id',async (req,res)=>{
    let affectedRows= await clientService.deleteClient(req.params.id)
    if(!affectedRows )
        res.send(404).json('no record with given id :'+ req.params.id)
    else{
        res.send('Deleted successufully')
    }
})
router.put('/:id',async (req,res)=>{
    let clientID = req.params.id
    let {username,client,phone,location,coordinates,profile,billable,account,wallet,is_router_ours,is_receiver_ours,created,updated,admin_id} = req.body
    let affectedRows = await clientService.updateClient([username,client,phone,location,coordinates,profile,billable,account,wallet,is_router_ours,is_receiver_ours,created,updated,admin_id,clientID])
    res.send('success')
})
router.post('/addclient', async(req,res)=>{
    let {username,client,phone,location,coordinates,profile,billable,account,wallet,is_router_ours,is_receiver_ours,created,updated,admin_id} = req.body
    let affectedRows = await clientService.addClient([username,client,phone,location,coordinates,profile,billable,account,wallet,is_router_ours,is_receiver_ours,created,updated,admin_id])
    res.send('success')
    
})

module.exports = router;