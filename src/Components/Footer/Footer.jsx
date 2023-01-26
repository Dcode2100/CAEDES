import React from "react";
import { mainlogo } from "../../assets";
import "./Footer.css";
import { Facebook, Twitter, Pinterest, Instagram } from "@mui/icons-material";
import { ListItem } from "@mui/material";

const myaccount = ["My Orders", "Account Settings", "Email preferences"];
const aboutus = ["Our Story", "Our Team", "Our Partners", "Our Blog"];
const customerservice = ["Help center", "Delivery", "Returns", "Contact Us"];

const Footer = () => {
  return (
    <div className="h-96 bg-custom-b">
      <div className="flex w-full">
        <div className="mt-5 mr-14 mb-28 ml-16 flex h-32 w-60 flex-col items-center">
          <img className="mb-3 h-12" src={mainlogo} alt="logo"></img>
          <div className="pb-3 text-custom-red">Connect with us</div>
          <div className="flex gap-3">
            <div className="text-white">
              <Facebook />
            </div>
            <div className="text-white">
              <Twitter />
            </div>
            <div className="text-white">
              <Pinterest />
            </div>
            <div className="text-white">
              <Instagram />
            </div>
          </div>
        </div>
        <div className="footer__right-container">
          <div className="footer__container-myaccount">
            <p className="footer__myaccount">My Account</p>
            <ul className="myaccountlist-item">
              {myaccount.map((myaccount) => (
                <ListItem key={myaccount}>{myaccount}</ListItem>
              ))}
            </ul>
          </div>
          <div className="footer__container-aboutus">
            <p className="footer__myaccount">About Us</p>
            <ul className="myaccountlist-item">
              {aboutus.map((aboutus) => (
                <ListItem key={aboutus}>{aboutus}</ListItem>
              ))}
            </ul>
          </div>
          <div className="footer__container-customerservice">
            <p className="footer__myaccount">Customer Service</p>
            <ul className="myaccountlist-item">
              {customerservice.map((customerservice) => (
                <ListItem key={customerservice}>{customerservice}</ListItem>
              ))}
            </ul>
          </div>
          <div className="footer__container-newsletter">
            <p className="footer__myaccount">Subcribe to our Newsletter</p>
            <div className="footer__container-newsletter-input">
              <button id="footer_input-button">Subscribe</button>
              <input
                id="footer-input"
                placeholder="Type your email ..."
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__container-bottom">
        CAEDES | @2023 All rights reserved
      </div>
    </div>
  );

  
};

export default Footer;
