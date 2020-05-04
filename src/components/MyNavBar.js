import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function MyNavBar() {
  return (
      <Navbar variant="dark" bg="dark" expand="lg">
        <Navbar.Brand href="#home">Planner project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default MyNavBar;
