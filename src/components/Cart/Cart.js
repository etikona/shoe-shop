import React from 'react';
import './Cart.css'
import {FaCartPlus} from 'react-icons/fa'


const Cart = ( {data, AddCart} ) => {
  const {img, name, price} = data;
  // console.log(data);
 
    return (
    <div className='container'>
        <div className='cart-container'>
          <div className='img-container'>
          <img src={img} alt=""/>
          </div>
        <div className='cart-info'>
        <h2>Name:{name}</h2>
           <h4>Price:${price}</h4>
           <button onClick={() =>AddCart(data)} className='btn-cart'>
             <p> <FaCartPlus/>
               Add to Cart</p>
           </button>
        </div>
    </div>
    
    </div>

  
 
    );
};

export default Cart;