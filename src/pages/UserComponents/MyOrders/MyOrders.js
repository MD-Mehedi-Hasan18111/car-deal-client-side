import React, { useEffect, useState } from "react";
import { Container, Row, Spinner, Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import swal from "sweetalert";
import OrderCard from "../../../Shared/OrderCard/OrderCard";

const MyOrders = () => {
  const { user } = useAuth();

  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user.email, myOrders]);

  const cancelOrder = (id) => {
    swal({
      title: "Are you sure for Cancel order?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/orders/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              swal("Your Order Canceled!", "", "success");
            }
          });
      } else {
        swal("Your order has been saved!");
      }
    });
  };


  return (
    <div className="pt-4">
      <div className="mt-1">
        <Container>
          {!myOrders.length ? <div className="text-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div> : <Row xs={1} sm={1} md={1} lg={2} className="g-5">
            {myOrders?.map((order) => (
              <OrderCard key={order._id} cancelOrder={cancelOrder} order={order} />
            ))}
          </Row>}
        </Container>
      </div>
    </div>
  );
};

export default MyOrders;
