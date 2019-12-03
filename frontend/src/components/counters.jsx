import React, { Component } from "react";
import Home from "./home";

class Counters extends Component {
  state = {
    counters: [{ id: 1, value: 1 }, { id: 2, value: 2 }]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Home
            key={counter.id}
            value={counter.value}
            onDelete={this.handleDelete}
            counter={counter}
          >
            <h4>Counter: {counter.value}</h4>
          </Home>
        ))}
      </div>
    );
  }
}

export default Counters;
