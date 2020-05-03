import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import netlifyIdentity from "netlify-identity-widget";
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
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
    netlifyIdentity.init();
  }
  componentDidMount() {
    // Fetch all todos
    const user = netlifyIdentity.currentUser();
    console.log({ user });
    if (user) this.setState({ user });
  }
  login = () => {
    netlifyIdentity.ctx = this;
    console.log("loging...");
    netlifyIdentity.open();
    netlifyIdentity.on("login", (user) => {
      console.log("user got!", user);
      netlifyIdentity.ctx.setState({ user });
      netlifyIdentity.close();
      //setTimeout(() => navigate("/"), 400);
    });
  };

  logout = () => {
    netlifyIdentity.ctx = this;
    console.log("logout...");
    netlifyIdentity.logout();
    netlifyIdentity.on("logout", () => {
      console.log("user logout!");
      netlifyIdentity.ctx.setState({ user: null });
    });
  };
  render() {
    return (
      <div class="bg-light">
        <BrowserRouter>
          <Header {...this.props} routes={routes} />
          {this.state.user ? (
            <div>
              <p>Welcome: {this.state.user.user_metadata.full_name}</p>
              <button onClick={this.logout}>Log out</button>
            </div>
          ) : (
            <button onClick={this.login}>Log in</button>
          )}
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
