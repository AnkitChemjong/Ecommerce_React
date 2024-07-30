import React,{useState} from 'react'
import Nav from './Nav.jsx'
import Foot from './Foot.jsx'
import './Help.css'
export default function Help() {
  const [input,setInput]=useState('');

  const handleInput=(event)=>{
    let value=event.target.value;
    setInput(value);
    if(value===''){
      const faqList = document.getElementById("faqList").getElementsByTagName("div");
      for(let i=0;i<faqList.length;i++){
        faqList[i].style.display = "";
      }
    
    }
  }

  const khoj = () => {
    const searchbox = input.trim().toUpperCase();
    const faqList = document.getElementById("faqList").getElementsByTagName("div");
  
    for (let i = 0; i < faqList.length; i++) {
      let question = faqList[i].getElementsByTagName("h3")[0];
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
  
  return (
    <div className='help-main'>
      <Nav></Nav>
     
         <div className="search-box">
                <form>
                    <input type ="text" name='search' value={input} onChange={handleInput}  placeholder="Search"/>
                    <button type='button' onClick={khoj}><i className="fa fa-search"></i></button>
                </form>
        </div>
        <div className='inf-div'>
           <h1 style={{position:'relative',left:'36%',color:'azure',marginBottom:'5px'}}>
            How can we Help you?
           </h1>
           <div>
           <p>
           Welcome to Hamro Sadhan's help page! We're here 
           to assist you every step of the way. Don't 
           hesitate to explore the pre-formed answers 
           meticulously crafted to address your queries. 
           </p>
           </div>
        </div>

      <div id="faqSection">
      <h2>Frequently Asked Questions</h2>
      <h3>Please! input keyword related to your problem.</h3>
      <div id="faqList">
        <div>
          <h3>How do I SignIn?</h3>
          <p>To SIgnIn, follow these steps: ...</p>
          <ul>
            <li>Step 1: Go back to home page.</li>
            <li>Step 2: Click on the SignIn button,It will open a form for you.</li>
            <li>Step 3: Fill-up the from as need and press subbmit button.Now you are part of our family.</li>
          </ul>
          <p>Thankyou!!</p>
          
        </div>
        <div>
          <h3>What payment methods do you accept?</h3>
          <p>We accept various payment methods, including credit cards, Mobile-Banking, and esewa.</p> 
          <p>Thankyou!!</p>
        </div>
        <div>
          <h3>How can i Order from your site?</h3>
        <p>
          In-order to order from our site you have to follow folowing steps:...
        </p>
        <ul>
          <li>
        Step 1: Go back to home page.
          </li>
          <li>
          Step 2: First you have to SignIn to place your order. Please SIgnIn first by<br/>
            following the aboveInstructions. 
          </li>
          <li>
            Step 3: Click on the Product button,It will guide you to  a product page where<br/> 
                you can select the productsyou want to buy.
          </li>
          <li>
             Step 4: After that you can pay through any method as mentioned above for the products.
          </li>
        </ul>
          <p>Thankyou!!</p>
        </div>
        <div>
          <h3>How can i add items to cart?</h3>
          <p>In-order to add items to cart you have to follow following steps...</p>
          <ul>
            <li>
            Step 1: First search for the item you want to buy.
            </li>
            <li>
            Step 2: Click add to cart button. It will automatically add the item to cart.
            </li>
            <li>
            Step 3: After that you can search more and add to cart.</li>
            <li>
            Step 4: After adding all the items you want, You can find them inside the cart section.
            </li>
            <li>
            Step 5: Now,you can buy them by any methods that our site accepts.
            </li>
            </ul>
            <p>Thankyou!!</p>
        </div>
        <div>
          <h3>How long will it take for delivery?</h3>
          <p>If you are within a 60-70 kilometer radius of Dharan, It will be delivered<br/>
            within 10-20 minutes.wever, if you are located further away, the<br/>
            delivery time will depend on the transportation duration.<br/>
            But we will try our best to deliver the product as fast as possible.
          </p> 
          <p>
          Thankyou!!
          </p>
        </div>
        <div>
          <h3>What is the delivery cost?</h3>
          <p>We are delighted to inform you that we do not charge any delivery charges on our customers.<br/>
            This means you can place an order from any location of your choice.<br/>
            We will take full responsibility for delivering it to you promptly.
          </p>
          <p>
            Thankyou!!
          </p>
        </div>
      </div>
    </div>


        <div className='no-div'>
            <p>If you cannot find a solution to your problem, please visit our contact page where you<br/> 
              can reach out to us directly. Alternatively, you can contact us using the following contact details:
            </p>
         <ul>
            <li>
              PHONE:- 9800000090
            </li>
            <li>
              GMAIL:- HamroSadhan@gmail.com
            </li>
            <li>
              ADDRESS:- Dharan,Sunsari
            </li>
         </ul>
            <p>
              We will be glad to assist you with any further inquiries or concerns you may have.
            </p>
             <p> 
              Thankyou!!
              </p> 
        </div>
      <Foot></Foot>
    </div>
  )
}
