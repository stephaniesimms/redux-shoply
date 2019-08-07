import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import ProductList from "./ProductList";
import Cart from "./Cart";

class Routes extends Component {

  render() {
    console.log("routes this.props", this.props)
    const { products, cartItems, cartTotalPrice } = this.props;

    return (
      <main>
        <Switch>

          <Route exact path="/"
            render={() => <ProductList products={products} />} />

          <Route exact path="/products/"
            render={() => <ProductList products={products} />} />
{/* 
          <Route path="/products/:id"
            render={(props) => <Item items={snacks}
              cantFind="/snacks/"
              {...props} />} /> */}

          <Route exact path="/cart/"
            render={() => <Cart items={cartItems} cartTotal={cartTotalPrice} />} />

          <Route>
            <p className="error-msg">Hmmm. I can't seem to find what you want.</p>
          </Route>

        </Switch>
      </main>
    );
  }
}

export default Routes;