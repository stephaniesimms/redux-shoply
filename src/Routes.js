import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import ProductList from "./ProductList";
import Cart from "./Cart";

class Routes extends Component {

  render() {
    const { products } = this.props;

    return (
      <main>
        <Switch>

          <Route exact path="/"
            render={() => <ProductList products={products} />} />

          {/* <Route exact path="/add-item/:itemType"
            render={props => (
              <NewItemForm
                {...props}
                addSnack={addSnack}
                addDrink={addDrink}
              />
            )} />

          <Route exact path="/snacks/"
            render={() => <Menu snacks={snacks}
              title="Snacks" />} />

          <Route path="/snacks/:id"
            render={(props) => <Item items={snacks}
              cantFind="/snacks/"
              {...props} />} />

          <Route exact path="/drinks/"
            render={() => <Menu drinks={drinks}
              title="Drinks" />} />

          <Route path="/drinks/:id"
            render={(props) => <Item items={drinks}
              cantFind="/drinks/"
              {...props} />} />

          <Route>
            <p className="error-msg">Hmmm. I can't seem to find what you want.</p>
          </Route> */}

        </Switch>
      </main>
    );
  }
}

export default Routes;