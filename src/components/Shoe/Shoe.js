import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Choose from '../Choose/Choose';
// import Cart from '../Cart/Cart';
import './Shoe.css'

const Shoe = () => {
    const [shoes, setShoes] =useState([]);
    const [shoe, setShoe] =useState([]);
    const [random, setRandom] =useState([]);

    const item =(shoe) =>{
      const newRandom = [...random, shoe]
      console.log(random);
      for(const product of random){
  
        const chooseItem = Math.floor(Math.random(0) * product.length)
        setRandom(chooseItem);
      }      
    }


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
<div>
           < button onClick={item(shoe)}   className='choose'>CHOOSE ONE FOR ME 

</button>
<br />
<button onClick={item([])} className='again'>CHOOSE AGAIN</button>
        </div>
    </div>
        </div>
    );
};

export default Shoe;