import React from 'react'
import { Footer, Header, Filter } from "../Components";
import Cardlist from '../Components/Cardlist';

const Shop = () => {
  
  
  return (
    <div className="shop">
      <Header />
      <div className="cardlist&filter xs:flex xs:m-[2rem] ">
        <Filter/> 
        <Cardlist />
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
