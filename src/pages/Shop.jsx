import React from 'react'
import { Footer, Header } from "../components";
import Cardlist from '../components/Cardlist';

const Shop = () => {

  return (
    <div className="shop">
      <Header />
      <div className='product-data'>
        cardlist
        <Cardlist/>
      </div>
      <Footer />
    </div>
  );
}

export default Shop