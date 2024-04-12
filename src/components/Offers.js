import React from "react";
import "./Offers.css";

function Offers() {
  return (
    <>
      <div className="offers">
        <h1>EasyCures Offers & Coupon Codes</h1>
        <p className="offer_desc">
          EasyCure is one of India’s leading online healthcare platforms that
          allows you to make great savings on your medicines and healthcare
          needs every day.From finding the prescribed medicine you need to the
          wellness product that is best suitable for you, EasyCure is your
          one-stop destination for all your healthcare needs. Affordable prices
          offered by our partner retail pharmacies allow you to focus on your
          and your family’s health while we take care of your budget. We have
          got the best offers just for you. Watch out this space for the best
          EasyCure offers on a range of healthcare products. Find new EasyCure
          coupons and many such exciting offer codes updated every day. Simply
          use the EasyCure coupon code to avail the best deals and offers.
          EasyCure offers amazing payment and cashback deals too for new and
          existing users. Just apply the EasyCure promo code at check-out and
          make the most of these offers.
        </p>
        <h3>Download the EasyCure app today to buy medicines online with great savings.</h3>

            <h3>Hurry! Avail these exclusive EasyCure offers now.</h3>
      </div>

      <div className="offer_cards">
        <div className="offer-card">
          <img
            src="https://cms-contents.pharmeasy.in/offer/7f98176928d-OFFER25-compressed.jpg"
            className="offer-card-image"
          />
          <div className="offer-card-content">
            <h3>FLAT 25% OFF on medicine orders</h3>
            <p>
              Coupon applicable on your medicine order above Rs. 1000. Hurry!
              Order Now.
            </p>
            <strong style={{ margin: "0 10px" }}>CODE: FLAT25</strong>
            <button style={{ padding: " 10px" }}>COPY CODE</button>
          </div>
        </div>

        <div className="offer-card">
          <img
            src="https://cms-contents.pharmeasy.in/offer/7f98176928d-OFFER25-compressed.jpg"
            className="offer-card-image"
          />
          <div className="offer-card-content">
            <h3>FLAT 45% OFF on medicine orders</h3>
            <p>
              Coupon applicable on your medicine order above Rs. 3000. Hurry!
              Order Now.
            </p>
            <strong style={{ margin: "0 10px" }}>CODE: FLAT45</strong>
            <button style={{ padding: " 10px" }}>COPY CODE</button>
          </div>
        </div>

        <div className="offer-card">
          <img
            src="https://cms-contents.pharmeasy.in/offer/96c0565139d-hdfcpayzapp.jpg"
            className="offer-card-image"
          />
          <div className="offer-card-content">
            <h3>
              Get ₹100 PayZapp Shopping Voucher 
            </h3>
            <p>
              Coupon applicable on your medicine order above Rs. 999. Hurry!
              Order Now.
            </p>
            <strong style={{ margin: "0 10px" }}>CODE: HDFCPAY</strong>
            <button style={{ padding: " 10px" }}>COPY CODE</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offers;
