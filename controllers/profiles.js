const express = require('express')
const router = express.Router()
const profileService = require('../service/profile.service')

// const router = require('router')


router.get('/',async (req,res)=>{
    let allprofiles = await profileService.getAllprofiles()
    
    res.send(allprofiles)
})

router.delete('/:id',async (req,res)=>{
    let affectedRows= await profileService.deleteprofile(req.params.id)
    if(!affectedRows )
        res.send(404).json('no record with given id :'+ req.params.id)
    else{
        res.send('Deleted successufully')
    }
})
router.put('/:id',async (req,res)=>{
    let profID = req.params.id
    let {name,type,amount,station,devices} = req.body
    let affectedRows = await profileService.updateprofile([name,type,amount,station,devices,profID])
    res.send('success')
})
router.post('/addprofile', async(req,res)=>{
    let {name,type,amount,station,devices,admin_id} = req.body
    let affectedRows = await profileService.addprofile([name,type,amount,station,devices,admin_id])
    res.send('success')
    
})

module.exports = router;