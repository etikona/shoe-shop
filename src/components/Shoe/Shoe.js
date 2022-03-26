import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
// import Cart from '../Cart/Cart';
import './Shoe.css'

const Shoe = () => {
    const [shoes, setShoes] =useState([]);
    const [shoe, setShoe] =useState([]);
    

    useEffect(()=>{
      fetch('shoe.json')
      .then(res => res.json())
      .then(data =>  setShoes(data))
    } ,[])

    
    const AddCart =(name) =>{
      const chooseShoe = [...shoe, name]
      setShoe(chooseShoe);
      // console.log(chooseShoe);
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
        
<h3> Select your choice</h3>
<div>
  {
    shoe.map(item => <h1 key={item.id}>
      {item.name}
      <img src={item.img} alt="" />
      </h1>)
  }
</div>
<button className='choose'>CHOOSE ONE FOR ME 
cart={}
</button>
<br />
<button className='again'>CHOOSE AGAIN</button>

            </div>
        </div>
    );
};

export default Shoe;