import React, { Component } from "react";
import Order from "./Order";
import { Redirect } from "react-router-dom";

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let orders = this.props.orders.map((order, index) => <Order key={index} order={order} index={index} />);

    if (!this.props.loggedIn) {
      return <Redirect to="/login" />;
    }

    return (
      <div id="ordercardList" className="container">
        {orders}
      </div>
    );
  }
}

export default OrderList;
