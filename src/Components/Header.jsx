import React from "react";
import { Link } from "react-router-dom";
import { mainlogo } from "../assets";
import { navlinks, navlinks2 } from "../common/Common";

const Header = () => {
  return (
    <div className="flex h-16 border-4 border-yellow-500 bg-custom-b ">
      <div className="box-border flex w-full justify-between">
        <div className="flex items-center text-white ">
          <img className="h-3/4 pl-2" src={mainlogo} alt="Company logo" />
          {navlinks.map((item) => {
            return (
              <Link key={item.id} to={item.link} className="pl-3">
                <div className="header__navlink">{item.id}</div>
              </Link>
            );
          })}
        </div>
        <div className="invisible flex items-center justify-between md:visible">
          {navlinks2.map((item) => {
            return (
              <Link key={item.id} to={item.link}>
                <div className="pr-4 text-white">
                  {item.icon ? item.icon : ""}
                  {item.id}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
