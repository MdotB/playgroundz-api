import React, { Component } from "react";
import "./App.css";
import Home from "./Home/Home";
import Header from "./Header/Header";
import Show from "./Show/Show";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import { Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="appBackground">
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            {/* <Route
              path="/loginstyle"
              render={props => {
                return <LoginStyle {...props} />
              }}
            /> */}
            <Route
              path="show/:id"
              render={props => {
                return <Show {...props} />
              }}
            />
            {/* Sign-up Page */}
            <Route
              path="/signup"
              render={props => {
                return <Signup {...props} />;
              }}
            />
            {/* Login Page */}
            <Route
              path="/login"
              render={props => {
                return <Login {...props} />;
              }}
            />
            {/* Home Page / main landingpage */}
            <Route
              path="/"
              render={props => {
                return <Home {...props} />;
              }}
            />
            {/* routing */}
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
