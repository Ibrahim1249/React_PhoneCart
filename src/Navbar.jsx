
import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Navbar() {
  return (
   <>
    <nav>
        <h2>Cart</h2>
        <div className="cart-icon">
         <AddShoppingCartIcon style={{"fontSize":"40px"}}/>
         <span>0</span>
        </div>
    </nav>
   </>
  )
}

export default Navbar