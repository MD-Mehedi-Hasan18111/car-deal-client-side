import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import swal from "sweetalert";
import ManageProductCard from "../../ManageProductCard/ManageProductCard";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://gentle-cliffs-80284.herokuapp.com/allProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  const deleteProduct = (id) => {
    swal({
      title: "Are you sure for Delete Product?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://gentle-cliffs-80284.herokuapp.com/allProducts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              swal("Product Deleted!", "", "success");
            }
          });
      } else {
        swal("Your Product has been saved!");
      }
    });
  };

  const styleLoading = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#3498db",
  };

  return (
    <div className="mt-3">
      <Container>
        {!products.length ? (
          <div style={styleLoading}>
            <Spinner animation="border" variant="primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <Container>
            <Row xs={1} md={2} lg={3} className="g-5 mx-auto">
              {products?.map((product) => (
                <ManageProductCard
                  key={product._id}
                  deleteProduct={deleteProduct}
                  product={product}
                />
              ))}
            </Row>
          </Container>
        )}
      </Container>
    </div>
  );
};

export default ManageProducts;
