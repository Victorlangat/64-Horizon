import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import './booking.css';
import { FaInstagram, FaWhatsapp, FaTwitter, FaFacebook } from 'react-icons/fa';
import SearchBar from './searchbar';
import DropdownMenu from './dropdown.js';


function BookingPage() {
  return(

    <div>
    <div className='navigation'>
        <Navbar/>
        <SearchBar/>
    </div>

    <div className='body'>
      <div className='importantspot'></div>
           
      <div className="bookingBox">
              <div className='bookingoptions'>
                <div className='moviedescription'>
                  <h2 className='moviedescribe'>
                    Movie Description
                  </h2>
                  <h2 className='trailer' >Trailer</h2>
                </div>
                <h3>Complete booking</h3>
                <div className='bookingprocc'>
                <div className='datebuttons'>
                  <div className='date1'><button style={{borderRadius:'3%'}}>date1</button></div>
                  <div className='date2'><button>date1</button></div>
                  <div className='date3'><button>date1</button></div>
                  <div className='date4'><button>date1</button></div>
                  <div className='more'><button>more</button></div>

                  
                </div>
                <div className='datebuttons'>
                  <div className='date1'><button>cinema1</button></div>
                  <div className='date2'><button>cinema2</button></div>
                  <div className='date3'><button>cinema3</button></div>
                  <div className='date4'><button>cinema4</button></div>
                  <div className='more'><button>more</button></div>

                  
                </div>
                <div className='datebuttons'>
                  <div className='date1'><button>timea</button></div>
                  <div className='date2'><button>timeb</button></div>
                  <div className='date3'><button>timec</button></div>
                  <div className='date4'><button>timed</button></div>
                  <div className='more'><button>more</button></div>

                  
                </div>

                  
                </div>
                <div className='makingpayment'>
                  <DropdownMenu/>

                </div>

                <div className='navigate'>
                <ul className='bottomnav'>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/booking">Booking</Link></li>
                </ul>

                </div>
               

              </div>
            
               

              </div>
      
            </div>
        </div>
        


     

      
 
     

  );
}

function Navbar(){
    return(
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


export default BookingPage;