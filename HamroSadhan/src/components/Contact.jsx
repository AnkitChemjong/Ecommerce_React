import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Nav from './Nav.jsx'
import Foot from './Foot.jsx'
import './Contact.css'
import { useActionData } from 'react-router-dom';

export default function Contact() {
  const [txtcon,setTxtcon]=useState('');
  const [Tstyle,setTstyle]=useState();

  const [usecon,setUsecon]=useState('');
  const [ustyle,setUstyle]=useState();

  const [emcon,setEmcon]=useState('');
  const [estyle,setEstyle]=useState();


  const contHandleText=(event)=>{
    const value=event.target.value;
    setTxtcon(value);
    if(value===''){
      setTstyle({opacity:'1'})
    }
    else{
      setTstyle({opacity:'0'})
    }
  }
  const contHandleUser=(event)=>{
    const value=event.target.value;
    setUsecon(value);
    if(value===''){
      setUstyle({opacity:'1'})
    }
    else{
      setUstyle({opacity:'0'})
    }
  }
  const contHandleEmail=(event)=>{
    const value=event.target.value;
    setEmcon(value);
    if(value===''){
      setEstyle({opacity:'1'})
    }
    else{
      setEstyle({opacity:'0'})
    }
  }

    const contact = () => {
       alert("Thank you for contacting us!");
      };
  return (
    
    <div className='con-div'>
    <Nav/>
    <div className='conta-div'>
        <div className='conta-div1'>
          <div className='conta-div11'>
          <div>
            <h1>Address</h1>
            <i class="fa-solid fa-location-dot"></i>
          </div>
            <h2>:-Dharan,Sunsari</h2>
          </div>

            <div className='conta-div11'>
          <div>
            <h1>GMAIL</h1>
            <i class="fa-brands fa-google"></i>
          </div>
            <h2>:-HamroSadhan@gmail.com</h2>
            </div>

            <div className='conta-div11'>
            <div>
            <h1>PHONE</h1>
            <i class="fa-solid fa-phone"></i>
            </div>
            <h2>:-9800000000</h2>
            </div>

            <div className='conta-div11'>
            <div>
            <h1>FACEBOOK</h1>
            <i class="fa-brands fa-facebook"></i>
            </div>
            <h2>:-Hamro Sadhan</h2>
            </div>

            <div className='conta-div11'>
            <div>
            <h1>INSTA</h1>
            <i class="fa-brands fa-instagram"></i>
            </div>
            <h2>:-Hamro Sadhan</h2>
            </div>
        </div>
        <div className='conta-div2'>
            <p>CONTACT</p>
            <form onSubmit={contact} style={{display:'grid',alignItems:'center',justifyContent:'center'}}>
              <div>
              <input  type="text" value={usecon} onChange={contHandleUser} required placeholder='UserName'/>
              <i class="fa-solid fa-user" style={ustyle}/>
              </div>
              <div>
              <input type="email" value={emcon} onChange={contHandleEmail} required placeholder='Email'/>
              <i class="fa-solid fa-envelope" style={estyle}></i>
              </div>
              <div>
              <textarea className='third' type="text" value={txtcon} onChange={contHandleText} required placeholder='What is your Intention'/>
              </div>
              <button type='submit'>Submit</button>
            </form>
            
       </div>
       </div>

    <Foot/>
     </div>

  )
}
