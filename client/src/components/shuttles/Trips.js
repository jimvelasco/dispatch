import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table } from 'reactstrap';
import axios from "axios";
import Spinner from "../common/Spinner";

class Trips extends Component {
  constructor(props) {
    super(props);
    this.state = {}; // shuttles: ["one", "two", "three"] };
  }

  componentDidMount() {
    // console.log("thumbs did mount");
    axios
      .get("/api/shuttles/trips")
      // .then(res => console.log(res.data))
      .then(res => this.setState({ trips: res.data }))
      .catch(err => console.log(err.response.data)); // to get actual errors from backend
    // this.setState({ shuttles: ["one", "two", "three"] });
  }

  render() {
    if (!this.state.trips) {
      // return <div>Loading...</div>;
      return <Spinner />;
    }

    return (
      <Table striped hover>
        <thead>
          <tr>
            <th>Shuttle</th>
            <th>Driver</th>
            <th>Guest</th>
            <th>Property</th>
            <th>Room</th>
            <th>Pickup</th>
            <th>Passengers</th>
            <th>Time</th>
            <th>Dropoff</th>
            <th>Book</th>
            <th>Status</th>
            <th>EDIT TRIP</th>
          </tr>
        </thead>
        <tbody>
          {this.state.trips.map((trip, index) => (
            <tr key={trip._id} >
              <td>{trip.shuttlename}</td>
              <td>{trip.driver}</td>
              <td>{trip.guestname}</td>
              <td>{trip.property}</td>
              <td>{trip.roomnum}</td>
              <td>{trip.pickuploc}</td>
              <td>{trip.numpassengers}</td>
              <td>{trip.pickuptime}</td>
              <td>{trip.dropoffloc}</td>
              <td>{trip.booktime}</td>
              <td>{trip.status}</td>
              <td>
                <Link to="/tripedit">
                  <i className="fas fa-pencil-alt fa-fw" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default Trips;
