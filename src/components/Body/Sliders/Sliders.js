import React, { Component } from'react';
import { Carousel } from 'react-bootstrap';


class Sliders extends Component {
    render () {
        return (
            <Carousel>
            <Carousel.Item>
                <img width={900} height={500} alt="900x500" />
                <Carousel.Caption>
                <h3>First slide </h3>
                <p>Baby Item 1</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="../assests/ant.jpeg"/>
                <Carousel.Caption>
                <h3>Second slide </h3>
                <p>Baby Item 2</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={900} height={500} alt="900x500" />
                <Carousel.Caption>
                <h3>Third slide </h3>
                <p>Baby Item 3</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>            
        );
    }
};

export default Sliders;