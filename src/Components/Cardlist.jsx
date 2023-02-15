import React,{useState,useEffect} from 'react'
import supabase from '../config/supabaseClient';
import Cards from './Cards';

const Cardlist = () => {
    const [product,setProduct] = useState(null);
    const [fetcherror, setFetchError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        const {data,error} = await supabase
        .from('product')
        .select()
        if(error){
          setFetchError(error)
          console.log(error)
        }
        if(data){
          setProduct(data);
        }
      }
      fetchData()
    },[])
    
  return (
      <div className="cardlist-container flex  ">
        {fetcherror && fetcherror}
        {product &&
          product.map((item) => <Cards key={item.id} product={item} />)}
      </div>
  );
}

export default Cardlist