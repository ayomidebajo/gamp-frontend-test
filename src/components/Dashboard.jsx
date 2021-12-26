import React, { Component } from "react";
import { Redirect } from "react-router";

class Dashboard extends Component {
  componentDidMount() {}
  render() {
    const token = localStorage.getItem("token");
    if (!token) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, quaerat
        quibusdam sequi aperiam modi repellendus porro iste temporibus non
        quisquam recusandae esse libero? Libero, nostrum dolore non veritatis
        eius odio?
      </div>
    );
  }
}

export default Dashboard;
