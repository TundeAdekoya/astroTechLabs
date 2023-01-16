import React, { useState,useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import astroLogo from '../Assets/svg/astro tech logo.svg'
import '../Css/Navbar.css'

const Navbar = () => {

  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    if(navOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }

  }, [navOpen])
  

  return (
    <div id='nav-bar-position'> 
      <nav>
        <section id='logo-img'>
        <NavLink to='/'><img src={astroLogo} alt="" /></NavLink>
        </section>

        <section id='nav-link' style={{top: navOpen? 0 : '-100%'}}>
          <div className="nav-link-content">
            <NavLink className='navStyle' to='*' onClick={() => setNavOpen(false)} >Launch Pad</NavLink>
            <NavLink className='navStyle' to='*' onClick={() => setNavOpen(false)} >Our Mission</NavLink>
            <NavLink className='navStyle' to='/Report' onClick={() => setNavOpen(false)} >Report</NavLink>
            <NavLink className='navStyle' to='*' onClick={() => setNavOpen(false)} >Career</NavLink>
            <NavLink to='*' onClick={() => setNavOpen(false)} ><button>Contact</button></NavLink>
          </div>
        </section>

        <section className="header">
            <button type="button" className="nav-toggler" onClick={() => setNavOpen(!navOpen)}>
            <span></span>
            </button>
        </section>

      </nav>
   </div>
  )
}

export default Navbar