import React from "react";
import "./Checkout.css";
import Cart from "./Cart";
import Subtotal from "./Subtotal";
import { useSelector } from "react-redux";


function Checkout() {
  const basketItem=useSelector(store=>store?.cart?.basket);
  const user=useSelector(store=>store?.cart?.user)
  console.log(basketItem)
  return (
    <div className="checkout_page">
      <div className="checkout">
        <div className="chekout_heading">
          <div>
            <h3>Hello,{user} </h3>
            <h1>Shopping Cart</h1>
            <small>Deselect all items</small>
          </div>
          <div className="chekout_heading_priceTag">
            <small>Price</small>
          </div>
       
       
       
         
        </div>
       
        <div className="checkout_list">
      
          {basketItem.map((item,index)=>{
            return(
              <Cart 
              key={index}
              id={item.id}
              title={item.title} image={item.image} 
              price={item.price} rating={item.rating}/>
            )
          })}
         
         
          
        </div>
        
        
      </div>
      
      <Subtotal />
    </div>
  );
}

export default Checkout;
