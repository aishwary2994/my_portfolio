import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>AISHWARY YADAV</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/yash.yadav.357" target='_blank'><FaFacebookF /></a>
        <a href="https://www.instagram.com/yashyadav.29/" target='_blank'><FiInstagram /></a>
        <a href="https://twitter.com/YashYadav2994" target='_blank'><IoLogoTwitter /></a>
        <a href="https://github.com/aishwary2994" target='_blank'><FaGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; AISHWARy YADAV. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
