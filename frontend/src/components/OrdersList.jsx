import React, { Component } from "react";
import Order from "./Order";

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let orders = this.props.orders.map((order, index) => <Order key={index} order={order} index={index} />);

    return (
      <div id="ordercardList" className="container">
        {orders}
      </div>
    );
  }
}

export default OrderList;
