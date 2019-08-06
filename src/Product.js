import React, { Component } from 'react';
import { connect } from "react-redux";
import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";
import "./Product.css"
class Product extends Component {
  render() {
    console.log("image url in product", this.props.image_url)
    return (
      <div>
        <h4>{this.props.name}</h4>
        <p>${this.props.price}</p>
        <img
          src={this.props.image_url}
          alt={this.props.name}
        />
        <button onClick={this.props.addItem}>Add to cart</button>
        <button onClick={this.props.removeItem}>Remove from cart</button>
      </div>
    );
  }
}

// const mapDispatchToProps = {
//   addItem: () => (
//     { type: ADD_ITEM,
//       payload: {  } 
//     }),
//   removeItem: () => (
//     { type: REMOVE_ITEM }),
// };

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addItem: function(id) {
      dispatch({
        type: ADD_ITEM,
        id: ownProps.id
      });
    },
    removeItem: function(id) {
      dispatch({
        type: REMOVE_ITEM,
        id: ownProps.id
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(Product);