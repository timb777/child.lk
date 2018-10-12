import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';



class CustomFooter extends Component {
    render () {
        return (
            <Navbar fixedBottom>
            <Navbar.Collapse>
              <Navbar.Text  >2018|CHILD.LK</Navbar.Text>
            </Navbar.Collapse>
          </Navbar>           
        );
    }
};

export default CustomFooter;