import React, { Component } from 'react';
import { connect } from "react-redux";
import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";
// import "./Cart.css";

class Cart extends Component {
  render() {

    const cartContent = this.props.items.map(item => 
        <li>
          <p>{item.name}</p>
        </li>
      );

    return (
      <div>
        <ul>
          {cartContent}
        </ul>
        <p>${this.props.cartTotal}</p>
{/*         
        <button onClick={this.props.addItem}>Add to cart</button>
        <button onClick={this.props.removeItem}>Remove from cart</button> */}
      </div>
    );
  }
}

export default Cart;