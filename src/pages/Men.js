import React from "react";
import "../App.scss";
import { useContext } from "react";
import { AppContext } from "../store/Context";
import flipflop from "../images/men-leather-sandal-flip-flop-shoes.jpg";
import white from "../images/men-white-espadrilles-slip-shoes.jpg";
import background from "../images/man-two-background-accessory-velcro.jpg";
import shoes from "../images/shoes.jpg";
import leather from "../images/brown-leather-shoes.jpg";
import brown from "../images/brown-shoes-isolated-white-background-studio.jpg";

const products = [
  {
    id: 1,
    title: "Classic Leather Boot",
    price: 119.99,
    image: flipflop,
  },
  {
    id: 2,
    title: "Running Sneaker",
    price: 159.99,
    image: white,
  },
  {
    id: 3,
    title: "Casual Loafers",
    price: 129.99,
    image: background,
  },
  {
    id: 4,
    title: "Classic Leather Boot",
    price: 139.99,
    image: shoes,
  },
  {
    id: 5,
    title: "Classic Leather Boot",
    price: 149.99,
    image: leather,
  },
  {
    id: 6,
    title: "Classic Leather Boot",
    price: 159.99,
    image: brown,
  },
];

function Men() {
  const { state, dispatch } = useContext(AppContext);

  const handleAddToCart = (product) => {
    dispatch({ type: "SET_CURRENT_PRODUCT", payload: product });
    dispatch({ type: "ADD_TO_CART" });
  };

  const getQuantity = (productId) => {
    return state.productQuantities[productId] || 0;
  };

  return (
    <div className="page-container">
      <h1>Men's Collection</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <div className="buttons-small">
              <div className="changeNum-small">
                <div
                  onClick={() =>
                    dispatch({ type: "DECREMENT", payload: product.id })
                  }
                >
                  -
                </div>
                <h4>{getQuantity(product.id)}</h4>
                <div
                  onClick={() =>
                    dispatch({ type: "INCREMENT", payload: product.id })
                  }
                >
                  +
                </div>
              </div>
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Men;
