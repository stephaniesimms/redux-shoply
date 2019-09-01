import React, { Component } from 'react';


class ProductDetails extends Component {
  render() {

    const id = this.props.match.params.id;
    const product = this.props.products[id]
    console.log(product)

    return (
      <div>
        <h4>Here be product details</h4>
        
      </div>
    );
  }
}


export default ProductDetails;