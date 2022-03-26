import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
// import Cart from '../Cart/Cart';
import './Shoe.css'

const Shoe = () => {
    const [shoes, setShoes] =useState([]);
    useEffect(()=>{
      fetch('shoe.json')
      .then(res => res.json())
      .then(data =>  setShoes(data))
    } ,[])

    const AddCart =(name) =>{
      console.log(name)
    }
    return (
        <div className="main-shop">
<div className='cart'>
{
      shoes.map(shoe => <Cart
         key={shoe.id}
          data={shoe}
          AddCart={AddCart}
          ></Cart>)
    }
</div>
            
            <div className='buying-part'>
<h3> Select you want</h3>
<button className='choose'>CHOOSE ONE FOR ME</button>
<br />
<button className='again'>CHOOSE AGAIN</button>

            </div>
        </div>
    );
};

export default Shoe;