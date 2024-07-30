import React from 'react'
import {Link} from 'react-router-dom'
import Nav from './Nav.jsx'
import Foot from './Foot.jsx'
import './Blog.css'

export default function Blog() {
  return (
    <div className='blo-main'>
      <Nav></Nav>
      <div className='blog-main'>
          <div className='bmain1'></div>
          <div className='bmain2'>
            <div>
            <h1>I Show Speed</h1>
            <Link to='https://www.youtube.com/@IShowSpeed'> 
            <i class="fa-brands fa-youtube"></i>
            </Link>
            </div>
          <p>Popular Streamer & Youtuber 'Speed' buys Cristiano Ronaldo themed Lamborghini Car at just 19 years of age.</p>
          </div>
      </div>
      <div className='bl-m'>
      <div className='tes-div'>
        <div className='tesm-div'>
         <img src="ts.jpg" alt="" />
        </div>
        <div className='tesp-div'>
         <p>Tesla Cybertruck</p>
         <p>The 2024 Tesla Cybertruck looks like it was dropped off by an alien race, 
            but it's said to have the capabilities to challenge top-selling pickup trucks.
             With a sharp-edged stainless-steel body that's also claimed to be bulletproof, 
             Tesla's electric truck looks seriously tough.Tesla claims the Cybertruck 
              can tow up to 11,000 pounds and has an estimated driving range of up to 340 miles.
               Hooked up to a Tesla Supercharger, the EV truck can supposedly add between 128 and
                136 miles of range in 15 minutes.</p>
        </div>
      </div>
      <div className='tes-div'>
        <div className='tesm-div'>
         <img src="bullet.jpg" alt="" />
        </div>
        <div className='tesp-div'>
         <p>RE Classic-350</p>
        <p>The Royal Enfield 350, produced since 1949, is famous for its 
            distinctive thumping exhaust note and enduring design. 
            It holds the record for one of the longest-produced motorcycles. 
            Loved for its robust performance and ease of customization, 
            it remains a cherished symbol of classic motorcycling heritage 
            worldwide.</p>
        </div>
      </div>
      </div>
      <div className='bl-m'>
      <div className='tes-div'>
        <div className='tesm-div'>
         <img src="mt.jpg" alt="" />
        </div>
        <div className='tesp-div'>
         <p>Yamaha MT-15</p>
         <p>The Yamaha MT-15 is a sleek and agile streetfighter motorcycle
             known for its dynamic performance and modern styling. 
             Powered by a potent 155cc engine, it offers a thrilling 
             riding experience, perfect for urban commuting and spirited rides. 
             With its sharp design and advanced features,
              the MT-15 captures attention on any road.</p>
        </div>
      </div>
      <div className='tes-div'>
        <div className='tesm-div'>
         <img src="tarmac.jpg" alt="" />
        </div>
        <div className='tesp-div'>
         <p>Tarmac SL8</p>
         <p>
         The Specialized Tarmac SL8 is a high-performance road bike 
         renowned for its lightweight design and aerodynamic efficiency. 
         Engineered for speed and agility, it features top-tier components 
         and cutting-edge technology, making it a favorite among competitive
          cyclists and enthusiasts seeking uncompromising performance 
          on the tarmac.
         </p>
        </div>
      </div>
      </div>
      <div className='bl-m'>
      <div className='tes-div'>
        <div className='tesm-div'>
         <img src="buga.jpg" alt="" />
        </div>
        <div className='tesp-div'>
         <p>Bugatti Chiron</p>
         <p>The Bugatti Chiron is a pinnacle of automotive engineering, 
            boasting unrivaled performance and luxury. Powered by a 
            quad-turbocharged W16 engine, it produces over 1,500 horsepower, 
            propelling it to speeds exceeding 260 mph. With exquisite craftsmanship
             and cutting-edge technology, the Chiron represents the epitome of 
             automotive excellence and exclusivity.</p>
        </div>
      </div>
      <div className='tes-div'>
        <div className='tesm-div'>
         <img src="yat.jpg" alt="" />
        </div>
        <div className='tesp-div'>
         <p>Yatri Bike</p>
         <p>Yatri Electric Bikes is a pioneering Nepali company dedicated to
             sustainable mobility solutions. Their innovative electric motorcycles 
             blend futuristic design with eco-friendly performance, 
             offering an emission-free and silent riding experience. 
             With a focus on cutting-edge technology and premium craftsmanship, 
             Yatri bikes are leading the way towards a greener
              transportation future.</p>
        </div>
      </div>
      </div>
    <Foot></Foot>
    </div>
  )
}
