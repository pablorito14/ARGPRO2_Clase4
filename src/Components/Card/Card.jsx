import React from 'react';
import './Card.css';

const Card = ({img,title,price,condition,shipping}) => {

  return(
    <div className='container-card'>
      <img src={img} alt="aaaa" />
      <div className='product-details'>
        <h6>{title}</h6>
        <p><span>Precio: {price}</span></p>
        <p><span>Condicion: {condition}</span></p>
        {<p><span>{shipping && "Free Shippong"}</span></p>}
      </div>
    </div>
  )
}

export { Card }