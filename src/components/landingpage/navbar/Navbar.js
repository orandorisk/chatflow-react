import React, { useState } from 'react';
import './navbar.css';

import Hamburger from 'hamburger-react';

const Navbar = () => {
    const [ toggleMenu, setToggleMenu ] = useState(false); 
    return (
        <nav class="navbar wrapper d-flex">
            <a href="#home">
                <h3>ChatFlow</h3>
            </a>
            <div class={`navbar__navigation d-flex ${toggleMenu ? 'active': ''}`}>
                <ul className="d-flex">
                    <li>
                        <a href="#home">Home</a>
                        <span></span>
                    </li>
                    <li>
                        <a href="#home">Pricing</a>
                        <span></span>
                    </li>
                    <li>
                        <a href="#home">Support</a>
                        <span></span>
                    </li>
                    <li>
                        <a href="#home">Contact Us</a>
                        <span></span>
                    </li>
                </ul>
                <div className="navbar__buttons d-flex">
                    <a href="#login"className='btn btn--primary active'>Login</a>
                    <a href="#register"className='btn btn--secondary'>Register</a>
                </div>
            </div>
            <button onClick={() => setToggleMenu(prevState => !prevState)}>
                <Hamburger />
            </button>
        </nav>
    )
}

export default Navbar;