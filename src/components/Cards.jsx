import { Title } from "@mui/icons-material";
import React from "react";  
 
const Cards = ({product}) => {
  const {id,title,price} = product;
  return (
    <div className="h-32 w-52 border-2 border-green-700 bg-cyan-500">
      {id}
      {title}
      {price}
    </div>
  );
}

export default Cards;