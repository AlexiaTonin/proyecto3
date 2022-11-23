import React from "react";
import "./header.css"
import logoPokemon from "../../Assets/pokemon-logo.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="header-container px-3" expand="lg">
      <Container fluid>
        <div>
          <Navbar.Brand>
            <img src={logoPokemon} className="logoP"/>
          </Navbar.Brand>
        </div>
        <div className="d-flex flex-row-reverse">
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="nav-icon"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="my-2 flex-row">
              <Link id="link-play" to="/play"> Play </Link>
              <Link id="link-exit" to="/"> Salir </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header
