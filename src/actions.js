import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";

export function addItem(product) {
  return {
    type: ADD_ITEM,
    id: product.id,
    price: product.price
  };
}

export function removeItem(product) {
  return { 
    type: REMOVE_ITEM, 
    id: product.id,
    price: product.price
  };
}
