import React from "react";
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <div className="thank-you">
      <div className="thank-you-content">
        <h1>Thankyou for Your Order!</h1>
        <p>
          Your order has been successfully placed. You will receive a
          confirmation email shortly.
        </p>
        <Link to="/" className="back-to-shop">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default ThankYou;
