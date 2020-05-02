import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from "reactstrap";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { routes } = props;
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className=" bg-white border-bottom shadow-sm">
      <Navbar expand="md">
        <Container>
          <NavbarBrand href="/">Revit</NavbarBrand>
          <NavbarToggler onClick={toggle} className="mr-2">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </NavbarToggler>

          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {routes &&
                routes.map((nav, i) => (
                  <NavItem key={`navroutesmenu${i}`}>
                    <NavLink href={nav.path}> {nav.name}</NavLink>
                  </NavItem>
                ))}
            </Nav>
            <Nav>
              <NavItem>
                <NavLink href="https://revit08.netlify.app">Frontend</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  User
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
