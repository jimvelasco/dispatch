import React, { Component } from "react";

import Trips from "./Trips";
import Shuttles from "./Shuttles";

class Dashboard extends React.Component {
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
