import React,{useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';

const initialState = {companyName:'', website:'', buisnessCategory:'', companyEmail:'', companyNumber:'', state:'', city:'', pincode:'', gst:'', fax:'', sites:'', paymentStatus:''}

const Add = () => {
    const [viewData, setviewData] = useState(initialState);
    const history = useHistory()
    const user = JSON.parse(localStorage.getItem('user'))

    const logout = ()=>{
        localStorage.clear()
        history.push('/')
    }

    const handleChange = (e)=>{
        setviewData({ ...viewData, [e.target.name]: e.target.value})
      }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const {data} = await axios.post('http://localhost:7001/users', viewData, { headers: {"Authorization" : `Bearer ${user?.token}`} })
        history.push('/clients/view-client')
        console.log(data)
    }
  return (
    <div className='client-main'>

        <div className="left-side">
          <div className='left-main'>
            <h4 style={{paddingLeft:'20px'}}>Company Name</h4>
        <div className='srch'>
          <div className='srch-inp'>
            <SearchIcon/>
            <input type="text" placeholder=' Search modules' />
          </div>
        </div>
        <h4 style={{letterSpacing:'1px', color:'lightGray', paddingLeft:'10px'}}>CLIENT MASTER</h4>

        <div className="btn">
          <Link to={'/clients/view-client'}>
            <button className='client-btns'>View Client</button>
          </Link>
          
          <Link to={'/clients/add-client'}>
            <button className='client-btns'>Add Client</button>
          </Link>
        </div>
        </div>

        <div className="logout">
        <h3>{user?.signedUser.name}</h3>
        <p>{user?.signedUser.email} 
        <span onClick={logout} style={{cursor:'pointer'}}>
            <LogoutIcon style={{fontSize:'19px', margin:'0 10px', color:'gray'}}/>
        </span>
        </p>
      </div>

        </div>
        <div className="right-side">
            <h2 style={{paddingLeft:'10px'}}>Add Clients</h2>

        <div className="add-main">
            <div style={{lineHeight:'9px'}}>
            <h3>Create Client Profile</h3>
            <p style={{color:'gray', fontWeight:'500'}}>Add some basic Information related to the client</p>
            </div>

            <form className="details" onSubmit={handleSubmit}>
                <div className="inputs">
                    <TextField name='companyName' required onChange={handleChange} label='Company Name'/>&nbsp;&nbsp;&nbsp;
                    <TextField name='website' onChange={handleChange} label='Website'/>
                </div>
                <div className="inputs">
                    <TextField name='buisnessCategory' required onChange={handleChange} label='Buisness Category'/>&nbsp;&nbsp;&nbsp;
                    <TextField name='companyEmail' required onChange={handleChange} label='Company Email Address'/>
                </div>
                <div className="inputs">
                    <TextField name='companyNumber' required onChange={handleChange} label='Company Number' type='number'/>&nbsp;&nbsp;&nbsp;
                    <TextField name='state' required onChange={handleChange} label='State'/>
                </div>
                <div className="inputs">
                    <TextField name='city' required onChange={handleChange} label='City'/>&nbsp;&nbsp;&nbsp;
                    <TextField name='pincode' required onChange={handleChange} label='Pincode' type='number'/>
                </div>
                <div className="inputs">
                    <TextField name='gst' onChange={handleChange} label='GST Number' type='number'/>&nbsp;&nbsp;&nbsp;
                    <TextField name='fax' required onChange={handleChange} label='Fax Number' type='number'/>
                </div>

                <div className="add-btn">
                    <button type='submit'>Save and Continue</button>
                </div>
            </form>
        </div>


        <div className="add-main">
            <div style={{lineHeight:'9px'}}>
            <h3>Payment Method</h3>
            <p style={{color:'gray', fontWeight:'500'}}>Setup Payment for the Client</p>
            </div>

            <form className="details" onSubmit={handleSubmit}>
                <div className="inputs">
                    <TextField required label='Billing Address' fullWidth/>
                </div>
                <div className="inputs">
                    <TextField required label='State' style={{width:'350px'}}/>&nbsp;&nbsp;&nbsp;
                    <TextField required label='City' style={{width:'350px'}}/>&nbsp;&nbsp;&nbsp;
                    <TextField required label='Pincode' type='number' style={{width:'180px'}}/>
                </div>
                <div className="inputs">
                    <TextField name='sites' required label='Number of Sites' type='number' onChange={handleChange} style={{width:'350px'}}/>&nbsp;&nbsp;&nbsp;
                    <TextField required label='Payment Per Site' type='number' style={{width:'350px'}}/>&nbsp;&nbsp;&nbsp;
                    <TextField label='Total' type='number' style={{width:'180px'}}/>
                </div>

                <div className="inputs">
                   <TextField required label='Reasons' fullWidth/>
                </div>

                <div className="payment-inp">
                  <div>
                    <label>Select Payment Mode</label><br /><br />
                       <div>  
                         <input type="radio" name='payment' value='UPI'/><label>UPI </label>&nbsp;&nbsp;
                         <input type="radio" name='payment' value='Net Banking'/><label>Net Banking</label>&nbsp;&nbsp;
                         <input type="radio" name='payment' value='Cash'/><label>Cash</label>&nbsp;&nbsp;
                         <input type="radio" name='payment' value='Cheque'/><label>Cheque</label>&nbsp;&nbsp;
                       </div>
                  </div>

                   <div style={{paddingRight:'100px'}}>
                    <label>Payment Status</label><br /><br />
                      <div>
                        <input type="radio" name='paymentStatus' onChange={handleChange} value='Paid'/><label>Paid</label>&nbsp;
                        <input type="radio" name='paymentStatus' onChange={handleChange} value='Pending'/><label>Pending</label>
                      </div>
                    </div>

                  </div>
            
                <div className="add-btn">
                    <button type='submit'>Save and Continue</button>
                </div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Add