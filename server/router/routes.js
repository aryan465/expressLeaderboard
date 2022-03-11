const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const Authenticate = require('../middleware/authenticate')

const { User, Leaderboard } = require("../model/dbSchema.js")

router.get('/', (req, res) => {
    res.send("Hello")
});

// Register
router.post('/register', async (req, res) => {

    const { name, email, points, password, cpassword } = req.body;

    if (!name || !email || !points || !password || !cpassword) {
        return res.status(422).json({ error: "Pease fill required textfields" })
    }

    try {
        const userExists = await User.findOne({ email: email })

        if (userExists) {
            return res.status(422).json({ error: "Email already registered" })
        }
        else if (password !== cpassword) {
            return res.status(422).json({ error: "Passwords do not match" })
        }
        else {
            const user = new User({ name, email, password })
            await user.save()
            const leaderboard = new Leaderboard({ name, email, points })
            await leaderboard.save()

            res.status(201).json({ message: "Registered Successfully" })
        }
    }
    catch (err) {
        console.log(err)
    }
})

// Signin
router.post('/signin', async (req, res) => {

    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ error: "Input fields can't be empty" })
        }

        const ifUserExists = await User.findOne({ email: email })

        if(!ifUserExists){
            res.status(400).json({error:"Invalid Credentials"})
        }
        else{
            const passwordMatch = await bcrypt.compare(password,ifUserExists.password)

            if(!passwordMatch){
                res.status(401).json({error:"Invalid Credentials"})
            }
            else{
                const token = await ifUserExists.generateAuthToken();
                console.log(token)
                res.cookie("authtoken",token,{
                    expires: new Date(Date.now() + 2592000000),
                    httpOnly:true 
                })

                res.status(200).json({ message: "Signin Successful" })
            }
        }

    } catch (err) {
        console.log(err)        
    }
})

router.get('/profile', Authenticate , (req,res)=>{
    console.log("Authenticated User")
    res.send(req.rootUser)
})

module.exports = router;