import { Navigate, Outlet } from "react-router-dom";

export const PublicLayout = () => {
  // MiddleWare
  const token: any = localStorage.getItem("user");

  return (
    <>
      {token?.length > 0 ? (
        <Navigate to="/" replace />
      ) : (
        <div id="layout-wrapper" className="py-5">
          <Outlet />
        </div>
      )}
    </>
  );
};
