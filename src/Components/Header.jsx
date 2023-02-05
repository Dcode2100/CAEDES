import React, { useState } from "react";
import { Link } from "react-router-dom";
import { mainlogo } from "../assets";
import { navlinks, navlinks2, smnavlinks } from "../common/Common";
import { Close, ExitToApp, Menu } from "@mui/icons-material";

// screens: {xs: "480px",ss: "620px",sm: "720px",md: "1060px",lg: "1200px",xl: "1700px"},

const Header = () => {
  const[toggle, setToggle] = useState(false);

  return (
    <div className="box-border flex h-16 items-center justify-between bg-custom-b">
      <div className=" w-38 h-10 pl-2">
        <Link to="/home">
          <img
            className=" w-38 h-10 w-auto pl-2 "
            src={mainlogo}
            alt="Company logo"
          />
        </Link>
      </div>
      <div className="navlink-container items-center pr-4 text-white">
        <div className="desktop max-sm:hidden">
          {smnavlinks.map((item) => (
            <Link className="pr-2" key={item.id} to={item.link}>
              {item.icon}
              {item.id}
            </Link>
          ))}
        </div>

        <button
          className={`mobile sm:hidden `}
          onClick={() => setToggle((prev) => !prev)}
        >
          {toggle ? <Menu /> : <Close />}
        </button>
        
        <div
          className={`absolute h-44 w-[100px] right-[2px] top-[59px] pl-2 rounded-lg flex-col bg-custom-b ${
            toggle ? "hidden" : "flex"
          }`}
        >
          {smnavlinks.map((item) => {
            return (
              <div className="">
                <Link key={item.id} to={item.link}>
                  <div className="hidden">{item.icon}</div>
                  {item.id}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
