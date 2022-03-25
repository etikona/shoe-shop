import React from 'react';
import './Shoe.css'

const Shoe = () => {
    return (
        <div className="main-shop">
            <div>
<h2>Choose one</h2>
            </div>
            <div className='buying-part'>
<h3> Select you want</h3>
<button className='for-me'>CHOOSE ONE FOR ME</button>
<br />
<button className='again'>CHOOSE AGAIN</button>

            </div>
        </div>
    );
};

export default Shoe;