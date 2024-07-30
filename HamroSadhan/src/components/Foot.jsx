import React from 'react'
import {Link} from 'react-router-dom'
import './Foot.css'
export default function Foot() {
  return (
    <>
      <div className='ft-div'>
        <div className='lg-div'><img  src="logo.png"/></div>
        <div className='p-div'>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@Copyright Claim<br />
            2024 ALL RIGHTS RESERVED</p>
        </div>
        <div className='prt-div'>
            <p style={{
                fontFamily:'sans-serif',color:'white',fontSize:'20px',margin:'0'
            }}>Only Us</p>
        <Link to='/About'>About</Link>
        <Link to='/Blog'>Blog</Link>
        </div>
        <div className='int-div'>
            <p style={{
                fontFamily:'sans-serif',color:'white',fontSize:'20px',margin:'0'
            }}>Interaction</p>
        <Link to='/Policy'>Policy</Link>
        <Link to='/Help'>Help</Link>
        <Link to='/Feedback'>Feedback</Link>
        </div>
        <div className='ct-div'>
            <p style={{
                fontFamily:'sans-serif',color:'white',fontSize:'20px',margin:'0'
            }}>Contact Details</p>
            <p>Gmail:-np05cp4s230012@iic.edu.np</p>
            <p>Number:-9800000000</p>
            <p>Facebook:-Ankit Chemjong</p>
            <Link to='/Contact'>Contact</Link>
          <p></p>
        </div>
      </div>
    </>
  )
}
