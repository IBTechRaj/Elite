/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Home from "./components/Home";

// import { HashRouter as Router, Route } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import RecipesContainer from "../containers/RecipesContainer";
// import Recipe from "../containers/Recipe";
import Footer from "./components/Footer";
import store from "./components/store";
import Suppliers from "./containers/Suppliers";
import Products from "./containers/Products";
import SupplierList from "./containers/SupplierList";
// import ProductList from "./containers/ProductList";
import SupplierForm from "./containers/SupplierForm";
// import ProductForm from "./containers/ProductForm";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="container-fluid">
            <Navbar />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Home
                  // {...props}
                  // handleLogout={this.handleLogout}
                  // loggedInStatus={this.state.isLoggedIn}
                  />
                )}
              />
              <Route
                exact
                path="/SupplierList"
                render={props => (
                  <SupplierList
                  // {...props}
                  // handleLogout={this.handleLogout}
                  // loggedInStatus={this.state.isLoggedIn}
                  />
                )}
              />
              {/* <Route
                exact
                path="/ProductList"
                render={props => (
                  <ProductList
                  // {...props}
                  // handleLogout={this.handleLogout}
                  // loggedInStatus={this.state.isLoggedIn}
                  />
                )}
              /> */}
              <Route
                exact
                path="/SupplierForm"
                render={props => (
                  <SupplierForm
                  // {...props}
                  // handleLogout={this.handleLogout}
                  // loggedInStatus={this.state.isLoggedIn}
                  />
                )}
              />
              <Route
                exact
                path="/Products"
                render={props => (
                  <Products
                  // {...props}
                  // handleLogout={this.handleLogout}
                  // loggedInStatus={this.state.isLoggedIn}
                  />
                )}
              />
              {/* <Home /> */}

              {/* <Suppliers />
              <Products /> */}
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
