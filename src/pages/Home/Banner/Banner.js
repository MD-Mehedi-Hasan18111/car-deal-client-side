import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import Fade from 'react-reveal/Fade';

const Banner = () => {
    return (
        <div className="banner-area">
            <Container>
                <Row className="banner-intro">
                    <Fade left>
                    <Col xs={12} md={6} lg={6}>
                        <h1>Car Deal is the website that sell wonderful car for you!</h1>
                        <p>A car (or automobile) is a wheeled motor vehicle used for transportation. Most definitions of cars say that they run primarily on roads, seat one-to-eight people, have four wheels and mainly transport people rather than goods.</p>
                        <button className="readBtn">Read More</button>
                    </Col>
                    </Fade>
                    <Col xs={12} md={6} lg={6}>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;