import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  RegisterPage,
  TodoListPage,
  UserListPage,
} from "./pages";
import { RequireAuth } from "./middleware/RequireAuth";
import { AdminLayout } from "./components/layouts/admin/AdminLayout";
import { PublicLayout } from "./components/layouts/public/PublicLayout";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <AdminLayout />
            </RequireAuth>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="/utilisateurs" element={<UserListPage />} />
          <Route path="/taches" element={<TodoListPage />} />
        </Route>
        <Route path="/" element={<PublicLayout />}>
          <Route path="/connexion" element={<LoginPage />} />
          <Route path="/enregistrement" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
