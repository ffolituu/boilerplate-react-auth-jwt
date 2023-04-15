import { ChildrenProps } from "@/types/Children";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }: ChildrenProps) => {
  const token: any = localStorage.getItem(import.meta.env.VITE_APP_STORAGE_KEY);
  return !token ? <Navigate to="/connexion" replace /> : children;
};
