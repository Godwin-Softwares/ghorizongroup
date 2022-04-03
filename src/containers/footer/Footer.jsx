import React from 'react'
import './footer.css'
import Logo from '../../assets/logos.png'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
        <div className='gpt3__footer-heading'>
           <h1 className='gradient__text'>Do you want to go global with your Business?</h1>
        </div>
        <div className='gpt3__footer-btn'>
          <p>Request Early Access</p>
        </div>
        <div className='gpt3__footer-links'>
          <div className='gpt3__footer-links_logo'>
            <img src={Logo} alt="Logo"/>
            <p>114 Akoka Lagos, Nigeria</p>
          </div>  
          <div className='gpt3__footer-links_div'>
                <h4>Links</h4>
                <p>Overons</p>
                <p>Social Media</p>
                <p>Counters</p>
                <p>Contact</p>

          </div>

          <div className='gpt3__footer-links_div'>
                <h4>Company</h4>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Counters</p>
                <p>Contact</p>

          </div>
          <div className='gpt3__footer-links_div'>
                <h4>Get In touch</h4>
                <p>114 Akoka Lagos, Nigeria</p>
                <p>08139444402</p>
                <p>info@ghorizongroup.com</p>

          </div>
          <div className='gpt3__footer-copyright'>&copy; 2022 GHorizon. All rights reserved</div>
        </div>
      </div>
    
  )
}

export default Footer