import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navigation.css";
import logo from "../../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();

  return (
    <div>
      <Navbar className="navigation" expand="lg">
        <Container>
          <Navbar.Brand>
            <img width="80px" src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <div className="navmenu">
                <NavLink to="/home" activeClassName="selected">
                  Home
                </NavLink>
                <NavLink to="/allProducts" activeClassName="selected">
                  Explore
                </NavLink>
                {user?.email && <NavLink to="/userDashboard" activeClassName="selected">
                  Dashboard
                </NavLink>}
                {user?.email ? (
                  <div className="loginButton">
                  <button onClick={logOut} className="loginBtn me-2">
                    Sign Out
                  </button>
                  <small className="fs-6 fw-bold text-danger">
                    {user?.displayName}
                  </small>
                </div>
                ) : (
                    <Link to="/signin">
                      <button className="loginBtn">Sign In</button>
                    </Link>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
