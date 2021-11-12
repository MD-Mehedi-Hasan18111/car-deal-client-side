import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../images/logo.png";
import { NavLink, useRouteMatch, Switch, Route } from "react-router-dom";
import "./UserDashboard.css";
import MyOrders from "../UserComponents/MyOrders/MyOrders";
import Payment from "../UserComponents/Payment/Payment";
import Review from "../UserComponents/Review/Review";
import useAuth from "../../hooks/useAuth";
import UserDashboardHome from "../UserComponents/UserDashboardHome/UserDashboardHome";
import ManageOrders from "../AdminComponents/ManageOrders/ManageOrders";
import AddProducts from "../AdminComponents/AddProducts/AddProducts";
import ManageProducts from "../AdminComponents/ManageProducts/ManageProducts";
import AdminRoute from "../AdminRoute/AdminRoute";
import MakeAdmin from "../AdminComponents/MakeAdmin/MakeAdmin";

const drawerWidth = 240;

function UserDashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [isAdmin, setIsAdmin] = React.useState(false);

  const { user, logOut } = useAuth();

  React.useEffect(() => {
    fetch(`https://gentle-cliffs-80284.herokuapp.com/checkAdmin/${user.email}`)
    .then(res => res.json())
    .then(data => {
      if (data.role === 'admin'){
        setIsAdmin(true);
      }
    })
  }, [user.email])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let { path, url } = useRouteMatch();

  const drawer = (
    <div>
      <div className="text-center my-3">
        <img width="100px" src={logo} alt="" />
      </div>
      <Divider />
      <List>
        {!isAdmin &&<div className="dash-menu">
          <NavLink to={`${url}`}> <i className="fas fa-house-user"></i> Dashboard Home</NavLink>
          <NavLink to={`${url}/myOrders`} activeClassName="selected-menu">
            <i className="fas fa-list-alt"></i> My Orders
          </NavLink>
          <NavLink to={`${url}/payment`} activeClassName="selected-menu">
            <i className="fas fa-money-check-alt"></i> Payment
          </NavLink>
          <NavLink to={`${url}/review`} activeClassName="selected-menu">
            <i className="fas fa-search"></i> Review
          </NavLink>
          <NavLink to="/home" activeClassName="selected-menu">
            <i className="fas fa-home"></i> Back to Home
          </NavLink>
          <button onClick={logOut} className="loginBtn px-5">
            Sign Out
          </button>
        </div>}
        {isAdmin && <div className="dash-menu">
          <NavLink to={`${url}`} ><i className="fas fa-house-user"></i> Dashboard Home</NavLink>
          <NavLink to={`${url}/manageOrders`} activeClassName="selected-menu">
          <i className="fas fa-tasks"></i> Manage All Orders
          </NavLink>
          <NavLink to={`${url}/addProducts`} activeClassName="selected-menu">
          <i className="fas fa-plus-circle"></i> Add a Products
          </NavLink>
          <NavLink to={`${url}/manageProducts`} activeClassName="selected-menu">
          <i className="fas fa-cog"></i> Manage Products
          </NavLink>
          <NavLink to={`${url}/makeAdmin`} activeClassName="selected-menu">
          <i className="fas fa-user-plus"></i> Make an admin
          </NavLink>
          <NavLink to="/home" activeClassName="selected-menu">
            <i className="fas fa-home"></i> Back to Home
          </NavLink>
          <button onClick={logOut} className="loginBtn">
            Sign Out
          </button>
        </div>}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className="appbar"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <div className="row d-flex align-items-center">
          <div className="col-lg-8">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Dashboard
              </Typography>
            </Toolbar>
          </div>
          <div className="col-lg-4">
            <h5>{user?.displayName}</h5>
          </div>
        </div>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={path}>
            <UserDashboardHome />
          </Route>
          <Route exact path={`${path}/myOrders`}>
            <MyOrders />
          </Route>
          <Route exact path={`${path}/payment`}>
            <Payment />
          </Route>
          <Route exact path={`${path}/review`}>
            <Review />
          </Route>
          <AdminRoute exact path={`${path}/manageOrders`}>
            <ManageOrders />
          </AdminRoute>
          <AdminRoute exact path={`${path}/addProducts`}>
            <AddProducts />
          </AdminRoute>
          <AdminRoute exact path={`${path}/manageProducts`}>
            <ManageProducts />
          </AdminRoute>
          <AdminRoute exact path={`${path}/makeAdmin`}>
            <MakeAdmin />
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

UserDashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default UserDashboard;
