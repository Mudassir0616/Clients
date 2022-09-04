import express from 'express'
import Users from '../models/UsersModel.js'

const router = express.Router()

router.get('/', async(req,res) =>{
    try {
        const existingUser = await Users.find()

        res.json(existingUser)
        
    } catch (error) {
        res.json(error)
        
    }
})

router.post('/', async (req, res)=>{
    const user = req.body

    const newUser = new Users(user)

    try {
        const savedUser = await newUser.save()

        res.status(201).send(savedUser)
    } catch (error) {
        res.status(409).send(error)
        
    }

})

export default router