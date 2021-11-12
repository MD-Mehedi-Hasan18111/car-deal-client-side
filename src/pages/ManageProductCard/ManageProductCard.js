import { Card } from "react-bootstrap";
import React, { useEffect } from "react";
import { Col } from "react-bootstrap";

const ManageProductCard = ({ product, deleteProduct }) => {
    const { name, image, price } = product;
    
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
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
