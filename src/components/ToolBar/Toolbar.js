import React from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';

const menu = {
    display: 'inline-block',
    listStyleType: 'none',
    margin: '0px',
    textAlign: 'right',
};

const Toolbar = (props) => (
    <header>
        <div>
          <h1>Child.LK</h1>
          <ul style={menu}>
            <li>Home</li>
            <li>My Cart</li>
            <li>My Orders</li>
            <li>About Us</li>
          </ul> 
          </div>  
    </header>
);

export default Toolbar;