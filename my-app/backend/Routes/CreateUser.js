const express = require('express')
const router = express.Router()
const user = require('../models/User')

router.post("/createuser",async (req,resp)=>{
 try {
    await user.create({

        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        location: req.body.location
    })
    resp.json({success:true});
 } catch (error) {
    console.log(error)
    resp.json({success:false});
 }
})
module.exports = router;