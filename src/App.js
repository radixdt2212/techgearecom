import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import Contact from "./pages/ContactPage";
import SingleProduct from "./pages/SingleProductPage";
import Cart from "./pages/CartPage";
import Default from "./pages/DefaultPage";

import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";
//import client from "./context/contentful";
export default class App extends Component {
  // componentDidMount() {
  //   client
  //     .getEntries({ content_type: "reacttechstore" })
  //     .then((response) => console.log(response.items))
  //     .catch((error) => console.log("Error : ", error));
  // }
  render() {
    return (
      <>
        {/* Navbar, Sidebar, cart. Footer */}
        <Navbar />
        <Sidebar />
        <SideCart />

        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/products" exact component={Products}></Route>
          <Route path="/products/:id" exact component={SingleProduct}></Route>
          <Route path="/cart" exact component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Footer />
      </>
    );
  }
}
