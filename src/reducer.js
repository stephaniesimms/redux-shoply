import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";
import uuid from "uuid/v4";
import data from "./data.json";

const DEFAULT_STATE = {
  products: data.products,
  cartItems: {},  // or []?
  cartTotal: 0
};

function reducer(state = DEFAULT_STATE, action) {
  console.log("reducer ran; state & action:", state, action)
  
  // if (action.type === ADD_ITEM) {
  //   let cartItemsCopy = { ...state.cartItems };
  //   //find product by ID and add to cartItems
  //   return {
  //     ...state,
  //     // cartItems: 
  //     // cartTotal:

  //   }
  // }
  // if (action.type === REMOVE_ITEM) {

  // }

  return state;
}

export default reducer;