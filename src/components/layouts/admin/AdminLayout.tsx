import { Outlet } from "react-router-dom";
import { HeaderComponent } from "./Header";

export const AdminLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
};
