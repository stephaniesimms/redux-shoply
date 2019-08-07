import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

    let products = Object.entries(this.props.products).map(
      ([key, product]) =>
        <li key={key}>
          <Link to={`/products/${key}`} >
            <Product
              id={key}
              name={product.name}
              price={product.price}
              description={product.description}
              image_url={product.image_url}
              addItem={this.addItem}
              removeItem={this.removeItem}
            />
          </Link>
        </li>
    );

    // let products = Object.entries(this.props.products).map(
    //   entry => {
    //     let key = entry[0];
    //     let product = entry[1];
    //     return <Link to={`/products/${key}`} key={key}>
    //       <Product
    //         id={key}
    //         name={product.name}
    //         price={product.price}
    //         description={product.description}
    //         image_url={product.image_url}
    //         addItem={this.addItem}
    //         removeItem={this.removeItem}
    //       />
    //     </Link>
    //   }
    // )

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

export default connect(mapStateToProps)(ProductList);