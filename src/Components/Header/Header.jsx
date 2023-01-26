import React from 'react'
import {Link} from 'react-router-dom';
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {mainlogo} from '../../assets';


const Header = () => {
  return (
    <div className="bg-custom-b h-16 flex border-white  ">
      <Link to="/">
        <img
          className="header_logo ml-3 pt-4 h-9"
          src={mainlogo}
          alt="Company logo"
        ></img>
      </Link>
      <div className="header__nav flex justify-between min-w-full">
        <div className="flex-left pl-8 flex items-center gap-3 mr-3 ">
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
        <div className="flex-right flex content-around items-center gap-6 pr-5">
          <Link to="/cart" className='decoration-none'>
            <div className="cart_logo text-white flex h-5">
              <ShoppingCartIcon />
              <div className="Cart decoration-0 ">Cart</div>
            </div>
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
            <div className="AccountBoxIcon text-white flex mt-1">
              <AccountBoxIcon />
              <div>Account</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;