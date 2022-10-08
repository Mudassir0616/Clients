import React,{useState} from 'react'
import { Button, TextField } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

const Login = () => {
    const [formData, setformData] = useState({email:'', password:''})
    const history = useHistory()

    const handleChange = (e)=>{
        setformData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()

        try {
            const { data } = await axios.post('http://localhost:7001/auth/signIn',formData)
            localStorage.setItem('user', JSON.stringify(data))
            console.log(data)
            history.push('/clients/view-client')          
        } catch (error) {
            alert(error.response.statusText)
            console.log(error)
        }
    }

  return (
    <div className='main'>
        <div className="login">
            <form className="logBox" onSubmit={handleSubmit}>
                <span>
                <h1 style={{color:'black'}}>Welcome</h1>
                <p>Enter your Username and Password</p>
                </span>
                <TextField label={<PersonIcon/>} placeholder='Username' name='email' onChange={handleChange} type='email' fullWidth required />
                <TextField label={<LockIcon/>} placeholder='Password' name='password' onChange={handleChange} type='password' fullWidth required/>
                <Button variant='contained' type='submit'>Login</Button>
                <Button>Forget Password ?</Button>
            </form>
        </div>
        <div className="company">
            <div className="box"></div>
            <div className="company-name">
                <h2>360 Solution for Asset Management</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, veniam harum recusandae repudiandae nobis atque sed, reiciendis, molestias modi inventore quas at!</p>
            </div>
        </div>
    </div>
  )
}

export default Login