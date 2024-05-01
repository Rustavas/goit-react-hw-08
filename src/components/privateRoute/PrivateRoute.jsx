import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsSignedIn } from "../redux/auth/selector";


const PrivateRoute = ({ children }) => {
    const isSignedIn = useSelector(selectIsSignedIn);
  return  isSignedIn ? children : <Navigate to="/login" replace />;
  
}

export default PrivateRoute