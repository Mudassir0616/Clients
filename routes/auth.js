import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import Auth from '../models/authModel.js'
import * as dotenv from 'dotenv' 


dotenv.config()

const router = express.Router()

router.post('/signIn', async(req,res)=>{
    const { email, password } = req.body

    try {
        const signedUser = await Auth.findOne({ email })
        
        if(!signedUser) return res.status(404).json({status: false, message: 'Please Sign In'})

        const isPasswordCorrect = await bcrypt.compare(password, signedUser.password)

        if(!isPasswordCorrect) return res.status(404).json({status: false, message: 'Incorrect Password'})

        const token = jwt.sign({email: signedUser.email, id: signedUser._id}, process.env.SECRETE, {expiresIn:'1h'})

        res.status(200).json({status: true, token})

        
    } catch (error) {

        res.status(500).json(error)
    }
})

router.post('/signUp', async(req,res)=>{
    const { name, email, password } = req.body

    try {
        const signedUser = await Auth.findOne({ email })

        if(signedUser) return res.status(400).json({ status: false, message: 'User already exist'})

        const hashedPassword = await bcrypt.hash(password, 12)

        const result = await Auth.create({ email, password: hashedPassword, name})

        const token = jwt.sign({ email: result.email, id: result._id}, process.env.SECRETE, {expiresIn:'1h'});

        res.status(200).json({status: true, token})
    } catch (error) {
        res.status(500).json(error)
    }
    
})

export default router