import React from 'react'
import {NavLink} from 'react-router-dom'
import astroLogo from '../Assets/svg/astro tech logo.svg'
import '../Css/Navbar.css'

const navbar = () => {
  return (
   <nav>
    <section id='logo-img'>
    <NavLink to='/'><img src={astroLogo} alt="" /></NavLink>
    </section>
    <section id='nav-link'>
        <NavLink className='navStyle' to='*'>Launch Pad</NavLink>
        <NavLink className='navStyle' to='*'>Our Mission</NavLink>
        <NavLink className='navStyle' to='/Report'>Research</NavLink>
        <NavLink className='navStyle' to='*'>Career</NavLink>
        <NavLink to='*'><button>Contact</button></NavLink>
    </section>
   </nav>
  )
}

export default navbar