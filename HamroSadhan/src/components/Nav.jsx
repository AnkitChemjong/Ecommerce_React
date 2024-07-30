import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  return (
      <navbar className='nav'>
       <div className='im-div'>
        <img src="logo.png" style={{marginRight:'10px',width:'150px',height:'150'}} alt="" />
       </div>
        <Link to='/'>Home</Link>
      </navbar>
  )
}
