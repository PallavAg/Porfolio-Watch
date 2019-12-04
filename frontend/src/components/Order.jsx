import React, { Component } from "react";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { order } = this.props;
    let cardClass = "card";

    return (
      <div className={cardClass}>
        <div className="card-body">
          <h5 className="card-title">{order.price}</h5>
          <p className="card-text">{order.title}</p>
        </div>
      </div>
    );
  }
}

export default Order;
