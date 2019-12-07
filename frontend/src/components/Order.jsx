import React, { Component } from "react";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { order } = this.props;
    let cardClass = "shadow rounded-20 orderList card text-white bg-dark mb-3 rounded-2";

    return (
      <div className={cardClass}>
        <div className=" card-header border-primary">{order.title}</div>
        <div className="card-body">
          <p className="card-text">{order.price}</p>
        </div>
      </div>
    );
  }
}

export default Order;
