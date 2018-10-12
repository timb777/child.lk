import React, { Component } from'react';
import { Carousel } from 'react-bootstrap';
import ant from '../../../assests/ant.jpeg';
import mountains from '../../../assests/mountains.jpeg';
import sunset from '../../../assests/Sunset.jpeg';



class Sliders extends Component {
    render () {
        return (
            <Carousel>
            <Carousel.Item>
                <img width={900} height={500} alt="900x500" src={ant} />
                <Carousel.Caption>
                <p>Pic 1</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={900} height={500} alt="900x500" src={mountains} />
                <Carousel.Caption>
                <p>Pic Item 2</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={900} height={500} alt="900x500" src={sunset} />
                <Carousel.Caption>
                <p>Pic Item 3</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>            
        );
    }
};

export default Sliders;