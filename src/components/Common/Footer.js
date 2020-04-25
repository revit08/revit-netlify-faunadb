import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

class Footer extends React.Component {
  render() {
    const year = new Date().getFullYear();
    return (
      <footer className="footer">
        <div className="container">
          <div className="copywrite-content">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="copywrite-text">
                  <p>
                    Copyright &copy; {year} All rights reserved | Revit'08
                    Community
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="footer-menu">
                  <ul className="nav">
                    <li>
                      <a href="#">
                        <i className="zmdi zmdi-circle"></i> Terms of Service
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="zmdi zmdi-circle"></i> Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
