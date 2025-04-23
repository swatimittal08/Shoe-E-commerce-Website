import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";

function ThankYou() {
  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <h1>Thankyou for Your Order!</h1>
        <p>Your order has been successfully placed.</p>
        <p>We'll send you an email confirmation with your order details.</p>
        <Link to="/" className="continue-shopping-btn">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default ThankYou;
