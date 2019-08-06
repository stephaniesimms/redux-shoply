import React, { Component } from "react";
import Navigation from "./Navigation";
import ProductList from "./ProductList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <ProductList />
      </div>
    );
  }
}

export default App;
