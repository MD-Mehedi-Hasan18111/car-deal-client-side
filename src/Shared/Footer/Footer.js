import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import logo from '../../images/logo.png';

const Footer = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
        .then(data => setCars(data))
    }, [])

    return (
        <div className="footer-area">
            <Container>
                <Row className="d-flex align-items-center">
                    <Col xs={12} md={6} lg={4}>
                        <img width="80px" src={logo} alt="logo" />
                        <div className="w-75 mt-3">
                        <p>Find Car Dealerships In Maryland. Large Selection. Always Sale. Cheap Prices. Full Offer. Save Online. Compare Online. Simple Search. The Best Price. Compare Simply.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <h4>Quick Links</h4>
                        <p>Home</p>
                        <p>About</p>
                        <p>Explore</p>
                        <p>Dashboard</p>
                        <p>Register</p>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <h4>Top Brand: </h4>
                        <Row xs={4} md={4} lg={4} className="g-3">
                            {
                                cars?.slice(2, 10).map(car => <Col key={car._id}>
                                    <img width="100%" src={car?.image} alt="" />
                                </Col>)
                            }
                        </Row>
                    </Col>
                </Row>
                <hr />
                <em><p className="text-center text-italic">copyright &copy; reserved car deal Ltd.</p></em>
            </Container>
        </div>
    );
};

export default Footer;