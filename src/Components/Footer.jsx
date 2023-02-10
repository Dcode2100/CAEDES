import React from "react";
import { Link } from "react-router-dom";
import {mainlogo} from "../assets";
import { socialicon } from "../common/Common";
import { footer1, footer2, footer3 } from "../common/Common";

const Footer = () => {
  return (
    <div className="box-border  bg-custom-b">
      <div className="flex w-full flex-wrap p-7 max-xs:flex-col max-xs:items-center sm:justify-evenly">
        <div className="flex h-32 w-60 flex-col items-center max-xs:items-center sm:mr-4 md:w-48">
          <img className="mb-3 h-12" src={mainlogo} alt="logo"></img>
          <div className="pb-3 text-custom-red">Connect with us</div>
          <div className="flex gap-3">
            {socialicon.map((item) => (
              <div className=" text-white " key={item.id}>
                {item.icon}
              </div>
            ))}
          </div>
        </div>
        <div className="footer1 flex h-32 w-60 flex-col pl-8 text-white max-xs:mt-6 max-xs:w-56 max-xs:items-center max-xs:p-0 sm:w-[11.5rem]">
          <h1 className="mb-4">My Account</h1>

          {footer1.map((item) => (
            <Link className="text-custom-gray" key={item.id} to={item.link}>
              {item.id}
            </Link>
          ))}
        </div>
        <div className="footer2 flex h-32 flex-col pl-8 text-white max-xs:mt-6 max-xs:w-56 max-xs:items-center max-xs:p-0 xs:w-60 sm:w-32">
          <h1 className="mb-4">About us</h1>
          {footer2.map((item) => (
            <Link className="text-custom-gray" key={item.id} to={item.link}>
              {item.id}
            </Link>
          ))}
        </div>

        <div className="footer3 flex h-32 w-60 flex-col pl-8 text-white max-xs:mt-6 max-xs:items-center max-xs:p-0 sm:w-48 max-sm:mt-4">
          <h1 className="mb-4">Customer service</h1>
          {footer3.map((item) => (
            <Link className="text-custom-gray" key={item.id} to={item.link}>
              {item.id}
            </Link>
          ))}
        </div>

        <div className="footer__container-newsletter w-60 pl-8 max-xs:hidden max-sm:mt-4">
          <p className=" mb-4 text-white">Subcribe to our Newsletter</p>
          <div className="relative">
            <input
              className="focus:shadow-outline  block h-[45px] w-52 appearance-none rounded-md border bg-white py-2 px-4 pr-10 leading-normal text-black focus:outline-none"
              type="text"
            />
            <button className="absolute top-2  left-2 h-[26px]  w-[53px] rounded-md bg-custom-red text-[10px] text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-custom-b pb-[2rem]">
        <div className="flex h-11 w-full items-center justify-center bg-white text-custom-gray max-xs:mt-6">
          CAEDES | @2023 All rights reserved
        </div>
      </div>
    </div>
  );

  
};

export default Footer;
