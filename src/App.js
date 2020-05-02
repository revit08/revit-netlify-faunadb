import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AdminFooter from "./components/Footers/AdminFooter.js";
import Header from "./components/Header/Header";

import Home from "./views/Home";
import StudentsList from "./views/StudentsList";
import StaffsList from "./views/StaffsList";
import PagesList from "./views/PagesList";
import Student from "./views/Student";
import Staffs from "./views/Staffs";
import Articles from "./views/Articles";
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
      <div class="bg-light">
        <BrowserRouter>
          <Header {...this.props} routes={routes} />
          <div className="main-content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/students-list" component={StudentsList} />
              <Route exact path="/staffs-list" component={StaffsList} />
              <Route exact path="/pages-list" component={PagesList} />

              <Route exact path="/student/:sid" component={Student} />
              <Route exact path="/staffs" component={Staffs} />
              <Route exact path="/news-events-list" component={Articles} />
              <Route exact path="/userlogged" component={Session} />
            </Switch>
            <AdminFooter />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
