import { Card } from "react-bootstrap";
import React from "react";
import { Col } from "react-bootstrap";
import './ManageProductCard.css';

const ManageProductCard = ({ product, deleteProduct }) => {
    const { name, image, price } = product;
    
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} height="270px" />
        <Card.Body>
          <Card.Title><span className="fw-bold">{name}</span></Card.Title>
                  <Card.Text>
                      <h5>Price: ${price}</h5>
                      <button onClick={() => deleteProduct(product._id)} className="loginBtn"><i className="fas fa-trash"></i> Delete Product</button>
                  </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ManageProductCard;
