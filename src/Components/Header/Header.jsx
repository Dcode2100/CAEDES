import React from 'react'
import {Link} from 'react-router-dom';
import './Header.css'
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { mainlogo, cart_logo} from '../../assets';


const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={mainlogo} alt="Company logo"></img>
      </Link>
      <div className="header__nav">
        <div className="flex-left">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <span>Home</span>
          </Link>
          <Link to="/shop" style={{ textDecoration: "none", color: "white" }}>
            <span>Shop</span>
          </Link>
          <Link
            to="/contactus"
            style={{ textDecoration: "none", color: "white" }}
          >
            <span>ContactUs</span>
          </Link>
        </div>
        <div className="flex-right">
          <Link to="/cart">
            <img className="cart_logo" src={cart_logo} alt="cart logo"></img>
          </Link>
          <Link
            to="/signuppage"
            style={{ textDecoration: "none", color: "white" }}
          >
            <span>SignUp</span>
          </Link>
          <Link
            to="/loginpage"
            style={{ textDecoration: "none", color: "white" }}
          >
            <span>Login</span>
          </Link>
          <Link to="/profile">
            '
            <div className="AccountBoxIcon" >
              <AccountBoxIcon />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;