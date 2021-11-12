import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import ProductCard from "../../Shared/ProductCard/ProductCard";
import TopHeader from "../../Shared/TopHeader/TopHeader";

const ExploreProduct = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allProducts")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <div>
      <TopHeader />
      <Navigation />
      <div className="my-5">
        <Container>
          <h2 className="text-center mb-4 fw-bold" style={{ color: "#34495e" }}>
            Explore All Brands!
          </h2>
          {!cars.length ? (
            <div className="text-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <Row xs={1} sm={1} md={2} lg={3} className="g-4">
              {cars?.map((car) => (
                <ProductCard key={car._id} car={car} />
              ))}
            </Row>
          )}
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default ExploreProduct;
