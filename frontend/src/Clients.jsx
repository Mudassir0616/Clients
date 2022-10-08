import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import Add from './Add';

const Clients = () => {
  return (
    <div className='client-main'>

        <div className="left-side">
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
        
    </div>
  )
}

export default Clients