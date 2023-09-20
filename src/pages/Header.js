import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Firebase practice</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/login" className="p-3 ">
                Login
              </Link>
              <Link to="/register" className="p-3 ">
                Register
              </Link>
              <Link to="/register" className="p-3 ">
                Register
              </Link>
              <Link to="/cart" className="p-3 ">
                Cart <FaShoppingCart />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
