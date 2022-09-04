import express from 'express'
import mongoose from 'mongoose'
import userRoutes from './routes/Users.js'
import authRoutes from './routes/auth.js'

const app = express()

app.use(express.json())

app.get('/auth',(req, res)=>{
    res.send('Authorization')
})

app.use('/users', userRoutes)
app.use('/auth', authRoutes)

const PORT = process.env.PORT || 7001

const CONNECTION_URL = 'mongodb://vegeta0616:mudassir020616@ac-apjwdak-shard-00-00.fbbk4lp.mongodb.net:27017,ac-apjwdak-shard-00-01.fbbk4lp.mongodb.net:27017,ac-apjwdak-shard-00-02.fbbk4lp.mongodb.net:27017/?ssl=true&replicaSet=atlas-hhxvf2-shard-0&authSource=admin&retryWrites=true&w=majority'

app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`))

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}, ()=> console.log('connected to Database'))














// const apikey = 'b518ef033c4ddf2fda6b7f09898105dc'

// const baseUrl= `http://api.scraperapi.com?api_key=${apikey}&autoparse=true`;

// app.get('/', (req,res)=>{
//     res.send('Instagram API')
// })

// app.get('/product/:productId', async (req,res)=>{
//     const { productId } = req.params
//     // const { api_key } = req.query;

//     try {
//         const response = await request(`${baseUrl}&url=https://www.amazon.in/dp/${productId}`);

//         res.json(JSON.parse(response))
//     } catch (error) {
//         res.json(error)
//     }
// })

//amazon Search query

// app.get('/search/:searchQuery', async (req,res)=>{
//     const { searchQuery } = req.params
//     // const { api_key } = req.query;

//     try {
//         const response = await request(`${baseUrl}&url=https://www.amazon.in/s?k=${searchQuery}`);

//         res.json(JSON.parse(response))
//     } catch (error) {
//         res.json(error)
//     }
// })
