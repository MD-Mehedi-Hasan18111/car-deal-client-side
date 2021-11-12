import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ExploreProduct from "./pages/ExploreProduct/ExploreProduct";
import NotFound from "./pages/NotFound/NotFound";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import UserDashboard from './pages/UserDashboard/UserDashboard';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/allProducts">
              <ExploreProduct />
            </Route>
            <PrivateRoute path="/userDashboard">
              <UserDashboard />
            </PrivateRoute>
            <PrivateRoute exact path="/placeOrder/:id">
              <PlaceOrder />
            </PrivateRoute>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/signin">
              <Signin />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
