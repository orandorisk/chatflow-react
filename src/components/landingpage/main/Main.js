import React from 'react';
import Navbar from '../navbar/Navbar.js';
import './main.css';

import { AnimationOnScroll } from 'react-animation-on-scroll';

const Main = () => {
  return (
    <div class="main">
        <Navbar />
        <div class="main__content wrapper">
            <div class="main__content__left">
                <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                <h1>
                    Improve your customer experience with real-time assistance
                </h1>
                </AnimationOnScroll>
                <p>
                    Our live chat software helps you connect with your customers instantly, boosting sales and improving customer satisfaction. Try it out today and see the difference it can make for your business.
                </p>
                <div class="main__content__left__buttons">
                    <a href="#home" class="btn btn--primary active">Get Started</a>
                    <a href="#home" class="btn btn--secondary">See in Action</a>
                </div>
            </div>
            <div class="main__content__right">
            </div>
        </div>
    </div>
  )
}

export default Main