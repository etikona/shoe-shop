import React from 'react';
import './Cart.css'

const Cart = ( {data} ) => {
  const {name , img, price} = data;
    return (
        <div className='cart-container'>
           <img src={img} alt=""/>
           <h2>Name:{name}</h2>
           <h4>Price:${price}</h4>
        </div>
    );
};

export default Cart;