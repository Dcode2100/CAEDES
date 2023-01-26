import React from 'react'
import { Footer, Header } from '../../Components';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__container">
        <div className="home_welcome-container">
          <div className="home_welcome-container-left">
            <h1 className="Wel">Welcome to CAEDES</h1>
            <h1 className="weprovide">We provide</h1>
            <span className="slogen text-lg">
              we are the keychain experts, satisfying customers looking for a
              keychain for Gifting, or a partner for your keys our catelog is
              filled with great designs and the highest quality at the best
              price.
            </span>
            <button className="btn1">SHOP NOW</button>
          </div>
          <div className="home_welcome-container-right">containerright</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;