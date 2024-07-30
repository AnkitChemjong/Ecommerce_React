import React from 'react'
import './Policy.css'
import Nav from './Nav.jsx'
import Foot from './Foot.jsx'

export default function Policy() {
  return (
    <div className='poli-main'>
        <Nav></Nav>
       <div className='poli1'>
         <div className='head'>
            <h1>PRIVACY AND POLICY</h1>
         </div>
         <div className='para'>
          <h2 style={{color:'azure',
                    fontSize: '20px',
                    fontFamily: 'sans-serif',
                    marginBottom:'10px'}}> Welcome to Hamro Sadhan, operated by Ankit Chemjong. 
            We highly value your privacy and are committed to protecting your 
            personal information. Please take a moment to review this 
            Privacy Policy to understand how we collect, use, and 
            safeguard your data.
            </h2>

            <div>
            <h2 style={{color:'black'}}>1. Data Protection and Collection</h2>
          <p>At Hamro Sadhan, we recognize that data protection is a matter of trust. 
            Therefore, we only collect and use your personal information in 
            accordance with this Privacy Policy. We collect information that
             is necessary for providing our rental services and ensuring 
             a seamless experience for you.</p>
            </div>

             <div>
             <h2 style={{color:'black'}}>2. Information We Collect</h2>
          <p>-:Identity data: Name, gender, and date of birth</p>
          <p>-:Contact data: Address, email address, and phone numbers</p>
          <p>-:Transaction records/data: Details about orders and payments</p>
          <p>-:Technical data: IP address, browser type, and device information</p>
          <p>-:Profile data: Username, password, and account settings</p>
          <p>-:Usage data: Information on how you use our services and website</p>
             </div>

          <div>
        <h2 style={{color:'black'}}>3. How We Use Your Information</h2>
          <p>-:To Process your rental orders</p>
          <p>-:To Deliver rented products to you</p>
          <p>-:To Verify and process payment transactions</p>
          <p>-:To Customize your user experience on our website</p>
          <p>-:To Comply with legal and regulatory requirements</p>
          </div>
          
          <div> 
          <h2 style={{color:'black'}}>4. Security Measures</h2>
          <p>We have implemented appropriate technical and 
            security measures to protect your personal information 
            from unauthorized access, loss, or destruction. While no 
            method of transmission over the internet is entirely secure, 
            we continuously review and enhance our security measures to 
            safeguard your data.</p>
          </div>
          <div>
          <h2 style={{color:'black'}}>5. Your Rights</h2>
          <p>You have the right to access, correct, 
            or request deletion of your personal data.
             You may also withdraw your consent for certain data processing 
             activities or opt out of receiving marketing communications from us.</p>
          </div>
          <div>
          <h2 style={{color:'black'}}>6. Minors</h2>
          <p>
          We do not knowingly collect personal data from individuals under 
          the age of 18. If you are a minor, please do not use our website without parental consent.
          </p>
          </div>
          <div>
          <h2 style={{color:'black'}}>7. Third Parties and Links</h2>
          <p>
          We may share your information with third-party service providers
           to assist us in delivering our services. However, we do not 
           sell or disclose your personal data to third parties without 
           your consent unless required by law.
          </p>
          </div>
          <div>
          <h2 style={{color:'black'}}>8. Cookies</h2>
          <p>We may use cookies and similar technologies to enhance 
            your browsing experience on our website. You can manage 
            your cookie preferences through your browser settings.</p>
          </div>
          <p style={{color:'azure',
            fontSize: '20px',
            fontFamily: 'sans-serif'}}>By using Hamro Sadhan, you agree to the practices outlined in this Privacy Policy. 
            If you have any questions or concerns regarding your privacy or data protection, please contact us</p>
         </div>
       </div>
       <Foot></Foot>
    </div>
  )
}
