import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import BookingPage from './booking.js';
import AboutPage from './about.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './booking.css';
import { FaInstagram, FaWhatsapp, FaTwitter, FaFacebook } from 'react-icons/fa';

function App() {
  return(
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>

    <Footer/>
    </>
  );
}

function Dashboard(){
    return(
      <div className='logo'>
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
        <div className='sliderimage'>
          </div>
        
        <div className='slider'>
          
          <div className='nowshowingcommingsoon'>
            <h1 id='nowshowing'>Now Showing</h1>
            <h1 id='nowshowing'>Coming Soon</h1>

          </div>

        <div className='kingdom'>
        <div className='kingdombook'>
          <h2 id='planetdescr'>
          Kingdom of the Planet of the Apes - <br />
          Director Wes Ball invites you back to the Planet of the Apes,<br /> set several generations in the future following Caesars reign,<br /> in which apes are the dominant species living
          </h2>

          <Link to="/booking" role="button" className="booking">Book</Link>
        </div>

        <img id='planetofapes' src="./kingdomoftheapes.jpg"alt="where's the image" />

        </div>

        <div className='civilwar'>
         <img src="civilwar.webp" alt="" />
          <img src="" alt="" />
          <h2 className='civil'>
          In a dystopian future America,<br /> a team of military-embedded journalists races against time to reach Washington,<br /> D.C., before rebel factions descend upon the White House.
          </h2>
          <Link to="/booking" role="button" className="booking">Book</Link>
        </div>

        </div>

        </div>
  
      
    );
  }

function Footer(){
  return(
    <div className='footer'>
       <div className='text'>
    <p>
      Talk to us
    </p>

  </div>
    <footer style={{ display: 'flex',justifyContent:'center', color:'rgb(239, 88, 88)', opacity:'0.5',  flexDirection:'row', padding: '9px', fontSize:'10px'}}>
    <FaInstagram style={{margin: '0 10px'}} size={20} />
    <FaWhatsapp style={{margin: '0 10px'}} size={20} />
    <FaTwitter style={{margin: '0 10px'}} size={20}/>
    <FaFacebook style={{margin: '0 10px'}} size={20} />
  </footer>
  <div className='text'>
    <p>
      
    </p>

  </div>
  </div>
  );
}

  

  export default App;
