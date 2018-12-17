import React from 'react';
import '../styles/Footer.css'
import ncheart from '../assets/NCheart.png'

const Footer = () => {
  return (
    <div>

      <div className="footer">
        <a href="http://www.twitter.com/ros_bell"><i className="fab fa-twitter-square fa-2x"></i></a>
        <a href="https://www.linkedin.com/in/rosalind-bell-077b34b2/?originalSubdomain=uk"><i className="fab fa-linkedin fa-2x"></i></a>
        <div>

          <span className="footer-text">Completed with so much help from </span>
        </div>

        <div>
          <img className="footer-logo" src={ncheart} alt="Northcoders logo"></img>
        </div>

      </div>
    </div>
  )
}

export default Footer;