import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import "./App.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import AdminNavbar from "./components/Navbars/AdminNavbar.js";
import AdminFooter from "./components/Footers/AdminFooter.js";
import Sidebar from "./components/Sidebar/Sidebar.js";

import Home from "./views/Home";
import Students from "./views/Students";
import Student from "./views/Student";
import Staffs from "./views/Staffs";
import Articles from "./views/Articles";
import Calendar from "./views/Calendar";
import Session from "./views/Session";

import routes from "./routes.js";
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
          <Sidebar {...this.props} routes={routes} />
          <div className="main-content">
            <AdminNavbar {...this.props} brandText="" />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/students" component={Students} />
              <Route exact path="/student/:sid" component={Student} />
              <Route exact path="/staffs" component={Staffs} />
              <Route exact path="/calendar" component={Calendar} />
              <Route exact path="/articles" component={Articles} />
              <Route exact path="/userlogged" component={Session} />
            </Switch>
            <AdminFooter />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
