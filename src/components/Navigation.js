import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';
import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar expand="md">
          <NavLink exact to="/" className="navbar-brand">
            Shoply
          </NavLink>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/products/">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/cart/">Cart</NavLink>
            </NavItem>
          </Nav>

        </Navbar>
      </div>
    );
  }
}

export default Navigation;

