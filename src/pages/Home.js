import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Header from "./Header";
import Cards from "./Card";
import { Col, Row } from "react-bootstrap";

function Home() {
  return (
    <>
      <Header />
      <h1>This is the home page</h1>
      <Container>
        <Row>
          <Col className="d-flex flex-wrap gap-2">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
