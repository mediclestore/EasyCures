import React from "react";
import "./Subtotal.css";
import { useState } from "react";
import Modal from "react-modal";

import { useSelector } from "react-redux";
const rootElement = document.getElementById('root');
Modal.setAppElement(rootElement);

function Subtotal() {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);


  const basketItemCount = useSelector((store) => store.cart.basket);
  const totalPrice = basketItemCount.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);

  const handlePayment = () => {
    setIsOrderPlaced(true);
    console.log("Order processing...");
  };
  const closeModal = () => {
    setIsOrderPlaced(false);
  };

  console.log(totalPrice);
  return (
    <div className="subtotal">
      <>
        <p>
          Subtotal ({basketItemCount.length} items):<small>$</small>{" "}
          <strong>{totalPrice}</strong>
        </p>
        <p>
          <small>
            <input type="checkbox" />
            This Order contains a gift
          </small>
        </p>
      </>

      <button className="checkout_btn" onClick={handlePayment}>
        Proceed to buy
      </button>
      <div >
        <Modal className="modal" isOpen={isOrderPlaced} onRequestClose={closeModal}>
          <h2>Your Order Has Been Placed!</h2>
          <p>
            Thank you for your purchase. We will process your order shortly.
          </p>
          <button onClick={closeModal}>Close</button>
        </Modal>
      </div>
    </div>
  );
}

export default Subtotal;
