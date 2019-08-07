import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";
import data from "./data.json";
import { calculateCartTotalPrice } from "./helpers";

const DEFAULT_STATE = {
  products: data.products,
  cartItems: [],
  cartTotalPrice: 0.0
};

function reducer(state = DEFAULT_STATE, action) {
  console.log("reducer ran; state & action:", state, action)

  if (action.type === ADD_ITEM) {
    let cartItemsCopy = [...state.cartItems];

    // find product by ID and add to cartItems
    let newItem = state.products[action.id];
    cartItemsCopy.push(newItem);

    //get price and add to cartTotal, use helper function for testability
    return {
      ...state,
      cartItems: cartItemsCopy,
      cartTotalPrice: calculateCartTotalPrice(cartItemsCopy)
    }
  }
  //can't filter because it should only remove one item per click
  if (action.type === REMOVE_ITEM) {
    let cartItemsCopy = [...state.cartItems];
    let removeItem = state.products[action.id];
    
    for (let i = 0; i < cartItemsCopy.length; i++) {
      if (cartItemsCopy[i] === removeItem) {
        cartItemsCopy.splice(i, 1);
        break;
      }
    }
    return {
      ...state,
      cartItems: cartItemsCopy,
      cartTotalPrice: calculateCartTotalPrice(cartItemsCopy)
    }
  }
  return state;
}


export default reducer;