import React, {useState} from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logos.png'

const Menu = () => (

  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#features">Our Services</a></p>
    <p><a href="#project">Our Projects</a></p>
    <p><a href="#about">About Us</a></p>
    <p><a href="#blog">Contact Us</a></p>
  </>

)
  

const Navbar = () => {

const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
              <img src={logo} alt="logo"/>
              <span>GHORIZON</span>
          </div>
          <div className="gpt3__navbar-links_container">
            <Menu/>
          </div>
         
      </div>
      <div className='gpt3__navbar-sign'>
            <p>Sign In</p>
            <button type="button">Sign Up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu 
          ? <RiCloseLine color='#fff' fontSize={27} onClick={()=>setToggleMenu(false)}/>
          : <RiMenu3Line color='#fff' fontSize={27} onClick={()=>setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className="gpt3__navbar-menu_container-links">
            <Menu/>
            <div className = "gpt3__navbar-menu_container-links-sign">
              <p>Sign In</p>
              <button type="button">Sign Up</button>
            </div>
            </div>
          </div>
        )
          
        }
      </div>
    </div>
  )
}

export default Navbar