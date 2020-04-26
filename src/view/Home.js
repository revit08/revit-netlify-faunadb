import React, { Component } from "react";
import analytics from "../utils/analytics";
import moment from "moment";
import { NavLink } from "reactstrap";
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
    const lastWd = "2004-06-02";
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
        <div className="site-blocks-cover bg-grouppic  overlay">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7 text-center">
                <h1 className="mb-4">JJCET</h1>
                <h2 className="mb-4">
                  INFORMATION TECHNOLOGY <br /> 2004 - 08 BATCH
                </h2>
                <span className=" text-center">
                  <span className="since-left">
                    {years} <span>YEARS</span>
                  </span>
                  <span className="since-left">
                    {months % years} <span>MONTHS</span>
                  </span>
                  <span className="since-left">
                    {dayos > 30 ? dayos - 30 : dayos} <span>DAYS</span>
                  </span>
                </span>
                <h6 className="mt-4 mb-4">SINCE JOURNEY STARTED...</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
                <h6>WELCOME TO</h6>
                <h2 className="mb-5"> the REvit'08 Community</h2>
                <p>Somebody Please give nice content</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eveniet, fugit nam obcaecati fuga itaque deserunt officia,
                  error reiciendis ab quod?
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <NavLink
                  to="/students"
                  href="/students"
                  className="unit-9 unit-students"
                >
                  <div className="image"></div>
                  <div className="unit-9-content">
                    <h2>STUDENTS</h2>
                    <span>64 MEMBERS</span>
                  </div>
                </NavLink>
              </div>
              <div className="col-md-6 col-lg-3">
                <NavLink
                  to="/staffs"
                  href="/staffs"
                  className="unit-9 unit-staffs"
                >
                  <div className="image"></div>
                  <div className="unit-9-content">
                    <h2>STAFFS</h2>
                    <span>DEPT AND NON DEPT</span>
                  </div>
                </NavLink>
              </div>
              <div className="col-md-6 col-lg-3">
                <NavLink
                  to="/about"
                  href="/about"
                  className="unit-9 unit-events"
                >
                  <div className="image"></div>
                  <div className="unit-9-content">
                    <h2>HISTORY</h2>
                    <span> SINCE 2004</span>
                  </div>
                </NavLink>
              </div>
              <div className="col-md-6 col-lg-3">
                <NavLink
                  to="/links"
                  href="/links"
                  className="unit-9 unit-college"
                >
                  <div className="image"></div>
                  <div className="unit-9-content">
                    <h2>CONNECTIONS</h2>
                    <span>OTHER LINKS</span>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section bg-dark">
          <div className="container">
            <div className="row">
              <div
                className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto"
                data-aos="fade-up"
              >
                <h2 className="mb-5">News &amp; Events</h2>
                <p>Under Development</p>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-6 col-lg-4 mb-4 mb-lg-0"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <a href="single.html">
                  <img
                    src="images/img_4.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <div className="p-4 bg-white">
                  <span className="d-block text-secondary small text-uppercase">
                    Jan 20th, 2019
                  </span>
                  <h2 className="h5 text-black mb-3">
                    <a href="single.html">This Is The Day, Party, Party!</a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
