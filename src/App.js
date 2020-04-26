import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import "./App.css";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";
import Home from "./view/Home";
import ComingSoon from "./view/ComingSoon";
import Students from "./view/Students";

export default class App extends Component {
  state = {
    showMenu: false,
  };
  componentDidMount() {
    // Fetch all todos
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header />
          <div className="landing-page ">
            <div className=" wrapper">
              <div className="main-panel">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/students" component={Students} />
                  <Route exact path="/staffs" component={ComingSoon} />
                  <Route exact path="/articles" component={ComingSoon} />
                  <Route exact path="/links" component={ComingSoon} />
                </Switch>
              </div>
            </div>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
