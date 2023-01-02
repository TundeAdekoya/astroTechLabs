import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import astroLogo from '../Assets/svg/astro tech logo.svg'
import '../Css/Footer.css'
import astroLogoFooter from '../Assets/png/footer-logo.png'
import {AiFillInstagram, AiFillGithub, AiFillTwitterCircle, AiFillBehanceSquare,AiFillFacebook, AiFillGitlab, AiFillLinkedin} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'
import {MdEmail} from 'react-icons/md'
import {FaDiscord} from 'react-icons/fa'
import {BsStackOverflow} from 'react-icons/bs'



const Footer = () => {
  return (
    <div>
      <footer>
        <section>
          <aside id='footer-logo'>
            <NavLink to='/'><img src={astroLogo} alt="" /></NavLink>
          </aside>
          <section>
            <table>
              <tr>
                <th className='header-font'>Company</th>
              </tr>
              <tr>
                <td><Link to='*' className='detail-font'>Lauchpad</Link></td>
                <td><Link to='*' className='detail-font'>Our mission</Link></td>
                <td><Link to='*' className='detail-font'>Research</Link></td>
                <td><Link to='*' className='detail-font'>Career</Link></td>
              </tr>
            </table>
            <table>
              <tr>
                <th className='header-font'>Service</th>
              </tr>
              <tr>
                <td><Link to='*' className='detail-font'>Blockchain Development</Link></td>
                <td><Link to='*' className='detail-font'>Development Solution</Link></td>
                <td><Link to='*' className='detail-font'>Tokenomics Expertise</Link></td>
                <td><Link to='*' className='detail-font'>Analytic Research</Link></td>
              </tr>
            </table>
            <table>
              <tr>
                <th className='header-font'>Locations</th>
              </tr>
              <tr>
                <td><Link to='*' className='detail-font'>Singapore</Link></td>
                <td><Link to='*' className='detail-font'>Dubai</Link></td>
              </tr>
            </table>
            <table>
              <tr>
                <th className='header-font'>Socials</th>
              </tr>
              <tr>
                <td><Link to='*' className='detail-font'><AiFillInstagram /> Instagram</Link></td>
                <td><Link to='*' className='detail-font'><AiFillGithub /> GitHub</Link></td>
                <td><Link to='*' className='detail-font'><AiFillTwitterCircle /> Twitter</Link></td>
              </tr>
            </table>
            <table>
              <tr>
                <th className='header-font'>Contacts</th>
              </tr>
              <tr>
                <td><Link to='*' className='detail-font'><BiPhoneCall/> +123 - 456 -789</Link></td>
                <td><Link to='*' className='detail-font'><MdEmail /> Email</Link></td>
              </tr>
            </table>
            </section>
          </section>
        <section id='image-footer-two'>
          <img src={astroLogoFooter} alt="" />
        </section>
        <section id='footer-icon-link'>
          <div>
            <NavLink to='*' id='footer-link'>@AstroTech Labs 2022</NavLink>
          </div>
          <aside id='footer-links'>
            <div>
              <Link to='*' className='icon-links'><FaDiscord /></Link>
            </div>
            <div>
              <Link to='*' className='icon-links'><AiFillBehanceSquare /></Link>
            </div>
            <div>
              <Link to='*' className='icon-links'><AiFillFacebook /></Link>
            </div>
            <div>
              <Link to='*' className='icon-links'><AiFillGitlab /></Link>
            </div>
            <div>
              <Link to='*' className='icon-links'><AiFillLinkedin /></Link>
            </div>
            <div>
              <Link to='*' className='icon-links'><BsStackOverflow /></Link>
            </div>
          </aside>
        </section>
      </footer>
    </div>
  )
}

export default Footer