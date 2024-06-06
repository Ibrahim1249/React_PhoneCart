

import React, { useEffect, useState } from 'react'

import Item from './Item';
function Cart({totalCart , setTotalCart , cart ,setCart}) {
 
 const [total,setTotal] = useState(0);

 useEffect(()=>{
   let totalAmount = 0;
    cart.forEach((cartItem)=>{
      totalAmount += parseFloat(cartItem.cartCount) * parseFloat(cartItem.price);
    })
    setTotal(totalAmount);
 },[cart])

  function handleCartRemove(e, id){
    e.preventDefault()
    setCart(cart.filter((cartItem)=>{
       return cartItem.id !== id;
    }))
  }

  function handleDecrement(index){

      let copyCart = [...cart];
      
       let count = copyCart[index]["cartCount"] 
    
       if(count > 0){
        copyCart[index]["cartCount"] -= 1;
       }
       setCart(copyCart)
       setTotalCart(totalCart - 1)
 
       if(count > 0 && count < 2){
        setCart(cart.filter((cartItem,idx)=>{
          return index !== idx;
        }))
      }
  }

  function handleIncrement(index){
    let copyCart = [...cart];
    copyCart[index]["cartCount"] += 1;
    setCart(copyCart)
    setTotalCart(totalCart + 1)
  }

  return (
    <>
      <h1>YOUR BAG</h1>
     {cart.map((dt,idx)=>{
       return <Item key={idx} image={dt.image} phoneName={dt.phoneName} price={dt.price} id={dt.id} cartCount={dt.cartCount} 
       handleCartRemove={handleCartRemove} handleDecrement={handleDecrement} handleIncrement={handleIncrement} index={idx}/>
     })}

      <div className={cart.length > 0 ? "footer" : "hidden"}>
        <hr />
        <div className="total">
          <p>Total</p>
          <p className='totalAmount'>{total.toFixed(2)} $</p>
        </div>
        <button className='btn' onClick={()=>{setCart([]);setTotalCart(0)}}>clear cart</button>
      </div>

      <div className={cart.length === 0 ? "empty-item" : "hidden"}>
         <p>No Item in Cart ....</p>
      </div>
    </>
  )
}

export default Cart