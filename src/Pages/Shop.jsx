import React,{ useEffect} from 'react'
import supabase from '../../client';
import { Footer, Header } from "../components";
console.log(supabase);
const Shop = () => {
  
 

  return (
    <div className="shop">
      <Header />
      Shop
      <Footer />
    </div>
  );
}

export default Shop