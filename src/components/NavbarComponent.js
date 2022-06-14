import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/user">User</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/city">City</NavLink>
                <NavbarToggler onClick={toggle} />
              </NavItem>
              <NavItem>
                <NavLink href="/culinary">Culinary</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/culture">Culture</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/destination">Destination</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/marketplace">Marketplace</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/merchandise">Merchandise</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/videovr">Video VR</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
