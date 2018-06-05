import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Trips extends Component {
  constructor(props) {
    super(props);
    this.state = {}; //shuttles: ["one", "two", "three"] };
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
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="container">
          <div>
            <h4>Trips</h4>
            <table className="table table-bordered table-striped table-sm">
              <thead className="thead-dark">
                <tr>
                  <th>shuttle</th>
                  <th>driver</th>
                  <th>guest</th>
                  <th>property</th>
                  <th>room</th>
                  <th>pickup</th>
                  <th>passengers</th>
                  <th>time</th>
                  <th>dropoff</th>
                  <th>book</th>
                  <th>status</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {this.state.trips.map((trip, index) => (
                  <tr key={trip._id} style={{ color: "black" }}>
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
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Trips;
