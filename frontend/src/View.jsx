import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';
import { Avatar } from '@mui/material';

const View = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const [Data, setData] = useState([])
    const history = useHistory()

    const logout = ()=>{
        localStorage.clear()
        history.push('/')
    }

    const getData = async()=>{
        try {
            const { data } = await axios.get('http://localhost:7001/users',{ headers: {"Authorization" : `Bearer ${user?.token}`} })
            setData(data)
        } catch (error) {
            alert(error.response.data)
            history.push('/')
        }
    }

    useEffect(()=>{
        getData()
    },[])

    console.log(Data)
    
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
        <h2 style={{paddingLeft:'10px'}}>View Clients</h2>

        <span style={{display:'flex', alignItems:'center'}}>
        <h4>Client Master</h4>&nbsp;/&nbsp;<p>View Clients</p>
        </span>

            <div className="table">
              <table style={{borderCollapse:'collapse', width:'100%'}}>
              <tr>
                <th>Company Name</th>
                <th>Company Email</th>
                <th>Phone No</th>
                <th>Buisness Category</th>
                <th>City</th>
                <th>Sites</th>
                <th>Payment</th>
                <th>GST</th>
            </tr>
            {Data?.map((data, index)=>(
              <tr>
                <td style={{display:'flex', alignItems:'center'}}><Avatar/> &nbsp;&nbsp;&nbsp;{data.companyName}</td>
                <td>{data.companyEmail}</td>
                <td>{data.companyNumber}</td>
                <td>{data.buisnessCategory}</td>
                <td>{data.city}</td>
                <td>{data.sites}</td>
                <td>{data.paymentStatus}</td>
                <td>{data.gst}</td>
              </tr>
            ))}
              </table>
            </div>
        </div>
    </div>
  )
}

export default View