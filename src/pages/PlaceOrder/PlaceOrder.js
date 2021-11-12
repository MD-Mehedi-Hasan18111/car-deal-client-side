import React, { useEffect, useState } from "react";
import "./PlaceOrder.css";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Navigation from "../../Shared/Navigation/Navigation";
import TopHeader from "../../Shared/TopHeader/TopHeader";
import Footer from "../../Shared/Footer/Footer";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import swal from "sweetalert";

const PlaceOrder = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { user } = useAuth();
  const [order, setOrder] = useState({});

  useEffect(() => {
    fetch(`https://gentle-cliffs-80284.herokuapp.com/placeOrder/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    data.carName = product.name;
    data.image = product.image;
    data.status = "Pending";
    fetch("https://gentle-cliffs-80284.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal("Order has been successful!", "", "success");
          e.target.reset();
        }
      });
  };

  return (
    <div>
      <TopHeader />
      <Navigation />
      <div className="place-banner">
        <h1 className="mb-2">{product.name}</h1>
        <Link className="link-style" to="/home">
          Home
        </Link>
        <Link className="link-style" to="/allProducts">
          All Cars
        </Link>
      </div>
      <div className="place-area">
        <Container>
          <Row className="mb-5 mt-3">
            <Col xs={12} md={6} lg={6}>
              <div className="detail-area">
                <div className="text-center">
                  <img
                    style={{ width: "250px", borderRadius: "20px" }}
                    src={product.image}
                    alt=""
                  />
                </div>
                <div>
                  <h3
                    className="text-center mt-2 fw-bold"
                    style={{ color: "#3498db" }}
                  >
                    {product.name}
                  </h3>
                  <h4 className="text-center">Price: ${product.price}</h4>
                  <p>{product.description}</p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={6} className="mt-4">
              <h2 className="text-center fw-bold" style={{ color: "#3498db" }}>
                Place Your Order!
              </h2>
              <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <input
                  defaultValue={user.displayName}
                  {...register("name")}
                  required
                />
                <input
                  defaultValue={user.email}
                  {...register("email")}
                  required
                />
                <input type="date" {...register("date")} required />
                <input
                  type="text"
                  {...register("address")}
                  placeholder="Address"
                  required
                />
                <input
                  type="number"
                  {...register("phone")}
                  placeholder="Phone"
                  required
                />
                <input className="signBtn" type="submit" />
              </form>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default PlaceOrder;
