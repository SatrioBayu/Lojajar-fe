import { Navigate } from "react-router-dom";
import axios from "axios";

const Protected = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default Protected;
