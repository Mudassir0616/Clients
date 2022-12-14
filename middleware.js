import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv' 


dotenv.config()

const verification = (req, res, next)=>{
    const authorizedtoken = req.headers.authorization

    
    if(authorizedtoken){
        const token = authorizedtoken.split(' ')[1]
        let decodedData = jwt.verify(token, process.env.SECRETE, (err)=>{
            if(err){
                res.status(403).json('Invalid token or the token has been expired please login again !!')
            }
            else{
                next()
            }
        })
        
    }
    else{
        res.status(401).json('You are not Authorized')
    }


}

export default verification