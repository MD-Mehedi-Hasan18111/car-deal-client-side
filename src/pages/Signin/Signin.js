import React, { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Navigation from "../../Shared/Navigation/Navigation";
import TopHeader from "../../Shared/TopHeader/TopHeader";

const Signin = () => {
  const [userInfo, setUserInfo] = useState({});
  const { signInUser, authError } = useAuth();

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

    signInUser(userInfo.email, userInfo.password, history, location);
  };

  return (
    <div>
      <TopHeader />
      <Navigation />
      <Container>
        <div className="form-area my-4">
          {authError && <Alert variant="danger">{authError}</Alert>}
          <h2 className="text-center mb-4 fw-bold" style={{ color: "#3498db" }}>
            Sign In
          </h2>
          <form onSubmit={handleSubmit}>
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
            <button type="submit" className="signBtn">
              Sign In
            </button>
          </form>
          <Link to="/signup" className="form-link">
            <p className="mt-3">Haven't account? Sign Up</p>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Signin;
