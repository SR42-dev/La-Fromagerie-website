const express = require('express')
const router = express.Router()
const {body, validationResult} = require('express-validator')
const User = require('../models/Users')
const jwt = require('jsonwebtoken')
const fetchdetails = require('../middleware/fetchdetails')

const JWT_SECRET = '$Cheese$'

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
//if the request is create then the below lines are executed, similar to switch case
router.post('/create',async (req, res)=>{


    try {
        // check weather a user this email already exists
        let user = await User.findOne({Username: req.body.username})
        let success=false
        if(user)
            return res.status(400).json({success,error: "Sorry a user with this username already exists"})
        user = await User.create({
            Username: req.body.username,
            Firstname: req.body.fname,
            Password: req.body.password,
            Email: req.body.email,
            MobileNo: req.body.mobile
        })
        success=true
        const data = {
            user: {
                id: user.id
            }
        }
        // console.log(data, data.user, data.user.id)
        const authtoken = jwt.sign(data, JWT_SECRET)
        res.json({success,authtoken})

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error...!")
    }

})

// ROUTE 2: Authenticate a User POST "api/auth/login"

router.post('/login',async (req, res)=>{
    let success = false
    const {username, password} = req.body
    try {
        let user = await User.findOne({'Username':username})
        if(!user)
            {
                success = false
                return res.status(400).json({success,error:"Please try to login with correct Creditentials"})
            }
        if(password != user.Password)
            {
                success = false
                return res.status(400).json({success,error:"Please try to login with correct Creditentials"})
            }

        const data = {
            user: {
                id: user.id
            }
        }
        // console.log(data, data.user, data.user.id)
        success = true
        const authtoken = jwt.sign(data, JWT_SECRET)
        res.json({success, authtoken})

    } catch (error) {
        success = false
        console.error(error.message)
        res.status(500).send("Internal server error...!")
    }

})
module.exports = router
