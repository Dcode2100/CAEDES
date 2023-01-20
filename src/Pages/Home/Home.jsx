import React from 'react'
import { Footer, Header } from '../../Components';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
        <Header/>
        <div className='home__container'>
            <div className="home_welcome-container">
                <div className="home_welcome-container-left">
                  containerleft
                </div>
                <div className="home_welcome-container-right">
                  containerright
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
}

export default Home;