import React, { Component } from "react";
import analytics from "../utils/analytics";
import moment from "moment";

import Moment from "react-moment";
export default class Home extends Component {
  state = {
    todos: [],
    showMenu: false,
  };
  componentDidMount() {
    /* Track a page view */
    analytics.page();

    // Fetch all todos
  }

  render() {
    const today = new Date();
    const lastWd = "2008-01-19";
    //... units can be [seconds, minutes, hours, days, weeks, months, year
    const years = moment().diff(lastWd, "years", false);
    const months = moment().diff(lastWd, "months", false);
    const endOfMonth = moment(lastWd, "YYYY-MM-DD").endOf("month");
    const days = moment().diff(lastWd, "days", false);
    const daysd = moment().diff(endOfMonth, "days", false);
    const starttoday = moment(today, "YYYY-MM-DD").startOf("month");
    const thismonthdiff = moment().diff(starttoday, "days", false);
    const dayos = days - daysd + thismonthdiff;
    return (
      <div className="app">
        <section className="h-100vh single-welcome-slide">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12">
                <div className="welcome-text-two text-center">
                  <h2>JJCET</h2>
                  <h5>INFORMATION TECHNOLOGY</h5>
                  <h5> 2004 - 08 BATCH</h5>

                  <div
                    className="hero-btn-group"
                    data-animation="fadeInUp"
                    data-delay="700ms"
                  >
                    <a href="" className="btn confer-btn m-2">
                      View More
                    </a>
                    <a href="/students" className="btn confer-btn m-2">
                      View Students
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-us-countdown-area pt-5 h-100vh" id="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <div className="about-content-text mb-80">
                  <h6>About Portal</h6>
                  <h3>Welcome to the REvit'08 Community </h3>
                  <p>Somebody Please give nice content</p>
                  <a className="btn ">View Students</a>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div
                  className="about-thumb mb-80 wow fadeInUp"
                  data-wow-delay="300ms"
                ></div>
              </div>
            </div>
          </div>

          <div className="countdown-up-area">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-md-3">
                  <div className="countdown-content-text pt-5">
                    <h6>SINCE OUT </h6>
                    <h4>From the College as Student</h4>
                  </div>
                </div>

                <div className="col-12 col-md-9">
                  <div className="countdown-timer">
                    <div className="clock">
                      <div>
                        {years} <span>YEARS</span>
                      </div>
                      <div>
                        {months % years} <span>MONTHS</span>
                      </div>
                      <div>
                        {dayos > 30 ? dayos - 30 : dayos} <span>DAYS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

function removeOptimisticTodo(todos) {
  // return all 'real' todos
  return todos.filter((todo) => {
    return todo.ref;
  });
}

function getTodoId(todo) {
  if (!todo.ref) {
    return null;
  }
  return todo.ref["@ref"].id;
}
