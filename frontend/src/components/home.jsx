import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

import React, { Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

import { Navbar, Nav } from "react-bootstrap";
import "../App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./login";
import Register from "./register";

import OrderList from "./OrdersList";

class Home extends Component {
  constructor(props) {
    super(props);
    this.setLoginStatus = this.setLoginStatus.bind(this);
    this.state = {
      loading: true,
      user: null,
      loggedIn: false,
      msg: "",
      orders: [
        { title: "$5", price: "SELL" },
        { title: "$50", price: "BUY" },
        { title: "$200", price: "SELL" },
        { title: "$20", price: "BUY" },
        { title: "$100", price: "BUY" },
        { title: "$150", price: "BUY" }
      ],
      price: "",
      priceInput: "",
      loginStatus: "",
      signUpStatus: "Sign Up",
      invest: "115"
    };
  }

  async componentDidMount() {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      this.setState({
        loading: false,
        loggedIn: false,
        signUpStatus: "Sign Up"
      });
    } else if (this.state.loading) {
      try {
        const response = await axios.get("/api/protected", {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log(response.data);
        this.setState({
          loading: false,
          loggedIn: true,
          signUpStatus: "",
          user: jwt_decode(token, { header: true }),
          msg: response.data.msg
        });
        // this.state.onToggleLogin(this.state.loggedIn);
      } catch (error) {
        console.log(error);
        this.setState({
          loading: false,
          loggedIn: true,
          user: jwt_decode(token, { header: true }),
          msg: "The protected route failed :( Check console for errors",
          signUpStatus: ""
        });
      }
    }

    await axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(responseJson => {
        responseJson = responseJson.data;
        this.setState({ price: responseJson.bpi.USD.rate });
      })
      .catch(error => {
        console.error(error);
      });
  }

  logout = e => {
    if (this.state.loggedIn) {
      e.preventDefault();
      localStorage.removeItem("jwtToken");
      this.setState({ loggedIn: false, signUpStatus: "Sign Up" });
      // this.state.onToggleLogin(!this.state.loggedIn);
    }
  };

  handlePriceChange = e => {
    this.setState({ priceInput: e.target.value });
  };

  placeBuy = () => {
    let thePrice = this.state.priceInput;
    if (!isNaN(thePrice) && thePrice.length !== 0) {
      alert("Successfully placed order of $" + thePrice + " BTC!");

      let order = {
        title: "$" + thePrice,
        price: "BUY"
      };

      let { orders } = this.state;
      orders.unshift(order);

      let currVal = parseInt(this.state.invest);
      currVal += parseInt(thePrice);
      currVal = currVal.toString();
      this.setState({ orders: orders, priceInput: "", invest: currVal });
    } else {
      alert("Please enter a number!");
    }
  };

  placeSell = () => {
    let thePrice = this.state.priceInput;
    if (!isNaN(thePrice) && thePrice.length !== 0) {
      alert("Successfully placed order of $" + thePrice + " BTC!");

      let order = {
        title: "$" + thePrice,
        price: "SELL"
      };

      let { orders } = this.state;
      orders.unshift(order);

      let currVal = parseInt(this.state.invest);
      currVal -= parseInt(thePrice);
      currVal = currVal.toString();
      this.setState({ orders: orders, priceInput: "", invest: currVal });
    } else {
      alert("Please enter a number!");
    }
  };

  navbar = () => {
    let loginLink;
    if (this.state.loggedIn) {
      loginLink = (
        <Link to="/" onClick={this.logout}>
          <Button variant="outline-light" className="navbtnn">
            Logout
          </Button>
        </Link>
      );
    } else {
      loginLink = (
        <React.Fragment>
          <Link to="/login">
            <Button variant="outline-light" className="navbtnn">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="outline-light" className="navbtnn">
              {this.state.signUpStatus}
            </Button>
          </Link>
        </React.Fragment>
      );
    }

    return (
      <Navbar sticky="top" className="theNav" variant="dark" expand="lg">
        <Navbar.Brand className="navbar-brand mb-0 h1" href="#home">
          Crypto Watch
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Link to="/">
              <Button variant="outline-light" className="navbtnn">
                Home
              </Button>
            </Link>
            <Link to="/orders">
              <Button variant="outline-light" className="navbtnn">
                Orders
              </Button>
            </Link>
            {loginLink}
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
          type="button"
          value="Store Buy Order"
        />
        &nbsp;&nbsp;
        <input
          onClick={this.placeSell}
          className="btn btn-primary placeOrder btn-sm"
          type="button"
          value="Store Sell Order"
        />
      </form>
    );
  };

  setLoginStatus = loggedIn => {
    this.setState({ loggedIn: loggedIn });
    if (loggedIn) {
      this.setState({ loginStatus: "Logout", signUpStatus: "" });
    } else {
      this.setState({ loginStatus: "Login", signUpStatus: "Sign Up" });
    }
  };

  registerRoutes = () => {
    return (
      <div className="auth-box">
        <Switch>
          <Route path="/login">
            <Login onToggleLogin={this.setLoginStatus} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/"></Route>
        </Switch>
      </div>
    );
  };

  render() {
    if (!this.state.loading && !this.state.loggedIn) {
      //return <Redirect to="/login" />;
    }

    if (this.state.loading) {
      return <Spinner as="span" size="lg" role="status" aria-hidden="true" />;
    }

    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/register">
              {this.navbar()}
              <Register />
            </Route>
            <Route path="/login">
              {this.navbar()}
              <Login onToggleLogin={this.setLoginStatus} />
            </Route>
            <Route path="/orders">
              <div className="OrderTable App">
                {this.navbar()}
                <h1 className="portfolio">Investing in BTC: ${this.state.invest}</h1>
                <OrderList loggedIn={this.state.loggedIn} orders={this.state.orders} />
              </div>
            </Route>
            <Route path="/">
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
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Home;
