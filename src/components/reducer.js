const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCTS': {
      return { ...state, products: action.payload };
    }
    case 'ADD_TO_CART': {
      return { ...state, cart: [action.payload, ...state.cart] };
    }
    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };
    }
    case 'UPDATE_COUNT': {
      return {
        ...state,
        cart: state.cart.filter(product => product.id === action.payload.id ? product.qty = action.payload.qty : product.qty)
      };
    }
    default:
      break;
  }
};

export default reducer;