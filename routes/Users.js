import express from 'express'
import verification from '../middleware.js'
import Users from '../models/UsersModel.js'

const router = express.Router()

router.get('/', verification, async(req,res) =>{
    
    try {
        const existingUser = await Users.find()

        res.json(existingUser)
        
    } catch (error) {
        res.status(404).json(error)
        
    }
})

router.get('/:id', async(req,res) =>{

    const id = req.params.id

    const oneUser = await Users.findById(id)

    if(!oneUser) {
        return res.status(404).json('no user')
    } else{
        res.status(200).json(oneUser)
    }
    
})


router.post('/', verification, async (req, res)=>{
    const user = req.body

    const newUser = new Users(user)

    try {
        const savedUser = await newUser.save()

        res.status(201).send(savedUser)
    } catch (error) {
        res.status(409).send(error)
        
    }

})

router.patch('/:id', verification, async(req, res)=>{

    const id = req.params.id;
    const update = req.body;

    const updatedUser = await Users.findByIdAndUpdate(id, update, {new: true})

    if(!updatedUser){
        return (res.status(401).json('No user found'))
    }
    else{
        res.status(201).json(updatedUser)
    }
})


router.delete('/:id', verification, async(req, res)=>{
    const id = req.params.id

    await Users.findByIdAndRemove(id)

    res.json('Post deleted')
})



export default router