import React, { Component } from'react';
import { Grid, Row, Col, Button, Thumbnail } from 'react-bootstrap';
import bugbunny from '../../../assests/bugs-bunny.jpg';
import cart  from '../../../assests/cart_icon.png';

const divStyle = {
    color : 'red',
    fontStyle: 'italic'
  };

const head = {
    color: 'orange'
};

class Products extends Component {
    render () {
        return (
            <Grid>
            <Row>
                <Col xs={6} md={4}>
                <Thumbnail src={bugbunny} alt="242x200">
                    <h5 style={head}>Baby Gift Pack</h5>
                    <p style={divStyle}>LKR 2000.00     
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                    <Button bsStyle="Success"><img width={40} height={40} src={cart}/></Button>
                    </p>
                </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                <Thumbnail src={bugbunny} alt="242x200">
                    <h5 style={head}>Baby Gift Pack</h5>
                    <p style={divStyle}>LKR 2000.00     
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                    <Button bsStyle="Success"><img width={40} height={40} src={cart}/></Button>
                    </p>
                </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                <Thumbnail src={bugbunny} alt="242x200">
                    <h5 style={head}>Baby Gift Pack</h5>
                    <p style={divStyle}>LKR 2000.00     
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                    <Button bsStyle="Success"><img width={40} height={40} src={cart}/></Button>
                    </p>
                </Thumbnail>
                </Col>
            </Row>
            <Row>
                <Col xs={6} md={4}>
                <Thumbnail src={bugbunny} alt="242x200">
                    <h5 style={head}>Baby Gift Pack</h5>
                    <p style={divStyle}>LKR 2000.00     
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                    <Button bsStyle="Success"><img width={40} height={40} src={cart}/></Button>
                    </p>
                </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                <Thumbnail src={bugbunny} alt="242x200">
                    <h5 style={head}>Baby Gift Pack</h5>
                    <p style={divStyle}>LKR 2000.00     
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                    <Button bsStyle="Success"><img width={40} height={40} src={cart}/></Button>
                    </p>
                </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                <Thumbnail src={bugbunny} alt="242x200">
                    <h5 style={head}>Baby Gift Pack</h5>
                    <p style={divStyle}>LKR 2000.00     
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                    <Button bsStyle="Success"><img width={40} height={40} src={cart}/></Button>
                    </p>
                </Thumbnail>
                </Col>
            </Row>
            </Grid>
        );
    }
}

export default Products;