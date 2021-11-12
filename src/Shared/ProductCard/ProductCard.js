import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ car }) => {
    
    const { _id, name, image, description, price } = car;

    return (
        <Col>
            <div className="single-products">
            <img width="100%" src={image} alt="" />
            <div className="product-des">
                <h3>{name}</h3>
                <p>{description.slice(0, 80)}</p>
                <p className="price">$ {price}</p>
                    <Link to={`/placeOrder/${_id}`}>
                    <button className="regular-btn">Buy Now <i className="fas fa-arrow-right"></i></button>
                    </Link>
            </div>
        </div>
        </Col>
    );
};

export default ProductCard;