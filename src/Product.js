import React, { Component } from 'react';


class Product extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <p>${this.props.price}</p>
        <img
          src={this.props.image_url}
          alt={this.props.name}
        />
      </div>
    );
  }
}

export default Product;

