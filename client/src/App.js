import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// we need these so app remembers if person is logged on
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import PrivateRoute from "./components/common/PrivateRoute";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Shuttles from "./components/shuttles/Shuttles";
import Trips from "./components/shuttles/Trips";
import Dashboard from "./components/dashboard/Dashboard";
import TripEdit from "./components/shuttles/TripEdit";

// import ModalDialog from "./components/shuttles/ModalDialog";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import "./App.css";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  // we can call anything in store with dispatch
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    //store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}
// we need to wrap privateroutes in switch because pr has a redirect in it.
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              {/* <Route exact path="/thumbs" component={Thumbs} /> */}
              <Switch>
                <PrivateRoute exact path="/shuttles" component={Shuttles} />
                <PrivateRoute exact path="/trips" component={Trips} />

                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Route exact path="/tripedit" component={TripEdit} />
            </div>

            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
