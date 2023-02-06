import React, { useState } from "react";
import { Link } from "react-router-dom";
import { mainlogo } from "../assets";
import { navlinks } from "../common/Common";
import { Close, Menu } from "@mui/icons-material";

// screens: {xs: "480px",ss: "620px",sm: "720px",md: "1060px",lg: "1200px",xl: "1700px"},

const Header = () => {
  const [toggle, setToggle] = useState(false);

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
          {navlinks.map((item) => (
            <Link className="pr-2" key={item.id} to={item.link}>
              {item.id}
            </Link>
          ))}
        </div>

        <button
          className={`mobile sm:hidden `}
          onClick={() => setToggle((prev) => !prev)}
        >
          {toggle ? <Close /> : <Menu/> }
        </button>

        <div
          className={`absolute right-[2px] top-[59px] h-44 w-[100px] flex-col rounded-lg bg-custom-b pl-2 ${
            toggle ? "flex" : "hidden"
          } sm:hidden`}
        >
          {navlinks.map((item) => {
            return (
              <div className="">
                <Link key={item.id} to={item.link}>
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
