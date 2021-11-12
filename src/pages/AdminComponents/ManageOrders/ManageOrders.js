import React, { useState, useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import OrderCard from "../../../Shared/OrderCard/OrderCard";

const ManageOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [allOrders]);

  const styleLoading = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#3498db",
  };

  return (
    <div className="pt-4">
      <div className="mt-1">
        <Container>
          {!allOrders.length ? (
            <div style={styleLoading}>
              <Spinner animation="border" variant="primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <Row xs={1} sm={1} md={1} lg={2} className="g-5">
              {allOrders?.map((order) => (
                <OrderCard key={order._id} order={order} />
              ))}
            </Row>
          )}
        </Container>
      </div>
    </div>
  );
};

export default ManageOrders;