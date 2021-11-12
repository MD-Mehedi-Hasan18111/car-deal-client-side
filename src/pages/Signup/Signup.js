import React, { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";
import Navigation from "../../Shared/Navigation/Navigation";
import TopHeader from "../../Shared/TopHeader/TopHeader";
import "./Signup.css";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({});
  const { createUser, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...userInfo };
    newUser[field] = value;
    setUserInfo(newUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInfo.password !== userInfo.Cpassword) {
      swal("Opps!", "Password are didn't Match!", "error");
      return;
    } else {
      createUser(userInfo.name, userInfo.email, userInfo.password, history, location);
      swal("User Created Successfully!", "", "success");
    }
  };

  return (
    <div>
      <TopHeader />
      <Navigation />
      <Container>
        <div className="form-area my-4">
          {authError && <Alert variant="danger">{authError}</Alert>}
          <h2 className="text-center mb-4 fw-bold" style={{ color: "#3498db" }}>
            Sign Up
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              onBlur={handleBlur}
              type="text"
              name="name"
              placeholder="Full Name"
            />
            <input
              onBlur={handleBlur}
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              onBlur={handleBlur}
              type="password"
              name="password"
              placeholder="Password"
            />
            <input
              onBlur={handleBlur}
              type="password"
              name="Cpassword"
              placeholder="Confirm Password"
            />
            <button type="submit" className="signBtn">
              Sign Up
            </button>
          </form>
          <Link to="/signin" className="form-link">
            <p className="mt-3">Already have an account? Sign In</p>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
