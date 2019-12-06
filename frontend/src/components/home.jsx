import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

import React, { Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Redirect } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";
import "../App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./login";
import Register from "./register";

import OrderList from "./OrdersList";

class Home extends Component {
  constructor(props) {
    super(props);
    const { onToggleLogin } = props;
    this.state = {
      loading: true,
      user: null,
      loggedIn: false,
      msg: "",
      onToggleLogin,
      orders: [
        { title: "Buy", price: "$5" },
        { title: "Sell", price: "$10" },
        { title: "Buy", price: "$50" }
      ],
      price: "",
      priceInput: "",
      loginStatus: "",
      signUpStatus: "Sign Up"
    };
  }

  async componentDidMount() {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      this.setState({
        loading: false,
        loggedIn: false
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
          msg: "The protected route failed :( Check console for errors"
        });
      }
    }
  }

  logout = e => {
    if (loggedIn) {
      console.log("LOGGING OUT");
      e.preventDefault();
      localStorage.removeItem("jwtToken");
      this.setState({ loggedIn: false });
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
        title: "Buy",
        price: thePrice
      };

      let { orders } = this.state;
      orders.push(order);
      console.log(this.state.orders);
      this.setState({ orders: orders, priceInput: "" });
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
            {/* <Nav.Link className="tempWhite" href="/">
              Home
            </Nav.Link> */}

            <Link to="/"> HOME </Link>
            <Link to="/orders"> Orders </Link>
            {/* <Link to="/login">{this.state.loginStatus}</Link> */}
            <Link to="/login"> Login </Link>
            <Link to="/home" onClick={this.logout}>
              LOGOUT
            </Link>
            <Link to="/register"> {this.state.signUpStatus} </Link>

            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/orders">Orders</Nav.Link>
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

  // componentDidMount = async () => {
  //   await axios
  //     .get("https://api.coindesk.com/v1/bpi/currentprice.json")
  //     .then(responseJson => {
  //       responseJson = responseJson.data;
  //       this.setState({ price: responseJson.bpi.USD.rate });
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });

  //   let token = localStorage.getItem("jwtToken");
  //   // console.log(this.state.orders);
  //   if (token) {
  //     const decoded = jwt_decode(token);
  //     if (decoded) {
  //       this.setState({ loginStatus: "Logout", signUpStatus: "" });
  //     }
  //   } else {
  //     this.setState({ loginStatus: "Login", signUpStatus: "Sign Up" });
  //   }
  // };

  setLoginStatus = loggedIn => {
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
            <Home onToggleLogin={this.setLoginStatus} />
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
      <Router>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <div className="OrderTable App">
              {this.navbar()}
              {/* <Counters /> */}
              <OrderList orders={this.state.orders}></OrderList>
            </div>
          </Route>
          <Route path="/">
            <div className="App">
              {/* <div>
                <Container>
                  <Card>
                    <Card.Body>{this.state.msg}</Card.Body>
                    <Button variant="primary" type="submit" href="/">
                      Cancel
                    </Button>
                    <Button variant="danger" type="submit" onClick={this.logout}>
                      Logout
                    </Button>
                  </Card>
                </Container>
              </div> */}

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
              {/* <div className="OrderTable">
          <OrderList orders={this.state.orders}></OrderList>
        </div> */}
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Home;
