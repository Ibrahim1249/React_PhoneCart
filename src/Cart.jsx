

import React, { useState } from 'react'
import Item from "./Item"
import {data} from "./data"
function Cart() {

  const [] = useState();
  return (
    <>
      <h1>YOUR BAG</h1>
     {data.map((dt,idx)=>{
       return <Item key={idx} image={dt.image} phoneName={dt.phoneName} price={dt.price}/>
     })}

      <div className="footer">
        <hr />
        <div className="total">
          <p>Total</p>
          <p>14666$</p>
        </div>
        <button className='btn'>clear cart</button>
      </div>
    </>
  )
}

export default Cart