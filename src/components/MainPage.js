import { useMediaQuery } from "react-responsive";
import Carousel from "./Carousel";

function MainPage() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 715px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 715px)" });

  return (
    <div className="main-page">
      {isBigScreen && (
        <div className="product-container-big">
          <div className="container-left-big">
            <Carousel />
          </div>
          <div className="container-right-big">
            <h3 style={{ fontSize: "30px" }}>👟 SHOE COMPANY</h3>
            <h1>Fall Limited Edition Shoes</h1>
            <div>
              Designed for everyday ease, these sleek, low-cut shoes blend style
              and function effortlessly. With a rugged rubber outsole, they’re
              made to keep up—rain or shine.
            </div>
          </div>
        </div>
      )}

      {isSmallScreen && (
        <div className="product-container-small">
          <div className="container-left-small">
            <Carousel />
          </div>
          <div className="container-right-small">
            <h3>SNEAKER COMPANY</h3>
            <h1>Fall Limited Edition Sneakers</h1>
            <h4>
              Built for daily comfort, these streamlined low-cut sneakers offer
              the perfect mix of fashion and durability. Thanks to their tough
              rubber sole, they’re ready to handle any weather with ease.
            </h4>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainPage;
