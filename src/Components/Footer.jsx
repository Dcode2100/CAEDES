import React from "react";
import {mainlogo} from "../assets";
import { socialicon } from "../common/Common";
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
            {socialicon.map((item) => {
              return(
              <div className=" text-white " key={item.id}>
                {item.icon}
              </div>
              );
            })}
          </div>
        </div>
        <div className="mt-5 flex gap-28 text-custom-gray">
          
          <div className="footer__container-newsletter">
            <p className="text-white pl-4">Subcribe to our Newsletter</p>
            <div className="h-11 w-64 bg-white rounded-md flex mt-3 ml-4">
              <button className="h-8 w-14 bg-custom-red rounded-md text-xs text-white border-none mt-2 mr-2 mb-0 ml-2">
                Subscribe</button>
              <input
                className="border-none text-custom-gray text-xl"
                placeholder="Type your email ..."
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className="text-custom-gray flex items-center justify-center w-full h-11 bg-white">
        CAEDES | @2023 All rights reserved
      </div>
    </div>
  );

  
};

export default Footer;
