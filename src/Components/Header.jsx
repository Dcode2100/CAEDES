import React from 'react'
import {Link} from 'react-router-dom';
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {mainlogo} from '../assets';


const Header = () => {
  return (
    <div className="flex h-16 border-white bg-custom-b  ">
      <div className="item-center justify-center ">
          <img className="h-7" src={mainlogo} alt="Company logo" />
      </div>
      <div className="header__nav flex min-w-full justify-between">
        <div className="flex-left mr-3 flex items-center gap-3 pl-8 ">
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
          <Link to="/cart" className="decoration-none">
            <div className="cart_logo flex h-5 text-white">
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
            <div className="AccountBoxIcon mt-1 flex text-white">
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