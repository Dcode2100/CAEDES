import React from 'react'
import { mainlogo } from '../../assets';
import './Footer.css';
import {Facebook, Twitter, Pinterest, Instagram} from '@mui/icons-material';
import { ListItem } from '@mui/material';

const myaccount = ["My Orders", "Account Settings", "Email preferences"];
const aboutus = ["Our Story", "Our Team", "Our Partners", "Our Blog"];
const customerservice = ["Help center", "Delivery", "Returns", "Contact Us"];

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container-connect">
          <img className="footer__logo" src={mainlogo} alt="logo"></img>
          <div className="footer__connectwithus">Connect with us</div>
          <div className="footer__socialmedia-container">
            <div className="footer__socialmedia">
              <Facebook />
            </div>
            <div className="footer__socialmedia">
              <Twitter />
            </div>
            <div className="footer__socialmedia">
              <Pinterest />
            </div>
            <div className="footer__socialmedia">
              <Instagram />
            </div>
          </div>
        </div>
        <div className="footer__right-container">
          <div className="footer__container-myaccount">
            <p className="footer__myaccount">My Account</p>
            <ul classname="myaccountlist-item">
              {myaccount.map((myaccount) => (
                <ListItem key={myaccount}>{myaccount}</ListItem>
              ))}
            </ul>
          </div>
          <div className="footer__container-aboutus">
            <p className="footer__myaccount">About Us</p>
            <ul classname="myaccountlist-item">
              {aboutus.map((aboutus) => (
                <ListItem key={aboutus}>{aboutus}</ListItem>
              ))}
            </ul>
          </div>
          <div className="footer__container-customerservice">
            <p className="footer__myaccount">Customer Service</p>
            <ul classname="myaccountlist-item">
              {customerservice.map((customerservice) => (
                <ListItem key={customerservice}>{customerservice}</ListItem>
              ))}
            </ul>
          </div>
          <div className="footer__container-newsletter">
            <p className="footer__myaccount">Subcribe to our Newsletter</p>
            <div className="footer__container-newsletter-input">
              <button id="footer_input-button">Subscribe</button>
              <input id="footer-input" placeholder="Type your email ..."></input>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__container-bottom">
        CAEDES | @2023 All rights reserved
      </div>
    </div>
  );
}

export default Footer;