import { useContext } from "react";
import { AppContext } from "../store/Context";
import Delete from "../images/icon-delete.svg";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

function ViewCart() {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const isBigScreen = useMediaQuery({ query: "(min-width: 715px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 715px)" });

  const handleCheckout = () => {
    dispatch({ type: "OPEN_CART" }); // Close cart
    navigate("/checkout");
  };

  const calculateTotal = () => {
    return state.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      {isBigScreen && (
        <div className="see-cart">
          <h2>Cart</h2>
          <hr />
          {state.isCartEmpty && (
            <div className="empty-cart">Your cart is empty.</div>
          )}
          {!state.isCartEmpty && (
            <div className="order-container">
              <div className="orders">
                <div className="cart-items">
                  {state.cart.map((item) => (
                    <div className="order-quantity" key={item.id}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="cartIMG"
                      />
                      <div className="item-details">
                        <div className="model">{item.title}</div>
                        <div className="orderNum">
                          ${item.price} x {item.quantity}{" "}
                          <span>
                            <strong>
                              ${(item.price * item.quantity).toFixed(2)}
                            </strong>
                          </span>
                        </div>
                      </div>
                      <img
                        src={Delete}
                        alt="Delete"
                        className="trashIMG"
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: item.id,
                          })
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="total">
                <h3>Total: ${calculateTotal().toFixed(2)}</h3>
              </div>
              <button className="checkout" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          )}
        </div>
      )}

      {isSmallScreen && (
        <div className="small-cart">
          <div className="see-cart-small">
            <h2>Cart</h2>
            <hr />
            {state.isCartEmpty && (
              <div className="empty-cart">Your cart is empty.</div>
            )}
            {!state.isCartEmpty && (
              <div className="order-container-small">
                <div className="orders">
                  <div className="cart-items">
                    {state.cart.map((item) => (
                      <div className="order-quantity" key={item.id}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="cartIMG"
                        />
                        <div className="item-details">
                          <div className="model">{item.title}</div>
                          <div className="orderNum">
                            ${item.price} x {item.quantity}{" "}
                            <span>
                              <strong>
                                ${(item.price * item.quantity).toFixed(2)}
                              </strong>
                            </span>
                          </div>
                        </div>
                        <img
                          src={Delete}
                          alt="Delete"
                          className="trashIMG"
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: item.id,
                            })
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="total">
                  <h3>Total: ${calculateTotal().toFixed(2)}</h3>
                </div>
                <button className="checkout" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewCart;
