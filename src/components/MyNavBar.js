import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyNavBar() {
  return (
      <Navbar variant="dark" bg="dark" expand="lg">
        <Navbar.Brand href="#home">Planner project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/dashdoard">Dashboard</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default MyNavBar;
