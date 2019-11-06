//https://youtu.be/Ke90Tje7VS0?t=2797

import React, { Component } from "react";

class Home extends Component {
  state = {
    count: 0
  };

  styles = {
    fontSize: 50
  };

  render() {
    return (
      <div>
        <span style={this.styles} className="badge badge-primary">
          {this.formatCount()}
        </span>
        <button>Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Home;
