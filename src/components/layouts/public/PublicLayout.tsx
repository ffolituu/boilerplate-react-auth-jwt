import { Navigate, Outlet } from "react-router-dom";

export const PublicLayout = () => {
  // MiddleWare
  const token: any = localStorage.getItem(import.meta.env.VITE_APP_STORAGE_KEY);

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
