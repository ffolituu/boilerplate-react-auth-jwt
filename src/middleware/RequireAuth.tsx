import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }: any) => {
  const token: any = localStorage.getItem("user");
  return token?.length > 0 ? children : <Navigate to="/connexion" replace />;
};
