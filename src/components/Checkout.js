import React from "react";
import "./Checkout.css";
import Cart from "./Cart";
import Subtotal from "./Subtotal";
import { useSelector } from "react-redux";

function Checkout() {
  const basketItem = useSelector((store) => store?.cart?.basket);
  const user = useSelector((store) => store?.cart?.user);
  console.log(basketItem);
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

        {basketItem.length === 0 ? (
          <div className="empty_cart">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR37loKXf-h_g8CYVKHbaJw4PpHMBtBANq9VmjR4e8n4w&s'/>
            <h1 className="empty_cart_line">Your Cart is Empty..!</h1>
          </div>
        ) : (
          <div className="checkout_list">
            {basketItem.map((item, index) => {
              return (
                <Cart
                  key={index}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        )}
      </div>

      <Subtotal />
    </div>
  );
}

export default Checkout;
