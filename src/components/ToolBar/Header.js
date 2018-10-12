import React, { Component } from 'react';
import { Navbar, NavItem, Nav, } from 'react-bootstrap';
import './Header.css';

const header = {
  backgroundColor: 'green'  
};

class CustomNavBar extends Component{
    render () {
     return (
      <Navbar fixedTop style={header}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">CHILD.LK</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Home
            </NavItem>
            <NavItem eventKey={2} href="#">
              My Cart
            </NavItem>
            <NavItem eventKey={3} href="#">
              My Orders
            </NavItem>
            <NavItem eventKey={4} href="#">
              About Us
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
     );
  }
  };

export default CustomNavBar;