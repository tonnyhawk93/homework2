import React from 'react';
import './Footer.css'

const Footer = () => {  
  return (
    <footer>
      <div className = 'Footer_container'>
        <div className = 'menu'>
            <ul>
                <a href = '/#'><li>Support</li></a>
                <a href = '/#'><li>Learning</li></a>
                <a href = '/#'><li>Русская версия</li></a>
            </ul>
        </div>
        <div className = 'company'>© 2020 Your Name</div>
      </div>
    </footer>   
  )
}

export default Footer;