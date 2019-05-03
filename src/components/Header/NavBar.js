import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Col from "react-bootstrap/Col"

function NavBar(){
  return (
  <Navbar sticky="top" bg="light" expand="lg">
  <Col />
  <Col>
    <Navbar.Brand href="#home">Garçon</Navbar.Brand>
  </Col>
  <Col>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      
        <NavDropdown title="XX" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Current Tables</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.3">Log Out</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    </Col>
  </Navbar>
  )
}


export default NavBar;
// Will be rendered directly above Wrapper