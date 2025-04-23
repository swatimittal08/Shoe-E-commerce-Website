import { useContext, useEffect } from "react";
import { AppContext } from "../store/Context";
import { useMediaQuery } from "react-responsive";

function Carousel() {
  const { state, dispatch } = useContext(AppContext);
  useEffect(() => {
    dispatch({ type: "SET_SLIDE_IMAGE", payload: state.slideNum });
  }, [state.slideNum, dispatch]);

  const isBigScreen = useMediaQuery({ query: "(min-width: 715px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 715px)" });

  return (
    <div>
      {isBigScreen && (
        <div>
          <img
            src={require(`../images/${state.slideImage}`)}
            className="main-image"
            alt=""
          />
          <div className="thumbnail">
            <img
              src={require("../images/image-product-1-thumbnail.jpg")}
              alt=""
              className={`${state.slideNum === 1 ? "thumbnailActive" : ""}`}
              onClick={() => {
                dispatch({ type: "SET_SLIDE_IMAGE", payload: 1 });
                dispatch({ type: "OPEN_CAROUSEL" });
              }}
            />
            <img
              src={require("../images/image-product-2-thumbnail.jpg")}
              alt=""
              className={`${state.slideNum === 2 ? "thumbnailActive" : ""}`}
              onClick={() => {
                dispatch({ type: "SET_SLIDE_IMAGE", payload: 2 });
                dispatch({ type: "OPEN_CAROUSEL" });
              }}
            />
            <img
              src={require("../images/image-product-3-thumbnail.jpg")}
              alt=""
              className={`${state.slideNum === 3 ? "thumbnailActive" : ""}`}
              onClick={() => {
                dispatch({ type: "SET_SLIDE_IMAGE", payload: 3 });
                dispatch({ type: "OPEN_CAROUSEL" });
              }}
            />
            <img
              src={require("../images/image-product-4-thumbnail.jpg")}
              alt=""
              className={`${state.slideNum === 4 ? "thumbnailActive" : ""}`}
              onClick={() => {
                dispatch({ type: "SET_SLIDE_IMAGE", payload: 4 });
                dispatch({ type: "OPEN_CAROUSEL" });
              }}
            />
          </div>
          {state.seeCarousel && (
            <div className="carousel">
              <div className="carousel-items">
                <svg
                  width="14"
                  height="15"
                  xmlns="http://www.w3.org/2000/svg"
                  className="close"
                  onClick={() => dispatch({ type: "OPEN_CAROUSEL" })}
                >
                  <path
                    d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                    fill="white"
                    fillRule="evenodd"
                    className="close-icon"
                  />
                </svg>
                <div className="carousel-track">
                  <button
                    className="previous_button"
                    onClick={() => dispatch({ type: "PREVIOUS_SLIDE" })}
                  >
                    <svg
                      width="12"
                      height="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 1 3 9l8 8"
                        stroke="#1D2026"
                        strokeWidth="3"
                        fill="none"
                        fillRule="evenodd"
                        className="previous-icon"
                      />
                    </svg>
                  </button>
                  <img
                    src={require(`../images/${state.slideImage}`)}
                    className="carousel-image"
                    alt=""
                  />
                  <button
                    className="next_button"
                    onClick={() => dispatch({ type: "NEXT_SLIDE" })}
                  >
                    <svg
                      width="13"
                      height="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m2 1 8 8-8 8"
                        stroke="#1D2026"
                        strokeWidth="3"
                        fill="none"
                        fillRule="evenodd"
                        className="next-icon"
                      />
                    </svg>
                  </button>
                </div>
                <div className="carousel-thumbnail">
                  <img
                    src={require("../images/image-product-1-thumbnail.jpg")}
                    alt=""
                    className={`${
                      state.slideNum === 1 ? "carouselThumbnailActive" : ""
                    }`}
                    onClick={() => {
                      dispatch({ type: "SET_SLIDE_IMAGE", payload: 1 });
                    }}
                  />
                  <img
                    src={require("../images/image-product-2-thumbnail.jpg")}
                    alt=""
                    className={`${
                      state.slideNum === 2 ? "carouselThumbnailActive" : ""
                    }`}
                    onClick={() => {
                      dispatch({ type: "SET_SLIDE_IMAGE", payload: 2 });
                    }}
                  />
                  <img
                    src={require("../images/image-product-3-thumbnail.jpg")}
                    alt=""
                    className={`${
                      state.slideNum === 3 ? "carouselThumbnailActive" : ""
                    }`}
                    onClick={() => {
                      dispatch({ type: "SET_SLIDE_IMAGE", payload: 3 });
                    }}
                  />
                  <img
                    src={require("../images/image-product-4-thumbnail.jpg")}
                    alt=""
                    className={`${
                      state.slideNum === 4 ? "carouselThumbnailActive" : ""
                    }`}
                    onClick={() => {
                      dispatch({ type: "SET_SLIDE_IMAGE", payload: 4 });
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {isSmallScreen && (
        <div className="carousel-small">
          <div className="carousel-items-small">
            <div className="carousel-track-small">
              <button
                className="previous_button-small"
                onClick={() => dispatch({ type: "PREVIOUS_SLIDE" })}
              >
                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11 1 3 9l8 8"
                    stroke="#1D2026"
                    strokeWidth="3"
                    fill="none"
                    fillRule="evenodd"
                    className="previous-icon"
                  />
                </svg>
              </button>
              <img
                src={require(`../images/${state.slideImage}`)}
                className="carousel-image-small"
                alt=""
              />
              <button
                className="next_button-small"
                onClick={() => dispatch({ type: "NEXT_SLIDE" })}
              >
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m2 1 8 8-8 8"
                    stroke="#1D2026"
                    strokeWidth="3"
                    fill="none"
                    fillRule="evenodd"
                    className="next-icon"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carousel;
