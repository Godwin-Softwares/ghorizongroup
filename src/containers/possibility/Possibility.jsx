import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='about'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibility"/>
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Our Vision is simply to standout among others</h4>
        <h1 className='gradient__text'>Our Mission is beyond your imagination</h1>
        <p>
        Its a collective Mission to enlarge and broaden the IT space beyond the present technological endeavors and to work tirelessly round the clock to achieve a professional and timely results in all projects, sounds so amazing right!.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div> 
  )
}

export default Possibility