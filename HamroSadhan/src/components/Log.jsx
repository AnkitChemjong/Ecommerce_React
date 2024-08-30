import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import loginValidation from './validation/loginValidation.jsx';
import axios from 'axios';
import './Log_Sign.css';
export default function Log() {
  const navigate=useNavigate();
  const [value,setValue]=useState({
     email:'',
     password:''
  })

  const [pstyle,setPstyle] = useState();
  const [estyle,setEstyle]=useState();

  const [error, setError] = useState({});

const handleOnChange=(e) => {
  const {name,value}=e.target;
  setValue((prev)=>({...prev,[name]:value}));
  
  if(value===""){
    switch(name){
      case "email":setEstyle({opacity:'1'})
      break;
      case 'password':setPstyle({opacity:'1'})
    }
  }
  else{
    switch(name){
      case "email":setEstyle({opacity:'0'})
      break;
      case 'password':setPstyle({opacity:'0'})
    }
  }
}

const pass=async (event)=>{
   event.preventDefault();
   setError(loginValidation(value.email,value.password));
   await axios.post('http://localhost:8000/login',value,{
    headers:{
      'Content-Type':'application/json'
    }
   }).then((response)=>{
    alert('Login successful')
    navigate('/')
   }).catch((error)=>{
    alert("error: " + error)

    console.log(error);
   })
};
  return (
    <>
    <div style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(home.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative',
        borderRadius: '10px',width:'100%',height:'100vh',display:'flex',alignItems:'center',justifyContent: 'center'
      }}>
        <div style={{marginRight:'40px'}}><img style={{ width:'500px',
          height:'500px',
          borderRadius:'130px',
          position: 'relative',
          top: '10px'}} src="logo.png" ></img></div>
        <div style={{
          width:'600px',height:'600px',backgroundColor:'rgba(255,255,255,.1)',position:'relative'
          ,marginLeft:'60px',borderRadius:'10px',boxShadow:'0 25px 45px rgba(255,255,255,.2)',
          border:'2px solid rgba(255,255,255,.5)',backdropFilter:'blur(5px)',display:'grid',
          alignItems:'center',justifyContent:'center'
        }}>
          <div className='t-div'>
            <p>LOG-IN</p>
            <div className='bk-div'>
            <span><Link to='/'><i class="fa-solid fa-arrow-left-long"></i></Link></span>
            <div>Home</div>
            </div>
          </div>
             <form onSubmit={pass} style={{display:'grid',alignItems:'center',justifyContent:'center'}}>
              <div>
              <input type="email" required placeholder='Email' name='email' onChange={handleOnChange} />
              <i className="fa-solid fa-envelope" style={estyle}></i>
              </div>
              <div>
              <input type="password" name='password' onChange={handleOnChange} required placeholder='Password'/>
              <i className="fa-solid fa-lock" style={pstyle}></i>
              </div>
              <button type='submit'>Submit</button>
            </form>
            <div className='foot-div'>
            <div className='fot-div'>
        <span><Link to='#'><i class="fa-brands fa-facebook"></i></Link></span>
            <div>FB</div>
            </div>
            <div className='fot-div'>
                <span><Link to='#'><i class="fa-brands fa-google"></i></Link></span>
            <div>Google</div>
            </div>
            <div className='fot-div'>
            <span><Link to='#'><i class="fa-brands fa-instagram"></i></Link></span>
            <div>Insta</div>
            </div>
        </div>
        <div className='ex-div'>
        <span><Link to='/Policy'>Policy</Link></span>
        <span><Link to='/Sign'>Register</Link></span>
        <span><Link to='/Help'>Help</Link></span>
        </div>
        </div>
      </div>
    </>
  );
}


