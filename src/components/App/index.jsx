import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "normalize-css";

import Header from "../Header";
import Profile from "../Profile";
import "./App.module.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        photoURL: "https://avatars3.githubusercontent.com/u/12777039",
        email: "dgomezc@github.com",
        displayName: "David Gómez",
        location: "Madrid, España",
        onOpenText: false
      }
    };

    this.handleOnAuth = this.handleOnAuth.bind(this);
  }

  handleOnAuth() {
    console.log("Auth");
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Redirect exact path="/" to="/profile" />
          <Route
            path="/profile"
            render={() => {
              return (
                <Profile
                  picture={this.state.user.photoURL}
                  userName={this.state.user.email.split("@")[0]}
                  displayName={this.state.user.displayName}
                  location={this.state.user.location}
                  emailAddress={this.state.user.email}
                />
              );
            }}
          />

          <Route
            path="/user/:username"
            render={props => {
              let username = props.match.params.username;
              return <Profile displayName={username} userName={username} />;
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
