import Cardcontainer from "../common/customcomp/Cardcontainer";
import React from "react";  


const Cards = ({product}) => {
  

  return (
    <div className='flex flex-col item-center justify-center w-full border-2 border-yellow-500'>
      <Cardcontainer {...product}/>

    </div>
     
  );
}

export default Cards;