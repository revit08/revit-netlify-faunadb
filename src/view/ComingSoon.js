import React, { Component } from "react";
import analytics from "../utils/analytics";
export default class ComingSoon extends Component {
  state = {
    showMenu: false,
  };
  componentDidMount() {
    /* Track a page view */
    analytics.page();

    // Fetch all todos
  }

  render() {
    return (
      <div className="app">
        <section className="about-us-countdown-area pt-5 h-100vh" id="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <div className="about-content-text mb-80">
                  <h6>About Portal</h6>
                  <h3>Coming Soon </h3>
                  <p>
                    {" "}
                    Page you are looking for is still in development.. try again
                    after some times
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
