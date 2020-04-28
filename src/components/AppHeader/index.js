import React, { Component } from "react";
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

import { ToastsContainer, ToastsStore } from "react-toasts";
import api from "../../utils/api";

export default class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      userlogin: false,
      userlogged: {},
      color: "navbar-transparent",
      left: false,
      sessionUser: window.sessionStorage.getItem("revitGoogleID") || "",
    };
  }
  componentDidMount() {
    // attach event listeners
    // window.sessionStorage.setItem("revitGoogleID", googleData.googleID);
    //window.sessionStorage.getItem('revitUserID')
    const alreadylogged = window.sessionStorage.getItem("revitGoogleID") || "";

    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    // remove event listeners
    window.removeEventListener("scroll", this.changeColor);
  }

  getrecordId = (todo) => {
    if (!todo.ref) {
      return null;
    }
    return todo.ref["@ref"].id;
  };
  updateUserLogin = (data) => {
    this.setState({
      userlogin: true,
      userlogged: data,
    });
  };
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-info",
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent",
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen,
    });
  };

  logout = () => {
    this.setState({
      userlogin: false,
      userlogged: {},
    });
  };
  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              to="/"
              rel="noopener noreferrer"
              title=""
            >
              <span>REVIT </span>
            </NavbarBrand>

            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    REVIT
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="fa fa-times" aria-hidden="true"></i>
                  </button>
                </Col>
              </Row>
            </div>
          </Collapse>
          <div className="float-right"></div>
        </Container>
      </Navbar>
    );
  }
}
