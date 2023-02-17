import React from 'react';
import './price.css';

import { AnimationOnScroll } from 'react-animation-on-scroll';

import CheckList from '../../../assets/icon/checklist.svg';
import CheckList2 from '../../../assets/icon/checklist2.svg';
import CheckList3 from '../../../assets/icon/checklist3.svg';

const data = [
  {
    title: 'STARTER',
    price: '9.99',
    icon: CheckList,
    content: ['Real-time chat', 'Customize options', 'File sharing', 'Visitor tracking']
  },
  {
    title: 'PROFESSIONAL',
    price: '29.99',
    icon: CheckList2,
    content: ['All features in the "Starter" plan', 'Mobile app', 'Integration with other tools', 'Multilingual support']
  },
  {
    title: 'ENTERPRISE',
    price: '99.99',
    icon: CheckList3,
    content: ['All features in the "Professional" plan', 'Dedicated account manager', 'Premium support', 'Custom integration options']
  }
]

const Card = ({title, price, style, icon, content}) => {
  return (
  
    <div className="card__item-price">
        <div className="card__item-price-header">
          <p>{title}</p>
        </div>
        <div className="card__item-price-body">
          <h2>${price}/month</h2>
          <ul>
            {content.map((item) => (
              <li><img src={icon} alt={title}></img>{item}</li>
            )
            )}
          </ul>
          <a href="#home" className="btn buttons--first">Choose</a>
        </div>
    </div>
  
  )
}

const Price = () => {
  return (
            <div className="price wrapper">
                <div className="price__content-title">
                    <h3>
                      Affordable Plans for Any Business
                    </h3>
                    <p>
                      Our pricing plans are designed to be affordable for businesses of all sizes. From our "Starter" plan to our "Enterprise" option, we have a plan that will fit your budget and meet your live chat needs.
                    </p>
                </div>
                <div className="price__content-list">
                    {data.map((item) => 
                      <AnimationOnScroll animateIn="animate__bounceIn" className='animation'>
                        <Card {...item}/>
                      </AnimationOnScroll>
                      )}
                </div>
            </div>
  )
}

export default Price