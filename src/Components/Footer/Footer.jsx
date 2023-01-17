import React from 'react'
import { mainlogo } from '../../assets';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container-connect">
            <img className='footer__logo' src={mainlogo} alt='logo' ></img>
            <p className="footer__connectwithus">Connect with us</p>
            <div className="footer__socialmedia">
                <div className="footer__socialmedia-facebook"></div>
                <div className="footer__socialmedia-twitter"></div>
                <div className="footer__socialmedia-instagram"></div>
                <div className="footer__socialmedia-youtube"></div>
            </div>
        </div>
        <div className="footer__container-myaccount"></div>
        <div className="footer__container-aboutus"></div>
        <div className="footer__container-customerservice"></div>
        <div className="footer__container-newsletter"></div>
      </div>
      <div className="footer__container-bottom"></div>
    </div>
  );
}

export default Footer;