import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <a className="login" href="https://reactjs.org">
          Sign Up
        </a>
        <a className="login" href="https://reactjs.org">
          Login
        </a>

        <header className="App-header">
          <h1>Portfolio Watch</h1>
          <img
            src={
              "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/04/15/bitcoin-price-latest-news-update.jpg?width=1000&height=614&fit=bounds&format=pjpg&auto=webp&quality=70&crop=16:9,offset-y0.5logo"
            }
            className="HeaderImg"
            alt="Header"
          />
        </header>
      </div>
    );
  }
}
export default App;
