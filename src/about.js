import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import { FaInstagram, FaWhatsapp, FaTwitter, FaFacebook } from 'react-icons/fa';
import './about.css'

function AboutPage(){
  return(
    <div>
      <Natives/>
      <AboutUs/>
    
    </div>
  );
}

function Natives(){
  return(
    <div className='natives'>
      <header>
          <h1 className='heading'>MOVIE APP</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/booking">Booking</Link></li>
            </ul>
          </nav>
        </header>
    </div>
  );
}

function AboutUs(){
  return(
    <div className='about-us'>
      <div className='aboutusimage'>
        <div className='aboutusoverlay'>
          <h2 className='abouthead'>About Us</h2>
          <p className='aboutusmessage'>We are a team of movie enthusiasts who have created this app to make the process of booking movie tickets easier and more. We hope you enjoy using our app as much as we enjoyed creating it!</p>
        </div>
      </div>
    </div>
  );
}


function Footer(){
  return(
    <div className='footer'>
      <footer style={{ display: 'flex', justifyContent: 'center', padding: '1em' }}>
        <FaInstagram size={32} />
        <FaWhatsapp size={32} />
        <FaTwitter size={32} />
        <FaFacebook size={32} />
      </footer>
    </div>
  );
}

export default AboutPage;
