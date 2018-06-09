import React, { Component } from "react";
// we need to get into git

import Trips from "../shuttles/Trips";
import Shuttles from "../shuttles/Shuttles";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>Dispatch Dashboard</h3>
        <Shuttles />
        <Trips />
      </div>
    );
  }
}
export default Dashboard;
