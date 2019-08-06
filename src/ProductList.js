import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Product from "./Product";
import {connect } from "react-redux";
import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";


class ProductList extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItem() {
    this.props.addItem()
  }

  removeItem() {
    this.props.removeItem()
  }

  render() {
    // console.log("this.props", this.props)
    let inventoryObj = this.props.products;
    let productKeys = Object.keys(this.props.products)
    
    let products = productKeys.map(key => {
      let product = inventoryObj[key]

      return (
        <Product
          id={key}
          key={key}
          name={product.name}
          price={product.price}
          description={product.description}
          addItem={this.addItem}
          removeItem={this.removeItem}
        />
      );
    });
    return (
      <div>
        <ul>{products}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

const mapDispatchToProps = {
  addItem: () => (
    { type: ADD_ITEM }),
  removeItem: () => (
    { type: REMOVE_ITEM }),
};

const connectComponentToRedux = connect(mapStateToProps, mapDispatchToProps);

export default connectComponentToRedux(ProductList);;