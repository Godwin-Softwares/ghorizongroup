import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className="gpt3__header section__padding " id="home">
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Make your Business Go Global Today
        </h1>
        <p>
          Lets build you a topnotch IT solution to grow your business. We are specialist in Branding, Designing, developing and deploying IT tools to set your business apart for outstanding growth and profit.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder='Your Email Address'/>
          <button type = "button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people"/>
          <p>400 people requested access a visit in last 24 hours</p>
        </div>
        
      </div>
      <div className='gpt3__header-image'>
          <img src={ai} alt="AI"/>
        </div>
    </div>
  )
}

export default Header