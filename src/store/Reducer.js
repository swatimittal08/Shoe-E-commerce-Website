export const initialState = {
  orderNum: 0,
  cartOrder: 0,
  seeCart: false,
  seeCarousel: false,
  isCartEmpty: true,
  slideNum: 1,
  slideImage: "image-product-1.jpg",
  cart: [],
  currentProduct: null,
  productQuantities: {},
};

// Helper function to calculate total items in cart
const calculateCartTotal = (cart) => {
  return cart.reduce((total, item) => total + item.quantity, 0);
};

export function Reducer(state, action) {
  switch (action.type) {
    case "INCREMENT": {
      const productId = action.payload;
      return {
        ...state,
        productQuantities: {
          ...state.productQuantities,
          [productId]: (state.productQuantities[productId] || 0) + 1,
        },
      };
    }
    case "DECREMENT": {
      const productId = action.payload;
      const currentQuantity = state.productQuantities[productId] || 0;

      if (currentQuantity <= 0) {
        return state;
      }

      return {
        ...state,
        productQuantities: {
          ...state.productQuantities,
          [productId]: currentQuantity - 1,
        },
      };
    }
    case "OPEN_CART": {
      return {
        ...state,
        seeCart: !state.seeCart,
      };
    }
    case "OPEN_CAROUSEL": {
      return {
        ...state,
        seeCarousel: !state.seeCarousel,
      };
    }
    case "SET_CURRENT_PRODUCT": {
      return {
        ...state,
        currentProduct: action.payload,
      };
    }
    case "ADD_TO_CART": {
      if (state.currentProduct) {
        const productId = state.currentProduct.id;
        const quantity = state.productQuantities[productId] || 0;

        if (quantity > 0) {
          const newItem = {
            id: state.currentProduct.id,
            title: state.currentProduct.title,
            price: state.currentProduct.price,
            image: state.currentProduct.image,
            quantity: quantity,
          };

          const existingItemIndex = state.cart.findIndex(
            (item) => item.id === newItem.id
          );

          if (existingItemIndex >= 0) {
            const updatedCart = [...state.cart];
            updatedCart[existingItemIndex].quantity += quantity;
            const newCart = updatedCart;
            return {
              ...state,
              cart: newCart,
              isCartEmpty: false,
              cartOrder: calculateCartTotal(newCart),
              productQuantities: {
                ...state.productQuantities,
                [productId]: 0,
              },
              currentProduct: null,
            };
          } else {
            const newCart = [...state.cart, newItem];
            return {
              ...state,
              cart: newCart,
              isCartEmpty: false,
              cartOrder: calculateCartTotal(newCart),
              productQuantities: {
                ...state.productQuantities,
                [productId]: 0,
              },
              currentProduct: null,
            };
          }
        }
      }
      return state;
    }
    case "DELETE_CART": {
      return {
        ...state,
        cart: [],
        isCartEmpty: true,
        cartOrder: 0,
        currentProduct: null,
        productQuantities: {},
      };
    }
    case "REMOVE_FROM_CART": {
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
        isCartEmpty: updatedCart.length === 0,
        cartOrder: calculateCartTotal(updatedCart),
      };
    }
    case "PREVIOUS_SLIDE": {
      if (state.slideNum === 1) {
        return {
          ...state,
          slideNum: 4,
        };
      } else {
        return {
          ...state,
          slideNum: state.slideNum - 1,
        };
      }
    }
    case "NEXT_SLIDE": {
      if (state.slideNum === 4) {
        return {
          ...state,
          slideNum: 1,
        };
      } else {
        return {
          ...state,
          slideNum: state.slideNum + 1,
        };
      }
    }
    case "SET_SLIDE_IMAGE": {
      return {
        ...state,
        slideNum: action.payload,
        slideImage: `image-product-${action.payload}.jpg`,
      };
    }
    default:
      return state;
  }
}
