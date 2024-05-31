import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import loginValidation from './validation/loginValidation.jsx';
import './Log_Sign.css';
export default function Log() {
  const [password1, setPassword1] = useState('');
  const [pstyle,setPstyle] = useState();

  const [uselgn,setUselgn]=useState('');
  const [ustyle,setUstyle]=useState();

  const [emlgn,setEmlgn]=useState('');
  const [estyle,setEstyle]=useState();

  const [error, setError] = useState({});

const handleOnChange1=(event) => {
  const value=event.target.value;
   setPassword1(value);
   if(value===''){
    setPstyle({opacity:'1'});
   }
   else{
    setPstyle({opacity:'0'})
   }
}
const handleOnChange2=(event) => {
  const value=event.target.value;
   setUselgn(value);
   if(value===''){
    setUstyle({opacity:'1'})
  }
  else{
    setUstyle({opacity:'0'})
  }


}
const handleOnChange3=(event) => {
  const value=event.target.value;
   setEmlgn(value);
   if(value===''){
    setEstyle({opacity:'1'})
  }
  else{
    setEstyle({opacity:'0'})
  }
}
const pass=(event)=>{
   event.preventDefault();
   setError(loginValidation(emlgn,password1,uselgn));
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
              <input  type="text" required placeholder='UserName' onChange={handleOnChange2} value={uselgn}/>
              <i className="fa-solid fa-user" style={ustyle}/>
              </div>
              <div>
              <input type="email" required placeholder='Email' onChange={handleOnChange3} value={emlgn}/>
              <i className="fa-solid fa-envelope" style={estyle}></i>
              </div>
              <div>
              <input type="password" value={password1} onChange={handleOnChange1} required placeholder='Password'/>
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


