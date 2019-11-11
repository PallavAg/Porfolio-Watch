import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./App.css";

class App extends Component {
  state = {
    price: "$8,782",
    priceInput: ""
  };

  handlePriceChange = e => {
    this.setState({ priceInput: e.target.value });
  };

  placeBuy = () => {
    let thePrice = this.state.priceInput;
    if (!isNaN(thePrice) && thePrice.trim.length !== 0) {
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
            <Nav.Link className="tempWhite" href="#home">
              Home
            </Nav.Link>
            <Nav.Link href="#orders">Orders</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#signup">Sign Up</Nav.Link>
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
          className="btn btn-primary placeOrder btn-lg"
          type="submit"
          value="Store Buy Order"
        />
        &nbsp;&nbsp;
        <input
          onClick={this.placeBuy}
          className="btn btn-primary placeOrder btn-lg"
          type="submit"
          value="Store Sell Order"
        />
      </form>
    );
  };

  render() {
    return (
      <div className="App">
        {this.navbar()}
        <header className="header">
          <h1 className="">Crypto Watch</h1>
          <img src={"https://bit.ly/2NAyCIX"} className="HeaderImg" alt="Header" />
        </header>

        <div className="priceView">
          <h1>Current BTC Price: {this.state.price}</h1>
          {this.formInput()}
        </div>
      </div>
    );
  }
}
export default App;
