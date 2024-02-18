const express = require('express')
const router = express.Router()
const user = require('../models/User')
const { body, validationResult } = require('express-validator');

router.post("/createuser",[
    // Validation middleware
body('name').notEmpty().withMessage('Name is required'),
body('password').notEmpty().withMessage('Password is required').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email format')],
async (req,resp)=>{
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return resp.status(400).json({ success: false, errors: errors.array() });
    }
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