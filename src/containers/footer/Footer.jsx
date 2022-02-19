import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
        <div className='gpt3__footer-heading'>
           <h1 className='gradient__text'>Do you want to step into the future before others</h1>
        </div>
        <div className='gpt3__footer-btn'>
          <p>Request Early Access</p>
        </div>
        <div className='gpt3__footer-links'>
          <div className='gpt3__footer-links_logo'>
            <img src={gpt3Logo} alt="Logo"/>
            <p>Crechterwoord K12 184 DK Alkinjkcv, All</p>
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
                <p>Crechterwoord K12 184 DK Alkinjkcv</p>
                <p>08139444402</p>
                <p>info@paymenow.net</p>

          </div>
          <div className='gpt3__footer-copyright'>&copy; 2022 GPT-3. All rights reserved</div>
        </div>
      </div>
    
  )
}

export default Footer