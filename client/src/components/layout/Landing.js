import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

//import Thumbs from "./Thumbs";

class Landing extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    //this.props.clearCurrentProfile();
    this.props.logoutUser();
    window.location.href = "/";
    // this.props.history.push("/");
  }

  // we had this in there to direct user to dashboard if they were logged in
  // Now we hancle this by showing logon or logout button instead of redirecting
  componentDidMount() {
    // if (this.props.auth.isAuthenticated) {
    //   this.props.history.push("/dashboard");
    // }
  }

  render() {
    const { isAuthenticated } = this.props.auth; // shorthand
    const guestLinks = (
      <div>
        <Link to="/register" className="btn btn-lg btn-info mr-2">
          Sign Up
        </Link>
        <Link to="/login" className="btn btn-lg btn-light">
          Login
        </Link>
      </div>
    );
    const authLinks = (
      <div>
        <a
          href=""
          onClick={this.onLogoutClick.bind(this)}
          className="btn btn-lg btn-light"
        >
          Logout
        </a>
      </div>
    );
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4" style={{ marginTop: "150px" }}>
                  Shuttle Dispatch
                </h1>
                <p className="lead">A better way to get around!</p>
                <hr />
                {isAuthenticated ? authLinks : guestLinks}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Landing);
