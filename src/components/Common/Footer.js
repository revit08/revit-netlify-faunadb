import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, NavItem, NavLink, Nav } from "reactstrap";

class Footer extends React.Component {
  render() {
    const year = new Date().getFullYear();
    return (
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="mb-5">
                <h3 className="footer-heading mb-4">About Revit</h3>
                <p>
                  Revit is what our tag in out college days where, we shared
                  laughter, tears, &amp; interesting lessons in life. Though,
                  this school is no more, we shall keep the memories alive by
                  sharing our fotos &amp; stories, &amp; by reconnecting with
                  each other.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="row mb-5">
                <div className="col-md-12">
                  <h3 className="footer-heading mb-4">Navigations</h3>
                </div>
                <div className="col-md-6 col-lg-6">
                  <Nav navbar>
                    <NavItem className="p-0 m-0">
                      <NavLink href="/">HOME</NavLink>
                    </NavItem>
                    <NavItem className="p-0 m-0">
                      <NavLink href="/students">STUDENT</NavLink>
                    </NavItem>
                    <NavItem className="p-0 m-0">
                      <NavLink href="/staffs">STAFFS</NavLink>
                    </NavItem>
                    <NavItem className="p-0 m-0">
                      <NavLink href="/about">ABOUT</NavLink>
                    </NavItem>
                    <NavItem className="p-0 m-0">
                      <NavLink href="/news">NEWS</NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="mb-5">
                <h3 className="footer-heading mb-4">Join Us</h3>

                <div>
                  <Nav navbar>
                    <NavItem className="p-0 m-0">
                      <NavLink
                        className="nav-link "
                        color="primary"
                        target="_blank"
                        href="https://chat.whatsapp.com/LfR9x0Ovr8g11VaLzbkoab"
                      >
                        WHATSAPP
                      </NavLink>
                    </NavItem>
                    <NavItem className="p-0 m-0">
                      <NavLink
                        className="nav-link "
                        color="primary"
                        target="_blank"
                        href="https://www.facebook.com/groups/revit08/"
                      >
                        FACEBOOK
                      </NavLink>
                    </NavItem>
                    <NavItem className="p-0 m-0">
                      <NavLink
                        className="nav-link "
                        color="primary"
                        target="_blank"
                        href="https://www.messenger.com/t/2920595848033067"
                      >
                        MESSENGER
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <p>
                Copyright &copy; 2020 All rights reserved <br /> Revit'08
                Community{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
