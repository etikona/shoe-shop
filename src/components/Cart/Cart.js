import React from 'react';
import './Cart.css'
import {FaCartPlus} from 'react-icons/fa'
const Cart = ( {data, AddCart} ) => {
  const {name , img, price} = data;
  // console.log(data);
 
    return (
        <div className='cart-container'>
           <img src={img} alt=""/>
           <h2>Name:{name}</h2>
           <h4>Price:${price}</h4>
           <button onClick={() =>AddCart(name)} className='btn-cart'>
             <p> <FaCartPlus/>
               Add to Cart</p>
           </button>
        </div>
    );
};

export default Cart;