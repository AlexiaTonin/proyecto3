import React from "react";
import "./header.css"
import logoPokemon from "../../Assets/pokemon-logo.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="header-container px-3" expand="lg">
      <Container fluid>
        <div>
          <Navbar.Brand to="/Home">
            <img src={logoPokemon} className="logoP"></img>
          </Navbar.Brand>
        </div>
        <div className="d-flex flex-row-reverse justify-content-center">
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="nav-icon"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="my-2 d-flex flex-row">
              <Nav.Link id="nav-link-play" to="/Play" >Play</Nav.Link>
              <Nav.Link id="nav-link-exit" to="/Login" >Salir</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header
