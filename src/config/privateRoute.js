import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const isSignIn = false;

  return isSignIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
