import React from 'react'
import styled from "styled-components";

const StyleCard = styled.div`
    width: 12rem;
    height: 200px;
    background-color: red;
    color:white;


`;
const Cardcontainer = ({id,title,product}) => {

  return (
    <StyleCard>{id}</StyleCard>
  )
}

export default Cardcontainer;