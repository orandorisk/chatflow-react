import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="wrapper">
        <div class="footer__content-title">
            <div className="footer__content-title-text">
                <h2>Sign Up and Start Chatting Today</h2>
                <p>
                    Don't wait any to start improving the user experience on your website. Sign up for our chat product and start connecting with your customers in real time.
                </p>
            </div>
            <div className="button">
                <a href="#home" className="button--sign">Sign Up Now</a>
            </div>
        </div>
        <div className="footer__content-link">
            <ul>
                <li>
                    PRODUCTS
                </li>
                <li>
                    <a href="#home">Download App</a>
                </li>
                <li>
                    <a href="#home">Integrations</a>
                </li>
                <li>
                    <a href="#home">Case Studies</a>
                </li>
                <li>
                    <a href="#home">API</a>
                </li>
            </ul>
            <ul>
                <li>
                    COMPANY
                </li>
                <li>
                    <a href="#home">About Us</a>
                </li>
                <li>
                    <a href="#home">Contact</a>
                </li>
                <li>
                    <a href="#home">Privacy Policy</a>
                </li>
                <li>
                    <a href="#home">Terms of Service</a>
                </li>
                <li>
                    <a href="#home">Help</a>
                </li>
            </ul>
            <ul>
                <li>
                    ESSENTIALS
                </li>
                <li>
                    <a href="#home">Documentation</a>
                </li>
                <li>
                    <a href="#home">Playground</a>
                </li>
                <li>
                    <a href="#home">Sandbox</a>
                </li>
                <li>
                    <a href="#home">Source Code</a>
                </li>
            </ul>
            <ul>
                <li>
                    GET IN TOUCH
                </li>
                <li>
                    <a href="#home">Twitter</a>
                </li>
                <li>
                    <a href="#home">Facebook</a>
                </li>
                <li>
                    <a href="#">Dribble</a>
                </li>
            </ul>
        </div>
        <div className="footer__content-copryright">
            <p>COPYRIGHT © 2023 - DESIGN BY NAUVAL</p>
        </div>
    </footer>
  )
}

export default Footer