import React, { Component } from "react";
import { Button } from 'reactstrap';
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
          <Button color="danger">
            Danger!
          </Button>
      </div>
    );
  }
}
export default Dashboard;
