import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Log from './components/Log.jsx';
import Sign from './components/Sign.jsx';
import Foot from './components/Foot.jsx';
import Blog from './components/Blog.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Feedback from './components/Feedback.jsx';
import Policy from './components/Policy.jsx';
import Help from './components/Help.jsx';
import Cart from './components/Cart.jsx';
import axios from 'axios';


export default function App() {
  axios.defaults.withCredentials=true;
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Log" element={<Log />} />
          <Route path="/Sign" element={<Sign />} />
          <Route path="/Foot" element={<Foot />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Nav" element={<Nav />} />
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Feedback" element={<Feedback/>}/>
          <Route path="/Policy" element={<Policy/>}/>
          <Route path="/Help" element={<Help/>}/>
          <Route path="/Cart" element={<Cart/>}/>
        </Routes>
    </Router>
    </>
  );
}
