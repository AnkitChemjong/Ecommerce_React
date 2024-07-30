import React,{useState} from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import Foot from './Foot.jsx'

export default function Home() {
    const [count,setCount]=useState(0);
    const [itemc,setItemc]=useState();

    const [srhv,setSrhv]=useState('');

    const handleInputs=(event)=>{
        let value=event.target.value;
        setSrhv(value);
        if(value===''){
          const faqList = document.querySelectorAll('.component');
          for(let i=0;i<faqList.length;i++){
            faqList[i].style.display = "";
          }
        
        }
      }
    
      const khoj = () => {
        const searchbox = srhv.trim().toUpperCase();
        const faqList = document.querySelectorAll('.component');
      
        for (let i = 0; i < faqList.length; i++) {
          let question = faqList[i].getElementsByTagName("h1")[0];
          if (question) {
            let textValue = question.textContent || question.innerHTML;
            if (textValue.toUpperCase().indexOf(searchbox) > -1) {
              faqList[i].style.display = "";
            } else {
              faqList[i].style.display = "none";
            }
          }
        }
      }

    const handleItemC=(event)=>{
         const value=event.target.value;
         setItemc(value);
    } 

    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
  return (
   <>
     <header>
        <input type ="checkbox" name ="" id ="chk1"/>
        <div className="logo"><img src="logo.png"></img></div>
        <ul className='f-ul'>
                <li><a href='#'>Home</a></li>
                <li><a href="#">Vehicle </a>
                <ul className='dropdown'>
                    <li><Link onClick={()=>scrollToElement('car')}>Car</Link></li>
                    <li><Link onClick={()=>scrollToElement('bus')}>Bus</Link></li>
                    <li><Link onClick={()=>scrollToElement('truck')}>Truck</Link></li>
                    <li><Link onClick={()=>scrollToElement('bike')}>Bike</Link></li>
                    <li><Link onClick={()=>scrollToElement('bicycle')}>Bicycle</Link></li>
                </ul>
                </li>
                <li><Link to='/About'>About</Link></li>
                <li><a href="#">More...</a>
                <ul className='dropdown'>
                    <li><Link to='/Contact'>Contact</Link></li>
                    <li><Link to='/Feedback'>Feedback</Link></li>
                    <li><Link to='/Blog'>Blog</Link></li>
                    <li><a href="/Help">Help</a></li>
                </ul>
                </li>
        </ul>
        <div className='si-div'>
            <div className='ic-div'>
        <span><Link to='/Log'><i className="fa-solid fa-user"></i></Link></span>
            <div>Log-In</div>
            </div>
            <div className='ic-div'>
                <span><Link to='/Sign'><i className="fa-solid fa-registered"></i></Link></span>
            <div>Sign-In</div>
            </div>
            <div className='ic-div'>
            <span><Link to='/Cart'><i className="fa-solid fa-cart-plus"></i>{count}</Link></span>
            <div>Cart</div>
            </div>
        </div>
        <div className="menu">
                <label for="chk1">
                    <i className="fa fa-bars"></i>
                </label>
        </div> 
        <div className='txt-div'>
            <h1>Hamro Sadhan</h1>
         <p>Unlock Your Journey:Rent Any Vehicle, Anytime, Anywhere!</p>
         <p>Drive Your Dreams!</p>
        </div>   
    </header>
    <div style={{margin:'auto',position:'relative',bottom:'10px',left:'600px'}}>
            <h2 >Our Facilities!!!</h2>
        </div>
        <div className="combo">
            <div className="combo1">
                <input type="radio" name="radio-btn" id="rd1"/>
                <input type="radio" name="radio-btn" id="rd2"/>
                <input type="radio" name="radio-btn" id="rd3"/>
                <input type="radio" name="radio-btn" id="rd4"/>
                <input type="radio" name="radio-btn" id="rd5"/>
                <div className="sld1 main">
                    <img src="car.jpg" alt=""/>
                </div>
                <div className="sld1">
                    <img src="bu.jpg" alt=""/>
                </div>
                <div className="sld1">
                    <img src="Trk.jpg" alt=""/>
                </div>
                <div className="sld1">
                    <img src="bi.jpg" alt=""/>
                </div>
                <div className="sld1">
                    <img src="bicycle.jpg" alt=""/>
                </div>
            </div>
            <div class="navig">
                <label for="rd1" className="mnbtn"></label>
                <label for="rd2" className="mnbtn"></label>
                <label for="rd3" className="mnbtn"></label>
                <label for="rd4" className="mnbtn"></label>
                <label for="rd5" className="mnbtn"></label>

         </div >
        </div>
        
        <div className="search-box">
                <form>
                    <input type ="text" value={srhv} onChange={handleInputs} name ="search" placeholder="Search"/>
                    <button type='button' onClick={khoj}><i className="fa fa-search"></i></button>
                </form>
       </div>

           <div id="car" className='component'>
            <h1>Car</h1>
            <div className='component1'>
                <div>
                    <img src="Nissan Sentra SR.jpg" alt="" />
                    <h3>Nissan Sentra SR</h3>
                    <div className="price">Rs:-10000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>

                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" value={itemc} onChange={handleItemC}/>
                    </div>
                    <div>
                        <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>

                </div>
                <div>
                    <img src="Nissan Sentra SR.jpg" alt="" />
                    <h3>Nissan Sentra SR</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                </div>
                <div>
                    <img src="Nissan Sentra SR.jpg" alt="" />
                    <h3>Nissan Sentra SR</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                </div>
                <div>
                    <img src="Nissan Sentra SR.jpg" alt="" />
                    <h3>Nissan Sentra SR</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                </div>
                
            </div>
            <div className='component1'>
               
            <div>
                    <img src="Nissan Sentra SR.jpg" alt="" />
                    <h3>Nissan Sentra SR</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                </div>
                <div>
                    <img src="Nissan Sentra SR.jpg" alt="" />
                    <h3>Nissan Sentra SR</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                </div>
                <div>
                    <img src="Nissan Sentra SR.jpg" alt="" />
                    <h3>Nissan Sentra SR</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                </div>
                <div>
                    <img src="Nissan Sentra SR.jpg" alt="" />
                    <h3>Nissan Sentra SR</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div >
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                   
                </div>
            </div>
        </div>

        <div id="bike" className='component'>
            <h1>Bike</h1>
            <div className='component1'>
                <div>
                    <img src="mt.jpg" alt="" />
                    <h3>Yamaha MT15</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>

                        <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" value={itemc} onChange={handleItemC}/>
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>

                </div>
                <div>
                    <img src="mt.jpg" alt="" />
                    <h3>Yamaha MT15</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                </div>
                <div>
                    <img src="mt.jpg" alt="" />
                    <h3>Yamaha MT15</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                </div>
                <div>
                    <img src="mt.jpg" alt="" />
                    <h3>Yamaha MT15</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                </div>
                
            </div>
            <div className='component1'>
               
            <div>
                    <img src="mt.jpg" alt="" />
                    <h3>Yamaha MT15</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                </div>
                <div>
                    <img src="mt.jpg" alt="" />
                    <h3>Yamaha MT15</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                </div>
                <div>
                    <img src="mt.jpg" alt="" />
                    <h3>Yamaha MT15</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                </div>
                <div>
                    <img src="mt.jpg" alt="" />
                    <h3>Yamaha MT15</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div >
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                   
                </div>
            </div>
        </div>

        <div id="truck" className='component'>
            <h1>Truck</h1>
            <div className='component1'>
                <div>
                    <img src="truck.jpg" alt="" />
                    <h3>Yamraj</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>

                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" value={itemc} onChange={handleItemC}/>
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>

                </div>
                <div>
                    <img src="truck.jpg" alt="" />
                    <h3>Yamraj</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                </div>
                <div>
                    <img src="truck.jpg" alt="" />
                    <h3>Yamraj</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                </div>
                <div>
                    <img src="truck.jpg" alt="" />
                    <h3>Yamraj</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                </div>
                
            </div>
            <div className='component1'>
               
            <div>
                    <img src="truck.jpg" alt="" />
                    <h3>Yamraj</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                </div>
                <div>
                    <img src="truck.jpg" alt="" />
                    <h3>Yamraj</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                </div>
                <div>
                    <img src="truck.jpg" alt="" />
                    <h3>Yamraj</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                </div>
                <div>
                    <img src="truck.jpg" alt="" />
                    <h3>Yamraj</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div >
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                   
                </div>
            </div>
        </div>

        <div id="bicycle" className='component'>
            <h1>bicycle</h1>
            <div className='component1'>
                <div>
                    <img src="cycle.png" alt="" />
                    <h3>Nissan Sentra SR</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>

                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" value={itemc} onChange={handleItemC}/>
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>

                </div>
                <div>
                    <img src="cycle.png" alt="" />
                    <h3>Nissan Sentra SR</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                </div>
                <div>
                    <img src="cycle.png" alt="" />
                    <h3>Nissan Sentra SR</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                </div>
                <div>
                    <img src="cycle.png" alt="" />
                    <h3>Nissan Sentra SR</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                </div>
                
            </div>
            <div className='component1'>
               
            <div>
                    <img src="cycle.png" alt="" />
                    <h3>Nissan Sentra SR</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                </div>
                <div>
                    <img src="cycle.png" alt="" />
                    <h3>Nissan Sentra SR</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                </div>
                <div>
                    <img src="cycle.png" alt="" />
                    <h3>Nissan Sentra SR</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                </div>
                <div>
                    <img src="cycle.png" alt="" />
                    <h3>Nissan Sentra SR</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div >
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                   
                </div>
            </div>
        </div>

        <div id="bus" className='component'>
            <h1>bus</h1>
            <div className='component1'>
                <div>
                    <img src="buss.jpg" alt="" />
                    <h3>Nissan Sentra SR</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>

                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" value={itemc} onChange={handleItemC}/>
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>

                </div>
                <div>
                    <img src="buss.jpg" alt="" />
                    <h3>Nissan Sentra SR</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                </div>
                <div>
                    <img src="buss.jpg" alt="" />
                    <h3>Nissan Sentra SR</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                </div>
                <div>
                    <img src="buss.jpg" alt="" />
                    <h3>Nissan Sentra SR</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                </div>
                
            </div>
            <div className='component1'>
               
            <div>
                    <img src="buss.jpg" alt="" />
                    <h3>Nissan Sentra SR</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                </div>
                <div>
                    <img src="buss.jpg" alt="" />
                    <h3>Nissan Sentra SR</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                </div>
                <div>
                    <img src="buss.jpg" alt="" />
                    <h3>Nissan Sentra SR</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div>
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                </div>
                <div>
                    <img src="buss.jpg" alt="" />
                    <h3>Nissan Sentra SR</h3>
                    <div className="price">Rs:-10,000(day)</div>
                    <div className='stars-h'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div className='hid-div'>
                    <div>
                        <label>Number of Vehicle=</label>
                        <input type="number" />
                    </div>
                    <div >
                    <button type='button'>Rent</button>
                        <button type='button'>Add To Cart</button>
                    </div>
                    </div>
                   
                </div>
            </div>
        </div>
    <Foot></Foot>
   </>
  )
}
