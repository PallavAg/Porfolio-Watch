import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import axios from "axios";
import jwt_decode from "jwt-decode";

class App extends Component {
  state = {
    price: "",
    priceInput: "",
    loginStatus: "",
    signUpStatus: "Sign Up"
  };

  handlePriceChange = e => {
    this.setState({ priceInput: e.target.value });
  };

  placeBuy = () => {
    let thePrice = this.state.priceInput;
    if (!isNaN(thePrice) && thePrice.length !== 0) {
      alert("Successfully placed order of $" + thePrice + " BTC!");
    } else {
      alert("Please enter a number!");
    }
  };

  placeSell = () => {};

  navbar = () => {
    return (
      <Navbar sticky="top" className="theNav" variant="dark" expand="lg">
        <Navbar.Brand className="navbar-brand mb-0 h1" href="#home">
          Crypto Watch
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link className="tempWhite" href="/">
              Home
            </Nav.Link>
            <Nav.Link href="#orders">Orders</Nav.Link>
            <Nav.Link href="/home">{this.state.loginStatus}</Nav.Link>
            <Nav.Link href="/register">{this.state.signUpStatus}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };

  formInput = () => {
    return (
      <form>
        <input
          className="form-control form-control-lg btcEnter"
          placeholder="Enter BTC Price $"
          type="text"
          name="order"
          value={this.state.priceInput}
          onChange={this.handlePriceChange}
        />
        <input
          onClick={this.placeBuy}
          className="btn btn-primary placeOrder btn-sm"
          type="submit"
          value="Store Buy Order"
        />
        &nbsp;&nbsp;
        <input
          onClick={this.placeBuy}
          className="btn btn-primary placeOrder btn-sm"
          type="submit"
          value="Store Sell Order"
        />
      </form>
    );
  };

  componentDidMount = async () => {
    await axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(responseJson => {
        responseJson = responseJson.data;
        this.setState({ price: responseJson.bpi.USD.rate });
      })
      .catch(error => {
        console.error(error);
      });

    let token = localStorage.getItem("jwtToken");

    if (token) {
      const decoded = jwt_decode(token);
      if (decoded) {
        this.setState({ loginStatus: "Logout", signUpStatus: "" });
      }
    } else {
      this.setState({ loginStatus: "Login", signUpStatus: "Sign Up" });
    }
  };

  setLoginStatus = loggedIn => {
    if (loggedIn) {
      this.setState({ loginStatus: "Logout", signUpStatus: "" });
    } else {
      this.setState({ loginStatus: "Login", signUpStatus: "Sign Up" });
    }
  };

  registerRoutes = () => {
    return (
      <Router>
        <div className="auth-box">
          <Switch>
            <Route path="/login">
              <Login onToggleLogin={this.setLoginStatus} />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/home">
              <Home onToggleLogin={this.setLoginStatus} />
            </Route>
            <Route path="/"></Route>
          </Switch>
        </div>
      </Router>
    );
  };

  render() {
    return (
      <div className="App">
        {this.navbar()}
        {this.registerRoutes()}
        <header className="header">
          <h1 className="">Crypto Watch</h1>
          <img src={"https://bit.ly/2NAyCIX"} className="HeaderImg" alt="Header" />
        </header>

        <div className="priceView">
          <h1>Current BTC Price: ${this.state.price.substring(0, this.state.price.indexOf("."))}</h1>
          {this.formInput()}
        </div>
      </div>
    );
  }
}
export default App;
