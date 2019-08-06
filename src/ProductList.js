import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Product from "./Product";
import { connect } from "react-redux";


class ProductList extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItem() { this.props.addItem() };

  removeItem() { this.props.removeItem() };

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

const connectComponentToRedux = connect(mapStateToProps);

export default connectComponentToRedux(ProductList);