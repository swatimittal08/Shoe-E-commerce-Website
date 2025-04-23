import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../images/icon-cart.svg";
import Menu from "../images/icon-menu.svg";
import { AppContext } from "../store/Context";
import { useMediaQuery } from "react-responsive";
import ViewCart from "./ViewCart";

function NavBar() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 715px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 715px)" });
  const { state, dispatch } = useContext(AppContext);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {isBigScreen && (
        <div className="navbar-big">
          <div className="nav-items">
            <div className="left-nav-big">
              <h2
                style={{
                  color: "black",
                  marginTop: "20px",
                  fontWeight: "700",
                  fontSize: "25px",
                }}
              >
                <Link to="/">ShoeStore</Link>
              </h2>
              <div className="dropdown">
                <button className="dropbtn">ProductList ▾</button>
                <div className="dropdown-content">
                  <Link to="/men">Men</Link>
                  <Link to="/women">Women</Link>
                </div>
              </div>
              <Link to="/about">
                <h2>About</h2>
              </Link>
              <Link to="/contact">
                <h2>Contact</h2>
              </Link>
            </div>
            <div className="right-nav-big">
              <img
                src={Cart}
                alt=""
                onClick={() => {
                  dispatch({ type: "OPEN_CART" });
                }}
              />
              {!state.isCartEmpty && (
                <div
                  className="cart-mini-number"
                  data-digits={
                    state.cartOrder ? state.cartOrder.toString().length : 0
                  }
                >
                  {state.cartOrder}
                </div>
              )}
              <img
                src={require("../images/image-avatar.png")}
                className="avatar-logo-big"
                alt=""
              />
            </div>
          </div>
          {state.seeCart && <ViewCart />}
        </div>
      )}
      {isSmallScreen && (
        <div className="navbar-small">
          <div className="nav-items">
            <div className="left-nav-small">
              <img
                src={Menu}
                alt=""
                className="menu-logo"
                onClick={() => setMenuOpen(!isMenuOpen)}
              />
            </div>
            <div className="right-nav-small">
              <img
                src={Cart}
                alt=""
                onClick={() => {
                  dispatch({ type: "OPEN_CART" });
                }}
                className="cart-logo"
              />
              {!state.isCartEmpty && (
                <div
                  className="cart-mini-number-small"
                  data-digits={
                    state.cartOrder ? state.cartOrder.toString().length : 0
                  }
                >
                  {state.cartOrder}
                </div>
              )}
              <img
                src={require("../images/image-avatar.png")}
                className="avatar-logo-small"
                alt=""
              />
            </div>
          </div>
          {state.seeCart && <ViewCart />}
          {isMenuOpen && (
            <div className="menu-slider">
              <div className="vertical-nav">
                <svg
                  width="14"
                  height="15"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => setMenuOpen(false)}
                >
                  <path
                    d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                    fill="#69707D"
                    fillRule="evenodd"
                  />
                </svg>
                <Link to="/">
                  <h2>Home</h2>
                </Link>
                <Link to="/men">
                  <h2>Men</h2>
                </Link>
                <Link to="/women">
                  <h2>Women</h2>
                </Link>
                <Link to="/about">
                  <h2>About</h2>
                </Link>
                <Link to="/contact">
                  <h2>Contact</h2>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default NavBar;
