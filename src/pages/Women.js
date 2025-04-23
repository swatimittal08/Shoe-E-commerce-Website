import React from "react";
import "../App.scss";
import { useContext } from "react";
import { AppContext } from "../store/Context";
import shoes from "../images/heals.jpg";
import sneakers from "../images/sneakers.jpg";
import heels from "../images/heels.jpg";
import sandals from "../images/beautiful-men-sandal.jpg";
import womenslippers from "../images/womenslippers.jpg";
import leathersandal from "../images/leather-shoes-sandal.jpg";

const products = [
  {
    id: 101,
    title: "Elegant Heels",
    price: 99.99,
    image: shoes,
  },
  {
    id: 102,
    title: "Fashion Sneakers",
    price: 69.99,
    image: sneakers,
  },
  {
    id: 103,
    title: "Leather Sandal",
    price: 79.99,
    image: leathersandal,
  },
  {
    id: 104,
    title: "Elegant Sandals",
    price: 89.99,
    image: sandals,
  },
  {
    id: 105,
    title: "Pencil Heels",
    price: 79.99,
    image: heels,
  },
  {
    id: 106,
    title: "Fashionable Slippers",
    price: 39.99,
    image: womenslippers,
  },
];

function Women() {
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
      <h1>Women's Collection</h1>
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

export default Women;
