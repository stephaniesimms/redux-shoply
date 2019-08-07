import React, { Component } from "react";
import Navigation from "./Navigation";
import { connect } from "react-redux";
// import ProductList from "./ProductList";
import Routes from "./Routes";

class App extends Component {
  render() {
    // add isLoading to React state
    // if (this.state.isLoading) {
    //   return <p>Loading &hellip;</p>;
    // }

    return (
      <div className="App">
        <Navigation />
        <Routes 
          products={this.props.products}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default connect(mapStateToProps)(App);
