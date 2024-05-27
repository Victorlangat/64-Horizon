import React, { useState } from 'react';
import './App.js';
import './booking.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal, faBtc, faBinance } from '@fortawesome/free-brands-svg-icons';




function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const styles = {
        menu: {
            backgroundColor: 'rgba(128,128,128,0.5)',
            width: '200px',
            borderRadius: '5px',
            padding: '13px',
            marginTop: '10px',
        },
        menuItem: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px',
        },
        icon: {
            marginRight: '20px',
            color:'rgb(239,88,88)'
        },
    };

    return (
        <div>
            <button style={{backgroundColor:'rgba(72,128,128,0.4)'}} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Make Payment' : 'PAY'}
            </button>

            {isOpen && (
                <div style={styles.menu}>
                    <div style={styles.menuItem}>
                        <FontAwesomeIcon icon={faPaypal} style={styles.icon} />
                        PayPal
                    </div>
            
                        <div className='mpesaicon'>
                      <img style={{width:'34%', height:'34%'}} src="mpesa.png" alt="" />
                        <h4>M-Pesa</h4>
                    </div>
                    
                    <div style={styles.menuItem}>
                        <FontAwesomeIcon icon={faBtc} style={styles.icon} />
                        Binance
                    </div>
                </div>
            )}
        </div>
    );
}

export default DropdownMenu;


