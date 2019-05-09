import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Col from "react-bootstrap/Col"


function ManagerNavBar(){
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
          <NavDropdown title="Manager" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Data</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">Log Out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </Col>
  </Navbar>
  )
}


export default ManagerNavBar;