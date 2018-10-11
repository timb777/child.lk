import React, { Component } from'react';
import { Carousel } from 'react-bootstrap';

class Products extends Component {
    render () {
        return (
            <Grid>
            <Row>
                <Col xs={6} md={4}>
                <Image src="/thumbnail.png" thumbnail />
                </Col>
                <Col xs={6} md={4}>
                <Image src="/thumbnail.png" thumbnail />
                </Col>
                <Col xs={6} md={4}>
                <Image src="/thumbnail.png" thumbnail />
                </Col>
            </Row>
            </Grid>
        );
    }
}

export default Products;