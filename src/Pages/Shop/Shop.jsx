import React,{useState, useEffect} from 'react'
import { Footer, Header } from '../../Components';
import "./Shop.css";


const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => (
    fetch
  ))
  return (
    <div className="shop">
      <Header />
      Shop
      <Footer />
    </div>
  );
}

export default Shop