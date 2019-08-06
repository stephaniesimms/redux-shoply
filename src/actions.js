import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";

export function addItem(product) {
  return {
    type: ADD_ITEM,
    product
  };
}

export function removeItem(id) {
  return { 
    type: REMOVE_ITEM, 
    id 
  };
}
