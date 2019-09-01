import React, { Component } from "react";
import Navigation from "../components/Navigation";
import { connect } from "react-redux";
import Routes from "../components/Routes";

class App extends Component {
  render() {
    // add isLoading to React state
    // if (this.state.isLoading) {
    //   return <p>Loading &hellip;</p>;
    // }
    const { products, cartItems, cartTotalPrice } = this.props;
    return (
      <div className="App">
        <Navigation />
        <Routes
          products={products}
          cartItems={cartItems}
          cartTotalPrice={cartTotalPrice}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state in App", state)
  return {
    products: state.products,
    cartItems: state.cartItems,
    cartTotalPrice: state.cartTotalPrice
  };
}

export default connect(mapStateToProps)(App);
