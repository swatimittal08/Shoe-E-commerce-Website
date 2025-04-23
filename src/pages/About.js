import React from "react";
import "../App.scss";

function About() {
  return (
    <div className="page-container">
      <div className="about-section">
        <h1 style={{ textAlign: "center" }}>About ShoeStore</h1>
        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              ShoesStore was founded with a simple mission: to provide
              high-quality footwear that combines style, comfort, and
              durability. Since our establishment, we've been dedicated to
              bringing you the latest trends in footwear while maintaining our
              commitment to quality and customer satisfaction.
            </p>

            <h2>Our Mission</h2>
            <p>
              We strive to be your go-to destination for all your footwear
              needs, offering a carefully curated selection of shoes for every
              occasion. Our team of experts works tirelessly to source the best
              products and provide exceptional customer service.
            </p>

            <h2>Why Choose Us?</h2>
            <ul>
              <li>Premium Quality Products</li>
              <li>Wide Selection of Styles</li>
              <li>Competitive Prices</li>
              <li>Excellent Customer Service</li>
              <li>Fast Shipping</li>
              <li>Easy Returns</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
