import React, { Component } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";

class Shuttles extends Component {
  constructor(props) {
    super(props);
    this.state = {}; //shuttles: ["one", "two", "three"] };
  }

  componentDidMount() {
    // console.log("thumbs did mount");
    axios
      .get("/api/shuttles/shuttles")
      // .then(res => console.log(res.data))
      //.then(res => (thumbnails = res.data))
      .then(res => this.setState({ shuttles: res.data }))
      .catch(err => console.log(err.response.data)); // to get actual errors from backend
    // this.setState({ shuttles: ["one", "two", "three"] });
  }

  render() {
    if (!this.state.shuttles) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container">
        <h4>Shuttles</h4>
        <table className="table table-bordered table-striped table-sm">
          <thead className="thead-dark">
            <tr>
              <th>shuttle</th>
              <th>model</th>
              <th>type</th>
            </tr>
          </thead>
          <tbody>
            {this.state.shuttles.map((shuttle, index) => (
              <tr key={shuttle._id}>
                <td>{shuttle.name}</td>
                <td>{shuttle.model}</td>
                <td>{shuttle.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Shuttles;
