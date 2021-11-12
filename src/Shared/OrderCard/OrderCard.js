import "./OrderCard.css";
import React from "react";
import { Col } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import swal from "sweetalert";

const OrderCard = ({ order, cancelOrder }) => {
  const { carName, name, image, phone, address, date, status } = order;

  const { isAdmin } = useAuth();

  const shippedOrder = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          swal("Order Shipped Successfully!", "", "success");
        }
      });
  };

  const deleteOrder = (id) => {
    swal({
      title: "Are you sure for Delete order?",
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
              swal("Order Deleted!", "", "success");
            }
          });
      } else {
        swal("Order Delete Cancel.");
      }
    });
  };

  // console.log(isAdmin);

  return (
    <Col>
      <div className="order-card">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img width="100%" src={image} alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-1">
            <div className="order-info">
              <p className="fw-bold fs-5">{carName}</p>
              <p>{name}</p>
              <p>Phone: {phone}</p>
              <p>{address}</p>
              <p>Order Date: {date}</p>
              <div className="d-flex justify-content-between">
                <p>
                  Status:
                  {status === "Shipped" ? (
                    <span className="text-success fw-bold">{status}</span>
                  ) : (
                    <span className="text-danger fw-bold">{status}</span>
                  )}
                </p>
                {!isAdmin && <button
                      onClick={() => cancelOrder(order._id)}
                      className="btn btn-danger btn-sm"
                    >
                      <i className="fas fa-window-close"></i> Cancel
                    </button>}
              </div>
            </div>
            {isAdmin && (
              <div>
                {status === "Pending" && isAdmin ? (
                  <button
                    onClick={() => shippedOrder(order._id)}
                    className="btn btn-success btn-sm me-3"
                  >
                    <i className="fas fa-check-circle"></i> Shipped
                  </button>
                ) : (
                  ""
                )}
                <button
                  onClick={() => deleteOrder(order._id)}
                  className="btn btn-danger btn-sm"
                >
                  <i className="fas fa-trash-alt"></i> Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default OrderCard;
