import React,{useState} from 'react'
import Nav from './Nav.jsx'
import Foot from './Foot.jsx'
import {FaStar} from 'react-icons/fa'
import './Feedback.css'

export default function Feedback() {
  const [txtcon,setTxtcon]=useState('');

  const [uselgn,setUselgn]=useState('');
  const [ustyle,setUstyle]=useState();

  const [emlgn,setEmlgn]=useState('');
  const [estyle,setEstyle]=useState();

  const [rating,setRating]=useState(null);
  const [hover,setHover]=useState(null);

  const [showFeedbackForm, setShowFeedbackForm] = useState(true);

  const pass = () => {
      alert('Thanks for Feedback');
    }
const handleOnChange1=(event) => {
  const value=event.target.value;
   setTxtcon(value);
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
const feedback = () => {
  setShowFeedbackForm(false); 
};
const feedbacks = () => {
  setShowFeedbackForm(true); 
};
 
  return (
    <div className='feed-main'>
      <Nav/>
       <div className='fed-div'>
        <h2>Feedbacks Received.</h2>
        <div className='feds-div'>
        <div className='feds-div1'>
        <i class="fa-solid fa-circle-user"></i>
        <div className='feds-div11'>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
        <i class="fa-regular fa-star"></i>
        </div>
        <h2>Vek Rai</h2>
        <div className='feds-div12'>
          <p>
          Smooth transactions, quality vehicles,
           and reliable service make this rental
            website my top choice every time.
          </p>
        </div>
        </div>
        <div className='feds-div1'>
        <i class="fa-solid fa-circle-user"></i>
        <div className='feds-div11'>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <h2>Bibas Rai</h2>
        <div className='feds-div12'>
          <p>
          Impressive variety, convenient booking process, 
          and exceptional customer service. Highly 
          recommend for all your rental needs!
          </p>
        </div>
        </div>
        <div className='feds-div1'>
        <i class="fa-solid fa-circle-user"></i>
        <div className='feds-div11'>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
        <i class="fa-regular fa-star"></i>
        </div>
        <h2>Ram Rai</h2>
        <div className='feds-div12'>
          <p>
          Excellent selection of vehicles, from 
          bicycles to trucks, making it easy to 
          find the perfect rental for any need.
          </p>
        </div>
        </div>
        </div>
        <div className='gv-fed'>
          <button onClick={feedback}>Give Feedback</button>
        </div>
        {showFeedbackForm? "":(
          //CSS is default from the Log_Sign.css
          <div style={{
            width: '400px', height: '500px', backgroundColor: 'rgba(255,255,255,.2)', position: 'absolute',
            marginLeft: '480px', borderRadius: '10px', boxShadow: '0 25px 45px rgba(255,255,255,.2)',
            border: '2px solid rgba(255,255,255,.5)', backdropFilter: 'blur(5px)', display: 'block',
            alignItems: 'center', justifyContent: 'center',zIndex:'1',top:'600px'
          }}>
            <button onClick={feedbacks} style={{position:'relative',backgroundColor:'rgba(255,255,255,.1)',top:'35px',left:'20px',borderRadius:'10px'}}><i class="fa-solid fa-arrow-left-long" style={{fontSize:'20px'}}></i></button>
            <h2 style={{color:'azure',position:'relative',left:'35%',top:'10px'}}>  Feedback</h2>
            <form onSubmit={pass} style={{ display: 'grid', alignItems: 'center', justifyContent: 'center'}}>
              <div>
                <input type="text" required placeholder='UserName' onChange={handleOnChange2} value={uselgn} />
                <i className="fa-solid fa-user" style={ustyle} />
              </div>
              <div>
                <input type="email" required placeholder='Email' onChange={handleOnChange3} value={emlgn} />
                <i className="fa-solid fa-envelope" style={estyle}></i>
              </div>
              <div style={{display:'grid',justifyContent:'center',alignItems:'center',margin:'0'}}>
                <p style={{
                  position: 'relative',color:'azure',marginBottom:'5px'
                }}>Please do Rate-Us.</p>
                <div >
                  {[...Array(5)].map((star,index)=>{
                            const currentRating=index+1;
                       return (
                        <label>
                           <input style={{display:'none'}} type='radio' name='rating' value={currentRating}
                           onClick={()=>{
                            setRating(currentRating);
                           }} />
                          <FaStar color={currentRating<=(hover || rating)? "yellow":"white"} style={{cursor:'pointer',margin:'2px'}} size={20}
                           onMouseEnter={()=>{
                            setHover(currentRating);

                           }}
                           onMouseLeave={()=>{
                            setHover(null);
                           }}
                          />
                        </label>
                       );
                  })}
                </div>
              </div>
              <div>
              <textarea style={{height: "100px", borderRadius: "3px" ,
              backgroundColor: "rgba(255, 255, 255, .2)", width: "300px", boxShadow: "0 25px 45px rgba(255, 255, 255, .2)",
               border:" 2px solid rgba(255, 255, 255, .5)" ,textAlign:"center" ,color:"azure",position:"relative",left:"10px"}} 
               type="text" value={txtcon} onChange={handleOnChange1} required placeholder='How was your Experience'/>
              
              </div>
             
              <button type='submit'>Submit</button>
            </form>
          </div>
        )}
       </div>
      <Foot/>
    </div>
  )
}
