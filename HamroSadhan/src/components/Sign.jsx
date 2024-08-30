import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import signinValidation from './validation/signinValidation.jsx';
import './Log_Sign.css';
import axios from 'axios';

export default function Sign() {
 const navigate=useNavigate();
  
  const [value, setValue] = useState({
    fullName:'',
    email:'',
    number:'',
    password:'',
    password1:'',
 });
  const [fstyle, setFstyle] = useState({});
  const [sstyle, setSstyle] = useState({});
  const [ustyle,setUstyle]=useState({});
  const [estyle,setEstyle]=useState({});
  const [nstyle,setNstyle]=useState({});

  const [error, setError] = useState({});

const handleChange=(e)=>{
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
    if (value === '') {
      switch (name) {
          case 'fullName':
              setUstyle({ opacity: '1' });
              break;
          case 'password':
              setSstyle({ opacity: '1' });
              break;
          case 'email':
              setEstyle({ opacity: '1' });
              break;
          case 'number':
              setNstyle({ opacity: '1' });
              break;
          case 'password1':
            setFstyle({ opacity: '1' });
            break;
          default:
              break;
      }
  } else {
      switch (name) {
          case 'fullName':
              setUstyle({ opacity: '0' });
              break;
          case 'password':
              setSstyle({ opacity: '0' });
              break;
          case 'email':
              setEstyle({ opacity: '0' });
              break;
          case 'number':
              setNstyle({ opacity: '0' });
              break;
          case 'password1':
              setFstyle({ opacity: '0' });
              break;
          default:
              break;
      }}
}
   const handleButtonClick = async (event) => {
    event.preventDefault();
    setError(signinValidation(value));
    //setTimeout(()=>{setError(null)},1000);
    if (
      error.fullName === '' &&
      error.email === '' &&
      error.number === '' &&
      error.password === '' &&
      error.password1 === ''
    ){
      console.log("hi");
       await axios.post('http://localhost:8000/signin',value,{
        headers:{
          'Content-Type': 'application/json'
        }
       }).then((response) => {
        console.log(response.data);
        alert(response.data.message)
        navigate('/');
      }
        ).catch((error)=>{
        alert(error);
      })
    }
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
          width:'600px',backgroundColor:'rgba(255,255,255,.1)',position:'relative'
          ,marginLeft:'60px',borderRadius:'10px',boxShadow:'0 25px 45px rgba(255,255,255,.2)',
          border:'2px solid rgba(255,255,255,.5)',backdropFilter:'blur(5px)',display:'grid',
          alignItems:'center',justifyContent:'center'
        }}>
          <div className='t-div'>
            <p>SIGN-IN</p>
            <div className='bk-div'>
            <span><Link to='/'><i class="fa-solid fa-arrow-left-long"></i></Link></span>
            <div>Home</div>
            </div>
          </div>
             <form onSubmit={handleButtonClick} method='post' style={{display:'grid',alignItems:'center',justifyContent:'center'}}>
              <div>
              <input  type="text" required placeholder='FullName' name='fullName' onChange={handleChange}/>
              <i className="fa-solid fa-user" style={ustyle}/><br/>
              {error.fullName && <span className="text-danger">{error.fullName}</span>}

              </div>
              <div>
              <input type="email" required placeholder='Email' name='email' onChange={handleChange}/>
              <i className="fa-solid fa-envelope" style={estyle}></i><br/>
              {error.email && <span className="text-danger">{error.email}</span>}
              </div>
              <div>
              <input type="number" required placeholder='Number' name='number' onChange={handleChange}/>
              <i className="fa-solid fa-phone" style={nstyle}></i> <br/>
              {error.number && <span className="text-danger">{error.number}</span>}
              </div>
              <div>
              <input type="password" onChange={handleChange} name='password' required placeholder='Password'/>
              <i className="fa-solid fa-lock" style={sstyle}></i><br/>
              {error.password && <span className="text-danger">{error.password}</span>}
              </div>
              <div>
              <input type="password" name='password1' onChange={handleChange} required placeholder='Re-type Password'/>
              <i className="fa-solid fa-lock" style={fstyle}></i><br/>
              {error.password1 && <span className="text-danger">{error.password1}</span>}
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
        <span><Link to='/Log'>log-In</Link></span>
        <span><Link to='/Help'>Help</Link></span>
        </div>
        </div>
      </div>
    </>
  );
}